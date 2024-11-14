import React from 'react';
import '../App.css';  // Optional: Custom CSS for styling

const Footer = () => {
  const currentYear = new Date().getFullYear(); // Automatically updates the year

  return (
    <footer className="footer">
      <div className="container">
        <p>
          &copy; {currentYear} Prem. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
