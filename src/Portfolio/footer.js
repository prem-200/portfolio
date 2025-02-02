import React from 'react';
import '../App.css';  // Optional: Custom CSS for styling

const Footer = () => {
  const currentYear = new Date().getFullYear(); // Automatically updates the year

  return (
    <footer className="footer">
        <p>
          &copy; {currentYear} Prem. All rights reserved.
        </p>
    </footer>
  );
};

export default Footer;
