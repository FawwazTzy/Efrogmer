// src/modes/WarriorGrammar/components/WG_FrogTarget.jsx
import React, { useEffect, useRef } from "react";

/**
 * Props:
 * - onDrop: function(e) → called when a word is dropped (PC & mobile)
 * - onDragOver: function(e) optional
 * - label: string (e.g., "Adjective")
 */
const WG_FrogTarget = ({ onDrop, onDragOver, label }) => {
  const targetRef = useRef(null);

  // 🟢 Listener tambahan biar bisa tangkap event drop dari sentuhan (mobile)
  useEffect(() => {
    const target = targetRef.current;
    if (!target) return;

    const handleManualDrop = (e) => {
      // e.detail berisi fakeEvent dari WG_WordBubble
      if (onDrop) onDrop(e.detail);
    };

    target.addEventListener("manualDrop", handleManualDrop);
    return () => target.removeEventListener("manualDrop", handleManualDrop);
  }, [onDrop]);

  return (
    <div
      id="frog-target"
      ref={targetRef}
      onDrop={onDrop}
      onDragOver={(e) => {
        e.preventDefault();
        if (onDragOver) onDragOver(e);
      }}
      className="
        w-full max-w-[180px] sm:max-w-[180px] md:max-w-[280px] mx-auto mt-1
        rounded-md p-1 sm:p-1 md:p-2 flex flex-col items-center justify-center
        bg-gradient-to-t from-yellow-200 to-emerald-400 shadow-inner
        transition-all duration-300
      "
      style={{
        minHeight: 60, // biar tetep bisa di-drop di HP
      }}
    >
      {/* 🐸 Frog icon */}
      <div className="text-2xl sm:text-3xl md:text-4xl">🐸</div>

      {/* 🏷 Label */}
      <div className="mt-0.5 text-[9px] sm:text-[9px] md:text-[11px] font-bold text-slate-900 text-center">
        Feed me: <span className="capitalize">{label}</span>
      </div>

      {/* 📥 Instruction */}
      <div className="mt-0.25 text-[7px] sm:text-[7px] md:text-[9px] text-slate-700 text-center">
        Drag words here
      </div>
    </div>
  );
};

export default WG_FrogTarget;
