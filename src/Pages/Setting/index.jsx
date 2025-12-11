import React from "react";
import UserPanel from "../../components/Userpanel"; // 🔥 tambahkan ini

const Setting = ({ isMusicOn, setIsMusicOn, volume, setVolume }) => {
  return (
    <div className="bg-[url('https://cdn.pixabay.com/photo/2014/04/03/11/57/lotus-312694_1280.png')] bg-cover bg-no-repeat bg-center h-screen p-6 text-white">

      <h1 className="text-xl font-bold mb-4">Settings</h1>

      {/* 🔥 Panel User */}
      <UserPanel />

      {/* Toggle backsound */}
      <label className="flex items-center gap-2 mb-4 mt-6">
        <input
          type="checkbox"
          checked={isMusicOn}
          onChange={() => {
            setIsMusicOn(!isMusicOn);
            localStorage.setItem("musicEnabled", JSON.stringify(!isMusicOn));
          }}
        />
        <span>Enable Backsound</span>
      </label>

      {/* Volume slider */}
      {isMusicOn && (
        <div className="mt-3">
          <label className="block mb-2 font-medium">Volume</label>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={(e) => {
              setVolume(Number(e.target.value));
              localStorage.setItem("musicVolume", e.target.value);
            }}
            className="w-full"
          />
        </div>
      )}
    </div>
  );
};

export default Setting;
