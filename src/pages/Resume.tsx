import { motion } from 'framer-motion';
import { CentralEmblem } from '@/components/portfolio/CentralEmblem';
import { Download, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

export const Resume = () => {
  const { toast } = useToast();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const handleDownload = () => {
    toast({
      title: "Download started",
      description: "Your resume download will begin shortly.",
    });
  };

  const experience = [
    {
      title: "Frontend Developer",
      company: "Creative Solutions Ltd.",
      period: "2025 - 2026",
      description:
        "Built responsive user interfaces using React and TypeScript. Collaborated with design teams to create seamless UI experiences and maintain code quality.",
    },
  ];

  const education = [
    {
      degree: "B.Sc Computer Science",
      school: "Madurai Kamaraj University",
      period: "2020 - 2023",
      description:
        "Focused on web development, software engineering, and modern JavaScript frameworks.",
    },
  ];

  const courses = [
    {
      title: "UI Development with React JS",
      institute: "Online Certified Course",
      year: "2024",
      description:
        "Completed a professional certificate course focused on building interactive and responsive user interfaces with React JS.",
    },
  ];

  const projects = [
    {
      title: "Car Rental Platform",
      description:
        "Car booking system with real-time location tracking and admin dashboard (like Getaround).",
    },
    {
      title: "Auditing & Meeting Bot",
      description:
        "Client, user, and project management system with automated reminders and meeting recording bot.",
    },
    {
      title: "Office Food Ordering",
      description:
        "Platform for employees to place office food orders and track deliveries.",
    },
    {
      title: "Billing System",
      description:
        "Web app to manage invoices, payments, and billing details efficiently.",
    },
    {
      title: "Bus Booking Platform",
      description:
        "Online bus booking system with seat selection, pricing, and ticket generation.",
    },
    {
      title: "E-commerce Dress Purchase",
      description:
        "Online clothing store with product listing, cart, checkout, and order management.",
    },
    {
      title: "Hotel Booking System",
      description:
        "Tourist-focused hotel booking platform with search, booking, and payment features.",
    },
    {
      title: "Portfolio Website",
      description:
        "Personal portfolio website showcasing projects, skills, and resume.",
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
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

      {/* Resume Content */}
      <motion.div
        className="max-w-4xl mx-auto px-8 z-20 relative"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
        transition={{ duration: 0.6 }}
      >
        <motion.div className="space-y-16">
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center">
            <h1 className="text-6xl lg:text-7xl font-light text-portfolio-black leading-tight mb-8">
              Resume
            </h1>

            {/* Download Buttons */}
            <div className="flex justify-center gap-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  onClick={handleDownload}
                  className="bg-portfolio-black text-portfolio-bg hover:bg-portfolio-muted portfolio-transition-fast"
                >
                  <Download size={16} className="mr-2" />
                  Download PDF
                </Button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="outline"
                  className="border-portfolio-black text-portfolio-black hover:bg-portfolio-black hover:text-portfolio-bg portfolio-transition-fast"
                >
                  <ExternalLink size={16} className="mr-2" />
                  View Online
                </Button>
              </motion.div>
            </div>
          </motion.div>

          {/* Experience & Education */}
          <motion.div className="grid lg:grid-cols-2 gap-16">
            {/* Experience */}
            <motion.div variants={itemVariants} className="space-y-8">
              <h2 className="text-3xl font-light text-portfolio-black">Experience</h2>
              <div className="space-y-8">
                {experience.map((job, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="border-l-2 border-portfolio-black pl-6 space-y-2"
                  >
                    <h3 className="text-xl font-medium text-portfolio-black">{job.title}</h3>
                    <p className="text-portfolio-muted font-medium">{job.company}</p>
                    <p className="text-sm text-portfolio-muted">{job.period}</p>
                    <p className="text-portfolio-muted leading-relaxed">{job.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Education & Skills */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Education */}
              <div className="space-y-6">
                <h2 className="text-3xl font-light text-portfolio-black">Education</h2>
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="border-l-2 border-portfolio-black pl-6 space-y-2"
                  >
                    <h3 className="text-xl font-medium text-portfolio-black">{edu.degree}</h3>
                    <p className="text-portfolio-muted font-medium">{edu.school}</p>
                    <p className="text-sm text-portfolio-muted">{edu.period}</p>
                    <p className="text-portfolio-muted leading-relaxed">{edu.description}</p>
                  </motion.div>
                ))}
              </div>

              {/* Courses / Certificates */}
              <div className="space-y-6">
                <h2 className="text-3xl font-light text-portfolio-black">Courses / Certificates</h2>
                {courses.map((course, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="border-l-2 border-portfolio-black pl-6 space-y-2"
                  >
                    <h3 className="text-xl font-medium text-portfolio-black">{course.title}</h3>
                    <p className="text-portfolio-muted font-medium">{course.institute}</p>
                    <p className="text-sm text-portfolio-muted">{course.year}</p>
                    <p className="text-portfolio-muted leading-relaxed">{course.description}</p>
                  </motion.div>
                ))}
              </div>

              {/* Key Skills */}
              <div className="space-y-6">
                <h2 className="text-3xl font-light text-portfolio-black">Key Skills</h2>
                <div className="flex flex-wrap gap-2">
                  {[
                    "React",
                    "TypeScript",
                    "Next.js",
                    "HTML",
                    "CSS",
                    "Tailwind CSS",
                    "Bootstrap",
                    "Git",
                    "VS Code",
                  ].map((skill, index) => (
                    <motion.span
                      key={skill}
                      className="px-3 py-2 border border-portfolio-black text-portfolio-black text-sm font-medium"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Projects */}
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl font-light text-portfolio-black mb-6">Projects</h2>
            <div className="space-y-6">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="border-l-2 border-portfolio-black pl-6 space-y-1"
                >
                  <h3 className="text-xl font-medium text-portfolio-black">{project.title}</h3>
                  <p className="text-portfolio-muted leading-relaxed">{project.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};
