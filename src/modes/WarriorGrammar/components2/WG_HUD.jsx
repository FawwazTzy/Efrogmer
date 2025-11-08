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
const WG_HUD = ({ timeLeft, score, targetScore, lives, targetPos }) => {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div
      className="
        w-full max-w-5xl mx-auto mb-1 px-1.5 py-0.5
        rounded-lg shadow-sm flex flex-wrap items-center justify-between
        bg-gradient-to-t from-emerald-400 to-yellow-200
        sm:px-2 sm:py-1
      "
    >
      {/* Lives */}
      <div className="flex flex-col items-center text-center">
        <span className="text-[8px] sm:text-[10px] text-emerald-900 font-medium">
          Lives
        </span>
        <span className="text-[9px] sm:text-xs font-bold text-red-700 tracking-tight">
          {Array(lives).fill("❤").join(" ")}
        </span>
      </div>

      {/* Time */}
      <div className="flex flex-col items-center text-center">
        <span className="text-[8px] sm:text-[10px] text-emerald-900 font-medium">
          Time
        </span>
        <span className="text-[9px] sm:text-xs font-bold text-emerald-900">
          {minutes}:{String(seconds).padStart(2, "0")}
        </span>
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

export default WG_HUD;
