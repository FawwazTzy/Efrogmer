// src/modes/WarriorGrammar/components/WG_FrogTarget.jsx
import React, { useEffect, useRef, useState } from "react";
import correctSfx from "../../../assets/Sound/Correct.mp3";
import wrongSfx from "../../../assets/Sound/Wrong.mp3";

const WG_FrogTarget = ({ onDrop, onDragOver, label }) => {
  const targetRef = useRef(null);
  const correctRef = useRef(null);
  const wrongRef = useRef(null);

  const [animState, setAnimState] = useState("idle"); // "idle" | "eat" | "wrong"
  const [icon, setIcon] = useState("🐸");

  // 🧠 Preload audio agar tidak delay
  useEffect(() => {
    correctRef.current = new Audio(correctSfx);
    wrongRef.current = new Audio(wrongSfx);
    correctRef.current.volume = 0.6;
    wrongRef.current.volume = 0.6;
  }, []);

  const playSound = (type) => {
    const audio = type === "correct" ? correctRef.current : wrongRef.current;
    if (audio) {
      audio.currentTime = 0;
      audio.play().catch(() => {});
    }
  };

  // 🐸 Listen global frogReaction event (dipanggil dari GameTimeMode)
  useEffect(() => {
    const handleFrogReaction = (e) => {
      const result = e.detail;
      if (result === "correct") triggerEat();
      if (result === "wrong") triggerWrong();
    };
    window.addEventListener("frogReaction", handleFrogReaction);
    return () => window.removeEventListener("frogReaction", handleFrogReaction);
  }, []);

  const triggerEat = () => {
    setAnimState("eat");
    setIcon("😋");
    playSound("correct");
    setTimeout(() => {
      setAnimState("idle");
      setIcon("🐸");
    }, 700);
  };

  const triggerWrong = () => {
    setAnimState("wrong");
    setIcon("💢");
    playSound("wrong");
    setTimeout(() => {
      setAnimState("idle");
      setIcon("🐸");
    }, 700);
  };

  // 🎨 Tentukan animasi berdasarkan state
  let animClass = "";
  if (animState === "eat") animClass = "animate-frogEat";
  else if (animState === "wrong") animClass = "animate-shake text-red-600";

  // 📱 Support HP Drop (dari WordBubble TouchDrop event)
  useEffect(() => {
    const handleTouchDrop = (e) => {
      const { x, y, wordId } = e.detail;
      const frog = targetRef.current;
      if (!frog) return;

      const rect = frog.getBoundingClientRect();
      const inside =
        x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom;

      if (inside && onDrop) {
        onDrop({ preventDefault: () => {}, dataTransfer: { getData: () => wordId } });
      }
    };

    window.addEventListener("frogTouchDrop", handleTouchDrop);
    return () => window.removeEventListener("frogTouchDrop", handleTouchDrop);
  }, [onDrop]);

  return (
    <div
      ref={targetRef}
      id="frog-target"
      onDrop={onDrop}
      onDragOver={(e) => {
        e.preventDefault();
        onDragOver && onDragOver(e);
      }}
      className="
        relative z-20
        w-full max-w-[180px] md:max-w-[240px]
        mx-auto mt-1
        rounded-md p-1 md:p-2 flex flex-col items-center justify-center
        bg-gradient-to-t from-yellow-200 to-emerald-400 shadow-inner
        transition-all duration-300
      "
      style={{ minHeight: 65 }}
    >
      {/* 🐸 Icon Kodok */}
      <div
        className={`text-2xl sm:text-3xl md:text-4xl transition-transform duration-200 ${animClass}`}
      >
        {icon}
      </div>

      {/* Label */}
      <div className="mt-1 text-[9px] md:text-[11px] font-bold text-slate-900 text-center">
        Feed me: <span className="capitalize">{label}</span>
      </div>

      <div className="text-[7px] md:text-[9px] text-slate-700 text-center">
        Drag words here
      </div>
    </div>
  );
};

export default WG_FrogTarget;
