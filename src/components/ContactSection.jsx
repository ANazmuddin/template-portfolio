import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa6";

export const ContactSection = () => {
  return (
    <motion.section
      id="contact"
      className="contact-section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2>Hubungi Saya</h2>
      <p>Tertarik untuk bekerja sama? Mari terhubung!</p>
      <div className="contact-links">
        <a href="mailto:email@anda.com" aria-label="Email">
          <FaEnvelope />
        </a>
        <a href="https://github.com/username" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <FaGithub />
        </a>
        <a href="https://linkedin.com/in/username" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FaLinkedin />
        </a>
      </div>
    </motion.section>
  );
};