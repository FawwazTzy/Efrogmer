// src/modes/WarriorGrammar/components/WG_HUD.jsx
import React from "react";

/**
 * Props:
 * - timeLeft (seconds)
 * - score
 * - targetScore
 * - lives (number)
 * - targetPos (string)
 */
const WG_HUD3 = ({ timeLeft, score, targetScore, lives, targetPos, showTimeBonus }) => {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div
      className="
        w-full max-w-5xl mx-auto mb-1 px-1.5 py-0.5
        rounded-lg shadow-sm flex flex-wrap items-center justify-around
        bg-gradient-to-t from-emerald-100 to-yellow-200
        sm:px-2 sm:py-1
      "
    >
      {/* Lives */}
      <div className="flex flex-col items-center text-center">
        <span className="text-[8px] sm:text-[10px] text-emerald-900 font-medium">
          Lives
        </span>
        <span className="text-[9px] sm:text-xs font-bold text-red-600 tracking-tight">
          {Array(lives).fill("❤").join(" ")}
        </span>
      </div>

      {/* Time */}
    <div className="flex flex-col items-center text-center relative">
    <span className="text-[8px] sm:text-[10px] text-emerald-900 font-medium">
        Time
    </span>

    <span className="text-[9px] sm:text-xs font-bold text-emerald-900">
        {minutes}:{String(seconds).padStart(2, "0")}
    </span>

    {/* ⭐ Notif +3s */}
    {showTimeBonus && (
        <span
        className="
            absolute -right-5 sm:-right-10
            top-1 sm:top-0
            text-[8px] sm:text-[20px] 
            font-bold p-1 text-lime-900
            animate-ping-fast
        "
        >
        +3s
        </span>
    )}
    </div>


      {/* Target POS */}
      <div className="flex flex-col items-center text-center">
        <span className="text-[8px] sm:text-[10px] text-emerald-900 font-medium">
          Target
        </span>
        <span className="text-[9px] sm:text-xs font-bold text-emerald-900 capitalize">
          {targetPos}
        </span>
      </div>

      {/* Score */}
      <div className="flex flex-col items-center text-center">
        <span className="text-[8px] sm:text-[10px] text-emerald-900 font-medium">
          Score
        </span>
        <span className="text-[9px] sm:text-xs font-bold text-emerald-900">
          {score} / {targetScore}
        </span>
      </div>
    </div>
  );
};

export default WG_HUD3;
