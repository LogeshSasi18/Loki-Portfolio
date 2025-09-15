import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Home, User, Briefcase, Code, Mail, FileText, Users, BookOpen } from "lucide-react";

interface NavItem {
  path: string;
  label: string;
  icon: React.ReactNode;
}

const navItems: NavItem[] = [
  { path: "/", label: "Home", icon: <Home size={20} /> },
  { path: "/about", label: "About", icon: <User size={20} /> },
  { path: "/projects", label: "Projects", icon: <Briefcase size={20} /> },
  { path: "/skills", label: "Skills", icon: <Code size={20} /> },
  { path: "/contact", label: "Contact", icon: <Mail size={20} /> },
  { path: "/articles", label: "Articles", icon: <BookOpen size={20} /> },
  { path: "/profiles", label: "Profiles", icon: <Users size={20} /> },
  { path: "/resume", label: "Resume", icon: <FileText size={20} /> },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav 
        className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 hidden md:block"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="glass px-6 py-3 rounded-full">
          <div className="flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 ${
                  location.pathname === item.path
                    ? "text-primary bg-primary/10 glow-primary"
                    : "text-foreground hover:text-primary hover:bg-primary/5"
                }`}
              >
                {item.icon}
                <span className="text-sm font-medium">{item.label}</span>
                {location.pathname === item.path && (
                  <motion.div
                    className="absolute inset-0 bg-primary/20 rounded-full"
                    layoutId="activeTab"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </Link>
            ))}
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navigation Button */}
      <motion.button
        className="fixed top-6 right-6 z-50 md:hidden glass p-3 rounded-full"
        onClick={() => setIsOpen(!isOpen)}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3 }}
        whileTap={{ scale: 0.9 }}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </motion.button>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute inset-0 bg-background/80 backdrop-blur-lg" />
            <motion.div
              className="absolute top-20 right-6 glass p-6 rounded-2xl min-w-[200px]"
              initial={{ scale: 0, originX: 1, originY: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              transition={{ type: "spring", bounce: 0.3, duration: 0.4 }}
            >
              <div className="space-y-2">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                        location.pathname === item.path
                          ? "text-primary bg-primary/10 glow-primary"
                          : "text-foreground hover:text-primary hover:bg-primary/5"
                      }`}
                    >
                      {item.icon}
                      <span className="font-medium">{item.label}</span>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;