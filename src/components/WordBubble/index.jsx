import React from 'react';

function WordBubble({ wordData, onDragStart, isDragging }) {
  const { id, word, top, left } = wordData;

  return (
    <div
      className={`
        absolute p-2 rounded-lg text-black font-poppins cursor-pointer 
        shadow-lg transition-all duration-100 ease-in-out bg-cover bg-center
        ${isDragging ? 'opacity-50 scale-150 border-2 border-yellow-300 z-10' : 'hover:scale-105'}
      `}
      style={{ 
        top: `${top}px`,   // ← kembali gunakan px
        left: `${left}px`, // ← kembali gunakan px
        fontSize: `clamp(16px, 2vw, 24px)`,
        backgroundImage: `url('https://i.pinimg.com/1200x/16/64/70/166470feb593d150b093edd0a411d3ef.jpg')`,
      }}
      draggable
      onDragStart={(e) => onDragStart(e, id)}
    >
      <span className="text-sm sm:text-base md:text-lg lg:text-xl">
        {word}
      </span>
    </div>
  );
}

export default WordBubble;
