import React, { ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

interface PageWrapperProps {
  children: ReactNode;
}

const PageWrapper: React.FC<PageWrapperProps> = ({ children }) => {
  const location = useLocation();

  return (
    <motion.div
      key={location.pathname}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="min-h-screen w-full relative overflow-hidden"
    >
       {/* Global Technical Grid - Fixed to viewport for consistent feel */}
       <div className="fixed inset-0 bg-grid-pattern bg-[size:40px_40px] opacity-[0.15] pointer-events-none z-0" />
       
       {/* Scanline Effect - Subtle movement */}
       <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-[0.03]">
          <div className="w-full h-[50vh] bg-gradient-to-b from-transparent via-black to-transparent animate-scan" />
       </div>

       {/* Main Content Area */}
       <main className="relative z-10">
          {children}
       </main>
    </motion.div>
  );
};

export default PageWrapper;
