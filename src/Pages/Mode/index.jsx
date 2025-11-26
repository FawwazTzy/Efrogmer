import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const BackgroundEffect = () => (
  <div className="absolute inset-0 overflow-hidden">
    {/* BG gradient hijau–kuning */}
    <div className="absolute inset-0 bg-gradient-to-r from-green-950 to-yellow-500 blur-2xl opacity-40 animate-pulse" />
    <div className="absolute inset-0 bg-gradient-to-tr from-green-950 via-transparent to-yellow-800 blur-2xl opacity-40" />
  </div>
);

const Mode = () => {
  const navigate = useNavigate();

  return (
    <div className="relative w-screen min-h-screen flex flex-col items-center justify-center text-white font-bold p-2 md:p-6 overflow-y-auto">

      {/* Background Effect */}
      <BackgroundEffect />

      {/* Background Grid */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:18px_18px] pointer-events-none backdrop-blur-md" />

      {/* GRADIENT HIJAU-KUNING DI BELAKANG CARD */}
      <div className="absolute inset-0 flex items-center justify-center -z-0 pointer-events-none">
        <div className="relative w-[500px] h-[500px] opacity-[25%] hidden sm:block">
          <div className="absolute inset-0 bg-gradient-to-r from-green-900 via-green-900 to-yellow-400 rounded-full blur-2xl animate-spin-slower" />
          <div className="absolute inset-0 bg-gradient-to-l from-yellow-500 via-yellow-400 to-green-400 rounded-full blur-2xl animate-pulse-slow opacity-50" />
          <div className="absolute inset-0 bg-gradient-to-t from-green-600 via-yellow-500 to-yellow-400 rounded-full blur-2xl animate-float opacity-50" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center w-full justify-center gap-3 py-3 px-6
                  font-bold text-gray-700 
                  bg-[url('https://i.pinimg.com/1200x/16/64/70/166470feb593d150b093edd0a411d3ef.jpg')]
                  rounded-xl shadow-[6px_6px_0px_#000]
                  border border-black bg-cover bg-no-repeat bg-center
                  hover:shadow-[10px_10px_0px_#000]
                  transition-all duration-300">
        <h1 className="text-2xl xs:text-3xl md:text-5xl font-bold mb-4 md:mb-10 text-center">
          Choose the mode!
        </h1>

        <div className="flex flex-col md:flex-row gap-4 md:gap-16 items-stretch justify-center w-full max-w-6xl">

          {/* CARD 1 */}
          <motion.div
            layout
            className="bg-lime-500 text-white font-bold w-full md:max-w-md overflow-hidden px-3 md:px-8 py-3 md:py-6
             rounded-xl shadow-[6px_6px_0px_#000]
                  border border-black bg-cover bg-no-repeat bg-center
                  hover:translate-y-[-4px] hover:shadow-[10px_10px_0px_#000]
                  transition-all duration-300"
          >
            <h2 className="text-base xs:text-lg md:text-2xl font-poppins text-center mb-2">
              Part of Speech&apos;s Map
            </h2>

            <p className="text-xs xs:text-sm md:text-base font-poppins text-emerald-900 leading-relaxed">
              Mode ini adalah mode pertama sebelum kalian menuju mode WarriorGrammar. 
              Di sini terdapat penjelasan tentang macam-macam Part of Speech seperti noun, 
              pronoun, adjective, dan lainnya.
            </p>

            <div className="mt-4 flex justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate("/mappage")}
                className="w-full flex items-center justify-center gap-3 py-3 px-6
                  font-bold text-gray-700 
                  bg-[url('https://i.pinimg.com/1200x/16/64/70/166470feb593d150b093edd0a411d3ef.jpg')]
                  rounded-xl shadow-[6px_6px_0px_#000]
                  border border-black bg-cover bg-no-repeat bg-center
                  hover:translate-y-[-4px] hover:shadow-[10px_10px_0px_#000]
                  transition-all duration-300"
              >
                Next
              </motion.button>
            </div>
          </motion.div>

          {/* CARD 2 */}
          <motion.div
            layout
            className="bg-cyan-500 text-white font-bold w-full md:max-w-md overflow-hidden px-3 md:px-8 py-3 md:py-6
             rounded-xl shadow-[6px_6px_0px_#000]
                  border border-black bg-cover bg-no-repeat bg-center
                  hover:translate-y-[-4px] hover:shadow-[10px_10px_0px_#000]
                  transition-all duration-300"
          >
            <h2 className="text-base xs:text-lg md:text-2xl font-poppins text-center mb-2">
              Warrior Grammar
            </h2>

            <p className="text-xs xs:text-sm md:text-base font-poppins text-emerald-900 leading-relaxed">
              Setelah kalian latihan di MapMode. Pada mode ini, kalian akan memainkan game dengan waktu 
              dan harus mendapatkan score sebanyak-banyaknya. Ayo jadilah master grammar dengan menguasai Part of Speech!
            </p>

            <div className="mt-4 flex justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate("/preparation")}
                className="w-full flex items-center justify-center gap-3 py-3 px-6
                  font-bold text-gray-700 
                  bg-[url('https://i.pinimg.com/1200x/16/64/70/166470feb593d150b093edd0a411d3ef.jpg')]
                  rounded-xl shadow-[6px_6px_0px_#000]
                  border border-black bg-cover bg-no-repeat bg-center
                  hover:translate-y-[-4px] hover:shadow-[10px_10px_0px_#000]
                  transition-all duration-300"
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
