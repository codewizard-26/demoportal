import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Shield, Users, Sparkles } from 'lucide-react';
import { SearchBar } from '../components/SearchBar';
import { JobCard } from '../components/JobCard';
import { DEMO_JOBS, POPULAR_CATEGORIES } from '../data/jobs';

export const HomePage: React.FC = () => {
  // Show first 3 jobs as featured on home
  const featuredJobs = DEMO_JOBS.slice(0, 3);

  return (
    <main id="main-content" tabIndex={-1}>
      {/* Search & Hero Section */}
      <section className="search-banner-section" aria-labelledby="home-hero-heading">
        <div className="container">
          <div className="search-intro">
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: '13px',
                fontWeight: 600,
                color: 'var(--color-primary)',
                backgroundColor: 'var(--color-primary-light)',
                padding: '4px 10px',
                borderRadius: 'var(--radius-full)',
                marginBottom: '12px',
              }}
            >
              <Sparkles size={14} />
              <span>Verified Tech Opportunities</span>
            </span>
            <h1 id="home-hero-heading">
              Find Remote and Hybrid Careers Built for You
            </h1>
            <p>
              Explore top engineering, design, and quality assurance positions with transparent salaries, inclusive teams, and accessible hiring.
            </p>
          </div>

          {/* Core Search Bar with stable IDs: job-search-input, location-input, search-jobs */}
          <SearchBar />
        </div>
      </section>

      {/* Featured Jobs Section */}
      <section style={{ padding: '48px 0' }} aria-labelledby="featured-jobs-heading">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '24px' }}>
            <div>
              <h2 id="featured-jobs-heading" style={{ fontSize: '22px', marginBottom: '4px' }}>
                Featured Opportunities
              </h2>
              <p style={{ fontSize: '14px' }}>
                Handpicked open roles with verified compensation and remote work flexibility.
              </p>
            </div>
            <Link to="/jobs" className="btn btn-secondary" style={{ fontSize: '13px' }}>
              <span>View All 5 Jobs</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          <div className="jobs-list-layout">
            {featuredJobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        </div>
      </section>

      {/* Popular Job Categories */}
      <section style={{ padding: '40px 0 60px 0', backgroundColor: 'var(--color-bg-surface)', borderTop: '1px solid var(--color-border-subtle)' }} aria-labelledby="categories-heading">
        <div className="container">
          <h2 id="categories-heading" style={{ fontSize: '20px', marginBottom: '8px' }}>
            Explore Popular Job Categories
          </h2>
          <p style={{ fontSize: '14px', marginBottom: '20px' }}>
            Browse open listings organized by engineering specialization and technical domain.
          </p>

          <div className="categories-grid">
            {POPULAR_CATEGORIES.map((cat) => (
              <Link
                key={cat.name}
                to={`/jobs?q=${encodeURIComponent(cat.name)}`}
                className="category-card"
              >
                <div className="category-title">{cat.name}</div>
                <div className="category-count">{cat.count}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Accessibility Banner */}
      <section style={{ padding: '40px 0', borderTop: '1px solid var(--color-border-subtle)' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '24px',
            backgroundColor: 'var(--color-bg-page)',
            padding: '24px',
            borderRadius: 'var(--radius-md)',
            border: '1px solid var(--color-border-subtle)',
          }}>
            <div style={{ display: 'flex', gap: '12px' }}>
              <CheckCircle2 size={24} style={{ color: 'var(--color-success)', flexShrink: 0 }} />
              <div>
                <h3 style={{ fontSize: '15px', marginBottom: '4px' }}>100% Verified Employers</h3>
                <p style={{ fontSize: '13px' }}>Every job posting features verified salary bands and explicit work arrangement policies.</p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '12px' }}>
              <Shield size={24} style={{ color: 'var(--color-primary)', flexShrink: 0 }} />
              <div>
                <h3 style={{ fontSize: '15px', marginBottom: '4px' }}>WCAG Accessible Design</h3>
                <p style={{ fontSize: '13px' }}>Fully compatible with screen readers, keyboard navigation, and assistive AI agents.</p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '12px' }}>
              <Users size={24} style={{ color: 'var(--color-warning)', flexShrink: 0 }} />
              <div>
                <h3 style={{ fontSize: '15px', marginBottom: '4px' }}>Direct Applications</h3>
                <p style={{ fontSize: '13px' }}>Straightforward multi-step application forms without third-party redirects or intrusive tracking.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
