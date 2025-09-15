import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';

interface CentralEmblemProps {
  isTransitioning?: boolean;
}

export const CentralEmblem = ({ isTransitioning = false }: CentralEmblemProps) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const emblemVariants = {
    home: {
      scale: 1,
      x: 0,
      y: 0,
      rotate: 0
    },
    page: {
      scale: 0.4,
      x: -window.innerWidth * 0.35,
      y: -window.innerHeight * 0.35,
      rotate: 15
    }
  };

  return (
    <motion.div
      className="fixed top-1/2 left-1/2 z-30"
      style={{ 
        originX: 0.5, 
        originY: 0.5,
        transform: 'translate(-50%, -50%)'
      }}
      variants={emblemVariants}
      animate={isHomePage ? 'home' : 'page'}
      transition={{ duration: 0.8 }}
      whileHover={isHomePage ? { scale: 1.1 } : undefined}
    >
      <motion.div
        className={`emblem-float ${isHomePage ? 'emblem-pulse' : ''}`}
        whileHover={isHomePage ? {
          scale: 1.05,
          rotate: 5,
          transition: { duration: 0.3 }
        } : undefined}
      >
        {/* Central Emblem SVG */}
        <svg
          width="120"
          height="120"
          viewBox="0 0 120 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-lg"
        >
          {/* Outer Circle */}
          <motion.circle
            cx="60"
            cy="60"
            r="55"
            stroke="hsl(var(--portfolio-black))"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0, rotate: 0 }}
            animate={{ pathLength: 1, rotate: 360 }}
            transition={{ 
              pathLength: { duration: 2, delay: 0.5 },
              rotate: { duration: 20, repeat: Infinity, ease: "linear" }
            }}
          />
          
          {/* Inner Geometric Pattern */}
          <motion.g
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            {/* Triangle */}
            <path
              d="M60 25 L85 65 L35 65 Z"
              stroke="hsl(var(--portfolio-black))"
              strokeWidth="1.5"
              fill="none"
            />
            
            {/* Inner Circle */}
            <circle
              cx="60"
              cy="55"
              r="12"
              stroke="hsl(var(--portfolio-black))"
              strokeWidth="1.5"
              fill="none"
            />
            
            {/* Bottom Line */}
            <line
              x1="40"
              y1="75"
              x2="80"
              y2="75"
              stroke="hsl(var(--portfolio-black))"
              strokeWidth="1.5"
            />
            
            {/* Side Lines */}
            <line
              x1="45"
              y1="85"
              x2="55"
              y2="95"
              stroke="hsl(var(--portfolio-black))"
              strokeWidth="1"
            />
            <line
              x1="75"
              y1="85"
              x2="65"
              y2="95"
              stroke="hsl(var(--portfolio-black))"
              strokeWidth="1"
            />
          </motion.g>
          
          {/* Rotating outer elements */}
          <motion.g
            animate={{ rotate: -360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: '60px 60px' }}
          >
            <circle cx="60" cy="20" r="2" fill="hsl(var(--portfolio-black))" />
            <circle cx="100" cy="60" r="2" fill="hsl(var(--portfolio-black))" />
            <circle cx="60" cy="100" r="2" fill="hsl(var(--portfolio-black))" />
            <circle cx="20" cy="60" r="2" fill="hsl(var(--portfolio-black))" />
          </motion.g>
        </svg>
      </motion.div>
    </motion.div>
  );
};