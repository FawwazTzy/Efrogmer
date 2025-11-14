import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Eg1 from "../../Fawwaz.Allrightreserved/English1.png"
import Eg2 from "../../Fawwaz.Allrightreserved/English2.png";
import Eg3 from "../../Fawwaz.Allrightreserved/English3.png";
import Gavocab from "../../../../public/Gavocab.png";
import Comment from "../components2/Comment";

const Preparation = () => {
  const [currentBg, setCurrentBg] = useState(0);
  const navigate = useNavigate();

  const backgrounds = [Eg1, Eg2, Eg3];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgrounds.length);
    }, 3000); // ganti tiap 3 detik
    return () => clearInterval(interval);
  }, []);

  const scrollTo = (id) => (e) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* ================= HEADER ================= */}
      <header className="bg-emerald-400 text-white shadow-md fixed w-full z-50">
        <div className="container mx-auto flex justify-between items-center p-3">
          <img
            src={Gavocab}
            alt="Attack on Titan Logo"
            className="h-6"
          />

          <nav>
            <ul className="flex space-x-2 right-0">
              <li>
                <a
                  href="#hero"
                  onClick={scrollTo("hero")}
                  className="hover:text-gray-400 px-4 py-3"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#gridsection"
                  onClick={scrollTo("gridsection")}
                  className="hover:text-gray-400 px-4 py-3"
                >
                  Characters
                </a>
              </li>
              <li>
                <a
                  href="#footer"
                  onClick={scrollTo("footer")}
                  className="hover:text-gray-400 px-4 py-3"
                >
                  About
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* ================= HERO SECTION ================= */}
      <div
        id="hero"
        className="w-full min-h-screen flex flex-col items-center justify-center text-gray-800 text-3xl font-bold transition-all duration-1000 px-6 pt-24"
        style={{
          backgroundImage: `url(${backgrounds[currentBg]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transition: "background-image 1s ease-in-out",
        }}
      >
        <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-lg p-8 max-w-xl flex flex-col items-center text-center">
         <img
            src={Gavocab}
            alt="Attack on Titan Logo"
            className="h-[300px] mt-12 text-center items-center bg-center"
          />
          {/* Judul */}
          <h1 className="text-4xl md:text-5xl font-norwester mt-6 mb-6 text-blue-950">
            Efrogmer
          </h1>

          {/* Deskripsi utama */}
          <p className="text-sm font-poppins mb-8">
            You are given a random assortment of 16 letters in a 4×4 grid and
            are set a time limit of three minutes. In that time, you must spell
            as many words as possible. The words must be between 3 and 7 letters
            long, and you can’t use the same letter twice in a single word.
          </p>

          {/* Tombol mulai */}
      {/* ////////////// */}
        </div>
      </div>

      {/* ================= CONTENT SECTIONS ================= */}
      <div className="min-h-screen bg-gray-200 flex flex-col px-12 py-4 text-gray-800">
        {/* Preparation */}
        <section className="max-w-3xl mt-12 space-y-10">
          <div>
            <h2 className="text-2xl font-bold mb-2 text-blue-700">
              Preparation
            </h2>
            <p>
              Make sure you have a quiet environment and a timer. You will need
              paper and a pen to write down your words. When ready, click the
              “Start Game” button to begin the countdown.
            </p>
          </div>

          {/* How to play */}
          <div>
            <h2 className="text-2xl font-bold mb-2 text-blue-700">
              How to play
            </h2>
            <p className="mt-0.5 leading-tight">
              Feed the frog only words that match the target part of speech.
              Every 3 correct feeds will change the target automatically.
              Reach 45 points to win early, or survive until time runs out.
            </p>
          </div>

          {/* Game tips */}
          <div>
            <h2 className="text-2xl font-bold mb-2 text-blue-700">Game tips</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Start with short words to get momentum.</li>
              <li>Look for prefixes and suffixes to extend words.</li>
              <li>Focus on high-frequency letters for easier combinations.</li>
            </ul>
          </div>

           <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/grammarpage")}
              className="bg-red-600 text-white font-semibold rounded-lg px-8 py-3 shadow-md hover:bg-red-900 transition-all duration-150 text-lg"
            >
            Play Now!
          </motion.button>
        </section>
      </div>
      <Comment/>
    </div>
  );
};

export default Preparation;
