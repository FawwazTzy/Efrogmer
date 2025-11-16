import React from "react";
import Rightside from "./Rightside";
import Leftside from "./Leftside";

const MainPage = () => {
  return (
    <div className="flex w-screen min-h-screen overflow-hidden">
      {/* Kiri: Tombol & Judul */}
      <div className="w-full md:w-[500px] h-full">
        <Leftside />
      </div>

      {/* Kanan: Background otomatis berubah (❌ hidden di HP, ✅ muncul di md ke atas) */}
      <div className="hidden md:flex flex-1 h-full">
        <Rightside />
      </div>
    </div>
  );
};

export default MainPage;
