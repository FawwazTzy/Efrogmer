import React from "react";
import ProgressBar from "../ProgressBar";

function HUD({ score, targetScore, lives, moves }) {
  return (
    <div className="flex flex-col gap-4 p-4 bg-[url('https://i.pinimg.com/1200x/1c/d8/24/1cd824ccf720fd694c6884b7a6396109.jpg')] bg-no-repeat rounded-lg shadow-md w-full max-w-[170px]">
      
      {/* Moves */}
      <div className="text-lg bg-slate-300 px-2 py-1 rounded-md font-poppins">
        Moves: {moves}
      </div>

      {/* Score */}
      <div className="text-lg bg-slate-300 px-2 py-1 rounded-md font-poppins">
        Score: {score}
      </div>

      {/* Lives */}
      <div className="flex">
        {Array.from({ length: lives }, (_, i) => (
          <span key={i} className="text-red-500 text-3xl">❤</span>
        ))}
      </div>

      {/* Progress Bar */}
      <ProgressBar score={score} targetScore={targetScore} />
    </div>
  );
}

export default HUD;
