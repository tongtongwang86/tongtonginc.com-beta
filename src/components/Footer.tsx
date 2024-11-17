"use client";
import React from 'react';

const Footer = () => {
  return (
    <footer className="gradient-footer">
      <div className="content">
        <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
        <p>
          <a href="/privacy-policy">Privacy Policy</a> | <a href="/terms-of-service">Terms of Service</a>
        </p>
      </div>
      <style jsx>{`
        .gradient-footer {
          background: linear-gradient(90deg, #ff7e5f, #feb47b); /* Customize your gradient colors here */
          color: white;
          padding: 20px;
          text-align: center;
          margin-top: auto; /* Makes sure footer stays at the bottom */
        }

        .gradient-footer .content p {
          margin: 5px 0;
        }

        .gradient-footer a {
          color: white;
          text-decoration: underline;
        }

        .gradient-footer a:hover {
          color: #ffd1a4; /* Hover effect for links */
        }
      `}</style>
    </footer>
  );
};

export default Footer;
