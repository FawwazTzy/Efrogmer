// WordBubble.jsx
import React from "react";

export default function WordBubble({ wordData, onDragStart, isDragging }) {
  const { id, word, top, left } = wordData;

  const handleDragStart = (e) => {
    e.dataTransfer.setData("text/plain", id);
    if (onDragStart) onDragStart(e, id);
  };

  const handleTouchStart = (e) => {
    if (onDragStart) onDragStart(e, id);
  };

  return (
    <div
      className={`
        absolute rounded-md text-black font-poppins cursor-pointer select-none
        shadow-md transition-all duration-100 ease-in-out bg-cover bg-center
        px-2 py-[3px]
        min-w-[65px] max-w-[150px]
        text-center
        ${isDragging ? "opacity-50 scale-110 border-2 border-yellow-300 z-20" : "hover:scale-105"}
      `}
      style={{
        top: `${top}px`,
        left: `${left}px`,
        fontSize: `clamp(11px, 2vw, 18px)`,
        backgroundImage: `url('https://i.pinimg.com/1200x/16/64/70/166470feb593d150b093edd0a411d3ef.jpg')`,
      }}
      draggable
      onDragStart={handleDragStart}
      onTouchStart={handleTouchStart}
    >
      {word}
    </div>
  );
}
