import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function WinModal({ stars, score, targetScore, moves, totalMoves, currentLevel, isGameOver }) {
  const navigate = useNavigate();

  let message = "";
  
  if (isGameOver) {
    message = "Game Over ❌";
  } else {
    if (stars === 1) message = "Good 👍";
    if (stars === 2) message = "Bravo 🎉";
    if (stars === 3) message = "Excellence 🌟";
  }

  const nextLevel = currentLevel + 1;

  // Save level progress
  useEffect(() => {
    const key = `level_${currentLevel}`;
    const old = JSON.parse(localStorage.getItem(key)) || { stars: 0, score: 0 };

    const newData = {
      stars: Math.max(old.stars, stars),
      score: Math.max(old.score, score),
    };

    localStorage.setItem(key, JSON.stringify(newData));
  }, [stars, score, currentLevel]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
      <div className="bg-[url('https://i.pinimg.com/1200x/16/64/70/166470feb593d150b093edd0a411d3ef.jpg')] bg-no-repeat bg-cover bg-center p-6 rounded-2xl text-center shadow-2xl w-96 animate-fadeIn">
        <h2 className="text-3xl font-extrabold mb-3 text-green-900">{message}</h2>

        <p className="text-gray-950 font-poppins mb-1">
          Your Score: <span className="text-blue-600">{score}</span> / {targetScore}
        </p>
        <p className="text-gray-950 font-poppins text-sm mb-5">
          Moves used: <span className="text-red-500">{totalMoves - moves}</span> / {totalMoves}
        </p>

        <div className="flex justify-center gap-3 text-yellow-400 text-4xl mb-6">
          <span>{stars >= 1 ? "⭐" : "☆"}</span>
          <span>{stars >= 2 ? "⭐" : "☆"}</span>
          <span>{stars >= 3 ? "⭐" : "☆"}</span>
        </div>

        <div className="flex flex-col gap-3">
          <button
            onClick={() => navigate("/mappage")}
            className="bg-blue-500 font-poppins text-white px-5 py-2 rounded-lg hover:bg-blue-600 transition shadow"
          >
            Back to Map 🗺️
          </button>
          <button
            onClick={() => navigate("/mode")}
            className="bg-gray-600 font-poppins text-white px-5 py-2 rounded-lg hover:bg-gray-700 transition shadow"
          >
            Back to Menu 🏠
          </button>
        </div>
      </div>
    </div>
  );
}

export default WinModal;
