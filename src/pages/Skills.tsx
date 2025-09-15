import { motion } from 'framer-motion';
import { CentralEmblem } from '@/components/portfolio/CentralEmblem';
import { ArrowLeft, LucidePalette } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const Skills = () => {
  const navigate = useNavigate();
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.3 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  const skills = [
    { name: "React.js", level: 95 },
    { name: "TypeScript", level: 90 },
    { name: "JavaScript", level: 90 },
    { name: "Tailwind CSS", level: 85 },
    { name: "HTML & CSS", level: 90 },
    { name: "VS Code", level: 95 }
  ];

  const categories = [
    { title: "Frontend", items: ["React.js", "TypeScript", "JavaScript", "Redux", "Tailwind CSS", "HTML", "CSS", "Bootstrap"] },
    { title: "Tools", items: ["VS Code", "Git"] }
  ];

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden pb-10">
      {/* Circular Mask Transition Background */}
      <motion.div
        className="absolute inset-0 bg-portfolio-bg"
        initial={{ clipPath: 'circle(0% at 50% 50%)' }}
        animate={{ clipPath: 'circle(150% at 50% 50%)' }}
        exit={{ clipPath: 'circle(0% at 50% 50%)' }}
        transition={{ duration: 1.2 }}
      />

      {/* Central Emblem */}
      <CentralEmblem />
       <motion.button
        className="absolute left-6 top-6 text-black z-[50]"
        onClick={() => navigate("/")}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ duration: 0.25 }}
      >
        <ArrowLeft size={24} />
      </motion.button>
           <motion.h1
              className="absolute bottom-[-30px] right-0 text-[120px] font-bold text-[#323131] tracking-widest select-none pointer-events-none z-[5]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.2 }}
              transition={{ duration: 1 }}
            >
              SKILLS
            </motion.h1>
      {/* Skills Content */}
      <motion.div
        className="max-w-6xl mx-auto px-8 z-20 relative"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
      >
        <motion.div className="space-y-16">
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center">

            <p className="text-2xl font-bold text-portfolio-muted max-w-2xl mx-auto">
              <LucidePalette className="text-black relative inline-block mr-2" size={38} />
              Frontend Developer
            </p>
          </motion.div>

          <motion.div className="grid lg:grid-cols-2 gap-16">
            {/* Skill Bars */}
            <motion.div variants={itemVariants} className="space-y-8">
              <h3 className="text-2xl font-medium text-portfolio-black">Proficiency</h3>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <motion.div key={skill.name} variants={itemVariants} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-portfolio-black font-medium">{skill.name}</span>
                      <span className="text-portfolio-muted">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 h-2 rounded-full">
                      <motion.div
                        className="h-2 bg-portfolio-black rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Categories */}
            <motion.div variants={itemVariants} className="space-y-8">
              <h3 className="text-2xl font-medium text-portfolio-black">Categories</h3>
              <div className="space-y-8">
                {categories.map((category, index) => (
                  <motion.div key={category.title} variants={itemVariants} className="space-y-4">
                    <h4 className="text-lg font-medium text-portfolio-black">{category.title}</h4>
                    <div className="flex flex-wrap gap-2">
                      {category.items.map((item, itemIndex) => (
                        <motion.span
                          key={item}
                          className="px-3 py-2 border border-portfolio-black text-portfolio-black text-sm font-medium"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: 0.7 + index * 0.2 + itemIndex * 0.1 }}
                          whileHover={{ scale: 1.05 }}
                        >
                          {item}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};
