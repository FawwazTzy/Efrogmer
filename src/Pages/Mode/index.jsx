import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Mode= () => {
  const navigate = useNavigate();
  const [openCard1, setOpenCard1] = useState(false);
  const [openCard2, setOpenCard2] = useState(false);

  return (
    <div className="relative bg-emerald-900 w-screen h-screen flex flex-col items-center justify-center text-white font-bold p-4 overflow-y-auto">
      {/* === Background Grid (di bawah konten) === */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none backdrop-blur-md" />

      {/* === Konten utama === */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full">
        <h1 className="text-5xl text-white font-bold mb-10">Choose the mode!</h1>

        {/* Container Card */}
        <div className="flex flex-col md:flex-row gap-[100px] items-start justify-center">
          {/* ===== CARD 1 ===== */}
          <motion.div
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.35 }}
            className="bg-lime-500 text-white font-bold rounded-lg shadow-lg w-full max-w-lg overflow-hidden z-10"
          >
            {/* Header */}
            <div className="px-6 py-5 flex justify-center">
              <button
                onClick={() => setOpenCard1(!openCard1)}
                aria-expanded={openCard1}
                className="w-[400px] flex items-center justify-between bg-lime-600 hover:bg-lime-700 px-6 py-5 rounded-xl text-xl focus:outline-none transition-all duration-200 shadow-md"
              >
                <span className="font-poppins">Part of Speech&apos;s Map</span>
                <motion.span
                  animate={{ rotate: openCard1 ? 180 : 0 }}
                  transition={{ duration: 0.25 }}
                  className="inline-block text-3xl"
                >
                  ▼
                </motion.span>
              </button>
            </div>

            {/* Content */}
            <AnimatePresence initial={false}>
              {openCard1 && (
                <motion.div
                  key="content1"
                  layout
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="px-8"
                >
                  <div className="pt-2 pb-6">
                    <p className="text-base font-normal mt-2 text-black/85 leading-relaxed">
                      Mode ini adalah mode pertama yang harus kalian lakukan di game
                      ini sebelum ke mode yang kedua yaitu Map. Mode ini berisi
                      penjelasan tentang macam-macam Part of Speech, seperti noun,
                      pronoun, adjective, dan lain-lainnya.
                    </p>

                    <div className="mt-6 flex justify-center">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => navigate("/mappage")}
                        className="bg-red-600 text-white font-semibold rounded-lg px-8 py-3 shadow-md hover:bg-red-700 transition-all duration-150 text-lg"
                      >
                        Next
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* ===== CARD 2 ===== */}
          <motion.div
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.35 }}
            className="bg-cyan-500 text-white font-bold rounded-lg shadow-lg w-full max-w-lg overflow-hidden z-10"
          >
            {/* Header */}
            <div className="px-6 py-5 flex justify-center">
              <button
                onClick={() => setOpenCard2(!openCard2)}
                aria-expanded={openCard2}
                className="w-[400px] flex items-center justify-between bg-cyan-600 hover:bg-cyan-700 px-6 py-5 rounded-xl text-xl focus:outline-none transition-all duration-200 shadow-md"
              >
                <span className="font-poppins">Warrior Grammar</span>
                <motion.span
                  animate={{ rotate: openCard2 ? 180 : 0 }}
                  transition={{ duration: 0.25 }}
                  className="inline-block text-3xl"
                >
                  ▼
                </motion.span>
              </button>
            </div>

            {/* Content */}
            <AnimatePresence initial={false}>
              {openCard2 && (
                <motion.div
                  key="content2"
                  layout
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="px-8"
                >
                  <div className="pt-2 pb-6">
                    <p className="text-base font-normal mt-2 text-black/85 leading-relaxed">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Libero, incidunt quod? Totam in iste eius necessitatibus doloribus,
                      eum possimus sit, illo ea pariatur nulla labore hic est, libero sint commodi.
                    </p>

                    <div className="mt-6 flex justify-center">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => navigate("/grammarpage")}
                        className="bg-red-600 text-white font-semibold rounded-lg px-8 py-3 shadow-md hover:bg-red-700 transition-all duration-150 text-lg"
                      >
                        Next
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Mode;
