import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Heart, Zap, Target } from "lucide-react";

const achievements = [
  { icon: <Trophy className="text-neon-blue" />, title: "5+ Years Experience", desc: "Building digital solutions" },
  { icon: <Heart className="text-neon-pink" />, title: "50+ Happy Clients", desc: "Worldwide collaboration" },
  { icon: <Zap className="text-neon-cyan" />, title: "100+ Projects", desc: "Successfully delivered" },
  { icon: <Target className="text-neon-purple" />, title: "Award Winner", desc: "Innovation in tech" },
];

const values = [
  { title: "Innovation", desc: "Always exploring cutting-edge technologies to deliver the best solutions." },
  { title: "Quality", desc: "Committed to writing clean, maintainable, and scalable code." },
  { title: "Collaboration", desc: "Believe in the power of teamwork and open communication." },
  { title: "Growth", desc: "Continuously learning and adapting to new challenges and technologies." },
];

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen py-20 px-6"
    >
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
            About Me
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Passionate developer crafting digital experiences that make a difference
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Personal Story */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="glass p-8 h-full">
              <h2 className="text-2xl font-semibold mb-6 text-neon-cyan">My Journey</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Started my journey in tech 5+ years ago, driven by curiosity and a passion for solving 
                  complex problems through code. What began as a hobby quickly evolved into a career 
                  focused on creating meaningful digital experiences.
                </p>
                <p>
                  I specialize in full-stack development, with expertise in modern frameworks and 
                  technologies. My approach combines technical excellence with creative problem-solving 
                  to deliver solutions that not only work but delight users.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring new technologies, contributing to open 
                  source projects, or sharing knowledge with the developer community.
                </p>
              </div>
            </Card>
          </motion.div>

          {/* Achievements */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              >
                <Card className="glass p-6 hover:glow-primary transition-all duration-300">
                  <div className="flex items-center space-x-4">
                    <div className="text-3xl">{achievement.icon}</div>
                    <div>
                      <h3 className="font-semibold text-lg">{achievement.title}</h3>
                      <p className="text-muted-foreground">{achievement.desc}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Values & Principles */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h2 className="text-3xl font-semibold text-center mb-12 text-neon-purple">
            Values & Principles
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
              >
                <Card className="glass p-6 h-full hover:scale-105 transition-all duration-300">
                  <h3 className="font-semibold text-xl mb-3 text-neon-cyan">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.desc}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tech Stack Preview */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-16 text-center"
        >
          <h2 className="text-3xl font-semibold mb-8 text-neon-blue">Tech Stack</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {["React", "TypeScript", "Node.js", "Python", "AWS", "Docker", "GraphQL", "PostgreSQL"].map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3, delay: 1.4 + index * 0.1 }}
              >
                <Badge 
                  variant="outline" 
                  className="px-4 py-2 text-lg border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-background transition-all duration-300"
                >
                  {tech}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;