import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useLocation } from "react-router-dom";
import profileImg from "../assets/images/animateProfile.png";
import { P } from "node_modules/framer-motion/dist/types.d-Cjd591yU";

type HeroProps = {
  onToggle: (value: boolean) => void;
};

export const Hero: React.FC<HeroProps> = ({ onToggle }) => {
  const location = useLocation();
  const [showDetails, setShowDetails] = useState(false);

  // Reset state whenever we enter the Hero page
  useEffect(() => {
    setShowDetails(false);
    onToggle(false);
  }, [location.pathname]);

  const toggleView = () => {
    setShowDetails((prev) => !prev);
    onToggle(!showDetails);
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden z-[0]">
      {/* Lottie Animation (Clickable) */}
      <motion.div
        onClick={toggleView}
        className="cursor-pointer z-20"
        initial={{
          x: "-50%",
          y: "-50%",
          left: "50%",
          top: "50%",
          position: "absolute",
        }}
        animate={
          showDetails
            ? {
                left: "90%",
                top: "90%",
                x: "-50%",
                y: "-50%",
                scale: 0.4,
              }
            : {
                left: "50%",
                top: "50%",
                x: "-50%",
                y: "-50%",
                scale: 1,
              }
        }
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <DotLottieReact
          src="https://lottie.host/ca7b205d-4337-4146-8886-2660779c44b6/Ee8tc3MMdt.lottie"
          loop
          autoplay
          style={{ width: 350, height: 350 }}
        />
        <p className="flex relative top-[-80px] justify-center text-portfolio-muted text-sm font-light tracking-widest">
          Click here
        </p>
      </motion.div>

      {/* Split View Content */}
      <motion.div
        className="absolute inset-0 flex pointer-events-auto responsive-hero-layout"
        initial={{ opacity: 0 }}
        animate={{ opacity: showDetails ? 1 : 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* LEFT SIDE */}
        <div className="w-1/2 flex items-center justify-center bg-black res-hero-leftside">
        
        </div>
        <div className="responsive-hero-content flex items-center w-[73%] border border-gray-500 absolute top-1/4 bottom-1/4 left-40 rounded-lg shadow-lg">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={showDetails ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
            transition={{ delay: 0.5 }}
            className="max-w-lg text-center p-10 text-white text-color-black"
          >
            <h1 className="text-5xl font-bold mb-6">Hi, I'm Logesh</h1>
            <p className="text-lg text-[#fcf6f499] leading-relaxed text-color-black">
              A versatile Frontend Developer and Programming Polyglot, passionate about crafting intuitive user experiences and building scalable, high-quality web applications. A natural problem solver and goal-driven team player.
            </p>
          </motion.div>
            <motion.img
            src={profileImg}
            alt="avatar"
            initial={{ x: 50, opacity: 0 }}
            animate={showDetails ? { x: 0, opacity: 1 } : { x: 50, opacity: 0 }}
            transition={{ delay: 0.7 }}
            className="res-img w-[auto] h-[380px] bg-black object-fit ml-[140px] mt-[-85px]"
          />
        </div>
        {/* RIGHT SIDE */}
        <div className="w-1/2 flex items-center justify-center bg-white">

        </div>
      </motion.div>
    </div>
  );
};
