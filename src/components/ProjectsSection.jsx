import React from 'react';
import { motion } from 'framer-motion';

// Data proyek (Anda bisa mengganti ini dengan data proyek Anda sendiri)
const projects = [
  {
    title: "Website E-commerce",
    description: "Sebuah platform e-commerce modern dengan fitur keranjang belanja, pembayaran, dan manajemen produk.",
    tags: ["React", "Node.js", "Express"],
    link: "#"
  },
  {
    title: "Aplikasi Task Management",
    description: "Aplikasi untuk mengatur tugas harian dengan antarmuka drag-and-drop yang intuitif.",
    tags: ["Vite", "Tailwind CSS", "Zustand"],
    link: "#"
  },
  {
    title: "Landing Page Perusahaan",
    description: "Desain dan pengembangan landing page untuk perusahaan startup teknologi dengan fokus pada konversi.",
    tags: ["HTML", "CSS", "JavaScript"],
    link: "#"
  }
];

export const ProjectsSection = () => {
  return (
    <motion.section
      id="projects"
      className="projects-section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2>Proyek Saya</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-tags">
              {project.tags.map(tag => <span key={tag}>{tag}</span>)}
            </div>
            <a href={project.link} target="_blank" rel="noopener noreferrer">Lihat Detail</a>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};