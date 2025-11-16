import React from "react";
import ProgressBar from "../ProgressBar";

function HUD({ score, targetScore, lives, moves }) {
  return (
    <div
      className="
      flex flex-col gap-2 sm:gap-3        /* jarak di HP lebih kecil */
      p-2 sm:p-4                          /* padding lebih kecil di HP */
      w-full 
      bg-[url('https://i.pinimg.com/1200x/1c/d8/24/1cd824ccf720fd694c6884b7a6396109.jpg')] 
      bg-cover bg-center bg-no-repeat 
      rounded-md sm:rounded-lg           /* sudut lebih kecil di HP */
      shadow-md 
      border border-white/20 
      relative
    "
    >
      {/* Overlay biar teks lebih jelas */}
      <div className="absolute inset-0 bg-black/30 rounded-md sm:rounded-lg pointer-events-none" />

      <div className="relative flex flex-col gap-2 sm:gap-3 text-white font-poppins font-medium">

        {/* Moves */}
        <div className="text-xs xs:text-sm sm:text-lg bg-white/30 px-2 py-1 rounded backdrop-blur-sm">
          Moves: {moves}
        </div>

        {/* Score */}
        <div className="text-xs xs:text-sm sm:text-lg bg-white/30 px-2 py-1 rounded backdrop-blur-sm">
          Score: {score}
        </div>

        {/* Lives */}
        <div className="flex flex-wrap gap-[2px] sm:gap-1">
          {Array.from({ length: lives }, (_, i) => (
            <span
              key={i}
              className="text-lg xs:text-xl sm:text-2xl md:text-3xl drop-shadow-sm text-red-500"
            >
              ❤
            </span>
          ))}
        </div>

        {/* Progress Bar */}
        <ProgressBar score={score} targetScore={targetScore} />
      </div>
    </div>
  );
}

export default HUD;
