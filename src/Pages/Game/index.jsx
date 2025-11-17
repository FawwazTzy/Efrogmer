import React, { useState, useEffect } from "react";
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

  // handy aliases used below
  const targetScore = level.targetScore ?? 0;
  const totalMoves = level.moves ?? 0;
  const currentLevel = levelIndex + 1;

  // Init from level to avoid "empty words on first render" problem
  const [words, setWords] = useState(() => level.words ?? []);
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(5);
  const [moves, setMoves] = useState(() => level.moves ?? 0);
  const [draggedWordId, setDraggedWordId] = useState(null);
  const [showWin, setShowWin] = useState(false);
  const [stars, setStars] = useState(0);

  // Guard to prevent end-check running before initial reset completes
  const [initialized, setInitialized] = useState(false);

  // Reset level when changing level page
  useEffect(() => {
    setWords(level.words ?? []);
    setScore(0);
    setLives(5);
    setMoves(level.moves ?? 0);
    setShowWin(false);
    setStars(0);

    // mark initialized after resets
    setInitialized(true);

    // cleanup on unmount / level change (optional)
    return () => setInitialized(false);
  }, [level]);

  // ========== HANDLE DRAG / DROP ==========
  const handleDragStart = (e, id) => {
    setDraggedWordId(id);
    e.dataTransfer?.setData("wordId", id);
  };

  const handleTouchStart = (e, id) => {
    setDraggedWordId(id);
  };

  const handleTouchEnd = (e) => {
    const touch = e.changedTouches[0];
    const dropTarget = document.elementFromPoint(touch.clientX, touch.clientY);
    if (!dropTarget || !dropTarget.closest("[data-targetpos]")) return;
    processDrop(draggedWordId);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const val = e.dataTransfer.getData("wordId");
    const wordId = val ? parseInt(val, 10) : null;
    if (wordId == null || Number.isNaN(wordId)) return;
    processDrop(wordId);
  };

  const processDrop = (wordId) => {
    // basic guards
    if (!initialized) return;
    if (moves <= 0 || lives <= 0) return;

    const droppedWord = words.find((w) => w.id === wordId);
    if (!droppedWord) return;

    setMoves((prev) => prev - 1);

    // NOTE: level.targetPos and word.pos must be consistent in casing/format.
    if (String(droppedWord.pos).toLowerCase() === String(level.targetPos).toLowerCase()) {
      window.dispatchEvent(new CustomEvent("frogReaction", { detail: "correct" }));
      setScore((prev) => prev + 1);
    } else {
      window.dispatchEvent(new CustomEvent("frogReaction", { detail: "wrong" }));
      setLives((prev) => Math.max(0, prev - 1));
    }

    setWords((prev) => prev.filter((w) => w.id !== wordId));
    setDraggedWordId(null);
  };

  // ===== END LEVEL CONDITIONS =====
  useEffect(() => {
    if (!initialized) return; // do nothing until init done

    if (moves <= 0 || lives <= 0 || words.length === 0) {
      const ratio = targetScore > 0 ? score / targetScore : 0;
      let earned = 0;
      if (ratio >= 1) earned = 3;
      else if (ratio >= 0.66) earned = 2;
      else if (ratio >= 0.33) earned = 1;

      setStars(earned);
      setShowWin(true);
    }
    // intentionally not including `level` refs in deps since this effect is per-mount
  }, [moves, lives, words.length, score, initialized, targetScore]);

  return (
    <div className="flex flex-col min-h-screen bg-emerald-900 bg-center bg-cover bg-no-repeat relative">
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
                onTouchEnd={handleTouchEnd}
                isDragging={wordData.id === draggedWordId}
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
            <FrogTarget targetPos={level.targetPos} />
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
  );
}

export default Game;
