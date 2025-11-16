// AbyssLevelButton.jsx
import React from "react";
import Frog from "../../modes/Fawwaz.Allrightreserved/Frognotif.png";

export default function AbyssLevelButton({ id, unlocked, onClick, targetPos }) {
  return (
    <button
      onClick={onClick}
      disabled={!unlocked}
      className={`relative
      xs:w-[62px] xs:h-[200px]    /* 📱 phone kecil */
      sm:w-[68px] sm:h-[220px]    /* 📱 phone normal */
      md:w-[80px] md:h-[260px]    /* 📱 tablet */
      lg:w-[95px] lg:h-[310px]    /* 💻 laptop & desktop */
      w-[95px] h-[310px]          /* fallback default */
      rounded-t-[50px] overflow-hidden border
      ${unlocked ? "border-cyan-200 shadow-[0_0_12px_rgba(0,255,255,0.5)]" : "border-gray-600 opacity-40"}
      bg-[url('https://i.pinimg.com/1200x/16/64/70/166470feb593d150b093edd0a411d3ef.jpg')]
      bg-cover bg-center bg-no-repeat
      transition-transform active:scale-95 hover:scale-105`}
>

      {/* Level Number */}
      <div className="absolute 
        top-8 md:top-7 sm:top-6 xs:top-5
        left-1/2 -translate-x-1/2 text-emerald-950 font-poppins
        text-2xl md:text-xl sm:text-lg xs:text-base drop-shadow-lg z-[30]">
        {id}
      </div>

      {/* Frog Image */}
      <div
        className="absolute 
        top-10 md:top-9 sm:top-8 xs:top-7
        bottom-12 md:bottom-10 sm:bottom-9 xs:bottom-8
        left-0 right-0 bg-no-repeat bg-center bg-contain opacity-95 z-[10]"
        style={{ backgroundImage: `url(${Frog})` }}
      />

      {/* Bottom TargetPos */}
      <div className="absolute bottom-8 w-full flex flex-col items-center
        text-emerald-950 font-poppins
        text-xs sm:text-[15px] xs:text-[9px] tracking-tight">
        {targetPos && <div>{targetPos}</div>}
      </div>

    </button>
  );
}
