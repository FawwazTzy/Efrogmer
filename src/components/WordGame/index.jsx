import React, { useState, useEffect } from "react";
import WordBubble from "../WordBubble";

const WordGame = () => {
  const words = ["apple", "banana", "grape", "orange", "melon"];

  const [wordData, setWordData] = useState([]);

  useEffect(() => {
    const generated = words.map((word, index) => ({
      id: index,
      word,
      top: Math.floor(Math.random() * 400),
      left: Math.floor(Math.random() * 600),
    }));
    setWordData(generated);
  }, []);

  const handleDragStart = (e, id) => {
    console.log("Drag start:", id);
  };

  return (
    <div className="relative w-full h-[500px] bg-blue-100 overflow-hidden">
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
