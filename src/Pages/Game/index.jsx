import React, { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import HUD from "../../components/HUD";
import FrogTarget from "../../components/FrogTarget";
import WordBubble from "../../components/WordBubble";
import WinModal from "../../components/WinModal";
import LEVELS from "../../Data/Question";

function Game() {
  const { levelId } = useParams();
  const levelIndex = Math.max(0, parseInt(levelId, 10) - 1);
  const level = LEVELS[levelIndex];

  if (!level) {
    return <div className="p-10 text-center text-red-600">Level not found!</div>;
  }

  const targetScore = level.targetScore ?? 0;
  const totalMoves = level.moves ?? 0;
  const currentLevel = levelIndex + 1;

  const [words, setWords] = useState(() => level.words ?? []);
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(5);
  const [moves, setMoves] = useState(totalMoves);
  const [draggedWordId, setDraggedWordId] = useState(null);
  const [touchPosition, setTouchPosition] = useState(null);
  const [showWin, setShowWin] = useState(false);
  const [stars, setStars] = useState(0);
  const [initialized, setInitialized] = useState(false);

  // Reset level saat berubah
  useEffect(() => {
    setWords(level.words ?? []);
    setScore(0);
    setLives(5);
    setMoves(level.moves ?? 0);
    setShowWin(false);
    setStars(0);
    setInitialized(true);

    return () => setInitialized(false);
  }, [level]);

  // ========== DESKTOP DRAG ==========
  const handleDragStart = (e, id) => {
    setDraggedWordId(id);
    e.dataTransfer?.setData("wordId", id.toString());
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const val = e.dataTransfer.getData("wordId");
    const wordId = val ? parseInt(val, 10) : null;
    if (wordId == null || Number.isNaN(wordId)) return;
    processDrop(wordId);
  };

  // ========== TOUCH / HP DRAG (Game keeps basic touch state) ==========
  const handleTouchStart = (e, id) => {
    const touch = e.touches?.[0];
    setDraggedWordId(id);
    if (touch) setTouchPosition({ x: touch.clientX, y: touch.clientY });
  };

  const handleTouchMove = (e) => {
    if (!draggedWordId) return;
    const touch = e.touches?.[0];
    if (touch) setTouchPosition({ x: touch.clientX, y: touch.clientY });
  };

  const handleTouchEnd = (e) => {
    if (!draggedWordId) return;
    const touch = e.changedTouches?.[0];
    if (touch) {
      const dropTarget = document.elementFromPoint(touch.clientX, touch.clientY);
      if (dropTarget && dropTarget.closest("[data-targetpos]")) {
        processDrop(draggedWordId);
      }
    }
    setDraggedWordId(null);
    setTouchPosition(null);
  };

  // ========== PROCESS DROP ==========
  const processDrop = useCallback(
    (wordId) => {
      if (!initialized || moves <= 0 || lives <= 0) return;

      const droppedWord = words.find((w) => w.id === wordId);
      if (!droppedWord) return;

      setMoves((prev) => prev - 1);

      const correct =
        String(droppedWord.pos).toLowerCase() === String(level.targetPos).toLowerCase();

      if (correct) {
        window.dispatchEvent(new CustomEvent("frogReaction", { detail: "correct" }));
        setScore((prev) => prev + 1);
        if (navigator.vibrate) navigator.vibrate(80);
      } else {
        window.dispatchEvent(new CustomEvent("frogReaction", { detail: "wrong" }));
        setLives((prev) => Math.max(0, prev - 1));
        if (navigator.vibrate) navigator.vibrate([50, 50, 70]);
      }

      setWords((prev) => prev.filter((w) => w.id !== wordId));
    },
    [initialized, moves, lives, words, level]
  );

  // ========== TOUCH DROP LISTENER (listens to WordBubble frogTouchDrop) ==========
  useEffect(() => {
    const handleFrogTouchDrop = (e) => {
      const { wordId } = e.detail ?? {};
      if (!wordId) return;
      // call processDrop with the wordId emitted by WordBubble
      processDrop(Number(wordId));
      // clear dragging state
      setDraggedWordId(null);
      setTouchPosition(null);
    };

    window.addEventListener("frogTouchDrop", handleFrogTouchDrop);
    return () => window.removeEventListener("frogTouchDrop", handleFrogTouchDrop);
  }, [processDrop]);

  // ========== LEVEL END CHECK ==========
  useEffect(() => {
    if (!initialized) return;

    if (moves <= 0 || lives <= 0 || words.length === 0) {
      const ratio = targetScore > 0 ? score / targetScore : 0;
      let earned = 0;
      if (ratio >= 1) earned = 3;
      else if (ratio >= 0.66) earned = 2;
      else if (ratio >= 0.33) earned = 1;

      setStars(earned);
      setShowWin(true);

      // Save progress localStorage
      localStorage.setItem(
        `level_${currentLevel}`,
        JSON.stringify({ score, stars: earned })
      );
    }
  }, [moves, lives, words.length, score, initialized, targetScore, currentLevel]);

  // 📱 Orientasi (kalau portrait, tampil overlay)
    const [isPortrait, setIsPortrait] = useState(false);
    useEffect(() => {
      const checkOrientation = () => setIsPortrait(window.innerHeight > window.innerWidth);
      checkOrientation();
      window.addEventListener("resize", checkOrientation);
      return () => window.removeEventListener("resize", checkOrientation);
    }, []);

  return (
    <div className="h-screen w-screen bg-yellow-900 text-white p-2 sm:p-4 overflow-hidden relative">
      {isPortrait && (
        <div className="absolute inset-0 z-50 bg-emerald-950/90 flex flex-col items-center justify-center text-center p-6">
          <h2 className="text-lg sm:text-2xl font-bold mb-2 sm:mb-4">
            Please Rotate Your Device!
          </h2>
          <p className="text-sm sm:text-lg">This game works best in landscape mode.</p>
        </div>
      )}

    <div className="flex flex-col min-h-screen bg-emerald-900 bg-center bg-cover bg-no-repeat relative">
      {/* GRID LINES */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:20px_20px]" />

      <div className="flex flex-1 p-2 sm:p-4 gap-3 flex-col md:flex-row">
        {/* HUD LEFT */}
        <div className="w-full md:w-[200px]">
          <HUD score={score} targetScore={targetScore} lives={lives} moves={moves} />
        </div>

        {/* GAME AREA */}
        <div className="flex-1 relative flex flex-col">
          {/* Word bubbles */}
          <div
            className="
              relative
              h-[150px] xs:h-[180px] sm:h-[300px] md:h-[295px] lg:h-[350px]
              bg-[url('https://i.pinimg.com/1200x/bf/11/1b/bf111b1a08f048d323a218467dbf7aeb.jpg')]
              bg-cover bg-center rounded-lg overflow-hidden"
          >
            {words.map((wordData) => (
              <WordBubble
                key={wordData.id}
                wordData={wordData}
                onDragStart={(e) => handleDragStart(e, wordData.id)}
                onTouchStart={(e) => handleTouchStart(e, wordData.id)}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                isDragging={wordData.id === draggedWordId}
                touchPosition={touchPosition}
              />
            ))}
          </div>

          {/* Frog target */}
          <div
            className="flex justify-center rounded-lg mt-1 py-2 bg-gradient-to-t from-yellow-200 to-emerald-400"
            onDrop={handleDrop}
            onDragOver={(e) => e.preventDefault()}
            data-targetpos={level.targetPos}
          >
            <FrogTarget targetPos={level.targetPos} onDrop={(wordId) => processDrop(Number(wordId))} />
          </div>
        </div>
      </div>

      {showWin && (
        <WinModal
          stars={stars}
          score={score}
          targetScore={targetScore}
          moves={moves}
          totalMoves={totalMoves}
          currentLevel={currentLevel}
          isGameOver={stars === 0}
        />
      )}
    </div>
  </div>
  );
}

export default Game;
