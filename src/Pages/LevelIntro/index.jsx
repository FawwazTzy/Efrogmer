import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import LEVELS from "../../Data/Question";

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
    <div className="relative min-h-screen text-gray-100 overflow-hidden flex items-center justify-center px-3 py-4">

      {/* 🌌 BACKGROUND */}
      <div className="absolute inset-0 bg-emerald-950">
        <div className="absolute inset-0 opacity-30 bg-[url('https://i.pinimg.com/1200x/1c/d8/24/1cd824ccf720fd694c6884b7a6396109.jpg')] bg-center bg-cover" />
        <div className="absolute inset-0 bg-[radial-gradient(circle,#1a2f48_0%,#06111c_80%)] opacity-40" />
      </div>

      <div className="relative w-full max-w-5xl flex flex-col md:flex-row gap-3 md:gap-5">

        {/* 🟦 PANEL KIRI */}
        <div className="w-full md:w-32 h-[290px] sm:h-[330px] md:h-[410px]
          rounded-xl bg-emerald-500 hover:bg-emerald-900 backdrop-blur-lg 
          transition border border-[rgba(255,255,255,0.15)] shadow-[0_0_18px_rgba(0,180,255,0.35)]
          flex flex-col items-center justify-start pt-4 mx-auto md:mx-0">

          {/* Badge Level */}
          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full 
            bg-[url('https://i.pinimg.com/1200x/16/64/70/166470feb593d150b093edd0a411d3ef.jpg')]
            bg-cover bg-center text-[#0c1a28] flex items-center justify-center
            text-xl sm:text-2xl font-poppins border border-emerald-900 shadow-lg">
            {level.id}
          </div>

          {/* Illust */}
          <div className="mt-3 w-16 h-24 sm:w-20 sm:h-32 rounded-lg 
            bg-[url('https://i.pinimg.com/1200x/8b/5c/50/8b5c509902b8a1a4cf9e062f9cbe40d9.jpg')] 
            bg-cover bg-center border border-[rgba(255,255,255,0.12)]" />

          {/* Rewards */}
          <div className="mt-3 flex gap-1.5">
            <div className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-sm bg-yellow-300" />
            <div className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-sm bg-yellow-300" />
            <div className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-sm bg-yellow-300" />
          </div>
        </div>

        {/* 🟩 PANEL KANAN */}
        <div className="flex-1 p-3 sm:p-5 rounded-xl 
          bg-[url('https://i.pinimg.com/1200x/16/64/70/166470feb593d150b093edd0a411d3ef.jpg')]
          bg-cover bg-center border border-[rgba(255,255,255,0.14)] backdrop-blur-lg shadow-xl">

          {/* TITLE */}
          <h1 className="text-xl sm:text-2xl font-poppins font-semibold text-emerald-950 tracking-wide">
            Level {level.id}
          </h1>
          <p className="text-sm sm:text-base mt-0.5 font-poppins text-emerald-700 capitalize">
            {level.targetPos}
          </p>

          {/* DESC SECTION */}
          <div className="mt-2">
            <ul className="text-xs sm:text-sm space-y-1 text-gray-300 list-disc ml-4">
              {level.effects?.map((e, i) => (
                <li key={i}>{e}</li>
              ))}
            </ul>
          </div>

          {/* TARGET BOX */}
          <div className="mt-3 sm:mt-4">
            <h2 className="text-base sm:text-lg font-norwester text-yellow-600 mb-2">
              Challenge Target
            </h2>

            <div className="w-full font-poppins bg-black/60 border border-[rgba(255,255,255,0.12)]
              px-3 py-2 rounded-md space-y-1.5 text-xs sm:text-sm">

              <p><span className="font-semibold">Definition:</span> {level.definition}</p>
              <p><span className="font-semibold">Example:</span> {level.example}</p>
              <p><span className="font-semibold">Function:</span> {level.function}</p>
            </div>
          </div>

          {/* START BUTTON */}
          <div className="mt-4 flex justify-end">
            <button
              onClick={() => navigate(`/level/${level.id}/play`)}
              className="px-4 py-2 sm:px-5 sm:py-2.5 rounded-full 
                bg-gradient-to-r from-emerald-200 to-emerald-500 text-[#0b1320]
                font-poppins shadow-[0_0_8px_rgba(255,220,90,0.6)]
                hover:scale-105 transition text-xs sm:text-sm"
            >
              ▶ Start
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
