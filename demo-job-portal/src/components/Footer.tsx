import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="container">
        <div className="footer-inner">
          <div>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '13px' }}>
              &copy; {new Date().getFullYear()} AccessApply Jobs. All rights reserved. Built with accessibility in mind.
            </p>
          </div>
          <div className="footer-links">
            <Link to="/jobs">All Jobs</Link>
            <a href="#accessibility" onClick={(e) => { e.preventDefault(); alert("AccessApply Jobs is built with semantic HTML5 and WCAG AA standards."); }}>Accessibility Statement</a>
            <a href="#privacy" onClick={(e) => { e.preventDefault(); alert("Demo job portal. No personal information is stored or transmitted externally."); }}>Privacy</a>
            <a href="#terms" onClick={(e) => { e.preventDefault(); alert("Demo portal for AccessApply assistive automation testing."); }}>Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
