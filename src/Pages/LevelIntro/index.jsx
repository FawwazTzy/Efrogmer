import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import LEVELS from "../../Data/Question";
import { StarIcon } from "@heroicons/react/24/solid";

export default function LevelIntro() {
  const { levelId } = useParams();
  const navigate = useNavigate();
  const level = LEVELS.find((lvl) => lvl.id === parseInt(levelId));

  if (!level) {
    return (
      <div className="flex items-center justify-center h-screen text-white">
        Level not found!
      </div>
    );
  }

  return (
    <div className="relative min-h-screen text-gray-100 overflow-hidden flex items-center justify-center px-4">

      {/* 🌌 BACKGROUND ABYSS */}
      <div className="absolute inset-0 bg-emerald-950">
        <div className="absolute inset-0 opacity-30 bg-[url('https://i.pinimg.com/1200x/1c/d8/24/1cd824ccf720fd694c6884b7a6396109.jpg')] bg-center bg-cover bg-no-repeat" />
        <div className="absolute inset-0 bg-[radial-gradient(circle,#1a2f48_0%,#06111c_80%)] opacity-40" />
      </div>

      <div className="relative w-full max-w-5xl flex gap-5">

        {/* 🟦 PANEL KIRI FLOOR INFO */}
        <div className="w-36 h-[480px] rounded-xl bg-emerald-500 hover:bg-emerald-900 backdrop-blur-lg hover:scale-105 transition border border-[rgba(255,255,255,0.15)] shadow-[0_0_20px_rgba(0,180,255,0.35)] flex flex-col items-center justify-start pt-6">
          
          {/* Level Badge */}
          <div className="w-16 h-16 rounded-full bg-[url('https://i.pinimg.com/1200x/16/64/70/166470feb593d150b093edd0a411d3ef.jpg')] bg-cover bg-center bg-no-repeat text-[#0c1a28] flex items-center justify-center text-3xl font-poppins border border-emerald-900 shadow-lg">
            {level.id}
          </div>

          {/* Illustration Placeholder */}
          <div className="mt-6 w-24 h-40 rounded-lg bg-[url('https://i.pinimg.com/1200x/8b/5c/50/8b5c509902b8a1a4cf9e062f9cbe40d9.jpg')] bg-cover bg-center bg-no-repeat border border-[rgba(255,255,255,0.12)]" />

          {/* Reward Icons Placeholder */}
          <div className="mt-6 flex gap-2">
            <div className="w-5 h-5 rounded-sm bg-yellow-300" />
            <div className="w-5 h-5 rounded-sm bg-yellow-300" />
            <div className="w-5 h-5 rounded-sm bg-yellow-300" />
          </div>
        </div>

        {/* 🟩 PANEL KANAN MAIN CONTENT */}
        <div className="flex-1 p-6 rounded-xl bg-[url('https://i.pinimg.com/1200x/16/64/70/166470feb593d150b093edd0a411d3ef.jpg')] bg-cover bg-center bg-no-repeat border border-[rgba(255,255,255,0.14)] backdrop-blur-lg shadow-xl">
          
          {/* TITLE */}
          <h1 className="text-3xl font-poppins font-semibold text-emerald-950 tracking-wide">
            Level {level.id}
          </h1>
          <p className="text-lg mt-1 font-poppins text-emerald-700">{level.targetPos}</p>

          {/* DESC SECTION */}
          <div className="mt-4">
            <ul className="text-sm space-y-1 text-gray-300 list-disc ml-6">
              {level.effects?.map((e, i) => (
                <li key={i}>{e}</li>
              ))}
            </ul>
          </div>

          {/* TARGET CHALLENGE */}
          <div className="mt-6">
            <h2 className="text-xl font-norwester text-yellow-600 mb-3">Challenge Target</h2>
            <div className="w-full font-poppins bg-black/60 hover:bg-emerald-900 transition border border-[rgba(255,255,255,0.12)] px-4 py-3 rounded-md flex flex-col justify-start items-start mb-2">
              <span className="font-semibold text">Definition of {level.targetPos}:</span>
              {level.definition && (
                <span className="mt-1 text-gray-300">{level.definition}</span>
              )}
              <span className="font-semibold mt-6">For example:</span>
              <span className="text-gray-300">{level.example}</span>
              <span className="font-semibold mt-6">Function of {level.targetPos}:</span>
              <span className="text-gray-300">{level.function}</span>
            </div>
          </div>


          {/* START BUTTON */}
          <div className="mt-8 flex justify-end">
            <button
              onClick={() => navigate(`/level/${level.id}/play`)}
              className="px-6 py-3 rounded-full bg-gradient-to-r from-emerald-200 to-emerald-500 text-[#0b1320] font-poppins shadow-[0_0_10px_rgba(255,220,90,0.6)] hover:scale-105 transition flex items-center gap-2"
            >
              ▶ Start Challenge
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
