// FrogTarget.jsx
import React, { useEffect, useRef, useState } from "react";
import correctSfx from "../../assets/Sound/Correct.mp3";
import wrongSfx from "../../assets/Sound/Wrong.mp3";

function FrogTarget({ targetPos, onDrop }) {
  const frogRef = useRef(null);
  const correctRef = useRef(null);
  const wrongRef = useRef(null);

  const [icon, setIcon] = useState("🐸");
  const [animState, setAnimState] = useState("idle"); // idle | eat | wrong

  // preload sound
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

  // global frog reaction from Game.jsx
  useEffect(() => {
    const handleReaction = (e) => {
      if (e.detail === "correct") triggerEat();
      if (e.detail === "wrong") triggerWrong();
    };

    window.addEventListener("frogReaction", handleReaction);
    return () => window.removeEventListener("frogReaction", handleReaction);
  }, []);

  // ========== NEW: HANDLE TOUCH DROP ==========
  useEffect(() => {
    const handleTouchDrop = (e) => {
      const { x, y, wordId } = e.detail || {};
      if (!frogRef.current || !wordId) return;

      const elemAtPoint = document.elementFromPoint(x, y);
      if (!elemAtPoint) return;

      const isInside = elemAtPoint.closest("#frog-dropzone");
      if (isInside) {
        onDrop?.(wordId); // notify Game.jsx
      }
    };

    window.addEventListener("frogTouchDrop", handleTouchDrop);
    return () => window.removeEventListener("frogTouchDrop", handleTouchDrop);
  }, [onDrop]);

  // animations
  const triggerEat = () => {
    setIcon("😋");
    setAnimState("eat");
    playSound("correct");
    setTimeout(() => {
      setIcon("🐸");
      setAnimState("idle");
    }, 600);
  };

  const triggerWrong = () => {
    setIcon("💢");
    setAnimState("wrong");
    playSound("wrong");
    setTimeout(() => {
      setIcon("🐸");
      setAnimState("idle");
    }, 600);
  };

  let animClass = "";
  if (animState === "eat") animClass = "animate-frogEat";
  if (animState === "wrong") animClass = "animate-shake text-red-600";

  return (
    <div
      id="frog-dropzone"
      ref={frogRef}
      className="
        w-[90%] sm:w-64
        h-[90px] xs:h-[100px] sm:h-[100px]
        flex flex-col items-center justify-center
        p-2 sm:p-4 rounded-full border-4 border-dashed border-green-500
        bg-green-200/90 backdrop-blur-sm shadow-inner
      "
    >
      <div
        className={`w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center
          text-xl sm:text-3xl font-extrabold shadow-xl
          bg-green-600 rounded-full transition-all duration-200 ${animClass}
        `}
      >
        {icon}
      </div>

      <div className="mt-1 text-green-900 font-poppins text-[10px] xs:text-xs sm:text-lg uppercase text-center leading-tight">
        <p className="text-[8px] xs:text-[10px] text-gray-600 leading-none">Feed me:</p>
        {targetPos}
      </div>
    </div>
  );
}

export default FrogTarget;
