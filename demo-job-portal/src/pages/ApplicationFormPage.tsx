import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, AlertCircle, CheckCircle2, ShieldCheck } from 'lucide-react';
import { DEMO_JOBS } from '../data/jobs';
import { JobApplication, ApplicationFormErrors } from '../types/application';
import { saveLastApplication } from '../utils/storage';

export const ApplicationFormPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const job = DEMO_JOBS.find((j) => j.id === id) || DEMO_JOBS[0];

  // Form State
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    location: '',
    resume: '',
    linkedin: '',
    github: '',
    coverLetter: '',
    yearsExperience: '',
    whyInterested: '',
    workAuthorization: '',
    workArrangement: '',
  });

  const [errors, setErrors] = useState<ApplicationFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear specific field error when user types
    if (errors[name as keyof ApplicationFormErrors]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name as keyof ApplicationFormErrors];
        return next;
      });
    }
  };

  const validateForm = (): boolean => {
    const newErrors: ApplicationFormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your full name.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address (e.g. name@example.com).';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Please enter your phone number.';
    }

    if (!formData.location.trim()) {
      newErrors.location = 'Please enter your current location.';
    }

    if (!formData.resume.trim()) {
      newErrors.resume = 'Please provide your resume URL or document filename.';
    }

    if (!formData.yearsExperience.trim()) {
      newErrors.yearsExperience = 'Please specify how many years of professional experience you have.';
    } else if (isNaN(Number(formData.yearsExperience.trim()))) {
      newErrors.yearsExperience = 'Years of experience must be a numeric value.';
    }

    if (!formData.whyInterested.trim()) {
      newErrors.whyInterested = 'Please share why you are interested in this position.';
    }

    if (!formData.workAuthorization.trim()) {
      newErrors.workAuthorization = 'Please specify your work authorization status.';
    }

    if (!formData.workArrangement.trim()) {
      newErrors.workArrangement = 'Please specify your preferred work arrangement.';
    }

    if (Object.keys(newErrors).length > 0) {
      newErrors.general = 'Please correct the highlighted errors before submitting your application.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      // Focus first erroneous element if possible
      window.scrollTo({ top: 150, behavior: 'smooth' });
      return;
    }

    setIsSubmitting(true);

    const submission: JobApplication = {
      jobId: job.id,
      jobTitle: job.title,
      company: job.company,
      fullName: formData.fullName.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim(),
      location: formData.location.trim(),
      resume: formData.resume.trim(),
      linkedin: formData.linkedin.trim() || undefined,
      github: formData.github.trim() || undefined,
      coverLetter: formData.coverLetter.trim() || undefined,
      yearsExperience: formData.yearsExperience.trim(),
      whyInterested: formData.whyInterested.trim(),
      workAuthorization: formData.workAuthorization.trim(),
      workArrangement: formData.workArrangement.trim(),
      applicationId: 'AA-2026-001',
      submittedAt: new Date().toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      }),
      status: 'Submitted',
    };

    saveLastApplication(submission);

    setTimeout(() => {
      setIsSubmitting(false);
      navigate('/application/success');
    }, 300);
  };

  return (
    <main id="main-content" tabIndex={-1} className="application-page-layout">
      <div className="container">
        {/* Back navigation */}
        <div style={{ marginBottom: '16px' }}>
          <Link to={`/jobs/${job.id}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '14px', fontWeight: 500 }}>
            <ArrowLeft size={16} /> Back to Job Details
          </Link>
        </div>

        {/* Application Page Header */}
        <div className="application-header">
          <h1>Apply for {job.title}</h1>
          <p style={{ color: 'var(--color-text-secondary)' }}>
            at <strong>{job.company}</strong> &middot; {job.location} ({job.salary})
          </p>
        </div>

        {/* Form Container Card */}
        <div className="form-card">
          {/* General Form Error Alert Banner (visible in DOM for PageContext) */}
          {errors.general && (
            <div id="error-summary" className="form-error-summary" role="alert">
              <AlertCircle size={18} aria-hidden="true" />
              <span>{errors.general}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} noValidate aria-label={`Job Application Form for ${job.title}`}>
            {/* Section 1: Contact Information */}
            <fieldset className="form-fieldset">
              <legend className="form-legend">1. Contact & Personal Information</legend>

              <div className="form-row-2">
                {/* Full Name */}
                <div className="form-group">
                  <label htmlFor="full-name" className="form-label">
                    Full Name <span className="required-star" aria-hidden="true">*</span>
                  </label>
                  <input
                    id="full-name"
                    name="fullName"
                    type="text"
                    className={`form-input ${errors.fullName ? 'invalid' : ''}`}
                    placeholder="Enter your full name"
                    value={formData.fullName}
                    onChange={handleChange}
                    aria-required="true"
                    aria-invalid={!!errors.fullName}
                    aria-describedby={errors.fullName ? 'error-full-name' : undefined}
                  />
                  {errors.fullName && (
                    <div id="error-full-name" className="field-error-message" role="alert">
                      {errors.fullName}
                    </div>
                  )}
                </div>

                {/* Email Address */}
                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    Email Address <span className="required-star" aria-hidden="true">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className={`form-input ${errors.email ? 'invalid' : ''}`}
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    aria-required="true"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? 'error-email' : undefined}
                  />
                  {errors.email && (
                    <div id="error-email" className="field-error-message" role="alert">
                      {errors.email}
                    </div>
                  )}
                </div>
              </div>

              <div className="form-row-2">
                {/* Phone Number */}
                <div className="form-group">
                  <label htmlFor="phone" className="form-label">
                    Phone Number <span className="required-star" aria-hidden="true">*</span>
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    className={`form-input ${errors.phone ? 'invalid' : ''}`}
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={handleChange}
                    aria-required="true"
                    aria-invalid={!!errors.phone}
                    aria-describedby={errors.phone ? 'error-phone' : undefined}
                  />
                  {errors.phone && (
                    <div id="error-phone" className="field-error-message" role="alert">
                      {errors.phone}
                    </div>
                  )}
                </div>

                {/* Location */}
                <div className="form-group">
                  <label htmlFor="location" className="form-label">
                    Current Location <span className="required-star" aria-hidden="true">*</span>
                  </label>
                  <input
                    id="location"
                    name="location"
                    type="text"
                    className={`form-input ${errors.location ? 'invalid' : ''}`}
                    placeholder="City, State / Country"
                    value={formData.location}
                    onChange={handleChange}
                    aria-required="true"
                    aria-invalid={!!errors.location}
                    aria-describedby={errors.location ? 'error-location' : undefined}
                  />
                  {errors.location && (
                    <div id="error-location" className="field-error-message" role="alert">
                      {errors.location}
                    </div>
                  )}
                </div>
              </div>
            </fieldset>

            {/* Section 2: Resume & Professional Links */}
            <fieldset className="form-fieldset">
              <legend className="form-legend">2. Resume & Professional Profiles</legend>

              {/* Resume */}
              <div className="form-group">
                <label htmlFor="resume" className="form-label">
                  Resume / CV <span className="required-star" aria-hidden="true">*</span>
                </label>
                <input
                  id="resume"
                  name="resume"
                  type="text"
                  className={`form-input ${errors.resume ? 'invalid' : ''}`}
                  placeholder="Enter resume URL or filename (e.g., https://example.com/resume.pdf)"
                  value={formData.resume}
                  onChange={handleChange}
                  aria-required="true"
                  aria-invalid={!!errors.resume}
                  aria-describedby={errors.resume ? 'error-resume' : 'hint-resume'}
                />
                <span id="hint-resume" className="form-hint">
                  Provide a direct link to your PDF resume or document cloud storage.
                </span>
                {errors.resume && (
                  <div id="error-resume" className="field-error-message" role="alert">
                    {errors.resume}
                  </div>
                )}
              </div>

              <div className="form-row-2">
                {/* LinkedIn */}
                <div className="form-group">
                  <label htmlFor="linkedin" className="form-label">
                    LinkedIn Profile
                  </label>
                  <input
                    id="linkedin"
                    name="linkedin"
                    type="url"
                    className="form-input"
                    placeholder="https://linkedin.com/in/username"
                    value={formData.linkedin}
                    onChange={handleChange}
                  />
                </div>

                {/* GitHub */}
                <div className="form-group">
                  <label htmlFor="github" className="form-label">
                    GitHub Profile
                  </label>
                  <input
                    id="github"
                    name="github"
                    type="url"
                    className="form-input"
                    placeholder="https://github.com/username"
                    value={formData.github}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </fieldset>

            {/* Section 3: Experience & Role Questions */}
            <fieldset className="form-fieldset">
              <legend className="form-legend">3. Experience & Application Questions</legend>

              {/* Years of Experience (Demonstrating ask_user) */}
              <div className="form-group">
                <label htmlFor="years-experience" className="form-label">
                  Years of Experience <span className="required-star" aria-hidden="true">*</span>
                </label>
                <input
                  id="years-experience"
                  name="yearsExperience"
                  type="number"
                  min="0"
                  max="50"
                  className={`form-input ${errors.yearsExperience ? 'invalid' : ''}`}
                  placeholder="e.g. 4"
                  value={formData.yearsExperience}
                  onChange={handleChange}
                  aria-required="true"
                  aria-invalid={!!errors.yearsExperience}
                  aria-describedby={errors.yearsExperience ? 'error-years-experience' : 'hint-years-experience'}
                />
                <span id="hint-years-experience" className="form-hint">
                  Total years of relevant professional engineering or domain experience.
                </span>
                {errors.yearsExperience && (
                  <div id="error-years-experience" className="field-error-message" role="alert">
                    {errors.yearsExperience}
                  </div>
                )}
              </div>

              {/* Cover Letter */}
              <div className="form-group">
                <label htmlFor="cover-letter" className="form-label">
                  Cover Letter / Introduction
                </label>
                <textarea
                  id="cover-letter"
                  name="coverLetter"
                  rows={4}
                  className="form-textarea"
                  placeholder="Briefly introduce yourself and outline why you are interested in this position"
                  value={formData.coverLetter}
                  onChange={handleChange}
                ></textarea>
              </div>

              {/* Why are you interested in this role? */}
              <div className="form-group">
                <label htmlFor="why-interested" className="form-label">
                  Why are you interested in this role? <span className="required-star" aria-hidden="true">*</span>
                </label>
                <textarea
                  id="why-interested"
                  name="whyInterested"
                  rows={3}
                  className={`form-textarea ${errors.whyInterested ? 'invalid' : ''}`}
                  placeholder="What excites you most about this role and company?"
                  value={formData.whyInterested}
                  onChange={handleChange}
                  aria-required="true"
                  aria-invalid={!!errors.whyInterested}
                  aria-describedby={errors.whyInterested ? 'error-why-interested' : undefined}
                ></textarea>
                {errors.whyInterested && (
                  <div id="error-why-interested" className="field-error-message" role="alert">
                    {errors.whyInterested}
                  </div>
                )}
              </div>
            </fieldset>

            {/* Section 4: Work Authorization & Arrangements */}
            <fieldset className="form-fieldset">
              <legend className="form-legend">4. Work Authorization & Preferences</legend>

              <div className="form-row-2">
                {/* Work Authorization */}
                <div className="form-group">
                  <label htmlFor="work-authorization" className="form-label">
                    Work Authorization <span className="required-star" aria-hidden="true">*</span>
                  </label>
                  <input
                    id="work-authorization"
                    name="workAuthorization"
                    type="text"
                    className={`form-input ${errors.workAuthorization ? 'invalid' : ''}`}
                    placeholder="e.g. Authorized to work without sponsorship"
                    value={formData.workAuthorization}
                    onChange={handleChange}
                    aria-required="true"
                    aria-invalid={!!errors.workAuthorization}
                    aria-describedby={errors.workAuthorization ? 'error-work-authorization' : undefined}
                  />
                  {errors.workAuthorization && (
                    <div id="error-work-authorization" className="field-error-message" role="alert">
                      {errors.workAuthorization}
                    </div>
                  )}
                </div>

                {/* Preferred Work Arrangement */}
                <div className="form-group">
                  <label htmlFor="work-arrangement" className="form-label">
                    Preferred Work Arrangement <span className="required-star" aria-hidden="true">*</span>
                  </label>
                  <input
                    id="work-arrangement"
                    name="workArrangement"
                    type="text"
                    className={`form-input ${errors.workArrangement ? 'invalid' : ''}`}
                    placeholder="e.g. Remote, Hybrid, or On-site"
                    value={formData.workArrangement}
                    onChange={handleChange}
                    aria-required="true"
                    aria-invalid={!!errors.workArrangement}
                    aria-describedby={errors.workArrangement ? 'error-work-arrangement' : undefined}
                  />
                  {errors.workArrangement && (
                    <div id="error-work-arrangement" className="field-error-message" role="alert">
                      {errors.workArrangement}
                    </div>
                  )}
                </div>
              </div>
            </fieldset>

            {/* Form Submit Action */}
            <div className="form-actions-box">
              <Link to={`/jobs/${job.id}`} className="btn btn-secondary">
                Cancel
              </Link>

              {/* Required Submit Button: id="submit-application" */}
              <button
                id="submit-application"
                type="submit"
                className="btn btn-primary btn-large"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting Application...' : 'Submit Application'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};
