import React from "react";
import { auth, provider } from "../../firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import bg1 from "../../../public/Efrogmer1.jpeg";

const Login = () => {
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      console.log("USER LOGGED IN:", result.user);
      navigate("/mainpage");
    } catch (err) {
      console.error("LOGIN ERROR:", err);
    }
  };

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
    <div className="flex h-screen w-full bg-gradient-to-br from-emerald-400 to-yellow-300 text-white">

      {/* LEFT SIDE */}
      <div className="hidden bg-white/40 md:flex flex-col justify-center items-center w-1/2 px-10 animate-fadeIn">
        <h1 className="text-5xl text-emerald-950 font-norwester tracking-wide drop-shadow-lg">
          EFROGMER
        </h1>
        <p className="text-sm bg-yellow-400 text-emerald-900 h-5 mb-3 font-poppins tracking-wide">
            {typedText}
            <span className="animate-pulse">|</span>
          </p>

        <p className="text-emerald-900 font-poppins text-lg text-center max-w-md leading-relaxed">
          An interactive English grammar adventure that turns learning into a fun
          and engaging experience.
        </p>

        <img
          src={bg1}
          alt="frog mascot"
          className="mt-10 w-72 rounded-full drop-shadow-2xl animate-bounce-slow"
        />
      </div>

      {/* RIGHT SIDE */}
        <div className="flex w-full md:w-1/2 justify-center items-center px-6">
        <div className="bg-white/10 backdrop-blur-xl border border-white/20
            p-10 rounded-3xl shadow-2xl w-full max-w-md animate-fadeIn">

            <h2 className="text-3xl mt-2 bg-yellow-400 rounded-full text-emerald-950 font-norwester text-center mb-3">
            Welcome to Efrogmer
            </h2>

            {/* CENTER IMAGE */}
            <div className="w-full flex justify-center">
            <img
                src={bg1}
                alt="frog mascot"
                className="w-[90px] rounded-full drop-shadow-2xl animate-bounce-slow"
            />
            </div>

            <p className="text-emerald-950 text-center mb-8">
            Login to continue your learning journey.
            </p>

          {/* GOOGLE BUTTON POP BRUTALISM */}
          <button
            onClick={handleGoogleLogin}
            className="
              w-full flex items-center justify-center gap-3 py-3 px-6
              font-bold text-emerald-950 bg-[url('https://i.pinimg.com/1200x/16/64/70/166470feb593d150b093edd0a411d3ef.jpg')] rounded-xl
              shadow-[6px_6px_0px_#000] border border-black bg-cover bg-no-repeat bg-center
              hover:translate-y-[-4px] hover:shadow-[10px_10px_0px_#000]
              transition-all duration-300
            "
          >
            {/* ICON */}
            <svg
              xmlns="https://i.pinimg.com/1200x/60/41/99/604199df880fb029291ddd7c382e828b.jpg"
              viewBox="0 0 48 48"
              className="h-6"
            >
              <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3c-1.6..."/>
              <path fill="#FF3D00" d="M6.3 14.1l6.6..."/>
              <path fill="#4CAF50" d="M24 44.5c5.2..."/>
              <path fill="#1976D2" d="M43.6 20.5H42..."/>
            </svg>

            Sign in with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
