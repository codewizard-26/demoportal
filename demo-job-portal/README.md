# AccessApply Jobs — Standalone Demo Job Portal

A realistic, standalone, and WCAG-accessible job board built specifically as the target testing environment for the **AccessApply** assistive AI browser extension and automation agent.

---

## 🚀 Key Highlights

- **100% Isolated Standalone Project**: No imports, no dependencies, and no shared code with the AccessApply backend or extension.
- **Zero Backend / Zero Database**: Fully deterministic local data; no external API keys or databases required.
- **Extension-Friendly Architecture**: Stable, non-random IDs and semantic HTML tags (`button`, `input`, `textarea`, `label`) designed for reliable `PageContext` extraction by the Chrome extension.
- **High-Accessibility Design**: WCAG AA/AAA color contrast, full keyboard navigation, visible focus indicators, screen-reader landmarks, and accessible form validation error announcements (`role="alert"`).
- **Realistic UI/UX**: Designed using real-world job board aesthetics (LinkedIn, Ashby, Greenhouse, Lever, Wellfound) without artificial AI landing page tropes.

---

## 🛠️ Tech Stack

- **Framework**: React 18 + TypeScript
- **Bundler & Dev Server**: Vite
- **Routing**: React Router DOM (HTML5 client-side routing)
- **Icons**: Lucide React
- **Styles**: Custom Vanilla CSS Design System with accessible tokens

---

## 📦 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
The portal runs locally at: `http://localhost:5173`

### 3. Production Build
```bash
npm run build
```

---

## 🗺️ Available Routes

| Route | Page | Purpose |
|---|---|---|
| `/` | **Home Page** | Brand logo, job search bar, quick filters, featured jobs, and category browse. |
| `/jobs` | **Job Results** | Filterable list of all 5 deterministic tech positions with keyword/location search. |
| `/jobs/:id` | **Job Details** | Comprehensive natural language job description, requirements, responsibilities, salary, and Apply CTA. |
| `/jobs/:id/apply` | **Application Form** | Multi-section accessible application form with structured inputs for profile autofill and `ask_user` interaction. |
| `/application/success` | **Success Page** | Confirmation receipt displaying application ID (`AA-2026-001`), job title, company, and submission status. |

---

## 💼 Deterministic Demo Jobs

| ID | Title | Company | Location | Salary | Workplace |
|---|---|---|---|---|---|
| `1` | **Software Engineer** | TechNova | Bangalore / Remote | ₹8–14 LPA | Remote |
| `2` | **Frontend Developer** | CloudWorks | Remote | ₹7–12 LPA | Remote |
| `3` | **Backend Engineer** | DataStack | Mumbai / Remote | ₹9–16 LPA | Hybrid |
| `4` | **Product Designer** | PixelLabs | Bangalore | ₹6–10 LPA | On-site |
| `5` | **QA Engineer** | QualityHub | Pune / Remote | ₹5–9 LPA | Remote |

---

## 🏷️ Critical Stable Element IDs for AccessApply Extension

The following stable DOM IDs are guaranteed not to change:

### Search & Navigation
- `job-search-input`: Search input field (keywords/title)
- `location-input`: Location input field
- `search-jobs`: Search submit button
- `back-to-jobs`: Return navigation button on success page

### Job Cards & Details
- `job-card-1`, `job-card-2`, `job-card-3`, `job-card-4`, `job-card-5`: Job card containers
- `job-title-1`, `job-title-2`, etc.: Job card title headings
- `view-job-1`, `view-job-2`, etc.: "View Job" buttons
- `apply-button`: Primary "Apply for this job" button on the Job Details page

### Application Form Fields
- `full-name`: Full Name text input
- `email`: Email address input
- `phone`: Phone number input
- `location`: Current location input
- `resume`: Resume URL / document reference text input
- `linkedin`: LinkedIn profile URL input
- `github`: GitHub profile URL input
- `cover-letter`: Cover letter textarea
- `years-experience`: Years of professional experience numeric input (**Used for the `ask_user` agent demonstration**)
- `why-interested`: "Why are you interested in this role?" textarea
- `work-authorization`: Work authorization status input
- `work-arrangement`: Preferred work arrangement input
- `submit-application`: Submit Application button

---

## 🤖 End-to-End Judge Demonstration Flow

1. **User Prompt to AccessApply Agent**:
   > *"Find a remote software engineering job and apply to it."*

2. **Step 1 — Search**:
   - Agent lands on `/` or `/jobs`.
   - Types `"Software Engineer"` into `id="job-search-input"`.
   - Types `"Remote"` into `id="location-input"`.
   - Clicks `id="search-jobs"`.

3. **Step 2 — Open Job Details**:
   - Agent locates `id="job-card-1"` (Software Engineer at TechNova).
   - Clicks `id="view-job-1"`.
   - Reads job requirements and compensation details on `/jobs/1`.

4. **Step 3 — Initiate Application**:
   - Clicks `id="apply-button"` to navigate to `/jobs/1/apply`.

5. **Step 4 — Autofill Form**:
   - Fills known fields from user profile (`full-name`, `email`, `phone`, `location`, `resume`, `linkedin`, `github`).

6. **Step 5 — Human-in-the-Loop (`ask_user`)**:
   - Agent encounters `id="years-experience"`.
   - Issues `{ action: "ask_user", question: "How many years of professional experience do you have?" }`.
   - User responds with `"4"`.
   - Agent continues and fills `id="years-experience"` with `"4"`.
   - Agent fills `why-interested`, `work-authorization`, and `work-arrangement`.

7. **Step 6 — Submit & Confirmation**:
   - Agent clicks `id="submit-application"`.
   - Browser navigates to `/application/success`.
   - Agent verifies `Application ID: AA-2026-001` and `Status: Submitted`.
   - Emits `{ action: "done" }`.
