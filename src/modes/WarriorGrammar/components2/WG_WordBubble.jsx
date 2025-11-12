// src/modes/WarriorGrammar/components2/WG_WordBubble.jsx
import React, { useRef } from "react";

const WG_WordBubble = ({ wordData, style = {}, onDragStart, isDragging }) => {
  const bubbleRef = useRef(null);
  const touchData = useRef({ startX: 0, startY: 0 });

  // 🟢 Touch events for mobile
  const handleTouchStart = (e) => {
    const touch = e.touches[0];
    touchData.current = {
      startX: touch.clientX,
      startY: touch.clientY,
    };
    bubbleRef.current.dataset.dragging = "true";
    bubbleRef.current.style.zIndex = 50; // biar muncul di atas pas di-drag

    if (onDragStart) onDragStart(e, wordData.id);
  };

  const handleTouchMove = (e) => {
    if (!bubbleRef.current.dataset.dragging) return;
    const touch = e.touches[0];
    const bubble = bubbleRef.current;

    // 🧩 biar posisi bubble ngikut jari dengan halus
    bubble.style.left = `${touch.clientX - 25}px`;
    bubble.style.top = `${touch.clientY - 25}px`;
  };

  const handleTouchEnd = (e) => {
    bubbleRef.current.dataset.dragging = "";
    bubbleRef.current.style.zIndex = 20; // balikin z-index biar normal lagi

    const touch = e.changedTouches[0];
    const dropTarget = document.elementFromPoint(touch.clientX, touch.clientY);

    // 🎯 kalau dilepas di atas WG_FrogTarget → trigger drop
    if (dropTarget && dropTarget.id === "frog-target") {
      const fakeEvent = {
        preventDefault: () => {},
        dataTransfer: {
          getData: () => String(wordData.id),
        },
      };
      dropTarget.dispatchEvent(new CustomEvent("manualDrop", { detail: fakeEvent }));
    }
  };

  return (
    <div
      ref={bubbleRef}
      draggable
      onDragStart={(e) => {
        e.dataTransfer.setData("text/plain", String(wordData.id));
        if (onDragStart) onDragStart(e, wordData.id);
      }}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      className={`absolute select-none
        px-2 py-1 sm:px-3 sm:py-1.5 md:px-2 md:py-3
        rounded-full font-poppins
        text-[9px] sm:text-xs md:text-[15px]
        cursor-grab transition-all duration-200 ease-in-out
        shadow-[0_1px_4px_rgba(0,0,0,0.2)]
        ${isDragging ? "opacity-60 scale-90 cursor-grabbing" : "opacity-100 hover:scale-105"}
        bg-[url('https://i.pinimg.com/1200x/16/64/70/166470feb593d150b093edd0a411d3ef.jpg')]
        bg-no-repeat bg-center bg-cover text-slate-900
        z-30
      `}
      style={{
        userSelect: "none",
        transform: isDragging ? "rotate(-5deg)" : "rotate(0deg)",
        backgroundSize: window.innerWidth < 640 ? "50%" : "100%",
        ...style,
      }}
    >
      {wordData.word}
    </div>
  );
};

export default WG_WordBubble;
