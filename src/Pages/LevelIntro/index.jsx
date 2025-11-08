import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import LEVELS from "../../Data/Question";

export default function LevelIntro() {
  const { levelId } = useParams(); 
  const navigate = useNavigate();
  const level = LEVELS.find((lvl) => lvl.id === parseInt(levelId));

  if (!level) {
    return (
      <div className="flex items-center justify-center h-screen">
        Level not found!
      </div>
    );
  }

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden p-6">
      <div className="fixed inset-0 bg-emerald-900 -z-10">
        <div className="absolute -inset-[10px] opacity-30">
          <div className="absolute top-0 -left-4 w-72 md:w-96 h-72 md:h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob" />
          <div className="absolute top-0 -right-4 w-72 md:w-96 h-72 md:h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob animation-delay-2000" />
          <div className="absolute -bottom-8 left-20 w-72 md:w-96 h-72 md:h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob animation-delay-4000" />
        </div>

        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      {/* 🧩 Konten utama */}
      <div className="bg-[url('https://i.pinimg.com/1200x/16/64/70/166470feb593d150b093edd0a411d3ef.jpg')] bg-no-repeat bg-cover bg-center rounded-xl shadow-lg p-6 w-full max-w-md text-center">
        <h1 className="text-2xl font-poppins text-gray-800 mb-4">
          Level {level.id}
        </h1>

        <p className="text-lg text-gray-700 mb-2">
          🎯 Target: <span className="font-semibold">{level.targetPos}</span>
        </p>
        <p className="text-lg text-gray-700 mb-2">
          ⭐ Target Score:{" "}
          <span className="font-semibold">{level.targetScore}</span>
        </p>
        <p className="text-lg text-gray-700 mb-6">
          🎮 Moves Available:{" "}
          <span className="font-semibold">{level.moves}</span>
        </p>

        <div className="flex flex-col gap-3">
          <button
            onClick={() => navigate(`/level/${level.id}/play`)}
            className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg font-bold shadow"
          >
            ▶ Start
          </button>
          <button
            onClick={() => navigate("/mappage")}
            className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-bold shadow"
          >
            ⬅ Back to Map
          </button>
          <button
            onClick={() => navigate("/mainpage")}
            className="px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded-lg font-bold shadow"
          >
            🏠 Back to Menu
          </button>
        </div>
      </div>
    </div>
  );
}
