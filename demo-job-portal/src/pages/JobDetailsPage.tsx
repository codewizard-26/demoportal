import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  MapPin,
  DollarSign,
  Briefcase,
  Calendar,
  Building,
  ArrowLeft,
  CheckCircle,
  Share2,
  Bookmark,
  Award,
} from 'lucide-react';
import { DEMO_JOBS } from '../data/jobs';

export const JobDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  // Find job by ID or default to job 1
  const job = DEMO_JOBS.find((j) => j.id === id) || DEMO_JOBS[0];

  const handleApplyClick = () => {
    navigate(`/jobs/${job.id}/apply`);
  };

  return (
    <main id="main-content" tabIndex={-1} className="job-details-container">
      <div className="container">
        {/* Breadcrumb Navigation */}
        <nav className="breadcrumb-nav" aria-label="Breadcrumb">
          <Link to="/jobs" style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
            <ArrowLeft size={14} /> Back to Jobs
          </Link>
          <span>/</span>
          <span>{job.department}</span>
          <span>/</span>
          <span style={{ color: 'var(--color-text-main)', fontWeight: 600 }}>{job.title}</span>
        </nav>

        {/* Primary Job Card */}
        <div className="job-details-card">
          <div className="job-details-header">
            <div className="job-details-top-row">
              <div style={{ display: 'flex', gap: '20px' }}>
                <div
                  className="company-avatar"
                  style={{ width: '60px', height: '60px', fontSize: '22px' }}
                  aria-hidden="true"
                >
                  {job.company.substring(0, 2).toUpperCase()}
                </div>

                <div className="job-details-title-box">
                  <h1 id="job-title-heading">{job.title}</h1>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '16px', fontWeight: 600, color: 'var(--color-text-secondary)' }}>
                    <Building size={16} aria-hidden="true" />
                    <span>{job.company}</span>
                    <span>&middot;</span>
                    <span style={{ fontSize: '14px', color: 'var(--color-text-muted)' }}>{job.department}</span>
                  </div>
                </div>
              </div>

              {/* Primary Apply Action Button: id="apply-button" */}
              <div className="job-details-cta-box">
                <button
                  type="button"
                  className="btn btn-secondary"
                  aria-label="Save job for later"
                  onClick={() => alert("Job saved to your demo bookmarks.")}
                >
                  <Bookmark size={16} />
                  <span>Save</span>
                </button>

                <button
                  id="apply-button"
                  type="button"
                  className="btn btn-primary btn-large"
                  onClick={handleApplyClick}
                  aria-label={`Apply for ${job.title} position at ${job.company}`}
                >
                  Apply for this job
                </button>
              </div>
            </div>

            {/* Quick Facts / Highlights Grid */}
            <div className="job-highlights-grid" aria-label="Role Summary">
              <div className="highlight-item">
                <span className="highlight-label">Salary Compensation</span>
                <span className="highlight-value" style={{ color: 'var(--color-primary)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <DollarSign size={16} aria-hidden="true" />
                  {job.salary}
                </span>
              </div>

              <div className="highlight-item">
                <span className="highlight-label">Location</span>
                <span className="highlight-value" style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <MapPin size={16} aria-hidden="true" />
                  {job.location}
                </span>
              </div>

              <div className="highlight-item">
                <span className="highlight-label">Work Arrangement</span>
                <span className="highlight-value" style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <Briefcase size={16} aria-hidden="true" />
                  {job.workplaceType} &middot; {job.jobType}
                </span>
              </div>

              <div className="highlight-item">
                <span className="highlight-label">Experience Required</span>
                <span className="highlight-value" style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <Award size={16} aria-hidden="true" />
                  {job.experienceLevel}
                </span>
              </div>
            </div>
          </div>

          {/* Natural Language Job Description for Gemini Agent */}
          <div className="job-details-content">
            {/* About the Role */}
            <section className="details-section" aria-labelledby="about-role-heading">
              <h2 id="about-role-heading">About The Role</h2>
              <p>{job.description}</p>
            </section>

            {/* Responsibilities */}
            <section className="details-section" aria-labelledby="responsibilities-heading">
              <h2 id="responsibilities-heading">Key Responsibilities</h2>
              <ul className="details-list">
                {job.responsibilities.map((resp, idx) => (
                  <li key={idx}>{resp}</li>
                ))}
              </ul>
            </section>

            {/* Requirements */}
            <section className="details-section" aria-labelledby="requirements-heading">
              <h2 id="requirements-heading">Requirements & Qualifications</h2>
              <ul className="details-list">
                {job.requirements.map((req, idx) => (
                  <li key={idx}>{req}</li>
                ))}
              </ul>
            </section>

            {/* Required Skills & Technologies */}
            <section className="details-section" aria-labelledby="skills-heading">
              <h2 id="skills-heading">Required Technical Skills</h2>
              <div className="skills-pill-box">
                {job.skills.map((skill) => (
                  <span key={skill} className="skill-pill">
                    {skill}
                  </span>
                ))}
              </div>
            </section>

            {/* Benefits & Perks */}
            <section className="details-section" aria-labelledby="benefits-heading">
              <h2 id="benefits-heading">Compensation, Benefits & Perks</h2>
              <ul className="details-list">
                {job.benefits.map((benefit, idx) => (
                  <li key={idx}>{benefit}</li>
                ))}
              </ul>
            </section>

            {/* About the Company */}
            <section className="details-section" aria-labelledby="about-company-heading">
              <h2 id="about-company-heading">About {job.company}</h2>
              <p>{job.aboutCompany}</p>
            </section>

            {/* Bottom Apply Bar */}
            <div className="bottom-apply-banner">
              <div>
                <h3 style={{ fontSize: '18px', marginBottom: '4px' }}>
                  Interested in joining {job.company}?
                </h3>
                <p style={{ fontSize: '14px', margin: 0 }}>
                  Submit your application in just a few minutes through our accessible portal.
                </p>
              </div>

              {/* Duplicate or secondary apply button with clear accessible label */}
              <button
                type="button"
                className="btn btn-primary btn-large"
                onClick={handleApplyClick}
                aria-label={`Apply now for ${job.title}`}
              >
                Apply for this job
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
