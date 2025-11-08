import React from 'react';

function FrogTarget({ targetPos, onDrop, onDragOver }) {
    return (
        <div
            className="w-64 h-40 flex flex-col items-center justify-center p-4 rounded-full border-4 border-dashed border-green-500 bg-green-200"
            onDrop={onDrop}
            onDragOver={onDragOver}
        >
            {/* Visual Kodok (Placeholder) */}
            <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center text-white text-3xl font-extrabold shadow-xl">
                🐸
            </div>
            
            {/* Teks Target */}
            <div className="mt-2 text-2xl font-bold text-green-800 uppercase">
                {targetPos}
            </div>
            
            {/* Instruksi */}
            <div className="text-xs text-gray-600 mt-1">
                (Drop Word Here)
            </div>
        </div>
    );
}

export default FrogTarget;