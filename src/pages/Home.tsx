import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float, Text3D, MeshDistortMaterial } from "@react-three/drei";
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";

// 3D Floating Icons Component
const FloatingIcon = ({ position, children }: { position: [number, number, number]; children: React.ReactNode }) => (
  <Float speed={2} rotationIntensity={1} floatIntensity={2} position={position}>
    <mesh>
      <boxGeometry args={[0.5, 0.5, 0.5]} />
      <MeshDistortMaterial color="#00D2FF" distort={0.3} speed={2} />
    </mesh>
  </Float>
);

const Hero3D = () => (
  <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
    <ambientLight intensity={0.5} />
    <pointLight position={[10, 10, 10]} intensity={1} color="#00D2FF" />
    <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8B5CF6" />
    
    <FloatingIcon position={[-4, 2, 0]}>
      <boxGeometry args={[1, 1, 1]} />
    </FloatingIcon>
    <FloatingIcon position={[4, -2, 0]}>
      <sphereGeometry args={[0.5]} />
    </FloatingIcon>
    <FloatingIcon position={[0, 3, -2]}>
      <coneGeometry args={[0.5, 1]} />
    </FloatingIcon>
    
    <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
  </Canvas>
);

const Home = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = (clientX / innerWidth - 0.5) * 20;
      const y = (clientY / innerHeight - 0.5) * 20;
      
      containerRef.current.style.transform = `translate(${x}px, ${y}px)`;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Blurs */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-blue/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-purple/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-neon-cyan/20 rounded-full blur-2xl animate-float" style={{ animationDelay: "2s" }} />
      </div>

      {/* 3D Scene Background */}
      <div className="absolute inset-0 opacity-30">
        <Hero3D />
      </div>

      <div className="container mx-auto px-6 text-center relative z-10" ref={containerRef}>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="space-y-8"
        >
          {/* Main Heading */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4"
          >
            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-neon-blue via-neon-purple to-neon-cyan bg-clip-text text-transparent animate-gradient">
              John Doe
            </h1>
            <div className="glass p-4 rounded-2xl inline-block">
              <h2 className="text-2xl md:text-4xl font-semibold text-foreground">
                Full Stack Developer
              </h2>
            </div>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            Crafting digital experiences with cutting-edge technologies. 
            Passionate about creating beautiful, functional, and innovative solutions.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <Link to="/contact">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-purple hover:to-neon-cyan text-white font-semibold px-12 py-6 text-lg rounded-full transition-all duration-500 transform hover:scale-105 glow-primary"
              >
                Hire Me
              </Button>
            </Link>
            <Link to="/projects">
              <Button 
                variant="outline" 
                size="lg"
                className="border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-background font-semibold px-12 py-6 text-lg rounded-full transition-all duration-500 transform hover:scale-105"
              >
                View Work
              </Button>
            </Link>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex justify-center space-x-6"
          >
            {[
              { icon: <Github size={24} />, href: "https://github.com", label: "GitHub" },
              { icon: <Linkedin size={24} />, href: "https://linkedin.com", label: "LinkedIn" },
              { icon: <Mail size={24} />, href: "mailto:john@example.com", label: "Email" },
            ].map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="glass p-4 rounded-full hover:text-neon-blue transition-all duration-300 transform hover:scale-110 hover:glow-primary"
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + index * 0.1 }}
              >
                {social.icon}
                <span className="sr-only">{social.label}</span>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-muted-foreground"
          >
            <ArrowDown size={32} />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;