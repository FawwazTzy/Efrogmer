import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Eg1 from "../../Fawwaz.Allrightreserved/English1.png"
import Eg2 from "../../Fawwaz.Allrightreserved/English2.png";
import Eg3 from "../../Fawwaz.Allrightreserved/English3.png";
import Gavocab from "../../../../public/Efrogmer1.jpeg";
import Leaderboard3 from "../../../advance/WarriorGrammar3/components3/Leaderboard3";
import Footer3 from "../../../advance/WarriorGrammar3/components3/Footer3";

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

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* ================= HEADER ================= */}
      <header className="bg-emerald-400 text-white shadow-md fixed w-full z-50">
  <div className="container mx-auto flex justify-between items-center p-3">
    <img
      src={Gavocab}
      alt="Efrogmer Logo"
      className="h-6"
    />

    <h1 className="text-xl text-emerald-900 md:text-2xl font-norwester tracking-wide">
      EFROGMER
    </h1>
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
        <div className="bg-white/40 backdrop-blur-md rounded-2xl shadow-lg p-8 max-w-xl flex flex-col items-center text-center">
         <img
            src={Gavocab}
            alt="Attack on Titan Logo"
            className="h-[300px] mt-12 text-center items-center bg-center"
          />
          {/* Judul */}
          <h1 className="text-2xl md:text-4xl font-norwester mt-1 mb-6 text-blue-950">
            Efrogmer
          </h1>

          {/* Deskripsi utama */}
          <p className="text-sm font-poppins mb-8">
           EFROGMER is an interactive educational game designed to improve students' understanding of parts of speech in English.
            In this game, students control a frog character,
            whose task is to select or "eat" word bubbles that match the targeted part of speech category at each level.
          </p>
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
            <p className="font-poppins">
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
            <p className="mt-0.5 font-poppins leading-tight">
              Feed the frog only words that match the target part of speech.
              Every 3 correct feeds will change the target automatically.
              Reach 45 points to win early, or survive until time runs out.
            </p>
          </div>

          {/* Game tips */}
          <div>
            <h2 className="text-2xl font-bold mb-2 text-blue-700">Game tips</h2>
            <ul className="list-disc font-poppins list-inside space-y-2">
              <li><b>1. Watch the Target Part of Speech</b></li>
              Before you start eating bubbles, check the target text below the frog, for example:  
              ➡ “Feed me: ADJECTIVE” <br />
              This means you should only eat words that are adjectives.

              <li><b>2. Read the Words Quickly & Carefully</b></li>
              The bubbles will move. Make sure you read the words fast so you don’t choose the wrong one.

              <li><b>3. Protect Your Lives!</b></li>
              Your lives are shown as ⭐⭐⭐⭐⭐ <br />
              If you eat the wrong word, you lose 1 life.  
              Too many mistakes and the game will end quickly!

              <li><b>4. Reach the Point Target to Level Up</b></li>
              Your point target is shown in the top-right corner.  
              If you reach the target, you level up and get a new part of speech challenge.

              <li><b>5. Each Level Gets Harder</b></li>
              The higher the level, the faster the bubbles move and the more similar the word categories become. Stay focused!

              <li><b>6. Use Headphones (optional)</b></li>
              If the game has sound effects, using headphones can make it more fun and help you focus.

              <li><b>7. Don’t Panic, Control Your Rhythm</b></li>
              Go for slower bubbles first. After you get used to it, go for the faster ones.

              <li><b>8. Use the Explanations Between Levels</b></li>
              After each level, you will see a short explanation/video. Remember the key points to avoid mistakes in the next level.

              <li><b>9. Practice to Improve Your Score</b></li>
              The more you play, the faster you’ll recognize each part of speech. Repeat levels to boost your grammar skills.

              <li><b>10. Challenge Yourself!</b></li>
              Try to reach the highest score and become the <b>EFROGMER Master!</b>
            </ul>

          </div>

           <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/grammarpage")}
              className="bg-red-600 w-full font-poppins text-white font-semibold rounded-lg px-20 py-8 shadow-md hover:bg-red-900 transition-all duration-150 text-lg"
            >
            Play Now!
          </motion.button>

          <div className="bg-slate-400 px-12 py-12 rounded-xl">
            <h2 className="text-2xl font-bold mb-2 text-blue-700">Hard mode</h2>
            <ul className="list-disc font-poppins list-inside space-y-2">
                <li>
                  <strong>Limited Time Duration</strong>
                  <ul>
                    <li>Players are given an initial time limit of <strong>3 minutes</strong> to complete the vocabulary challenge.</li>
                    <li>This system is designed to enhance focus, accuracy, and quick thinking in language mastery.</li>
                  </ul>
                </li>

                <li>
                  <strong>Time Extension Mechanism</strong>
                  <ul>
                    <li>Each correct answer grants an additional <strong>3 seconds</strong> of gameplay time.</li>
                    <li>This feature serves as an incentive for players to respond accurately while maintaining their remaining time.</li>
                  </ul>
                </li>

                <li>
                  <strong>Higher Difficulty Level</strong>
                  <ul>
                    <li>The vocabulary presented is more <strong>advanced</strong> and complex compared to easier modes.</li>
                    <li>This aims to stimulate intermediate to advanced English proficiency and broaden the players' lexical knowledge.</li>
                  </ul>
                </li>

                <li>
                  <strong>Learning Objectives</strong>
                  <ul>
                    <li>To encourage players to practice under time pressure, thereby improving their accuracy in using vocabulary.</li>
                    <li>To enhance literacy skills, cognitive speed, and memory retention through repeated challenges.</li>
                  </ul>
                </li>
              </ul>
                  <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate("/advance")}
                  className="bg-red-600 w-full mt-12 font-poppins text-white font-semibold rounded-lg px-20 py-8 shadow-md hover:bg-red-900 transition-all duration-150 text-lg"
                >
                Play Now!
              </motion.button>
            </div>
        </section>
      </div>
            <div>
              <Leaderboard3 />
          </div>
            <div>
              <Footer3 />
          </div>
    </div>
  );
};

export default Preparation;
