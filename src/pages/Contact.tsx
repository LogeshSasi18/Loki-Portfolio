import { motion } from "framer-motion";
import { CentralEmblem } from "@/components/portfolio/CentralEmblem";
import { Mail, Phone, MapPin, Send, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import emailjs from "emailjs-com";
import { useNavigate } from "react-router-dom";

export const Contact = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        "service_7vlp0z2", // Replace with your EmailJS service ID
        "template_2x4ym29", // Replace with your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        "anbEWpkJLSzDXET6o" // Replace with your EmailJS public key
      );

      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });

      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
      });
    }

    setIsSubmitting(false);
  };

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
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "logeshsasi18@gmail.com",
      href: "mailto:logeshsasi18@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 6374092685",
      href: "tel:+916374092685",
    },
    {
      icon: MapPin,
      label: "Theni",
      value: "Theni, Tamil Nadu",
      href: "#",
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Circular Mask Transition Background */}
      <motion.div
        className="absolute inset-0 bg-portfolio-bg"
        initial={{ clipPath: "circle(0% at 50% 50%)" }}
        animate={{ clipPath: "circle(150% at 50% 50%)" }}
        exit={{ clipPath: "circle(0% at 50% 50%)" }}
        transition={{ duration: 1.2 }}
      />

      {/* Central Emblem */}
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
      {/* Contact Content */}
      <motion.div
        className="max-w-6xl mx-auto px-8 z-20 relative"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
        transition={{ duration: 0.6 }}
      >
        <motion.div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Contact Info */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div>
              <h1 className="text-6xl lg:text-7xl font-light text-portfolio-black leading-tight mb-8">
                Say Hi..
              </h1>
              <p className="text-lg text-portfolio-muted leading-relaxed">
                I'm always open to discussing new opportunities, creative
                projects, or just having a chat about technology and design.
              </p>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  className="flex items-center gap-4 group portfolio-transition-fast"
                  variants={itemVariants}
                  whileHover={{ x: 10 }}
                >
                  <div className="p-3 border border-portfolio-black group-hover:bg-portfolio-black group-hover:text-portfolio-bg portfolio-transition-fast">
                    <info.icon size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-portfolio-muted">{info.label}</p>
                    <p className="text-portfolio-black font-medium">
                      {info.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* CTA */}
            <motion.div variants={itemVariants} className="pt-8">
              {/* <p className="text-portfolio-muted mb-4">
                Let's create something amazing together.
              </p> */}
              <motion.div
                className="w-16 h-16 border border-portfolio-black rounded-full flex items-center justify-center cursor-pointer group"
                whileHover={{ scale: 1.1, rotate: 360 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.5 }}
              >
                <Send size={20} className="text-portfolio-black" />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div variants={itemVariants}>
            <form onSubmit={handleSubmit} className="space-y-6 mt-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <Input
                    placeholder="Your Name"
                    className="border-portfolio-black focus:ring-portfolio-black bg-transparent"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    name="name"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Your Email"
                    className="border-portfolio-black focus:ring-portfolio-black bg-transparent"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    name="email"
                  />
                </div>
              </div>

              <div>
                <Input
                  placeholder="Subject"
                  className="border-portfolio-black focus:ring-portfolio-black bg-transparent"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  name="subject"
                />
              </div>

              <div>
                <Textarea
                  placeholder="Your Message"
                  rows={6}
                  className="border-portfolio-black focus:ring-portfolio-black bg-transparent resize-none"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  name="message"
                />
              </div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-portfolio-black text-portfolio-bg hover:bg-portfolio-muted portfolio-transition-fast"
                >
                  {isSubmitting ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                    />
                  ) : (
                    <>
                      Send Message
                      <Send size={16} className="ml-2" />
                    </>
                  )}
                </Button>
              </motion.div>
            </form>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};
