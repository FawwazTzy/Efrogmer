// src/modes/WarriorGrammar/GameTimeMode.jsx
import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

import WG_HUD from "./components2/WG_HUD";
import WG_WordBubble from "./components2/WG_WordBubble";
import WG_WinModal from "./components2/WG_WinModal";
import WG_Words from "./Data2/WG_Words";
import WG_Notification from "./components2/WG_Notification";
import WG_SidePanel from "./components2/WG_SidePanel";

const POS_LIST = ["adjective", "adverb", "noun", "verb", "proper noun", "pronoun"];

// 🧩 Posisi acak disesuaikan layar
const applyPositions = (words) => {
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;
  const isMobile = screenWidth < 700;
  const isLaptop = screenWidth >= 768 && screenWidth < 1440;
  const scaleX = isMobile ? 0.6 : isLaptop ? 0.9 : 1;
  const scaleY = isMobile ? 0.6 : isLaptop ? 0.9 : 1;
  const offsetX = isMobile ? -15 : isLaptop ? -5 : 0;
  const offsetY = isMobile ? -10 : 0;

  return words.map((w) => {
    let left = w.left ?? Math.floor(6 + Math.random() * 88);
    let top = w.top ?? Math.floor(6 + Math.random() * 70);

    left = left * scaleX + offsetX;
    top = top * scaleY + offsetY;

    // jaga jangan keluar layar
    left = Math.max(10, Math.min(left, screenWidth - 60));
    top = Math.max(10, Math.min(top, screenHeight - 60));

    return { ...w, style: { left: `${left}px`, top: `${top}px` } };
  });
};

// ⭐ Hitung bintang
const calcStars = (score, targetScore) => {
  const ratio = score / targetScore;
  if (ratio >= 1) return 3;
  if (ratio >= 0.66) return 2;
  if (ratio >= 0.33) return 1;
  return 0;
};

const GameTimeMode = () => {
  const navigate = useNavigate();
  const timeLimit = 600;
  const targetScore = 60;
  const initialLives = 5;
  const correctChangeThreshold = 3;

  const [timeLeft, setTimeLeft] = useState(timeLimit);
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(initialLives);
  const [words, setWords] = useState(applyPositions(WG_Words));
  const [targetPos, setTargetPos] = useState("adjective");
  const [correctSinceChange, setCorrectSinceChange] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [stars, setStars] = useState(0);
  const [showNotif, setShowNotif] = useState(false);
  const [notifFromRight, setNotifFromRight] = useState(true);

  const timerRef = useRef(null);

  // 🕒 Timer jalan terus
  useEffect(() => {
    timerRef.current = setInterval(() => setTimeLeft((t) => t - 1), 1000);
    return () => clearInterval(timerRef.current);
  }, []);

  // 🏁 Selesai
  useEffect(() => {
    if (timeLeft <= 0 || lives <= 0 || score >= targetScore) {
      clearInterval(timerRef.current);
      const earned = calcStars(score, targetScore);
      setStars(earned);
      setShowModal(true);
    }
  }, [timeLeft, lives, score]);

  // 🎯 Target baru
  const pickNextTarget = () => {
    const candidates = POS_LIST.filter((p) => p !== targetPos);
    return candidates[Math.floor(Math.random() * candidates.length)];
  };

  // 🐸 DROP HANDLER
  const handleDrop = (e) => {
    e.preventDefault();
    if (timeLeft <= 0 || lives <= 0) return;

    const id = parseInt(e.dataTransfer.getData("text/plain"));
    const dropped = words.find((w) => w.id === id);
    if (!dropped) return;

    // hapus kata dari area
    setWords((prev) => prev.filter((w) => w.id !== id));

    // cek benar/salah
    if (dropped.pos === targetPos) {
      setScore((s) => s + 1);
      window.dispatchEvent(new CustomEvent("frogReaction", { detail: "correct" })); // ✅ animasi makan
      setCorrectSinceChange((c) => {
        const now = c + 1;
        if (now >= correctChangeThreshold) {
          const nextTarget = pickNextTarget();
          setTargetPos(nextTarget);
          setNotifFromRight((prev) => !prev);
          setShowNotif(true);
          setTimeout(() => setShowNotif(false), 2000);
          return 0;
        }
        return now;
      });
    } else {
      setLives((l) => Math.max(0, l - 1));
      window.dispatchEvent(new CustomEvent("frogReaction", { detail: "wrong" })); // ❌ animasi salah
    }
  };

  const handleDragOver = (e) => e.preventDefault();

  // 🔄 Restart
  const handleCloseModal = () => {
    setTimeLeft(timeLimit);
    setScore(0);
    setLives(initialLives);
    setWords(applyPositions(WG_Words));
    setTargetPos("adjective");
    setCorrectSinceChange(0);
    setShowModal(false);
    setStars(0);
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => setTimeLeft((t) => t - 1), 1000);
  };

  // 📱 Orientasi (kalau portrait, tampil overlay)
  const [isPortrait, setIsPortrait] = useState(false);
  useEffect(() => {
    const checkOrientation = () => setIsPortrait(window.innerHeight > window.innerWidth);
    checkOrientation();
    window.addEventListener("resize", checkOrientation);
    return () => window.removeEventListener("resize", checkOrientation);
  }, []);

  return (
    <div className="h-screen w-screen bg-emerald-900 text-white p-2 sm:p-4 overflow-hidden relative">
      {/* 🔒 Overlay jika portrait */}
      {isPortrait && (
        <div className="absolute inset-0 z-50 bg-emerald-950/90 flex flex-col items-center justify-center text-center p-6">
          <h2 className="text-lg sm:text-2xl font-bold mb-2 sm:mb-4">Please Rotate Your Device!</h2>
          <p className="text-sm sm:text-lg">This game works best in landscape mode.</p>
        </div>
      )}

      <WG_HUD
        timeLeft={Math.max(0, timeLeft)}
        score={score}
        targetScore={targetScore}
        lives={lives}
        targetPos={targetPos}
      />

      <div className="flex flex-col sm:flex-row gap-3 mx-auto h-[80vh] w-full max-w-[1500px]">
        {/* 🎮 AREA GAME */}
        <div className="w-full sm:w-[200%] relative bg-[url('https://i.pinimg.com/1200x/bf/11/1b/bf111b1a08f048d323a218467dbf7aeb.jpg')] bg-cover bg-center bg-no-repeat rounded-lg overflow-hidden p-2 sm:p-4">
          {words.map((w) => (
            <WG_WordBubble
              key={w.id}
              wordData={w}
              onDragStart={(e) => e.dataTransfer.setData("text/plain", w.id)}
              style={{
                position: "absolute",
                ...w.style,
                transform: "translate(-50%, -50%)",
                zIndex: 20,
              }}
            />
          ))}
        </div>

        {/* 🐸 PANEL SAMPING */}
        <div className="w-full sm:w-[15%] mt-2 sm:mt-0 h-auto">
          <WG_SidePanel
            targetPos={targetPos}
            correctSinceChange={correctSinceChange}
            correctChangeThreshold={correctChangeThreshold}
            wordsLeft={words.length}
            targetScore={targetScore}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onRestart={handleCloseModal}
            onBack={() => navigate(-1)}
          />
        </div>
      </div>

      {/* 🔔 Notifikasi Target Baru */}
      <WG_Notification
        show={showNotif}
        fromRight={notifFromRight}
        text={`New Target: ${targetPos.toUpperCase()}!`}
      />

      {/* 🏆 Modal Win */}
      <WG_WinModal
        open={showModal}
        onClose={handleCloseModal}
        score={score}
        targetScore={targetScore}
        timeLeft={Math.max(0, timeLeft)}
        stars={stars}
      />
    </div>
  );
};

export default GameTimeMode;
