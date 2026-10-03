import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, MapPin } from 'lucide-react';

interface SearchBarProps {
  initialQuery?: string;
  initialLocation?: string;
  onSearch?: (query: string, location: string) => void;
  showChips?: boolean;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  initialQuery = '',
  initialLocation = '',
  onSearch,
  showChips = true,
}) => {
  const [query, setQuery] = useState(initialQuery);
  const [location, setLocation] = useState(initialLocation);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(query, location);
    } else {
      const params = new URLSearchParams();
      if (query.trim()) params.set('q', query.trim());
      if (location.trim()) params.set('loc', location.trim());
      navigate(`/jobs?${params.toString()}`);
    }
  };

  const handleChipClick = (chipQuery: string, chipLoc: string = '') => {
    setQuery(chipQuery);
    if (chipLoc) setLocation(chipLoc);
    if (onSearch) {
      onSearch(chipQuery, chipLoc || location);
    } else {
      const params = new URLSearchParams();
      if (chipQuery) params.set('q', chipQuery);
      if (chipLoc) params.set('loc', chipLoc);
      navigate(`/jobs?${params.toString()}`);
    }
  };

  return (
    <div className="search-box-card">
      <form onSubmit={handleSubmit} className="search-form" role="search" aria-label="Search Job Listings">
        {/* Job Title / Keywords Input */}
        <div className="search-input-group">
          <Search size={18} className="search-icon" aria-hidden="true" />
          <input
            id="job-search-input"
            name="search"
            type="text"
            className="search-input"
            aria-label="Search jobs"
            placeholder="Job title, keywords, or company (e.g. Software Engineer)"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        <div className="search-divider" aria-hidden="true" />

        {/* Location Input */}
        <div className="search-input-group">
          <MapPin size={18} className="search-icon" aria-hidden="true" />
          <input
            id="location-input"
            name="location"
            type="text"
            className="search-input"
            aria-label="Location"
            placeholder="City, State, or 'Remote'"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>

        {/* Search Submit Button */}
        <button
          id="search-jobs"
          type="submit"
          className="btn btn-primary search-submit-btn"
        >
          Search Jobs
        </button>
      </form>

      {showChips && (
        <div className="quick-search-chips" aria-label="Suggested Searches">
          <span className="chips-label">Popular Searches:</span>
          <button
            type="button"
            className="chip"
            onClick={() => handleChipClick('Software Engineer', 'Remote')}
          >
            Remote Software Engineer
          </button>
          <button
            type="button"
            className="chip"
            onClick={() => handleChipClick('Frontend Developer')}
          >
            Frontend Developer
          </button>
          <button
            type="button"
            className="chip"
            onClick={() => handleChipClick('Backend Engineer')}
          >
            Backend Engineer
          </button>
          <button
            type="button"
            className="chip"
            onClick={() => handleChipClick('', 'Bangalore')}
          >
            Bangalore
          </button>
          <button
            type="button"
            className="chip"
            onClick={() => handleChipClick('', 'Remote')}
          >
            Remote
          </button>
        </div>
      )}
    </div>
  );
};
