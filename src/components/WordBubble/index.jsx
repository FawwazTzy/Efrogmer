// WordBubble.jsx
import React from "react";

function WordBubble({ wordData, onDragStart, isDragging }) {
  const { id, word, top, left } = wordData;

  return (
    <div
      className={`
        absolute px-2 py-1 rounded-lg text-black font-poppins cursor-pointer
        select-none shadow-md transition-all duration-100 ease-in-out bg-cover bg-center
        ${isDragging 
          ? "opacity-50 scale-125 border-2 border-yellow-300 z-20" 
          : "hover:scale-105"
        }
      `}
      style={{
        top: `${top}px`,
        left: `${left}px`,
        fontSize: `clamp(12px, 2.5vw, 22px)`,
        backgroundImage: `url('https://i.pinimg.com/1200x/16/64/70/166470feb593d150b093edd0a411d3ef.jpg')`,
      }}
      draggable
      onDragStart={(e) => onDragStart(e, id)}
    >
      {word}
    </div>
  );
}

export default WordBubble;
