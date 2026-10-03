import { JobApplication } from '../types/application';

const STORAGE_KEY = 'accessapply_demo_last_application';

export const DEFAULT_DEMO_APPLICATION: JobApplication = {
  jobId: '1',
  jobTitle: 'Software Engineer',
  company: 'TechNova',
  fullName: 'Alex Doe',
  email: 'alex.doe@example.com',
  phone: '+1 (555) 019-2834',
  location: 'Bangalore, India',
  resume: 'https://example.com/resumes/alex-doe-software-engineer.pdf',
  linkedin: 'https://linkedin.com/in/alex-doe-engineer',
  github: 'https://github.com/alex-doe-dev',
  coverLetter: 'I am excited to apply for the Software Engineer role at TechNova. With extensive background in distributed systems and accessible software engineering, I look forward to contributing.',
  yearsExperience: '4',
  whyInterested: 'TechNova’s focus on high-reliability distributed architecture and accessibility deeply aligns with my passion for building inclusive digital platforms.',
  workAuthorization: 'Authorized to work without sponsorship',
  workArrangement: 'Remote',
  applicationId: 'AA-2026-001',
  submittedAt: new Date().toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }),
  status: 'Submitted',
};

export function saveLastApplication(app: JobApplication): void {
  try {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(app));
  } catch {
    // Graceful fallback for non-storage environments
  }
}

export function getLastApplication(): JobApplication {
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    if (raw) {
      return JSON.parse(raw);
    }
  } catch {
    // Ignore error
  }
  return DEFAULT_DEMO_APPLICATION;
}
