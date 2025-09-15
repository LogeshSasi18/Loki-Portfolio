import { motion } from "framer-motion";
import { CentralEmblem } from "@/components/portfolio/CentralEmblem";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { DotsEmb } from "@/components/portfolio/DotsEmb";

export const About = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black">
      {/* Background Effects */}
      <CentralEmblem />
      <DotsEmb />

      {/* Back button */}
      <motion.button
        className="absolute left-6 top-6 text-white z-[50]"
        onClick={() => navigate("/")}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ duration: 0.25 }}
      >
        <ArrowLeft size={24} />
      </motion.button>

      {/* Faint Background Title */}
      <motion.h1
        className="absolute top-6 left-10 text-[120px] font-bold text-[#323131] tracking-widest select-none pointer-events-none z-[5]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        ABOUT
      </motion.h1>

      {/* Center Content Box */}
      <motion.div
        className="bg-blur border-2 border-white/20 px-2 py-8 rounded-xl shadow-2xl max-w-xl w-full text-center z-20 backdrop-blur-md"
        initial={{ opacity: 0, y: 200 }} 
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="text-2xl font-semibold text-white mb-6">
          Frontend Developer
        </h2>

        <p className="text-gray-200 mb-4">
          Passionate about crafting elegant, user-friendly interfaces with
          modern web technologies. I focus on building{" "}
          <span className="text-white font-medium">clean, responsive</span> and{" "}
          <span className="text-white font-medium">interactive</span> digital
          experiences.
        </p>

        <p className="text-gray-200 mb-8">
          I believe good design and code go hand in hand — blending{" "}
          <span className="text-white font-medium">creativity</span> with{" "}
          <span className="text-white font-medium">technical precision</span> to
          deliver seamless experiences on the web.
        </p>

        {/* Skills */}
        <div className="flex flex-wrap justify-center gap-3">
          {[
            "React.js",
            "TypeScript",
            "JavaScript",
            "CSS/Tailwind",
            "Next.js",
          ].map((skill, i) => (
            <span
              key={i}
              className="px-4 py-2 border border-gray-400/40 rounded-full text-sm text-gray-100"
            >
              {skill}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  );
};
