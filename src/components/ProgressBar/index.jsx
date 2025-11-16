// ProgressBar.jsx
import React from "react";

function ProgressBar({ score, targetScore }) {
  const progress = Math.min((score / targetScore) * 100, 100);

  let stars = 0;
  if (score >= targetScore) stars = 3;
  else if (score >= targetScore * 0.66) stars = 2;
  else if (score >= targetScore * 0.33) stars = 1;

  return (
    <div className="w-full px-1 sm:px-2 py-1 rounded-md border border-white/20 bg-emerald-900/80 backdrop-blur-sm">
      {/* Bar */}
      <div className="h-3 sm:h-4 bg-white/40 rounded-full overflow-hidden">
        <div
          className="h-full bg-yellow-400 transition-all"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Bintang */}
      <div className="flex justify-between mt-1 text-yellow-400 text-sm sm:text-base">
        <span>{stars >= 1 ? "⭐" : "☆"}</span>
        <span>{stars >= 2 ? "⭐" : "☆"}</span>
        <span>{stars >= 3 ? "⭐" : "☆"}</span>
      </div>
    </div>
  );
}

export default ProgressBar;
