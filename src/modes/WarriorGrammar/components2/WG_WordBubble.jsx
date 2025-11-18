// src/modes/WarriorGrammar/components2/WG_WordBubble.jsx
import React, { useRef, useEffect } from "react";

const WG_WordBubble = ({ wordData, style = {}, onDragStart, isDragging }) => {
  const bubbleRef = useRef(null);
  const isTouchDragging = useRef(false);

  // ❗ Biar touchmove tidak dianggap scroll
  useEffect(() => {
    const elem = bubbleRef.current;
    if (!elem) return;

    const prevent = (e) => e.preventDefault();
    elem.addEventListener("touchmove", prevent, { passive: false });

    return () => elem.removeEventListener("touchmove", prevent);
  }, []);

  const handleTouchStart = (e) => {
    const touch = e.touches[0];
    isTouchDragging.current = true;

    const bubble = bubbleRef.current;
    bubble.style.zIndex = 80;
    bubble.style.position = "fixed"; // penting agar gerakan akurat
    bubble.style.left = `${touch.clientX - 25}px`;
    bubble.style.top = `${touch.clientY - 25}px`;

    if (onDragStart) onDragStart(e, wordData.id);
  };

  const handleTouchMove = (e) => {
    if (!isTouchDragging.current) return;
    const touch = e.touches[0];
    const bubble = bubbleRef.current;

    e.preventDefault(); // blok scroll browser
    bubble.style.left = `${touch.clientX - 25}px`;
    bubble.style.top = `${touch.clientY - 25}px`;
  };

  const handleTouchEnd = (e) => {
    if (!isTouchDragging.current) return;
    isTouchDragging.current = false;

    const bubble = bubbleRef.current;
    bubble.style.zIndex = 30;
    bubble.style.position = "absolute";

    const touch = e.changedTouches[0];
    const dropEl = document.elementFromPoint(touch.clientX, touch.clientY);

    const frogTarget = dropEl?.id === "frog-target"
      ? dropEl
      : dropEl?.closest?.("#frog-target");

    if (frogTarget) {
      frogTarget.dispatchEvent(
        new CustomEvent("manualDrop", {
          detail: { wordId: wordData.id }
        })
      );
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
