// src/modes/WarriorGrammar/components/WG_WinModal.jsx
import React from "react";
import { useNavigate } from "react-router-dom"; // 🔥 penting agar tombol Exit berfungsi

/**
 * Props:
 * - open: boolean
 * - onClose: fn
 * - score: number
 * - targetScore: number
 * - timeLeft: number
 * - stars: number (0-3)
 */
const WG_WinModal = ({ open, onClose, score, targetScore, timeLeft, stars = 0 }) => {
  const navigate = useNavigate(); // 🔥 digunakan untuk navigasi halaman

  if (!open) return null;

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
      <div className="bg-white rounded-xl p-6 max-w-md w-full text-center shadow-lg shadow-black/40">
        <h3 className="text-2xl font-bold mb-2 text-emerald-700">Result</h3>

        <div className="mb-3">
          <div className="text-sm text-slate-600">Score</div>
          <div className="text-2xl font-bold text-emerald-900">
            {score} / {targetScore}
          </div>
        </div>

        <div className="mb-3">
          <div className="text-sm text-slate-600">Time left</div>
          <div className="font-semibold text-emerald-800">
            {minutes}:{String(seconds).padStart(2, "0")}
          </div>
        </div>

        <div className="mb-4">
          <div className="text-sm text-slate-600">Stars</div>
          <div className="text-xl text-yellow-500 font-bold">
            {Array(stars).fill("⭐").join(" ")}
            {stars === 0 ? " — Try again!" : ""}
          </div>
        </div>

        <div className="flex gap-3 justify-center">
          <button
            onClick={onClose}
            className="bg-lime-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-lime-600 transition"
          >
            Play Again
          </button>
          <button
            onClick={() => navigate("/mode")}
            className="bg-red-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-700 transition"
          >
            Exit
          </button>
        </div>
      </div>
    </div>
  );
};

export default WG_WinModal;
