import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Mode = () => {
  const navigate = useNavigate();

  return (
    <div className="relative bg-emerald-900 w-screen min-h-screen flex flex-col items-center justify-center text-white font-bold p-2 md:p-6 overflow-y-auto">
      {/* Background Grid */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:18px_18px] pointer-events-none backdrop-blur-md" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center w-full">
        <h1 className="text-2xl xs:text-3xl md:text-5xl font-bold mb-4 md:mb-10 text-center">
          Choose the mode!
        </h1>

        <div className="flex flex-col md:flex-row gap-4 md:gap-16 items-stretch justify-center w-full max-w-6xl">

          {/* CARD 1 */}
          <motion.div
            layout
            className="bg-lime-500 text-white font-bold rounded-lg shadow-lg w-full md:max-w-md overflow-hidden px-3 md:px-8 py-3 md:py-6"
          >
            <h2 className="text-base xs:text-lg md:text-2xl font-poppins text-center mb-2">
              Part of Speech&apos;s Map
            </h2>

            <p className="text-xs xs:text-sm md:text-base font-poppins text-emerald-900 leading-relaxed">
              Mode ini adalah mode pertama sebelum kalian menuju mode WarriorGrammar. Di sini terdapat penjelasan
              tentang macam-macam Part of Speech seperti noun, pronoun, adjective, dan lainnya.
            </p>

            <div className="mt-4 flex justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate("/mappage")}
                className="bg-red-600 text-white font-semibold rounded-lg px-4 py-2 md:px-8 md:py-3 shadow-md hover:bg-red-700 transition text-xs xs:text-sm md:text-lg"
              >
                Next
              </motion.button>
            </div>
          </motion.div>

          {/* CARD 2 */}
          <motion.div
            layout
            className="bg-cyan-500 text-white font-bold rounded-lg shadow-lg w-full md:max-w-md overflow-hidden px-3 md:px-8 py-3 md:py-6"
          >
            <h2 className="text-base xs:text-lg md:text-2xl font-poppins text-center mb-2">
              Warrior Grammar
            </h2>

            <p className="text-xs xs:text-sm md:text-base font-poppins text-emerald-900 leading-relaxed">
              Setelah kalian latihan di MapMode. Pada mode ini, kalian akan memainkan game dengan waktu dan harus mendapatkan score sebanyak-banyaknya. Ayo jadilah master grammar
              dengan menguasai Part of Speech!
            </p>

            <div className="mt-4 flex justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate("/preparation")}
                className="bg-red-600 text-white font-semibold rounded-lg px-4 py-2 md:px-8 md:py-3 shadow-md hover:bg-red-700 transition text-xs xs:text-sm md:text-lg"
              >
                Next
              </motion.button>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Mode;
