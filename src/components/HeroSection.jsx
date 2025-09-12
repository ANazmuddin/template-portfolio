import React from 'react';
import { motion } from 'framer-motion';

export const HeroSection = () => {
  return (
    <section id="hero" className="hero-section">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Halo, saya Alex Doe
      </motion.h1>
      <motion.p
        className="hero-subtitle"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Frontend Developer & UI/UX Enthusiast
      </motion.p>
      <motion.a
        href="#projects"
        className="hero-cta-button"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        Lihat Proyek Saya
      </motion.a>
    </section>
  );
};