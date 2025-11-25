import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AbyssLevelButton from "../../components/AbyssLevelButton";
import Levelup from "../../assets/Levelup.png";
import { motion } from "framer-motion";
import gavocabicon from "../../assets/Efrogmer1.jpeg";

const levels = [
  { id: 1, stars: 3, unlocked: true, targetPos: "Noun" },
  { id: 2, stars: 3, unlocked: true, targetPos: "Verb" },
  { id: 3, stars: 2, unlocked: true, targetPos: "Adjective" },
  { id: 4, stars: 1, unlocked: true, targetPos: "Adverb" },
  { id: 5, stars: 0, unlocked: true, targetPos: "Pronoun" },
  { id: 6, stars: 0, unlocked: true, targetPos: "Preposition" },
  { id: 7, stars: 0, unlocked: true, targetPos: "Conjunction" },
  { id: 8, stars: 0, unlocked: true, targetPos: "Interjection" },
  { id: 9, stars: 0, unlocked: true, targetPos: "Determiner" },
];

export default function MapPage() {
  const navigate = useNavigate();

  // FIX: Hooks must be inside the component function
  const [isPortrait, setIsPortrait] = useState(false);

  useEffect(() => {
    const checkOrientation = () => {
      setIsPortrait(window.innerHeight > window.innerWidth);
    };
    checkOrientation();
    window.addEventListener("resize", checkOrientation);
    return () => window.removeEventListener("resize", checkOrientation);
  }, []);

  return (
    <div className="h-screen w-screen bg-yellow-900 text-white p-2 sm:p-4 overflow-hidden relative">
      {/* Orientation Warning */}
      {isPortrait && (
        <div className="absolute inset-0 z-50 bg-emerald-950/90 flex flex-col items-center justify-center text-center p-6">
          <h2 className="text-lg sm:text-2xl font-bold mb-2 sm:mb-4">
            Please Rotate Your Device!
          </h2>
          <p className="text-sm sm:text-lg">
            This game works best in landscape mode.
          </p>
        </div>
      )}

      {/* Main Background */}
      <div className="min-h-screen flex flex-col items-center bg-[url('https://i.pinimg.com/1200x/bf/11/1b/bf111b1a08f048d323a218467dbf7aeb.jpg')] bg-cover text-white relative">

        {/* Top UI */}
        <div className="w-full bg-emerald-900 px-3 py-2 sm:px-4 sm:py-3 flex items-center justify-between text-xs xs:text-sm sm:text-base md:text-lg">

          {/* Left Title */}
          <div className="flex items-center gap-1 xs:gap-2 sm:gap-3">
            <div className="px-2 py-1 font-norwester rounded-full">
              Part of Speech's Levels
            </div>
            <img
              src={Levelup}
              alt="Part of Speech Icon"
              className="w-4 h-4 xs:w-5 xs:h-5 sm:w-7 sm:h-7 object-contain"
            />
          </div>

          {/* Right Profile Icon */}
          <motion.img
            src={gavocabicon}
            alt="profile"
            className="rounded-full object-cover shadow-[0_0_6px_1px_rgba(255,0,0,0.6),0_0_8px_2px_rgba(0,255,0,0.6),0_0_10px_3px_rgba(0,0,255,0.6),0_0_12px_4px_rgba(255,0,255,0.6)]
            animate-[glow_3s_ease-in-out_infinite]
            h-[clamp(38px,6vw,64px)] w-[clamp(38px,6vw,64px)]"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
          />
        </div>

        {/* Scroll Levels */}
        <div className="relative w-full mt-6 sm:mt-10 pb-6 overflow-x-auto">
          <div className="flex justify-center gap-2 px-4 py-6 min-w-max bg-white/40 rounded-xl">
            {levels.map((lv) => (
              <AbyssLevelButton
                key={lv.id}
                {...lv}
                onClick={() => lv.unlocked && navigate(`/level/${lv.id}/intro`)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
