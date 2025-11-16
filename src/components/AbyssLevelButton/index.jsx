import React from "react";
import Frog from "../../modes/Fawwaz.Allrightreserved/Frognotif.png";

export default function AbyssLevelButton({ id, unlocked, onClick, targetPos }) {
  return (
    <button
      onClick={onClick}
      disabled={!unlocked}
      className={`relative w-[95px] h-[310px] rounded-t-[60px] overflow-hidden border
      ${unlocked ? "border-cyan-200 shadow-[0_0_15px_rgba(0,255,255,0.5)]" : "border-gray-600 opacity-40"}
      bg-[url('https://i.pinimg.com/1200x/16/64/70/166470feb593d150b093edd0a411d3ef.jpg')] bg-cover bg-center bg-no-repeat
      transition-transform active:scale-95 hover:scale-105`}
    >
      {/* Level Number */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 text-emerald-950 font-poppins text-3xl drop-shadow-lg z-[30]">
        {id}
      </div>

      {/* Inner Frog Image */}
      <div
        className="absolute top-12 bottom-14 left-0 right-0 bg-no-repeat bg-center bg-contain opacity-95 z-[10]"
        style={{ backgroundImage: `url(${Frog})` }}
      />

      {/* Chest + Clear Check + TargetPos */}
      <div className="absolute bottom-3 w-full flex flex-col items-center space-y-1 text-emerald-950 font-poppins text-sm">
        {targetPos && <div>{targetPos}</div>}
     </div>
    </button>
  );
}
