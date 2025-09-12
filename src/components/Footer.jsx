import React from 'react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <p>&copy; {currentYear} Alex Doe. Dibuat dengan ❤️ dan React.</p>
    </footer>
  );
};