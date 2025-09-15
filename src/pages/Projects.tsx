import { motion } from 'framer-motion';
import { CentralEmblem } from '@/components/portfolio/CentralEmblem';
import { Github, ExternalLink, ArrowLeft } from 'lucide-react';
import  bgImg from '../assets/images/background.jpg';
import { useNavigate } from 'react-router-dom';

export const Projects = () => {
  const navigate = useNavigate();
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.3 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  const projects = [
    {
      title: "Car Rental System",
      description: "Car booking and location tracking with admin dashboard. Inspired by Getaround.",
      tech: ["React Js","Next.js", "TypeScript", "Tailwind CSS", "CSS","Redux"],
      github: "https://github.com",
      live: "https://github.com"
    },
    {
      title: "Auditing",
      description: "Client and project management with auto meeting reminders and recording bot.",
      tech: ["React Js", "TypeScript", "Tailwind CSS", "Redux"],
      github: "https://github.com",
      live: "https://github.com"
    },
    {
      title: "Food Ordering",
      description: "Internal app to order food products for office employees.",
      tech: ["React Js", "TypeScript", "Tailwind CSS", "Redux", "Framer Motion"],
      github: "https://github.com",
      live: "https://github.com"
    },
    {
      title: "Billing System",
      description: "A simple frontend billing interface for generating invoices and tracking payments.",
      tech: ["React Js", "Tailwind CSS", "Bootstrap"],
      github: "https://github.com",
      live: "https://github.com"
    },
    {
      title: "Bus Booking App",
      description: "Frontend interface for booking bus tickets with seat selection and schedules.",
      tech: ["Next.js", "Bootstrap", "CSS"],
      github: "https://github.com",
      live: "https://github.com"
    },
    {
      title: "E-Commerce (Dress Store)",
      description: "Minimalist e-commerce site for dress purchases with smooth UI and product catalog.",
      tech: ["React", "TypeScript", "Tailwind CSS", "Redux", "Framer Motion", "Bootstrap"],
      github: "https://github.com",
      live: "https://github.com"
    },
    {
      title: "Hotel Booking for Tourists",
      description: "Frontend hotel reservation system for tourists with search and booking interface.",
      tech: ["React", "TypeScript", "Tailwind CSS"],
      github: "https://github.com",
      live: "https://github.com"
    }
  ];

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden pb-10" style={{
          backgroundImage: `url(${bgImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          // height: "100vh",
          width: "100%",
        }}>
      {/* Circular Mask Background */}
      <motion.div
        className="absolute inset-0 bg-[#fcf6f4cc]"
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

      {/* Projects Content */}
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
            <h1 className="text-6xl lg:text-7xl font-light text-portfolio-black leading-tight mb-8">
              Projects
            </h1>
            <p className="text-lg text-portfolio-muted max-w-2xl mx-auto">
              Some of the projects I’ve built using frontend technologies like React, TypeScript, and Tailwind CSS.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" variants={itemVariants}>
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="group"
                variants={itemVariants}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="border border-2 backdrop-blur-sm border-portfolio-black p-6 h-full flex flex-col portfolio-transition-fast hover:shadow-lg">
                  {/* Project Header */}
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-medium text-portfolio-black">
                      {project.title}
                    </h3>
                    <div className="flex gap-2">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-portfolio-muted hover:text-portfolio-black portfolio-transition-fast"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Github size={20} />
                      </motion.a>
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-portfolio-muted hover:text-portfolio-black portfolio-transition-fast"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink size={20} />
                      </motion.a>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-portfolio-muted leading-relaxed mb-6 flex-grow">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 text-xs border border-portfolio-muted text-portfolio-muted"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};
