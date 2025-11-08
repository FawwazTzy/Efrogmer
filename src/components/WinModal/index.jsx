import React from "react";
import { useNavigate } from "react-router-dom";

function WinModal({ stars, score, targetScore, moves, totalMoves, currentLevel }) {
  const navigate = useNavigate();

  let message = "Game Over ❌";
  if (stars === 1) message = "Good 👍";
  if (stars === 2) message = "Bravo 🎉";
  if (stars === 3) message = "Excellence 🌟";

  // Level berikutnya
  const nextLevel = currentLevel + 1;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
      <div className="bg-white p-6 rounded-2xl text-center shadow-2xl w-96 animate-fadeIn">
        
        <h2 className="text-3xl font-extrabold mb-3 text-green-600">{message}</h2>

        <p className="text-gray-800 font-semibold mb-1">
          Your Score: <span className="text-blue-600">{score}</span> / {targetScore}
        </p>
        <p className="text-gray-500 text-sm mb-5">
          Moves used: <span className="text-red-500">{moves}</span> / {totalMoves}
        </p>

        <div className="flex justify-center gap-3 text-yellow-400 text-4xl mb-6">
          <span>{stars >= 1 ? "⭐" : "☆"}</span>
          <span>{stars >= 2 ? "⭐" : "☆"}</span>
          <span>{stars >= 3 ? "⭐" : "☆"}</span>
        </div>

        <div className="flex flex-col gap-3">
          <button
            onClick={() => navigate(`/level/${nextLevel}/play`)}
            className="bg-green-500 text-white px-5 py-2 rounded-lg hover:bg-green-600 transition shadow"
          >
            Next Level ➡️
          </button>
          <button
            onClick={() => navigate("/mappage")}
            className="bg-blue-500 text-white px-5 py-2 rounded-lg hover:bg-blue-600 transition shadow"
          >
            Back to Map 🗺️
          </button>
          <button
            onClick={() => navigate("/")}
            className="bg-gray-600 text-white px-5 py-2 rounded-lg hover:bg-gray-700 transition shadow"
          >
            Back to Menu 🏠
          </button>
        </div>
      </div>
    </div>
  );
}

export default WinModal;
