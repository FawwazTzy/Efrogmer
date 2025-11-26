import React from "react";
import { motion } from "framer-motion";
import Frog from "../../modes/Fawwaz.Allrightreserved/Frognotif.png";

export default function AbyssLevelButton({ id, unlocked, onClick, targetPos }) {
  const progress = JSON.parse(localStorage.getItem(`level_${id}`)) || { score: 0, stars: 0 };

  return (
    <motion.button
      onClick={onClick}
      disabled={!unlocked}
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.35 }}
      whileHover={unlocked ? { scale: 1.08 } : {}}
      whileTap={unlocked ? { scale: 0.92 } : {}}
      className={`relative w-[60px] sm:w-[95px] h-[200px] sm:h-[310px] rounded-t-[25px] sm:rounded-t-[50px] overflow-hidden border
        ${
          unlocked
            ? "border-cyan-200 shadow-[0_0_12px_rgba(0,255,255,0.5)]"
            : "border-gray-600 opacity-40"
        }
        bg-[url('https://i.pinimg.com/1200x/16/64/70/166470feb593d150b093edd0a411d3ef.jpg')]
        bg-cover bg-center bg-no-repeat transition-transform`}
    >

      {/* Level Number */}
      <div className="absolute top-4 sm:top-7 left-1/2 -translate-x-1/2 text-emerald-950 text-lg sm:text-2xl font-bold drop-shadow-lg">
        {id}
      </div>

      {/* Frog Image */}
      <div
        className="absolute top-6 sm:top-10 bottom-8 sm:bottom-12 left-0 right-0 bg-no-repeat bg-center bg-contain opacity-95"
        style={{ backgroundImage: `url(${Frog})` }}
      />

      {/* Score & Stars */}
      {unlocked && (
        <p className="absolute bottom-10 sm:bottom-16 w-full text-center text-gray-900 font-semibold text-xs z-[20]">
          <span>{progress.stars >= 1 ? "⭐" : "☆"}</span>
          <span>{progress.stars >= 2 ? "⭐" : "☆"}</span>
          <span>{progress.stars >= 3 ? "⭐" : "☆"}</span>
          <br />
          Score: <span className="text-blue-600">{progress.score}</span>
        </p>
      )}

      {/* Target Position Label */}
      {targetPos && (
        <div className="absolute bottom-4 sm:bottom-8 w-full text-center text-emerald-950 text-xs font-medium">
          {targetPos}
        </div>
      )}
    </motion.button>
  );
}
