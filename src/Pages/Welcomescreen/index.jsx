import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Github, User } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import bg1 from "../../assets/Efrogmer1.jpeg";

const TypewriterEffect = ({ text }) => {
  const [displayText, setDisplayText] = useState('');
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= text.length) {
        setDisplayText(text.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 80);
    
    return () => clearInterval(timer);
  }, [text]);

  return (
    <span className="inline-block">
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

const BackgroundEffect = () => (
  <div className="absolute inset-0 overflow-hidden">
    {/* BG gradient hijau–kuning */}
    <div className="absolute inset-0 bg-gradient-to-r from-green-900 to-yellow-300 blur-3xl animate-pulse" />
    <div className="absolute inset-0 bg-gradient-to-tr from-green-900 via-transparent to-yellow-800 blur-2xl animate-float" />
  </div>
);

const IconButton = ({ Icon }) => (
  <div className="relative group hover:scale-110 transition-transform duration-300">
    {/* Glow green–yellow */}
    <div className="absolute -inset-2 bg-gradient-to-r from-green-500 to-yellow-500 rounded-full blur opacity-30 group-hover:opacity-75 transition duration-300" />
    <div className="relative p-2 sm:p-3 bg-black/50 backdrop-blur-sm rounded-full border border-white/10">
      <Icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white" />
    </div>
  </div>
);

const ProfileImage = () => (
  <div 
    className="relative group w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 mx-auto"
    data-aos="fade-left"
    data-aos-duration="1000"
  >
    <div className="absolute -inset-6 opacity-[25%] z-0 hidden sm:block">
      {/* Gradient hijau–kuning */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-500 via-green-400 to-yellow-400 rounded-full blur-2xl animate-spin-slower" />
      <div className="absolute inset-0 bg-gradient-to-l from-yellow-500 via-yellow-400 to-green-400 rounded-full blur-2xl animate-pulse-slow opacity-50" />
      <div className="absolute inset-0 bg-gradient-to-t from-green-600 via-yellow-500 to-yellow-400 rounded-full blur-2xl animate-float opacity-50" />
    </div>

    <div className="relative w-full h-full rounded-full overflow-hidden shadow-[0_0_40px_rgba(150,200,80,0.35)]">
      <img
        src={bg1}
        alt="Profile"
        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-2"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40 z-10 hidden sm:block" />
    </div>
  </div>
);

const WelcomeScreen = ({ onLoadingComplete }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: false,
    });

    const timer = setTimeout(() => {
      setIsLoading(false);
      setTimeout(() => {
        onLoadingComplete?.();
      }, 1000);
    }, 6000);
    
    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  const containerVariants = {
    exit: {
      opacity: 0,
      scale: 1.1,
      filter: "blur(10px)",
      transition: {
        duration: 0.8,
        ease: "easeInOut",
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 bg-gradient-to-b from-gray-100 to-orange-900"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit="exit"
          variants={containerVariants}
        >
          <BackgroundEffect />
          
          <div className="relative min-h-screen flex items-center justify-center px-4">
            <div className="w-full max-w-6xl mx-auto grid lg:grid-cols-2 items-center gap-10">
              
              {/* LEFT: TEXT */}
              <div>
                <motion.div 
                  className="flex justify-center gap-3 sm:gap-4 md:gap-8 mb-6 sm:mb-8 md:mb-12"
                >
                  {[Code2, User, Github].map((Icon, index) => (
                    <div key={index} data-aos="fade-down" data-aos-delay={index * 200}>
                      <IconButton Icon={Icon} />
                    </div>
                  ))}
                </motion.div>

                <motion.div className="text-center mb-6 sm:mb-8 md:mb-12">
                  <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold space-y-2 sm:space-y-4">
                    <div className="mb-2 sm:mb-4">
                      {/* Text gradient → green–yellow */}
                      <span data-aos="fade-right" data-aos-delay="200" className="inline-block px-2 bg-gradient-to-r from-green-300 via-yellow-100 to-green-200 bg-clip-text text-transparent">Welcome</span>{' '}
                      <span data-aos="fade-right" data-aos-delay="400" className="inline-block px-2 bg-gradient-to-r from-green-300 via-yellow-100 to-green-200 bg-clip-text text-transparent">To</span>{' '}
                    </div>
                    <div>
                      <span data-aos="fade-up" data-aos-delay="800" className="inline-block px-2 bg-gradient-to-r from-green-500 to-yellow-500 bg-clip-text text-transparent">Efrogmer</span>{' '}
                    </div>
                  </h1>
                </motion.div>

                <motion.div className="text-center" data-aos="fade-up" data-aos-delay="1200">
                    <div className="relative flex items-center gap-2 text-lg sm:text-xl md:text-2xl">
                      <span className="bg-gradient-to-r from-green-500 to-yellow-500 bg-clip-text text-transparent">
                        <TypewriterEffect text="🐸 Increase Your Grammar Skill with Efrogmer!" />
                      </span>
                    </div>
                </motion.div>
              </div>

              {/* RIGHT: IMAGE */}
              <ProfileImage />
            </div>
          </div>

          {/* Animations */}
          <style jsx>{`
            @keyframes float {
              0%, 100% { transform: translateY(0); }
              50% { transform: translateY(-20px); }
            }
            @keyframes spin-slower {
              to { transform: rotate(360deg); }
            }
            .animate-float {
              animation: float 6s ease-in-out infinite;
            }
            .animate-spin-slower {
              animation: spin-slower 12s linear infinite;
            }
            .animate-pulse-slow {
              animation: pulse 4s infinite;
            }
          `}</style>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WelcomeScreen;
