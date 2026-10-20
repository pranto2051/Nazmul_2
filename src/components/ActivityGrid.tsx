import { useState, useEffect, useCallback, useMemo } from 'react';
import { createPortal } from 'react-dom';
import {
  Calendar,
  MapPin,
  Building2,
  CheckCircle2,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  X,
  Search,
  Sparkles,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';
import type { ActivityItem } from '@/types';

interface ActivityGridProps {
  initialActivities: ActivityItem[];
}

export default function ActivityGrid({ initialActivities }: ActivityGridProps) {
  const [filter, setFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [activeImageIdx, setActiveImageIdx] = useState<number>(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Filter categories with counts
  const categories = useMemo(() => {
    const list = [
      { id: 'all', label: 'All Activities' },
      { id: 'organization', label: 'Organizations' },
      { id: 'clubs', label: 'Clubs & Societies' },
      { id: 'leadership', label: 'Leadership' },
      { id: 'events', label: 'Events' },
      { id: 'volunteering', label: 'Volunteering' },
    ];
    return list;
  }, []);

  // Filtered and searched activities list
  const filteredActivities = useMemo(() => {
    return initialActivities.filter((item) => {
      const matchFilter = filter === 'all' || item.category === filter;
      const q = searchQuery.toLowerCase().trim();
      const matchSearch =
        !q ||
        item.title.toLowerCase().includes(q) ||
        item.organization.toLowerCase().includes(q) ||
        item.role.toLowerCase().includes(q) ||
        item.summary.toLowerCase().includes(q) ||
        item.skills?.some((s) => s.toLowerCase().includes(q));

      return matchFilter && matchSearch;
    });
  }, [initialActivities, filter, searchQuery]);

  // Modal navigation (Next/Prev)
  const moveActivity = useCallback(
    (direction: number) => {
      setSelectedIndex((current) => {
        if (current === null) return null;
        const total = filteredActivities.length;
        if (total === 0) return null;
        const nextIdx = (current + direction + total) % total;
        setActiveImageIdx(0);
        return nextIdx;
      });
    },
    [filteredActivities.length]
  );

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === 'ArrowRight') moveActivity(1);
      if (e.key === 'ArrowLeft') moveActivity(-1);
      if (e.key === 'Escape') setSelectedIndex(null);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex, moveActivity]);

  // Lock body scroll when modal is active
  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedIndex]);

  // Current active modal activity
  const selectedActivity =
    selectedIndex !== null && filteredActivities[selectedIndex]
      ? filteredActivities[selectedIndex]
      : null;

  // Active image source for modal
  const currentModalImage = useMemo(() => {
    if (!selectedActivity) return null;
    if (selectedActivity.images && selectedActivity.images.length > 0) {
      return (
        selectedActivity.images[activeImageIdx] || selectedActivity.images[0]
      );
    }
    return {
      src: selectedActivity.coverImage,
      caption: selectedActivity.title,
    };
  }, [selectedActivity, activeImageIdx]);

  return (
    <div className="activities-page-shell">
      {/* TOOLBAR CARD: Row 1 = Search & Results Count, Row 2 = Category Filters */}
      <div className="activities-toolbar-card">
        {/* ROW 1: Search & Results Counter */}
        <div className="activities-toolbar-row-top">
          <div className="activity-search-box">
            <Search className="activity-search-icon size-4" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search activities or organizations..."
              className="activity-search-input"
              aria-label="Search activities"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="activity-search-clear-btn"
                aria-label="Clear search"
              >
                <X className="size-3.5" />
              </button>
            )}
          </div>

          <div className="activities-toolbar-meta">
            <span className="activities-results-counter">
              Showing <strong>{filteredActivities.length}</strong> of {initialActivities.length} activities
            </span>
            {(filter !== 'all' || searchQuery.trim() !== '') && (
              <button
                type="button"
                className="activity-reset-filters-btn"
                onClick={() => {
                  setFilter('all');
                  setSearchQuery('');
                  setSelectedIndex(null);
                }}
              >
                Reset
              </button>
            )}
          </div>
        </div>

        {/* ROW 2: All Activities Filter Buttons in a Single Clean Line */}
        <div
          className="activities-toolbar-row-filters"
          role="tablist"
          aria-label="Filter activities by category"
        >
          {categories.map((c) => {
            const count =
              c.id === 'all'
                ? initialActivities.length
                : initialActivities.filter((a) => a.category === c.id).length;

            return (
              <button
                key={c.id}
                type="button"
                role="tab"
                aria-selected={filter === c.id}
                className={`activity-filter-pill ${filter === c.id ? 'active' : ''}`}
                onClick={() => {
                  setFilter(c.id);
                  setSelectedIndex(null);
                }}
              >
                <span className="activity-filter-text">{c.label}</span>
                <span className="activity-count-badge">{count}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* ACTIVITIES CARDS GRID */}
      {filteredActivities.length === 0 ? (
        <div className="activities-empty-state">
          <h3>No activities found</h3>
          <p>Try resetting the search query or picking another category filter.</p>
        </div>
      ) : (
        <div className="activities-grid">
          {filteredActivities.map((act, idx) => (
            <article
              key={act.id}
              className="activity-card group"
              onClick={() => {
                setSelectedIndex(idx);
                setActiveImageIdx(0);
              }}
              tabIndex={0}
              role="button"
              aria-label={`View details for ${act.title} at ${act.organization}`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setSelectedIndex(idx);
                  setActiveImageIdx(0);
                }
              }}
            >
              {/* Cover Photo */}
              <div className="activity-card-thumb-wrap">
                <img
                  src={act.coverImage}
                  alt={act.title}
                  loading="lazy"
                  className="activity-card-thumb"
                />
                {act.badge && <span className="activity-card-badge">{act.badge}</span>}
                <span className="activity-card-category-tag">
                  {act.categoryLabel || act.category}
                </span>
              </div>

              {/* Card Body */}
              <div className="activity-card-body">
                <div className="activity-card-org">
                  <Building2 className="size-3.5" />
                  <span>{act.organization}</span>
                </div>

                <h2 className="activity-card-title">{act.title}</h2>

                <div className="activity-card-meta">
                  <div className="activity-card-meta-item">
                    <Calendar className="size-3.5" />
                    <span>{act.period}</span>
                  </div>
                  {act.location && (
                    <div className="activity-card-meta-item">
                      <MapPin className="size-3.5" />
                      <span>{act.location}</span>
                    </div>
                  )}
                </div>

                <p className="activity-card-summary">{act.summary}</p>

                {/* Footer with tags and action */}
                <div className="activity-card-footer">
                  {act.skills && act.skills.length > 0 && (
                    <div className="activity-card-tags">
                      {act.skills.slice(0, 3).map((tag) => (
                        <span key={tag} className="activity-tag-chip">
                          {tag}
                        </span>
                      ))}
                      {act.skills.length > 3 && (
                        <span className="activity-tag-chip">+{act.skills.length - 3}</span>
                      )}
                    </div>
                  )}

                  <div className="activity-card-action">
                    <span>
                      View Details & Photos <ArrowRight className="size-3.5" />
                    </span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}

      {/* POPUP DETAIL MODAL */}
      {mounted &&
        selectedActivity &&
        createPortal(
          <div
            className="activity-modal-backdrop"
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                setSelectedIndex(null);
              }
            }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-activity-title"
          >
            <div className="activity-modal-container">
              {/* Close Button */}
              <button
                type="button"
                className="activity-modal-close"
                onClick={() => setSelectedIndex(null)}
                aria-label="Close modal"
              >
                <X className="size-5" />
              </button>

              {/* Hero Image / Gallery Section */}
              <div className="activity-modal-hero">
                {currentModalImage && (
                  <img
                    src={currentModalImage.src}
                    alt={currentModalImage.caption || selectedActivity.title}
                    className="activity-modal-hero-img"
                  />
                )}
                {currentModalImage?.caption && (
                  <div className="activity-modal-hero-caption">
                    {currentModalImage.caption}
                  </div>
                )}
              </div>

              {/* Multiple Thumbnails Strip (if multiple photos available) */}
              {selectedActivity.images && selectedActivity.images.length > 1 && (
                <div className="activity-modal-thumb-strip">
                  {selectedActivity.images.map((img, i) => (
                    <div
                      key={img.src + i}
                      className={`activity-modal-strip-thumb ${
                        activeImageIdx === i ? 'active' : ''
                      }`}
                      onClick={() => setActiveImageIdx(i)}
                      role="button"
                      tabIndex={0}
                      aria-label={`View photo ${i + 1}`}
                    >
                      <img src={img.src} alt={img.caption || `Photo ${i + 1}`} />
                    </div>
                  ))}
                </div>
              )}

              {/* Modal Body Content */}
              <div className="activity-modal-content">
                {/* Header Meta */}
                <div className="activity-modal-header-meta">
                  <span className="activity-modal-badge">
                    {selectedActivity.categoryLabel || selectedActivity.category}
                  </span>
                  {selectedActivity.badge && (
                    <span className="activity-modal-status">
                      {selectedActivity.badge}
                    </span>
                  )}
                  {selectedActivity.status && (
                    <span className="activity-modal-status">
                      ● {selectedActivity.status}
                    </span>
                  )}
                </div>

                <h2 id="modal-activity-title" className="activity-modal-title">
                  {selectedActivity.title}
                </h2>

                <div className="activity-modal-org-name">
                  {selectedActivity.organization}
                </div>

                {/* 3-Col Meta Information */}
                <div className="activity-modal-meta-grid">
                  <div className="activity-modal-meta-box">
                    <Building2 className="activity-modal-meta-box-icon size-5" />
                    <div>
                      <div className="activity-modal-meta-label">Role</div>
                      <div className="activity-modal-meta-val">
                        {selectedActivity.role}
                      </div>
                    </div>
                  </div>

                  <div className="activity-modal-meta-box">
                    <Calendar className="activity-modal-meta-box-icon size-5" />
                    <div>
                      <div className="activity-modal-meta-label">Timeline</div>
                      <div className="activity-modal-meta-val">
                        {selectedActivity.period}
                      </div>
                    </div>
                  </div>

                  {selectedActivity.location && (
                    <div className="activity-modal-meta-box">
                      <MapPin className="activity-modal-meta-box-icon size-5" />
                      <div>
                        <div className="activity-modal-meta-label">Location</div>
                        <div className="activity-modal-meta-val">
                          {selectedActivity.location}
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Full Description */}
                <h3 className="activity-modal-section-title">
                  <Sparkles className="size-4.5" />
                  Overview & Responsibility
                </h3>
                <p className="activity-modal-description">
                  {selectedActivity.description}
                </p>

                {/* What Was Done / Key Contributions */}
                {selectedActivity.whatWasDone &&
                  selectedActivity.whatWasDone.length > 0 && (
                    <>
                      <h3 className="activity-modal-section-title">
                        <CheckCircle2 className="size-4.5" />
                        Key Contributions & Achievements (কী কী করেছি)
                      </h3>
                      <ul className="activity-modal-highlights">
                        {selectedActivity.whatWasDone.map((point, i) => (
                          <li key={i} className="activity-modal-highlight-item">
                            <CheckCircle2 className="activity-modal-highlight-icon size-4" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}

                {/* Skills & Domains */}
                {selectedActivity.skills && selectedActivity.skills.length > 0 && (
                  <>
                    <h3 className="activity-modal-section-title">
                      <ShieldCheck className="size-4.5" />
                      Competencies & Domains
                    </h3>
                    <div className="activity-modal-tags">
                      {selectedActivity.skills.map((skill) => (
                        <span key={skill} className="activity-tag-chip">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </>
                )}

                {/* Action Bar (Links & Next/Prev) */}
                <div className="activity-modal-action-bar">
                  {selectedActivity.link ? (
                    <a
                      href={selectedActivity.link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="activity-modal-link-btn"
                    >
                      <span>{selectedActivity.link.label}</span>
                      <ExternalLink className="size-4" />
                    </a>
                  ) : (
                    <div />
                  )}

                  {/* Prev / Next Buttons */}
                  <div className="activity-modal-nav-btns">
                    <button
                      type="button"
                      className="activity-modal-nav-btn"
                      onClick={() => moveActivity(-1)}
                      aria-label="Previous activity"
                      title="Previous (Left Arrow)"
                    >
                      <ChevronLeft className="size-5" />
                    </button>
                    <span className="text-xs text-muted-foreground font-medium px-1">
                      {(selectedIndex ?? 0) + 1} / {filteredActivities.length}
                    </span>
                    <button
                      type="button"
                      className="activity-modal-nav-btn"
                      onClick={() => moveActivity(1)}
                      aria-label="Next activity"
                      title="Next (Right Arrow)"
                    >
                      <ChevronRight className="size-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>,
          document.body
        )}
    </div>
  );
}
