import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Briefcase, CheckCircle2 } from 'lucide-react';

export const Header: React.FC = () => {
  const location = useLocation();

  return (
    <>
      {/* Accessible Skip Link */}
      <a href="#main-content" className="sr-only" style={{
        position: 'absolute',
        top: '-100px',
        left: '16px',
        background: '#1d4ed8',
        color: '#fff',
        padding: '8px 16px',
        borderRadius: '4px',
        zIndex: 9999,
        transition: 'top 0.2s ease',
      }}
      onFocus={(e) => { e.currentTarget.style.top = '16px'; }}
      onBlur={(e) => { e.currentTarget.style.top = '-100px'; }}
      >
        Skip to main content
      </a>

      <header className="site-header" role="banner">
        <div className="container">
          <div className="nav-inner">
            <Link to="/" className="brand-logo" aria-label="AccessApply Jobs Home">
              <div className="brand-icon-box" aria-hidden="true">
                <Briefcase size={20} />
              </div>
              <div className="brand-text">
                <span className="brand-title">AccessApply Jobs</span>
                <span className="brand-subtitle">Verified Career Platform</span>
              </div>
            </Link>

            <nav aria-label="Primary Navigation">
              <ul className="nav-links">
                <li>
                  <Link
                    to="/"
                    className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/jobs"
                    className={`nav-link ${location.pathname.startsWith('/jobs') ? 'active' : ''}`}
                  >
                    Find Jobs
                  </Link>
                </li>
              </ul>
            </nav>

            <div className="nav-actions">
              <span className="badge-accessible" title="Verified for WCAG Accessibility & Agent Interoperability">
                <CheckCircle2 size={14} />
                <span>WCAG Accessible</span>
              </span>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
