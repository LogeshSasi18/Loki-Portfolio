import { motion } from "framer-motion";
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Eye } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl: string;
  githubUrl: string;
  featured: boolean;
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, and admin dashboard.",
    image: "/api/placeholder/400/300",
    tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
    demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com/example",
    featured: true,
  },
  {
    id: 2,
    title: "AI Chat Application",
    description: "Real-time chat application with AI integration using OpenAI API. Built with React, Socket.io, and Express.js.",
    image: "/api/placeholder/400/300",
    tags: ["React", "Socket.io", "OpenAI", "Express"],
    demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com/example",
    featured: true,
  },
  {
    id: 3,
    title: "Task Management Tool",
    description: "Collaborative task management application with drag-and-drop functionality, real-time updates, and team collaboration features.",
    image: "/api/placeholder/400/300",
    tags: ["Vue.js", "Firebase", "Vuex", "CSS3"],
    demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com/example",
    featured: false,
  },
  {
    id: 4,
    title: "Weather Dashboard",
    description: "Interactive weather dashboard with data visualization, geolocation support, and 7-day forecast using multiple weather APIs.",
    image: "/api/placeholder/400/300",
    tags: ["JavaScript", "D3.js", "API", "Chart.js"],
    demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com/example",
    featured: false,
  },
  {
    id: 5,
    title: "Portfolio Website",
    description: "Responsive portfolio website with 3D animations, particle effects, and smooth transitions using Three.js and Framer Motion.",
    image: "/api/placeholder/400/300",
    tags: ["React", "Three.js", "Framer Motion", "Tailwind"],
    demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com/example",
    featured: true,
  },
  {
    id: 6,
    title: "Blockchain Voting App",
    description: "Decentralized voting application built on Ethereum blockchain with smart contracts and secure authentication.",
    image: "/api/placeholder/400/300",
    tags: ["Solidity", "Web3.js", "React", "Ethereum"],
    demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com/example",
    featured: false,
  },
];

const Projects = () => {
  const [filter, setFilter] = useState<"all" | "featured">("all");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const filteredProjects = filter === "all" ? projects : projects.filter(p => p.featured);

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
            My Projects
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
            A showcase of my latest work, featuring innovative solutions and cutting-edge technologies
          </p>

          {/* Filter Buttons */}
          <div className="flex justify-center gap-4">
            <Button
              variant={filter === "all" ? "default" : "outline"}
              onClick={() => setFilter("all")}
              className={filter === "all" ? "bg-neon-blue text-white" : "border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-white"}
            >
              All Projects
            </Button>
            <Button
              variant={filter === "featured" ? "default" : "outline"}
              onClick={() => setFilter("featured")}
              className={filter === "featured" ? "bg-neon-purple text-white" : "border-neon-purple text-neon-purple hover:bg-neon-purple hover:text-white"}
            >
              Featured
            </Button>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onHoverStart={() => setHoveredProject(project.id)}
              onHoverEnd={() => setHoveredProject(null)}
            >
              <Card className="glass overflow-hidden h-full hover:scale-105 hover:glow-primary transition-all duration-500">
                {/* Project Image */}
                <div className="relative overflow-hidden h-48 bg-gradient-to-br from-neon-blue/20 to-neon-purple/20">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-neon-cyan/30 to-neon-pink/30"
                    animate={{
                      opacity: hoveredProject === project.id ? 0.8 : 0.3,
                    }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Eye size={48} className="text-white/70" />
                  </div>
                  {project.featured && (
                    <Badge className="absolute top-4 right-4 bg-neon-purple text-white">
                      Featured
                    </Badge>
                  )}
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-neon-cyan">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs border-neon-blue text-neon-blue">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-background"
                      asChild
                    >
                      <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={16} className="mr-2" />
                        Demo
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 border-neon-purple text-neon-purple hover:bg-neon-purple hover:text-background"
                      asChild
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github size={16} className="mr-2" />
                        Code
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-muted-foreground mb-6">
            Interested in working together?
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-purple hover:to-neon-cyan text-white px-8 py-3 rounded-full"
            asChild
          >
            <a href="/contact">Let's Collaborate</a>
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Projects;