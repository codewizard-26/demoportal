import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowLeft, Building, User, FileText, Calendar, Check } from 'lucide-react';
import { getLastApplication } from '../utils/storage';

export const ApplicationSuccessPage: React.FC = () => {
  const application = getLastApplication();

  return (
    <main id="main-content" tabIndex={-1} className="success-page-layout">
      <div className="container">
        <div className="success-card">
          {/* Success Checkmark Badge */}
          <div className="success-icon-badge" aria-hidden="true">
            <Check size={36} strokeWidth={2.5} />
          </div>

          <h1 id="success-heading">Application Submitted Successfully</h1>
          <p className="success-subtitle">
            Thank you for applying. Your application has been received and routed directly to the hiring team.
          </p>

          {/* Submission Details Receipt */}
          <div className="receipt-table-box" aria-labelledby="receipt-heading">
            <h2 id="receipt-heading" className="sr-only">Application Summary Details</h2>

            <div className="receipt-row">
              <span className="receipt-key">Application ID:</span>
              <span className="receipt-val" style={{ fontFamily: 'monospace', letterSpacing: '0.5px' }}>
                {application.applicationId}
              </span>
            </div>

            <div className="receipt-row">
              <span className="receipt-key">Job Title:</span>
              <span className="receipt-val">{application.jobTitle}</span>
            </div>

            <div className="receipt-row">
              <span className="receipt-key">Company:</span>
              <span className="receipt-val">{application.company}</span>
            </div>

            <div className="receipt-row">
              <span className="receipt-key">Applicant:</span>
              <span className="receipt-val">{application.fullName}</span>
            </div>

            <div className="receipt-row">
              <span className="receipt-key">Email:</span>
              <span className="receipt-val">{application.email}</span>
            </div>

            <div className="receipt-row">
              <span className="receipt-key">Submission Date:</span>
              <span className="receipt-val">{application.submittedAt}</span>
            </div>

            <div className="receipt-row">
              <span className="receipt-key">Status:</span>
              <span className="receipt-val">
                <span className="receipt-status-badge">
                  {application.status}
                </span>
              </span>
            </div>
          </div>

          {/* Next Steps Information Box */}
          <div style={{
            backgroundColor: 'var(--color-primary-light)',
            border: '1px solid var(--color-primary-border)',
            borderRadius: 'var(--radius-md)',
            padding: '16px',
            marginBottom: '28px',
            textAlign: 'left',
          }}>
            <h3 style={{ fontSize: '14px', color: 'var(--color-primary)', marginBottom: '4px', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <CheckCircle2 size={16} /> Next Steps
            </h3>
            <p style={{ fontSize: '13px', color: 'var(--color-text-secondary)', margin: 0 }}>
              The recruiting team at {application.company} will review your credentials and get back to you within 3 business days via {application.email}.
            </p>
          </div>

          {/* Back to Jobs Button */}
          <div>
            <Link
              id="back-to-jobs"
              to="/jobs"
              className="btn btn-secondary btn-large"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
            >
              <ArrowLeft size={16} />
              <span>Back to Jobs</span>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};
