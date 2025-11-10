// src/modes/WarriorGrammar/components/WG_SidePanel.jsx
import React from "react";
import WG_FrogTarget from "./WG_FrogTarget";

const WG_SidePanel = ({
  targetPos,
  correctSinceChange,
  correctChangeThreshold,
  wordsLeft,
  targetScore,
  onDrop,
  onDragOver,
  onRestart,
  onBack,
}) => {
  return (
    <div
  className="
    flex flex-col
    bg-transparent
    w-full sm:w-[38%] lg:w-[25%] 
    min-w-[100px] max-w-[300px] 
    mx-auto
    p-1.5 sm:p-2
  "
>
  {/* 📘 Info Panel */}
  <div className="bg-white/10 rounded-lg p-1 sm:p-2 text-[9px] sm:text-[5.5px] text-white/80">
    <h3 className="text-[10px] sm:text-[6px] font-bold text-white text-center">
      Warrior Grammar
    </h3>
    <p className="mt-0.5 leading-tight">
      Feed the frog only words that match the target part of speech. Every{" "}
      <span className="font-bold">{correctChangeThreshold}</span> correct feeds will change the target automatically.
    </p>
    <p className="mt-0.5 leading-tight">
      Reach <span className="font-bold">{targetScore}</span> points to win early, or survive until time runs out.
    </p>
  </div>

  {/* 🐸 Frog Target */}
  <div className="my-1 sm:my-1">
    <WG_FrogTarget label={targetPos} onDrop={onDrop} onDragOver={onDragOver} />
  </div>

  {/* 📊 Info tambahan */}
  <div className="bg-white/5 mt-1 rounded-lg p-1 sm:p-2 text-[8px] sm:text-[7px] text-white/80">
    <div>
      <span className="font-semibold text-white">Correct since last change:</span>{" "}
      {correctSinceChange} / {correctChangeThreshold}
    </div>
    <div className="mt-0.5">
      <span className="font-semibold text-white">Remaining words:</span> {wordsLeft}
    </div>
  </div>

  {/* 🔘 Tombol */}
  <div className="mt-1 flex flex-col sm:flex-row gap-1 sm:gap-1.5">
    <button
      onClick={onBack}
      className="flex-1 bg-red-600 px-2 py-1 rounded text-[9px] sm:text-[8px] hover:bg-red-700 transition"
    >
      Back
    </button>
    <button
      onClick={onRestart}
      className="flex-1 bg-lime-500 px-2 py-1 rounded text-[9px] sm:text-[8px] hover:bg-lime-600 transition"
    >
      Restart
    </button>
  </div>
</div>

  );
};

export default WG_SidePanel;
