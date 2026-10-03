export interface Job {
  id: string;
  cardId: string;
  titleId: string;
  viewId: string;
  title: string;
  company: string;
  location: string;
  salary: string;
  jobType: string;
  workplaceType: 'Remote' | 'Hybrid' | 'On-site';
  experienceLevel: string;
  department: string;
  shortDescription: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  skills: string[];
  benefits: string[];
  aboutCompany: string;
  postedDate: string;
}

export const DEMO_JOBS: Job[] = [
  {
    id: "1",
    cardId: "job-card-1",
    titleId: "job-title-1",
    viewId: "view-job-1",
    title: "Software Engineer",
    company: "TechNova",
    location: "Bangalore / Remote",
    salary: "₹8–14 LPA",
    jobType: "Full-time",
    workplaceType: "Remote",
    experienceLevel: "2–5 years",
    department: "Core Engineering",
    shortDescription: "Build scalable distributed backend services, high-throughput REST APIs, and event-driven architecture using TypeScript and Node.js.",
    description: `TechNova is seeking a motivated Software Engineer to join our Core Platform team. In this role, you will design, implement, and maintain mission-critical backend systems and microservices that power real-time data synchronization for thousands of enterprise clients. You will work closely with frontend engineers, product designers, and DevOps teams to deliver resilient, accessible, and performant digital solutions.

We value code quality, clear documentation, thoughtful architecture, and inclusive team culture. If you love building resilient software that solves real human challenges, we would love to have you on board.`,
    responsibilities: [
      "Design, build, and maintain efficient, reusable, and dependable TypeScript and Node.js backend services.",
      "Implement RESTful and GraphQL APIs integrated with PostgreSQL and Redis caching layers.",
      "Collaborate with frontend developers to ensure seamless, accessible client-server interaction.",
      "Participate in technical architecture reviews, code reviews, and system reliability improvements.",
      "Write comprehensive automated unit tests and integration tests to guarantee system stability.",
      "Diagnose and resolve performance bottlenecks across production databases and server clusters."
    ],
    requirements: [
      "2 to 5 years of professional software engineering experience with Node.js and TypeScript or modern backend languages.",
      "Strong understanding of relational databases (PostgreSQL preferred) and database schema design.",
      "Solid knowledge of RESTful API principles, HTTP specifications, and asynchronous programming patterns.",
      "Hands-on experience with version control (Git) and collaborative workflows.",
      "Familiarity with cloud platforms (AWS/GCP), containerization (Docker), and automated CI/CD pipelines.",
      "Strong written and verbal communication skills with a focus on collaborative problem-solving."
    ],
    skills: [
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "REST APIs",
      "Docker",
      "Redis",
      "Microservices",
      "Git"
    ],
    benefits: [
      "Flexible remote-first work policy with home office reimbursement",
      "Comprehensive medical and health insurance coverage for employee and family",
      "Annual learning, conference, and certification stipend",
      "Generous paid time off (PTO) and wellness days",
      "Performance-based annual bonus and equity options"
    ],
    aboutCompany: "TechNova is a high-growth cloud infrastructure platform powering next-generation web applications. We are committed to fostering an inclusive, accessible, and transparent engineering culture.",
    postedDate: "2 days ago"
  },
  {
    id: "2",
    cardId: "job-card-2",
    titleId: "job-title-2",
    viewId: "view-job-2",
    title: "Frontend Developer",
    company: "CloudWorks",
    location: "Remote",
    salary: "₹7–12 LPA",
    jobType: "Full-time",
    workplaceType: "Remote",
    experienceLevel: "2–4 years",
    department: "Frontend Engineering",
    shortDescription: "Develop responsive, highly accessible web interfaces, reusable component libraries, and interactive design systems using React and modern CSS.",
    description: `CloudWorks is hiring a passionate Frontend Developer to create exceptional, accessible user interfaces for our customer portal. In this role, you will champion modern web standards, intuitive design systems, WCAG 2.1 accessibility guidelines, and high-performance React architectures.

You will partner closely with UI/UX designers and accessibility advocates to ensure that every interactive component can be effortlessly operated via keyboard, screen reader, and assistive technologies.`,
    responsibilities: [
      "Develop responsive and accessible web applications using React, TypeScript, and modern CSS methodologies.",
      "Build and document reusable UI components following rigorous WCAG 2.1 AA accessibility standards.",
      "Optimize web application performance, ensuring fast load times and smooth rendering across modern browsers.",
      "Collaborate with backend engineers to integrate RESTful APIs and ensure clean data flow.",
      "Write accessible semantic HTML with proper ARIA attributes, keyboard traps prevention, and visible focus management."
    ],
    requirements: [
      "2+ years of professional frontend web development experience with React and TypeScript.",
      "In-depth knowledge of semantic HTML5, modern CSS3 (Flexbox/Grid), and JavaScript fundamentals.",
      "Demonstrated understanding of web accessibility principles (WCAG, ARIA, keyboard navigation).",
      "Experience with state management solutions, responsive layout design, and client-side routing.",
      "Passion for creating clean, inclusive, and visually stunning digital products."
    ],
    skills: [
      "React",
      "TypeScript",
      "Modern CSS",
      "Web Accessibility (WCAG)",
      "HTML5 / ARIA",
      "Vite",
      "Responsive Design"
    ],
    benefits: [
      "100% remote flexibility across all regions",
      "Competitive compensation package with annual performance reviews",
      "Ergonomic work-from-home setup allowance",
      "Comprehensive medical coverage",
      "Paid parental leave and wellness programs"
    ],
    aboutCompany: "CloudWorks builds intuitive collaboration and productivity software for distributed global teams. Our core mission is delivering accessible software for everyone.",
    postedDate: "1 day ago"
  },
  {
    id: "3",
    cardId: "job-card-3",
    titleId: "job-title-3",
    viewId: "view-job-3",
    title: "Backend Engineer",
    company: "DataStack",
    location: "Mumbai / Remote",
    salary: "₹9–16 LPA",
    jobType: "Full-time",
    workplaceType: "Hybrid",
    experienceLevel: "3–6 years",
    department: "Data Engineering & Backends",
    shortDescription: "Architect resilient data ingestion engines, distributed database pipelines, and high-concurrency microservices in Node.js and Python.",
    description: `DataStack is looking for a seasoned Backend Engineer to lead backend architecture and high-scale data processing systems. You will work on real-time streaming pipelines, transaction processing layers, and scalable cloud APIs that handle millions of data points every day.

We believe in clean code, solid database fundamentals, automated testing, and empowering engineers to take ownership of complex technical challenges.`,
    responsibilities: [
      "Design, implement, and maintain high-volume backend microservices using Node.js and Python.",
      "Optimize complex relational SQL queries, indexing strategies, and database connection pooling in PostgreSQL.",
      "Build real-time event streaming pipelines with Apache Kafka or RabbitMQ.",
      "Collaborate with security and infrastructure teams to ensure GDPR, SOC2, and data compliance standards.",
      "Automate deployment pipelines and manage serverless/containerized deployments on AWS."
    ],
    requirements: [
      "3+ years of professional backend software development experience.",
      "Deep expertise in relational databases (PostgreSQL) and caching technologies (Redis).",
      "Proficiency with Node.js, Python, or Go for backend microservices.",
      "Experience with Docker, Kubernetes, and cloud infrastructure management.",
      "Strong understanding of concurrency, transactions, and distributed systems concepts."
    ],
    skills: [
      "Node.js",
      "Python",
      "PostgreSQL",
      "Redis",
      "Kafka",
      "Docker",
      "AWS",
      "API Design"
    ],
    benefits: [
      "Hybrid work model with flexible remote days",
      "Top-tier compensation and equity grants",
      "Comprehensive family health insurance",
      "Annual wellness and tech equipment budget",
      "Dedicated time for open source and research initiatives"
    ],
    aboutCompany: "DataStack is a real-time analytics and data platform empowering modern enterprises to unlock actionable insights from complex data streams.",
    postedDate: "3 days ago"
  },
  {
    id: "4",
    cardId: "job-card-4",
    titleId: "job-title-4",
    viewId: "view-job-4",
    title: "Product Designer",
    company: "PixelLabs",
    location: "Bangalore",
    salary: "₹6–10 LPA",
    jobType: "Full-time",
    workplaceType: "On-site",
    experienceLevel: "2–4 years",
    department: "Product Design & UX",
    shortDescription: "Craft inclusive user experiences, accessible design tokens, wireframes, and scalable design systems for modern digital products.",
    description: `PixelLabs is seeking a talented Product Designer with an eye for clean aesthetics and a heart for inclusive accessibility. In this role, you will shape how users interact with our digital tools, ensuring that our products are intuitive, visually refined, and fully accessible to users of all abilities.

You will collaborate with engineers, product managers, and end-users to conduct user interviews, translate user feedback into interactive wireframes, and build systematic Figma design libraries.`,
    responsibilities: [
      "Create high-fidelity UI designs, user flows, and interactive prototypes in Figma.",
      "Maintain and evolve our comprehensive multi-platform Design System.",
      "Ensure all color palettes, typography, and interactive elements adhere to WCAG AAA/AA standards.",
      "Conduct usability tests, user interviews, and accessibility audits with assistive technology users.",
      "Partner with frontend engineers to ensure design fidelity and seamless implementation."
    ],
    requirements: [
      "2+ years of experience as a UI/UX or Product Designer for web or mobile products.",
      "Strong portfolio demonstrating user-centric design, systematic thinking, and typography discipline.",
      "Mastery of Figma, component variants, auto-layout, and interactive prototyping.",
      "Clear understanding of digital accessibility standards (color contrast ratios, touch targets, readable layouts).",
      "Excellent communication and presentation abilities."
    ],
    skills: [
      "Figma",
      "UI/UX Design",
      "Design Systems",
      "Accessibility (WCAG)",
      "User Research",
      "Wireframing",
      "Prototyping"
    ],
    benefits: [
      "Modern collaborative office in prime Bangalore tech hub",
      "Annual hardware upgrade allowance (MacBook Pro + 4K displays)",
      "Health, dental, and optical insurance",
      "Sponsored attendance at international design conferences",
      "Flexible daily working hours"
    ],
    aboutCompany: "PixelLabs is a design-first digital innovation studio building next-generation web products and digital experiences.",
    postedDate: "4 days ago"
  },
  {
    id: "5",
    cardId: "job-card-5",
    titleId: "job-title-5",
    viewId: "view-job-5",
    title: "QA Engineer",
    company: "QualityHub",
    location: "Pune / Remote",
    salary: "₹5–9 LPA",
    jobType: "Full-time",
    workplaceType: "Remote",
    experienceLevel: "1–3 years",
    department: "Quality Assurance",
    shortDescription: "Lead automated UI testing, accessibility testing suites, and API validation to ensure high quality and flawless reliability across web apps.",
    description: `QualityHub is looking for a QA Engineer who is passionate about automated software testing, accessibility verification, and continuous quality delivery. You will design and execute automated test suites using modern tools like Playwright and Cypress, ensuring software releases are bug-free, fast, and accessible to everyone.

You will champion software quality throughout the software development lifecycle, working side-by-side with engineers to catch defects before they reach production.`,
    responsibilities: [
      "Write, execute, and maintain end-to-end automated UI test scripts using Playwright or Cypress.",
      "Perform automated and manual accessibility testing using screen readers, axe-core, and keyboard navigation.",
      "Create automated API test collections to validate REST endpoint payloads, headers, and status codes.",
      "Integrate test suites into GitHub Actions CI/CD pipelines to prevent regressions.",
      "Collaborate with developers to investigate, document, and verify defect resolutions."
    ],
    requirements: [
      "1 to 3 years of software QA experience in automated and manual testing environments.",
      "Experience scripting test automation with JavaScript/TypeScript and tools like Playwright, Cypress, or Selenium.",
      "Familiarity with web technologies (HTML, CSS, DOM structure, DevTools) and API testing (Postman, REST).",
      "Knowledge of web accessibility testing methodologies is a strong plus.",
      "Methodical problem-solving approach and attention to detail."
    ],
    skills: [
      "Playwright",
      "Cypress",
      "TypeScript",
      "API Testing",
      "Accessibility Testing (aXe)",
      "CI/CD Integration",
      "Git"
    ],
    benefits: [
      "Remote-first work arrangement with flexible hours",
      "Annual health and medical insurance",
      "Continuous learning and QA certification sponsorships",
      "Paid wellness time off and vacation days",
      "Friendly, supportive, and growth-oriented engineering team"
    ],
    aboutCompany: "QualityHub provides automated testing infrastructure, accessibility auditing, and quality assurance solutions for enterprise web platforms.",
    postedDate: "5 days ago"
  }
];

export const POPULAR_CATEGORIES = [
  { name: "Software Engineering", count: "142 Jobs", icon: "Code" },
  { name: "Frontend & UI", count: "89 Jobs", icon: "Layout" },
  { name: "Backend & Systems", count: "104 Jobs", icon: "Server" },
  { name: "Product & Design", count: "56 Jobs", icon: "Palette" },
  { name: "Quality & Testing", count: "48 Jobs", icon: "ShieldCheck" },
  { name: "Data & AI", count: "73 Jobs", icon: "Database" },
];
