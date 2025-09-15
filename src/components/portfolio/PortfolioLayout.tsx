import { motion, AnimatePresence } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaYoutube,
} from "react-icons/fa";
import { useEffect, useState } from "react";
import { ArrowLeft, MessageCircle } from "lucide-react";

type PortfolioLayoutProps = {
  children: React.ReactNode;
  showDetails?: boolean;
};

export const PortfolioLayout: React.FC<PortfolioLayoutProps> = ({
  children,
  showDetails = false,
}) => {
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/";
  const [showBackButton, setShowBackButton] = useState(false);

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === "Escape" && !isHomePage) {
        navigate("/");
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [isHomePage, navigate]);

  useEffect(() => {
    setShowBackButton(!isHomePage);
  }, [isHomePage]);

  const socialIcons = [
    { Icon: FaLinkedin, href: "https://www.linkedin.com/in/logeshsasi18" },
    { Icon: FaGithub, href: "https://github.com/LogeshSasi18" },
    { Icon: FaTwitter, href: "https://twitter.com/" },
    { Icon: FaFacebook, href: "https://www.facebook.com/logeshsasi18/" },
    { Icon: FaYoutube, href: "https://www.youtube.com/" },
  ];

  return (
    <div className="min-h-screen bg-portfolio-bg relative overflow-hidden">
      {/* Top Navigation */}
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center p-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {/* Logo */}
        <motion.button
          className={`text-color-black logo-font text-4xl font-bold tracking-wide portfolio-transition-fast ${
            showDetails ? "text-white" : "text-portfolio-black hover:text-portfolio-muted"
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Loki
        </motion.button>

        {/* Resume Link */}
        <motion.button
          className={`text-color-black responsive-PL-h1 text-2xl font-[500] portfolio-transition-fast ml-[-390px] ${
            showDetails ? "text-white" : "text-portfolio-black hover:text-portfolio-muted"
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/resume")}
        >
          Resume
        </motion.button>

        {/* Back Arrow */}
        <AnimatePresence>
          {showBackButton && (
            <motion.button
              className={`portfolio-transition-fast ${
                showDetails ? "text-white" : "text-portfolio-black hover:text-portfolio-muted"
              }`}
              onClick={() => navigate("/")}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.25 }}
            >
              <ArrowLeft size={24} />
            </motion.button>
          )}
        </AnimatePresence>

        {/* Say Hi Link */}
        <motion.button
          className={`text-2xl font-[500] portfolio-transition-fast flex items-center gap-2 
            text-portfolio-black hover:text-portfolio-muted"
          `}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/contact")}
        >
          Say Hi..
          <MessageCircle size={16} />
        </motion.button>
      </motion.nav>

      {/* Left Sidebar */}
      <motion.aside
        className={`fixed left-0 top-1/2 -translate-y-1/2 z-40 flex flex-col items-center gap-8 portfolio-transition-fast
          `}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        {/* Social Icons */}
        <div className="flex flex-col gap-4 px-6">
          {socialIcons.map(({ Icon, href }, index) => (
            <motion.a
              key={index}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={Icon.name}
              className={`text-color-black portfolio-transition-fast ${
                showDetails ? "text-white hover:text-gray-300" : "text-portfolio-black hover:text-portfolio-muted"
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
            >
              <Icon size={20} />
            </motion.a>
          ))}
        </div>

        <div
          className={`text-color-line w-[3px] h-[120px] transition-all duration-500 ${
            showDetails ? "bg-white" : "bg-portfolio-black"
          }`}
        />
      </motion.aside>

      {/* Right Side Label */}
      <motion.aside
        className="fixed left-0 top-1/3 -translate-y-1/2 z-40"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <motion.button
          className={`text-color-black sidebar-text text-2xl font-[500] portfolio-transition-fast px-5 mt-[-40px] ${
            showDetails ? "text-white" : "text-portfolio-black hover:text-portfolio-muted"
          }`}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.9 }}
          whileHover={{ scale: 1.05 }}
          onClick={() => navigate("/projects")}
        >
          Projects
        </motion.button>
      </motion.aside>

      {/* Bottom Footer */}
      <motion.footer
        className="fixed bottom-0 left-1/3 right-0 z-40 flex justify-between items-center p-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <motion.button
          className={`text-color-black responsive-PL-about text-2xl font-[500] portfolio-transition-fast ${
            showDetails ? "text-white" : "text-portfolio-black hover:text-portfolio-muted"
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/about")}
        >
          About
        </motion.button>
      </motion.footer>

      <motion.footer
        className="fixed bottom-0 right-1/3 z-40 flex justify-between items-center p-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <motion.button
          className={`responsive-PL-h2 text-2xl font-[500] portfolio-transition-fast text-portfolio-black hover:text-portfolio-muted`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/skills")}
        >
          My Skills
        </motion.button>
      </motion.footer>

      {/* Main Content */}
      <main className="relative z-10">{children}</main>
    </div>
  );
};
