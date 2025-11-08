import React from "react";

/**
 * Props:
 * - wordData: { id, word, pos }
 * - style: { top, left } optional
 * - onDragStart: function(e, id)
 * - isDragging: boolean
 */
const WG_WordBubble = ({ wordData, style = {}, onDragStart, isDragging }) => {
  return (
    <div
      draggable
      onDragStart={(e) => {
        e.dataTransfer.setData("text/plain", String(wordData.id));
        if (onDragStart) onDragStart(e, wordData.id);
      }}
      className={`
        absolute select-none
        px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2
        rounded-full font-poppins
        text-[9px] sm:text-xs md:text-sm
        cursor-grab transition-all duration-200 ease-in-out
        shadow-[0_1px_4px_rgba(0,0,0,0.2)]
        ${isDragging ? "opacity-60 scale-90 cursor-grabbing" : "opacity-100 hover:scale-105"}
        bg-[url('https://i.pinimg.com/1200x/16/64/70/166470feb593d150b093edd0a411d3ef.jpg')]
        bg-no-repeat bg-center bg-cover text-slate-900
      `}
      style={{
        userSelect: "none",
        transform: isDragging ? "rotate(-5deg)" : "rotate(0deg)",
        backgroundSize: window.innerWidth < 640 ? "80%" : "100%", // 🟢 HP lebih kecil
        ...style,
      }}
    >
      {wordData.word}
    </div>
  );
};

export default WG_WordBubble;
