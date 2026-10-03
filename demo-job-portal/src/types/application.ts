export interface JobApplication {
  jobId: string;
  jobTitle: string;
  company: string;
  fullName: string;
  email: string;
  phone: string;
  location: string;
  resume: string;
  linkedin?: string;
  github?: string;
  coverLetter?: string;
  yearsExperience: string;
  whyInterested: string;
  workAuthorization: string;
  workArrangement: string;
  applicationId: string;
  submittedAt: string;
  status: 'Submitted' | 'Under Review';
}

export interface ApplicationFormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  location?: string;
  resume?: string;
  yearsExperience?: string;
  whyInterested?: string;
  workAuthorization?: string;
  workArrangement?: string;
  general?: string;
}
