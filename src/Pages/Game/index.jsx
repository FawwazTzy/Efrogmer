import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import HUD from "../../components/HUD";
import FrogTarget from "../../components/FrogTarget";
import WordBubble from "../../components/WordBubble";
import WinModal from "../../components/WinModal";
import LEVELS from "../../Data/Question";

function Game() {
  const { levelId } = useParams();
  const navigate = useNavigate();
  const levelIndex = Math.max(0, parseInt(levelId) - 1);
  const level = LEVELS[levelIndex];

  if (!level) {
    return (
      <div className="p-10 text-center text-red-600">
        Level not found!
      </div>
    );
  }

  const [words, setWords] = useState([]);
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(5);
  const [moves, setMoves] = useState(level.moves);
  const [draggedWordId, setDraggedWordId] = useState(null);
  const [showWin, setShowWin] = useState(false);
  const [stars, setStars] = useState(0);

  // set posisi kata sesuai data level (manual)
  useEffect(() => {
    setWords(level.words); // ambil top & left dari data LEVELS
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
      setScore((prev) => prev + 1);
    } else {
      setLives((prev) => Math.max(0, prev - 1));
    }

    setWords((prev) => prev.filter((w) => w.id !== wordId));
    setDraggedWordId(null);
  };

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
    <div className="flex flex-col min-h-screen bg-emerald-900 bg-center bg-cover bg-no-repeat">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="flex flex-1 p-4">
        {/* Panel kiri HUD */}
        <HUD
          score={score}
          targetScore={level.targetScore}
          lives={lives}
          moves={moves}
        />

        {/* Area game */}
        <div className="flex-1 relative">
          <div className="relative h-[350px] bg-[url('https://i.pinimg.com/1200x/bf/11/1b/bf111b1a08f048d323a218467dbf7aeb.jpg')] bg-cover bg-center rounded-lg overflow-hidden">
            {/* <div className="absolute top-0 -left-20 w-72 md:w-96 h-72 md:h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob" />
            <div className="absolute top-0 -right-20 w-72 md:w-96 h-72 md:h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob animation-delay-100" />
            <div className="absolute -bottom-8 left-[250px] w-72 md:w-96 h-72 md:h-96 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob animation-delay-400" /> */}
            {words.map((wordData) => (
              <WordBubble
                key={wordData.id}
                wordData={wordData}
                onDragStart={handleDragStart}
                isDragging={wordData.id === draggedWordId}
              />
            ))}
          </div>

          {/* Kodok target */}
          <div className="flex justify-center rounded-lg py-6 bg-gradient-to-t from-yellow-200 to-emerald-400">
            <FrogTarget
              targetPos={level.targetPos}
              onDrop={handleDrop}
              onDragOver={(e) => e.preventDefault()}
            />
          </div>
        </div>
      </div>

      {/* Modal Win */}
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

