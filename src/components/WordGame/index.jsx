import React, { useState, useEffect, useRef } from "react";
import WordBubble from "../WordBubble";

const WordGame = () => {
  const words = ["apple", "banana", "grape", "orange", "melon"];

  const [wordData, setWordData] = useState([]);
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;

    const generated = words.map((word, index) => ({
      id: index,
      word,
      top: Math.floor(Math.random() * (containerHeight - 60)), // 60 = tinggi bubble kira²
      left: Math.floor(Math.random() * (containerWidth - 90)), // 90 = lebar bubble kira²
    }));

    setWordData(generated);
  }, []);

  const handleDragStart = (e, id) => {
    console.log("Drag start:", id);
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[350px] xs:h-[380px] sm:h-[420px] md:h-[450px] bg-blue-100 overflow-hidden rounded-lg"
    >
      {wordData.map((data) => (
        <WordBubble
          key={data.id}
          wordData={data}
          onDragStart={handleDragStart}
          isDragging={false}
        />
      ))}
    </div>
  );
};

export default WordGame;
