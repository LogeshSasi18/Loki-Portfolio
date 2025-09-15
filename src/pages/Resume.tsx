import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, Eye, Calendar, MapPin, Mail, Phone, Globe } from "lucide-react";

const personalInfo = {
  name: "John Doe",
  title: "Full Stack Developer",
  email: "john.doe@example.com",
  phone: "+1 (555) 123-4567",
  location: "San Francisco, CA",
  website: "johndoe.dev",
};

const experience = [
  {
    title: "Senior Full Stack Developer",
    company: "TechCorp Inc.",
    location: "San Francisco, CA",
    period: "2022 - Present",
    description: "Led development of scalable web applications serving 100K+ users. Implemented microservices architecture and improved system performance by 40%.",
    achievements: [
      "Built and deployed 15+ production applications",
      "Mentored 5 junior developers",
      "Reduced page load times by 60%",
      "Implemented CI/CD pipelines"
    ],
    technologies: ["React", "Node.js", "AWS", "PostgreSQL", "Docker"]
  },
  {
    title: "Full Stack Developer",
    company: "StartupXYZ",
    location: "Remote",
    period: "2020 - 2022",
    description: "Developed MVP and scaled platform from 0 to 10K users. Built real-time features and integrated payment systems.",
    achievements: [
      "Developed complete product from scratch",
      "Implemented real-time chat functionality",
      "Integrated Stripe payment processing",
      "Optimized database queries for better performance"
    ],
    technologies: ["Vue.js", "Express.js", "MongoDB", "Socket.io", "Stripe"]
  },
  {
    title: "Frontend Developer",
    company: "DesignAgency",
    location: "New York, NY",
    period: "2019 - 2020",
    description: "Created responsive web interfaces and collaborated with design teams to deliver pixel-perfect implementations.",
    achievements: [
      "Delivered 25+ client projects",
      "Improved mobile performance by 50%",
      "Implemented design system components",
      "Led frontend optimization initiatives"
    ],
    technologies: ["React", "SASS", "JavaScript", "Figma", "Adobe XD"]
  }
];

const education = [
  {
    degree: "Bachelor of Science in Computer Science",
    school: "University of Technology",
    location: "California, USA",
    period: "2015 - 2019",
    gpa: "3.8/4.0",
    highlights: ["Magna Cum Laude", "Dean's List", "Computer Science Society President"]
  }
];

const skills = {
  "Frontend": ["React", "TypeScript", "Vue.js", "Next.js", "Tailwind CSS", "Framer Motion"],
  "Backend": ["Node.js", "Python", "Express.js", "FastAPI", "GraphQL", "REST APIs"],
  "Database": ["PostgreSQL", "MongoDB", "Redis", "MySQL", "Firebase"],
  "DevOps": ["AWS", "Docker", "Kubernetes", "CI/CD", "GitHub Actions", "Terraform"],
  "Tools": ["Git", "VSCode", "Figma", "Postman", "Jira", "Slack"]
};

const Resume = () => {
  const handleDownload = () => {
    // In a real application, this would trigger a PDF download
    console.log("Downloading resume...");
    // You can replace this with actual PDF download logic
    window.open('/resume.pdf', '_blank');
  };

  const handlePreview = () => {
    // In a real application, this would open a PDF preview
    console.log("Opening resume preview...");
    window.open('/resume.pdf', '_blank');
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen py-20 px-6"
    >
      <div className="container mx-auto max-w-5xl">
        {/* Header */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
            Resume
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
            Download my complete resume or preview it below
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={handleDownload}
              className="bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-purple hover:to-neon-cyan text-white font-semibold px-8 py-3 rounded-full glow-primary"
            >
              <Download size={20} className="mr-2" />
              Download PDF
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={handlePreview}
              className="border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-background font-semibold px-8 py-3 rounded-full"
            >
              <Eye size={20} className="mr-2" />
              Preview
            </Button>
          </div>
        </motion.div>

        <div className="space-y-8">
          {/* Personal Information */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="glass p-8">
              <div className="text-center mb-6">
                <h2 className="text-3xl font-bold text-neon-cyan mb-2">{personalInfo.name}</h2>
                <p className="text-xl text-muted-foreground mb-4">{personalInfo.title}</p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 text-center">
                <div className="flex items-center justify-center space-x-2">
                  <Mail size={16} className="text-neon-blue" />
                  <span className="text-sm">{personalInfo.email}</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <Phone size={16} className="text-neon-purple" />
                  <span className="text-sm">{personalInfo.phone}</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <MapPin size={16} className="text-neon-cyan" />
                  <span className="text-sm">{personalInfo.location}</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <Globe size={16} className="text-neon-pink" />
                  <span className="text-sm">{personalInfo.website}</span>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Experience */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="glass p-8">
              <h2 className="text-2xl font-semibold mb-6 text-neon-purple">Professional Experience</h2>
              <div className="space-y-8">
                {experience.map((job, index) => (
                  <motion.div
                    key={index}
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    className="border-l-2 border-neon-blue/30 pl-6 relative"
                  >
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-neon-blue rounded-full"></div>
                    
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-2">
                      <h3 className="text-xl font-semibold text-neon-cyan">{job.title}</h3>
                      <div className="flex items-center space-x-2 text-muted-foreground">
                        <Calendar size={16} />
                        <span>{job.period}</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-3">
                      <p className="text-lg font-medium">{job.company}</p>
                      <div className="flex items-center space-x-2 text-muted-foreground">
                        <MapPin size={16} />
                        <span>{job.location}</span>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-4">{job.description}</p>

                    <div className="mb-4">
                      <h4 className="font-medium mb-2 text-neon-purple">Key Achievements:</h4>
                      <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                        {job.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex}>{achievement}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {job.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="border-neon-cyan text-neon-cyan">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Card className="glass p-8">
              <h2 className="text-2xl font-semibold mb-6 text-neon-blue">Education</h2>
              {education.map((edu, index) => (
                <div key={index} className="border-l-2 border-neon-purple/30 pl-6 relative">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-neon-purple rounded-full"></div>
                  
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-2">
                    <h3 className="text-xl font-semibold text-neon-cyan">{edu.degree}</h3>
                    <div className="flex items-center space-x-2 text-muted-foreground">
                      <Calendar size={16} />
                      <span>{edu.period}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-3">
                    <p className="text-lg font-medium">{edu.school}</p>
                    <div className="flex items-center space-x-2 text-muted-foreground">
                      <MapPin size={16} />
                      <span>{edu.location}</span>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-3">GPA: {edu.gpa}</p>

                  <div className="flex flex-wrap gap-2">
                    {edu.highlights.map((highlight) => (
                      <Badge key={highlight} variant="outline" className="border-neon-purple text-neon-purple">
                        {highlight}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </Card>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <Card className="glass p-8">
              <h2 className="text-2xl font-semibold mb-6 text-neon-cyan">Technical Skills</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {Object.entries(skills).map(([category, skillList], index) => (
                  <motion.div
                    key={category}
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                  >
                    <h3 className="font-semibold mb-3 text-neon-purple">{category}</h3>
                    <div className="flex flex-wrap gap-2">
                      {skillList.map((skill) => (
                        <Badge key={skill} variant="outline" className="border-neon-blue text-neon-blue">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Footer CTA */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.4 }}
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
            <a href="/contact">Let's Connect</a>
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Resume;