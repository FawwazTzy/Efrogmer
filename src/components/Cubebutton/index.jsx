import React from "react";

const CubeButton = ({ text = "Hover Me" }) => {
  return (
    <button
      type="button"
      className="relative inline-block font-mono font-bold text-[17px] text-[#d4af37] tracking-[0.1em] cursor-pointer outline-none border-0 group"
    >
      {/* Background top */}
      <div className="absolute bottom-full left-[5px] right-[-5px] h-[10px] bg-[#d4af37] skew-x-[-45deg] transition-all duration-400 group-hover:bg-[#28282d]" />

      {/* Background right */}
      <div className="absolute top-[-5px] bottom-[5px] left-full w-[10px] bg-[#d4af37] skew-y-[-45deg] transition-all duration-400 group-hover:bg-[#28282d]" />

      {/* Background main */}
      <div className="absolute inset-0 bg-[#d4af37] transition-all duration-400 group-hover:bg-[#28282d]" />

      {/* Inner cube */}
      <div className="absolute inset-[2px] bg-[#28282d] transition-all duration-400 group-hover:bg-[#d4af37]" />

      {/* Text */}
      <span className="relative z-10 transition-all duration-400 group-hover:text-[#28282d]">
        {text}
      </span>
    </button>
  );
};

export default CubeButton;
