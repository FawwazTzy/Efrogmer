// src/components/Footer.jsx
import React from "react";
import { Mail, MapPin, Facebook, Instagram, Github } from "lucide-react";

const Footer3 = () => {

  // 🔥 Typing Animation Hook
  const useTypingEffect = (words, typingSpeed = 100, eraseSpeed = 60, delay = 1500) => {
    const [index, setIndex] = React.useState(0);
    const [subIndex, setSubIndex] = React.useState(0);
    const [deleting, setDeleting] = React.useState(false);
    const [text, setText] = React.useState("");

    React.useEffect(() => {
      const currentWord = words[index];

      if (!deleting && subIndex < currentWord.length) {
        setTimeout(() => {
          setSubIndex(subIndex + 1);
          setText(currentWord.substring(0, subIndex + 1));
        }, typingSpeed);
      } else if (deleting && subIndex > 0) {
        setTimeout(() => {
          setSubIndex(subIndex - 1);
          setText(currentWord.substring(0, subIndex - 1));
        }, eraseSpeed);
      } else if (!deleting && subIndex === currentWord.length) {
        setTimeout(() => setDeleting(true), delay);
      } else if (deleting && subIndex === 0) {
        setDeleting(false);
        setIndex((prev) => (prev + 1) % words.length);
      }
    }, [subIndex, deleting, index]);

    return text;
  };

  const typingWords = [
    "educative grammar website",
    "interactive learning experience",
    "fun English adventure",
    "engaging parts of speech game",
  ];

  const typedText = useTypingEffect(typingWords);

  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-6 mt-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-semibold text-white mb-1">Efrogmer</h2>

          {/* 🔥 TYPING ANIMATION DISPLAY */}
          <p className="text-sm text-teal-300 h-5 mb-3 font-medium tracking-wide">
            {typedText}
            <span className="animate-pulse">|</span>
          </p>

          <p className="text-sm leading-relaxed">
            EFROGMER is an interactive educational game that helps students learn
            parts of speech in English. Players control a frog character and must
            choose or “eat” word bubbles that match the target part of speech
            in each level.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-medium text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/mainpage" className="hover:text-white">Home</a></li>
            <li><a href="/about" className="hover:text-white">About</a></li>
            <li><a href="/features" className="hover:text-white">Features</a></li>
            <li><a href="/contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-medium text-white mb-3">Contact</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <Mail size={18} /> fawazadvan23@gmail.com
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={18} /> Lampung, Indonesia
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-medium text-white mb-3">Follow Us</h3>
          <div className="flex gap-4">
            <a href="https://www.facebook.com/share/1AWiLny9WZ/" className="hover:text-white"><Facebook size={22} /></a>
            <a href="https://www.instagram.com/bethoooven55?igsh=MThkYzIzdWI0bWI3OQ==" className="hover:text-white"><Instagram size={22} /></a>
            <a href="https://github.com/FawwazTzy" className="hover:text-white"><Github size={22} /></a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm">
        © {new Date().getFullYear()} Muhammad Fawwaz Perdana — All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer3;
