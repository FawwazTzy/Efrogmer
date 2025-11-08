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
        // 🟩 Gunakan posisi relatif terhadap layar dengan satuan viewport (vh/vw) atau persentase
        // agar elemen tetap proporsional di berbagai ukuran layar
        top: `${top}vh`, // ubah dari px → vh (tinggi layar)
        left: `${left}vw`, // ubah dari px → vw (lebar layar)

        // 🟩 Gunakan ukuran font yang fleksibel, misalnya clamp(min, prefer, max)
        // agar font menyesuaikan ukuran layar
        fontSize: `clamp(16px, 2vw, 24px)`,

        // 🟩 Gunakan background image yang responsif (sudah bagus dengan cover & center)
        backgroundImage: `url('https://i.pinimg.com/1200x/16/64/70/166470feb593d150b093edd0a411d3ef.jpg')`,
      }}
      draggable
      onDragStart={(e) => onDragStart(e, id)}
    >
      {/* 🟩 Gunakan Tailwind responsive classes untuk penyesuaian padding atau font */}
      {/* Contoh: text-sm di HP, text-lg di tablet, text-xl di PC */}
      <span className="text-sm sm:text-base md:text-lg lg:text-xl">
        {word}
      </span>
    </div>
  );
}

export default WordBubble;
