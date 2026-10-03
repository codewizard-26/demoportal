import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Filter, X, Briefcase } from 'lucide-react';
import { SearchBar } from '../components/SearchBar';
import { JobCard } from '../components/JobCard';
import { DEMO_JOBS, Job } from '../data/jobs';

export const JobsPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const queryParam = searchParams.get('q') || '';
  const locParam = searchParams.get('loc') || '';

  const [activeWorkplaceFilter, setActiveWorkplaceFilter] = useState<string>('all');
  const [activeDeptFilter, setActiveDeptFilter] = useState<string>('all');

  const [searchQuery, setSearchQuery] = useState(queryParam);
  const [searchLocation, setSearchLocation] = useState(locParam);

  useEffect(() => {
    setSearchQuery(queryParam);
    setSearchLocation(locParam);
  }, [queryParam, locParam]);

  const handleSearchSubmit = (q: string, loc: string) => {
    setSearchQuery(q);
    setSearchLocation(loc);
    const params = new URLSearchParams();
    if (q.trim()) params.set('q', q.trim());
    if (loc.trim()) params.set('loc', loc.trim());
    setSearchParams(params);
  };

  const filteredJobs = useMemo(() => {
    return DEMO_JOBS.filter((job: Job) => {
      // Search Query filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchesTitle = job.title.toLowerCase().includes(q);
        const matchesCompany = job.company.toLowerCase().includes(q);
        const matchesDesc = job.shortDescription.toLowerCase().includes(q);
        const matchesSkills = job.skills.some((s) => s.toLowerCase().includes(q));
        if (!matchesTitle && !matchesCompany && !matchesDesc && !matchesSkills) {
          return false;
        }
      }

      // Location filter
      if (searchLocation.trim()) {
        const loc = searchLocation.toLowerCase().trim();
        const matchesLocation = job.location.toLowerCase().includes(loc);
        const matchesWorkplace = job.workplaceType.toLowerCase().includes(loc);
        if (!matchesLocation && !matchesWorkplace) {
          return false;
        }
      }

      // Workplace Type filter
      if (activeWorkplaceFilter !== 'all') {
        if (job.workplaceType !== activeWorkplaceFilter) {
          return false;
        }
      }

      // Department filter
      if (activeDeptFilter !== 'all') {
        if (!job.department.toLowerCase().includes(activeDeptFilter.toLowerCase())) {
          return false;
        }
      }

      return true;
    });
  }, [searchQuery, searchLocation, activeWorkplaceFilter, activeDeptFilter]);

  const resetFilters = () => {
    setSearchQuery('');
    setSearchLocation('');
    setActiveWorkplaceFilter('all');
    setActiveDeptFilter('all');
    setSearchParams(new URLSearchParams());
  };

  return (
    <main id="main-content" tabIndex={-1} style={{ padding: '32px 0 60px 0' }}>
      <div className="container">
        {/* Page Title & Search Bar */}
        <div style={{ marginBottom: '24px' }}>
          <h1 style={{ fontSize: '26px', marginBottom: '6px' }}>
            Job Search
          </h1>
          <p style={{ fontSize: '15px' }}>
            Browse verified opportunities across engineering, product design, and software quality assurance.
          </p>
        </div>

        {/* Search Bar with Required IDs: job-search-input, location-input, search-jobs */}
        <div style={{ marginBottom: '28px' }}>
          <SearchBar
            initialQuery={searchQuery}
            initialLocation={searchLocation}
            onSearch={handleSearchSubmit}
            showChips={false}
          />
        </div>

        {/* Results Header and Filter Bar */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: 'var(--color-bg-surface)',
          padding: '14px 20px',
          borderRadius: 'var(--radius-md)',
          border: '1px solid var(--color-border-subtle)',
          marginBottom: '20px',
          flexWrap: 'wrap',
          gap: '12px',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Briefcase size={18} style={{ color: 'var(--color-primary)' }} />
            <span style={{ fontWeight: 700, fontSize: '15px' }}>
              Showing {filteredJobs.length} {filteredJobs.length === 1 ? 'Job' : 'Jobs'}
            </span>
            {(searchQuery || searchLocation || activeWorkplaceFilter !== 'all') && (
              <span style={{ fontSize: '13px', color: 'var(--color-text-muted)' }}>
                (Filtered results)
              </span>
            )}
          </div>

          {/* Quick Filters */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--color-text-secondary)', display: 'flex', alignItems: 'center', gap: '4px' }}>
              <Filter size={14} /> Filter:
            </span>

            <button
              type="button"
              className={`chip ${activeWorkplaceFilter === 'all' ? 'active' : ''}`}
              style={activeWorkplaceFilter === 'all' ? { backgroundColor: 'var(--color-primary)', color: '#fff', borderColor: 'var(--color-primary)' } : {}}
              onClick={() => setActiveWorkplaceFilter('all')}
            >
              All Types
            </button>

            <button
              type="button"
              className={`chip ${activeWorkplaceFilter === 'Remote' ? 'active' : ''}`}
              style={activeWorkplaceFilter === 'Remote' ? { backgroundColor: 'var(--color-primary)', color: '#fff', borderColor: 'var(--color-primary)' } : {}}
              onClick={() => setActiveWorkplaceFilter('Remote')}
            >
              Remote Only
            </button>

            <button
              type="button"
              className={`chip ${activeWorkplaceFilter === 'Hybrid' ? 'active' : ''}`}
              style={activeWorkplaceFilter === 'Hybrid' ? { backgroundColor: 'var(--color-primary)', color: '#fff', borderColor: 'var(--color-primary)' } : {}}
              onClick={() => setActiveWorkplaceFilter('Hybrid')}
            >
              Hybrid
            </button>

            {(searchQuery || searchLocation || activeWorkplaceFilter !== 'all' || activeDeptFilter !== 'all') && (
              <button
                type="button"
                className="chip"
                style={{ color: 'var(--color-error)', display: 'flex', alignItems: 'center', gap: '4px' }}
                onClick={resetFilters}
              >
                <X size={12} /> Clear Filters
              </button>
            )}
          </div>
        </div>

        {/* Job Listings List */}
        {filteredJobs.length > 0 ? (
          <div className="jobs-list-layout" aria-label="Available Job Postings">
            {filteredJobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        ) : (
          <div style={{
            backgroundColor: 'var(--color-bg-surface)',
            border: '1px solid var(--color-border-subtle)',
            borderRadius: 'var(--radius-md)',
            padding: '48px 24px',
            textAlign: 'center',
          }}>
            <h3 style={{ fontSize: '18px', marginBottom: '8px' }}>No matching jobs found</h3>
            <p style={{ fontSize: '14px', marginBottom: '20px' }}>
              We couldn't find any positions matching "{searchQuery || searchLocation}". Try adjusting your keywords or clearing your filters.
            </p>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={resetFilters}
            >
              View All 5 Demo Jobs
            </button>
          </div>
        )}
      </div>
    </main>
  );
};
