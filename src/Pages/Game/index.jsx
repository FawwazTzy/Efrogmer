import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import HUD from "../../components/HUD";
import FrogTarget from "../../components/FrogTarget";
import WordBubble from "../../components/WordBubble";
import WinModal from "../../components/WinModal";
import LEVELS from "../../Data/Question";

function Game() {
  const { levelId } = useParams();
  const levelIndex = Math.max(0, parseInt(levelId) - 1);
  const level = LEVELS[levelIndex];

  if (!level) {
    return <div className="p-10 text-center text-red-600">Level not found!</div>;
  }

  const [words, setWords] = useState([]);
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(6);
  const [moves, setMoves] = useState(level.moves);
  const [draggedWordId, setDraggedWordId] = useState(null);
  const [showWin, setShowWin] = useState(false);
  const [stars, setStars] = useState(0);

  // Reset level
  useEffect(() => {
    setWords(level.words);
    setScore(0);
    setLives(5);
    setMoves(level.moves);
    setShowWin(false);
    setStars(0);
  }, [level]);

  const handleDragStart = (e, id) => {
    setDraggedWordId(id);
    e.dataTransfer.setData("wordId", id);
  };

  const handleDrop = (e) => {
  e.preventDefault();
  if (moves <= 0 || lives <= 0) return;

  const wordId = parseInt(e.dataTransfer.getData("wordId"));
  const droppedWord = words.find((w) => w.id === wordId);
  if (!droppedWord) return;

  setMoves((prev) => prev - 1);

  if (droppedWord.pos === level.targetPos) {
    window.dispatchEvent(new CustomEvent("frogReaction", { detail: "correct" }));
    setScore((prev) => prev + 1);
  } else {
    window.dispatchEvent(new CustomEvent("frogReaction", { detail: "wrong" }));
    setLives((prev) => Math.max(0, prev - 1));
  }

  setWords((prev) => prev.filter((w) => w.id !== wordId));
  setDraggedWordId(null);
};

  // End level → show modal
  useEffect(() => {
    if (moves <= 0) {
      const ratio = score / level.targetScore;
      let earned = 0;
      if (ratio >= 1) earned = 3;
      else if (ratio >= 0.66) earned = 2;
      else if (ratio >= 0.33) earned = 1;
      else earned = 0;

      setStars(earned);
      setShowWin(true);
    }
  }, [moves, score, level.targetScore]);

  return (
    <div className="flex flex-col min-h-screen bg-emerald-900 bg-center bg-cover bg-no-repeat relative">

      {/* Pattern grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:20px_20px]" />

      <div className="flex flex-1 p-2 sm:p-4 gap-3 flex-col md:flex-row">

        {/* HUD LEFT */}
        <div className="w-full md:w-[200px]">
          <HUD score={score} targetScore={level.targetScore} lives={lives} moves={moves} />
        </div>

        {/* GAME AREA */}
        <div className="flex-1 relative flex flex-col">

          {/* Word bubbles area */}
          <div className="
            relative
            h-[150px] xs:h-[180px] sm:h-[300px] md:h-[295px] lg:h-[350px]
            bg-[url('https://i.pinimg.com/1200x/bf/11/1b/bf111b1a08f048d323a218467dbf7aeb.jpg')]
            bg-cover bg-center rounded-lg overflow-hidden
          ">
            {words.map((wordData) => (
              <WordBubble
                key={wordData.id}
                wordData={wordData}
                onDragStart={handleDragStart}
                isDragging={wordData.id === draggedWordId}
              />
            ))}
          </div>

          {/* Frog target */}
          <div className="flex justify-center rounded-lg mt-1 py-2 bg-gradient-to-t from-yellow-200 to-emerald-400">
            <FrogTarget
              targetPos={level.targetPos}
              onDrop={handleDrop}
              onDragOver={(e) => e.preventDefault()}
            />
          </div>
        </div>
      </div>

      {/* Win modal */}
      {showWin && (
        <WinModal
          stars={stars}
          score={score}
          targetScore={level.targetScore}
          moves={moves}
          totalMoves={level.moves}
          currentLevel={levelIndex + 1}
        />
      )}
    </div>
  );
}

export default Game;
