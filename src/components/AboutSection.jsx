import React from 'react';
import { motion } from 'framer-motion';

export const AboutSection = () => {
  return (
    <motion.section
      id="about"
      className="about-section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2>Tentang Saya</h2>
      <div className="about-content">
        <p>
          Saya adalah seorang frontend developer dengan hasrat untuk menciptakan pengalaman pengguna yang bersih, modern, dan intuitif. Saya percaya bahwa desain yang baik adalah tentang bagaimana sesuatu itu berfungsi, bukan hanya bagaimana kelihatannya. Saya terampil dalam teknologi modern seperti React, Next.js, dan Figma.
        </p>
      </div>
    </motion.section>
  );
};