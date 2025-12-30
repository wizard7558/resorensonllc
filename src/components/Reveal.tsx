import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface RevealProps {
  children: ReactNode;
  width?: 'fit-content' | '100%';
  delay?: number;
}

export const Reveal = ({ children, width = '100%', delay = 0 }: RevealProps) => {
  return (
    <div style={{ width, position: 'relative', overflow: 'hidden' }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 50, scale: 0.98 },
          visible: { opacity: 1, y: 0, scale: 1 },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "0px 0px -33% 0px" }}
        transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1], delay }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Reveal;
