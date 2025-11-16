import React from "react";
import ProgressBar from "../ProgressBar";

function HUD({ score, targetScore, lives, moves }) {
  return (
    <div className="
      flex flex-col gap-3 sm:gap-4 
      p-3 sm:p-4 
      w-full 
      bg-[url('https://i.pinimg.com/1200x/1c/d8/24/1cd824ccf720fd694c6884b7a6396109.jpg')] 
      bg-cover bg-center bg-no-repeat 
      rounded-lg shadow-md 
      border border-white/20 
      relative
    ">

      {/* Overlay biar teks lebih jelas */}
      <div className="absolute inset-0 bg-black/25 rounded-lg pointer-events-none" />

      <div className="relative flex flex-col gap-3 text-white font-poppins font-medium">

        {/* Moves */}
        <div className="text-base sm:text-lg bg-white/30 px-2 py-1 rounded-md backdrop-blur-sm">
          Moves: {moves}
        </div>

        {/* Score */}
        <div className="text-base sm:text-lg bg-white/30 px-2 py-1 rounded-md backdrop-blur-sm">
          Score: {score}
        </div>

        {/* Lives */}
        <div className="flex flex-wrap gap-1">
          {Array.from({ length: lives }, (_, i) => (
            <span
              key={i}
              className="text-red-500 text-xl sm:text-2xl md:text-3xl drop-shadow-sm"
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
