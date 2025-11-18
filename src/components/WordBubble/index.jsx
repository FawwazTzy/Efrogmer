// WordBubble.jsx
import React, { useState } from "react";

export default function WordBubble({ wordData, onDragStart, isDragging }) {
  const { id, word, top, left } = wordData;
  const [dragPos, setDragPos] = useState({ x: 0, y: 0 });
  const [touching, setTouching] = useState(false);

  const handleDragStart = (e) => {
    e.dataTransfer.setData("text/plain", id);
    onDragStart && onDragStart(e, id);
  };

  // === TOUCH START ===
  const handleTouchStart = (e) => {
    const touch = e.touches[0];
    setTouching(true);
    setDragPos({ x: 0, y: 0 }); // reset offset
    onDragStart && onDragStart(e, id);
  };

  // === TOUCH MOVE FOLLOW FINGER ===
  const handleTouchMove = (e) => {
    if (!touching) return;
    const touch = e.touches[0];

    // Hitung offset agar elemen tetap di tengah jari
    const bubble = e.target.closest(".word-bubble");
    if (!bubble) return;

    const rect = bubble.getBoundingClientRect();
    const offsetX = touch.clientX - (rect.left + rect.width / 2);
    const offsetY = touch.clientY - (rect.top + rect.height / 2);

    setDragPos({ x: offsetX, y: offsetY });
  };

  // === TOUCH END (DROP) ===
  const handleTouchEnd = (e) => {
    setTouching(false);
    const touch = e.changedTouches[0];

    // kirim koordinat drop
    window.dispatchEvent(
      new CustomEvent("frogTouchDrop", {
        detail: {
          wordId: id,
          x: touch.clientX,
          y: touch.clientY
        }
      })
    );

    // reset posisi visual
    setDragPos({ x: 0, y: 0 });
  };

  return (
    <div
      className={`
        word-bubble absolute rounded-md text-black font-poppins cursor-pointer select-none
        shadow-md transition-all duration-75 ease-in-out bg-cover bg-center
        px-2 py-[3px]
        min-w-[65px] max-w-[150px] text-center
        ${isDragging ? "opacity-50 scale-110 border-2 border-yellow-300 z-20" : "hover:scale-105"}
      `}
      style={{
        top: `${top}px`,
        left: `${left}px`,
        fontSize: `clamp(11px, 2vw, 18px)`,
        backgroundImage: `url('https://i.pinimg.com/1200x/16/64/70/166470feb593d150b093edd0a411d3ef.jpg')`,
        transform: `translate(${dragPos.x}px, ${dragPos.y}px)`,
        touchAction: "none"
      }}
      draggable
      onDragStart={handleDragStart}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {word}
    </div>
  );
}
