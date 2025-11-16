// FrogTarget.jsx
import React from "react";

function FrogTarget({ targetPos, onDrop, onDragOver }) {
  return (
    <div
      className="
        w-[85%] sm:w-64 
        h-32 sm:h-40 
        flex flex-col items-center justify-center
        p-3 sm:p-4 
        rounded-full border-4 border-dashed border-green-500
        bg-green-200/90 backdrop-blur-sm
        shadow-inner
      "
      onDrop={onDrop}
      onDragOver={onDragOver}
    >
      {/* Kodok */}
      <div className="
        w-14 h-14 sm:w-20 sm:h-20 
        bg-green-600 rounded-full flex items-center justify-center
        text-white text-2xl sm:text-3xl font-extrabold shadow-xl
      ">
        🐸
      </div>

      {/* Target Text */}
      <div className="mt-1 sm:mt-2 text-green-900 font-poppins text-sm sm:text-xl uppercase text-center">
        <p className="text-[10px] sm:text-xs text-gray-600 leading-none">Feed me:</p>
        {targetPos}
      </div>

      {/* Instruction */}
      <div className="text-[10px] sm:text-xs text-gray-700 mt-1">
        (Drop word here)
      </div>
    </div>
  );
}

export default FrogTarget;
