import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const DotsEmb = () => {
  const [dots, setDots] = useState<{ x: number; y: number; size: number }[]>([]);

  useEffect(() => {
    // Generate random dots
    const newDots = Array.from({ length: 25 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 6 + 2, // 2–8px dots
    }));
    setDots(newDots);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden z-10">
      {dots.map((dot, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white/70 shadow-lg"
          style={{
            width: dot.size,
            height: dot.size,
            left: dot.x,
            top: dot.y,
          }}
          initial={{ opacity: 0, y: 0 }}
          animate={{
            opacity: [0.2, 1, 0.2],
            y: [0, -40, 0],
          }}
          transition={{
            duration: Math.random() * 6 + 4, // 4–10s floating
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 3,
          }}
        />
      ))}
    </div>
  );
};
