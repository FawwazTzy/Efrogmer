// Setting.jsx
import React from "react";

const Setting = ({ isMusicOn, setIsMusicOn, volume, setVolume }) => {
  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Settings</h1>

      {/* Toggle backsound */}
      <label className="flex items-center gap-2 mb-4">
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
