import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Code, Palette, Server, Database, Cloud, Smartphone } from "lucide-react";

interface Skill {
  name: string;
  level: number;
  category: string;
}

interface SkillCategory {
  name: string;
  icon: React.ReactNode;
  color: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    name: "Frontend",
    icon: <Code size={24} />,
    color: "neon-blue",
    skills: [
      { name: "React", level: 95, category: "Frontend" },
      { name: "TypeScript", level: 90, category: "Frontend" },
      { name: "Vue.js", level: 85, category: "Frontend" },
      { name: "Next.js", level: 88, category: "Frontend" },
      { name: "Tailwind CSS", level: 92, category: "Frontend" },
    ],
  },
  {
    name: "Backend",
    icon: <Server size={24} />,
    color: "neon-purple",
    skills: [
      { name: "Node.js", level: 90, category: "Backend" },
      { name: "Python", level: 85, category: "Backend" },
      { name: "Express.js", level: 88, category: "Backend" },
      { name: "FastAPI", level: 82, category: "Backend" },
      { name: "GraphQL", level: 80, category: "Backend" },
    ],
  },
  {
    name: "Database",
    icon: <Database size={24} />,
    color: "neon-cyan",
    skills: [
      { name: "PostgreSQL", level: 88, category: "Database" },
      { name: "MongoDB", level: 85, category: "Database" },
      { name: "Redis", level: 80, category: "Database" },
      { name: "MySQL", level: 82, category: "Database" },
    ],
  },
  {
    name: "Cloud & DevOps",
    icon: <Cloud size={24} />,
    color: "neon-pink",
    skills: [
      { name: "AWS", level: 85, category: "Cloud" },
      { name: "Docker", level: 88, category: "DevOps" },
      { name: "Kubernetes", level: 75, category: "DevOps" },
      { name: "CI/CD", level: 80, category: "DevOps" },
    ],
  },
  {
    name: "Design & UI",
    icon: <Palette size={24} />,
    color: "neon-blue",
    skills: [
      { name: "Figma", level: 85, category: "Design" },
      { name: "UI/UX Design", level: 82, category: "Design" },
      { name: "Adobe XD", level: 78, category: "Design" },
      { name: "Framer", level: 80, category: "Design" },
    ],
  },
  {
    name: "Mobile",
    icon: <Smartphone size={24} />,
    color: "neon-purple",
    skills: [
      { name: "React Native", level: 85, category: "Mobile" },
      { name: "Flutter", level: 75, category: "Mobile" },
      { name: "Ionic", level: 70, category: "Mobile" },
    ],
  },
];

const AnimatedProgress = ({ value, delay = 0 }: { value: number; delay?: number }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(value);
    }, delay);

    return () => clearTimeout(timer);
  }, [value, delay]);

  return (
    <div className="relative">
      <Progress 
        value={progress} 
        className="h-2 bg-muted"
      />
      <motion.div
        className="absolute top-0 left-0 h-2 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full"
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 1.5, delay: delay / 1000, ease: "easeOut" }}
      />
    </div>
  );
};

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen py-20 px-6"
    >
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
            Skills & Expertise
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A comprehensive overview of my technical skills and proficiency levels
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <button
            onClick={() => setSelectedCategory(null)}
            className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 ${
              selectedCategory === null
                ? "bg-neon-blue text-white glow-primary"
                : "glass text-foreground hover:text-neon-blue"
            }`}
          >
            <span>All Skills</span>
          </button>
          {skillCategories.map((category) => (
            <button
              key={category.name}
              onClick={() => setSelectedCategory(category.name)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 ${
                selectedCategory === category.name
                  ? "bg-neon-purple text-white glow-secondary"
                  : "glass text-foreground hover:text-neon-purple"
              }`}
            >
              {category.icon}
              <span>{category.name}</span>
            </button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {skillCategories
            .filter(category => !selectedCategory || category.name === selectedCategory)
            .map((category, categoryIndex) => (
              <motion.div
                key={category.name}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              >
                <Card className="glass p-6 h-full hover:glow-primary transition-all duration-300">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className={`text-${category.color}`}>{category.icon}</div>
                    <h2 className="text-xl font-semibold text-neon-cyan">{category.name}</h2>
                  </div>

                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ 
                          duration: 0.5, 
                          delay: categoryIndex * 0.1 + skillIndex * 0.05 
                        }}
                      >
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-medium">{skill.name}</span>
                          <Badge 
                            variant="outline" 
                            className="text-xs border-neon-blue text-neon-blue"
                          >
                            {skill.level}%
                          </Badge>
                        </div>
                        <AnimatedProgress 
                          value={skill.level} 
                          delay={categoryIndex * 100 + skillIndex * 50} 
                        />
                      </motion.div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
        </div>

        {/* Summary Stats */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16"
        >
          <Card className="glass p-8">
            <h2 className="text-2xl font-semibold text-center mb-8 text-neon-purple">
              Skill Summary
            </h2>
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-neon-blue mb-2">25+</div>
                <div className="text-muted-foreground">Technologies</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-neon-purple mb-2">5+</div>
                <div className="text-muted-foreground">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-neon-cyan mb-2">100+</div>
                <div className="text-muted-foreground">Projects Built</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-neon-pink mb-2">50+</div>
                <div className="text-muted-foreground">Happy Clients</div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Skills;