import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { PortfolioLayout } from "@/components/portfolio/PortfolioLayout";
import { Hero } from "@/pages/Hero";
import { About } from "@/pages/About";
import { Projects } from "@/pages/Projects";
import { Skills } from "@/pages/Skills";
import { Contact } from "@/pages/Contact";
import { Resume } from "@/pages/Resume";
import NotFound from "./pages/NotFound";
import { useState } from "react";

const queryClient = new QueryClient();

const App = () => {
  // parent state
  const [showDetails, setShowDetails] = useState(false);

  // callback from child
  const handleHeroToggle = (value: boolean) => {
    setShowDetails(value);
    console.log("Child sent:", value);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          {/* Pass state into PortfolioLayout if needed */}
          <AnimatePresence mode="wait">
            <Routes>
              <Route
                path="/"
                element={
                  <PortfolioLayout showDetails={showDetails}>
                    <Hero onToggle={handleHeroToggle} />
                  </PortfolioLayout>
                }
              />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </AnimatePresence>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
