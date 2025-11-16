// FrogTarget.jsx
import React, { useEffect, useRef, useState } from "react";
import correctSfx from "../../assets/Sound/Correct.mp3";
import wrongSfx from "../../assets/Sound/Wrong.mp3";

function FrogTarget({ targetPos, onDrop, onDragOver }) {
  const correctRef = useRef(null);
  const wrongRef = useRef(null);

  const [icon, setIcon] = useState("🐸");
  const [animState, setAnimState] = useState("idle"); // idle | eat | wrong

  // Preload audio
  useEffect(() => {
    correctRef.current = new Audio(correctSfx);
    wrongRef.current = new Audio(wrongSfx);

    correctRef.current.volume = 0.6;
    wrongRef.current.volume = 0.6;
  }, []);

  const playSound = (type) => {
    const audio = type === "correct" ? correctRef.current : wrongRef.current;
    if (!audio) return;
    audio.currentTime = 0;
    audio.play().catch(() => {});
  };

  // Trigger reaction from Game.jsx (dispatch event)
  useEffect(() => {
    const handleFrogReaction = (e) => {
      const result = e.detail;
      if (result === "correct") triggerEat();
      else if (result === "wrong") triggerWrong();
    };

    window.addEventListener("frogReaction", handleFrogReaction);
    return () => window.removeEventListener("frogReaction", handleFrogReaction);
  }, []);

  const triggerEat = () => {
    setIcon("✅");
    setAnimState("eat");
    playSound("correct");
    setTimeout(() => {
      setIcon("🐸");
      setAnimState("idle");
    }, 700);
  };

  const triggerWrong = () => {
    setIcon("❌");
    setAnimState("wrong");
    playSound("wrong");
    setTimeout(() => {
      setIcon("🐸");
      setAnimState("idle");
    }, 700);
  };

  let animClass = "";
  if (animState === "eat") animClass = "animate-frogEat";
  else if (animState === "wrong") animClass = "animate-shake text-red-600";

  return (
    <div
      className="
        w-[90%] sm:w-64
        h-[90px] xs:h-[100px] sm:h-[100px]
        flex flex-col items-center justify-center
        p-1 xs:p-2 sm:p-4 
        rounded-full border-2 xs:border-3 sm:border-4 border-dashed border-green-500
        bg-green-200/90 backdrop-blur-sm
        shadow-inner transition-all duration-200
      "
      onDrop={onDrop}
      onDragOver={(e) => {
        e.preventDefault();
        if (onDragOver) onDragOver(e);
      }}
    >
      {/* Frog Icon */}
      <div
        className={`
          w-10 h-10 xs:w-12 xs:h-12 sm:w-16 sm:h-16 
          flex items-center justify-center text-white 
          text-xl xs:text-2xl sm:text-3xl font-extrabold shadow-xl 
          bg-green-600 rounded-full ${animClass}
        `}
      >
        {icon}
      </div>

      {/* Target Text */}
      <div className="mt-0.5 xs:mt-1 text-green-900 font-poppins text-[10px] xs:text-xs sm:text-lg uppercase text-center leading-tight">
        <p className="text-[8px] xs:text-[7px] text-gray-600 leading-none">Feed me:</p>
        {targetPos}
      </div>
    </div>
  );
}

export default FrogTarget;
