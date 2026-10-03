import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, DollarSign, Briefcase, Calendar } from 'lucide-react';
import { Job } from '../data/jobs';

interface JobCardProps {
  job: Job;
}

export const JobCard: React.FC<JobCardProps> = ({ job }) => {
  const getBadgeClass = (type: string) => {
    switch (type) {
      case 'Remote':
        return 'badge-tag badge-remote';
      case 'Hybrid':
        return 'badge-tag badge-hybrid';
      default:
        return 'badge-tag badge-onsite';
    }
  };

  return (
    <article
      id={job.cardId}
      className="job-card"
      aria-labelledby={job.titleId}
    >
      <div className="job-card-header">
        <div className="job-card-main-info">
          {/* Company Monogram Avatar */}
          <div className="company-avatar" aria-hidden="true">
            {job.company.substring(0, 2).toUpperCase()}
          </div>

          <div className="job-title-group">
            <h2 id={job.titleId}>
              <Link to={`/jobs/${job.id}`} className="job-title-link">
                {job.title}
              </Link>
            </h2>
            <div className="company-name">{job.company}</div>

            <div className="job-meta-row">
              <span className="job-meta-item">
                <MapPin size={14} aria-hidden="true" />
                <span>{job.location}</span>
              </span>

              <span className="job-meta-item job-salary-badge">
                <DollarSign size={14} aria-hidden="true" />
                <span>{job.salary}</span>
              </span>

              <span className="job-meta-item">
                <Briefcase size={14} aria-hidden="true" />
                <span>{job.jobType}</span>
              </span>

              <span className={getBadgeClass(job.workplaceType)}>
                {job.workplaceType}
              </span>
            </div>
          </div>
        </div>

        {/* View Job Primary Button */}
        <div>
          <Link
            id={job.viewId}
            to={`/jobs/${job.id}`}
            className="btn btn-secondary"
            aria-label={`View Job details for ${job.title} at ${job.company}`}
          >
            View Job
          </Link>
        </div>
      </div>

      {/* Short Job Description */}
      <p className="job-card-description">
        {job.shortDescription}
      </p>

      {/* Card Footer with Skills and Posted Date */}
      <div className="job-card-footer">
        <div className="job-skills-tags" aria-label="Required Key Skills">
          {job.skills.slice(0, 5).map((skill) => (
            <span key={skill} className="skill-tag">
              {skill}
            </span>
          ))}
        </div>

        <div className="job-meta-item" style={{ fontSize: '12px', color: 'var(--color-text-muted)' }}>
          <Calendar size={13} aria-hidden="true" />
          <span>Posted {job.postedDate}</span>
        </div>
      </div>
    </article>
  );
};
