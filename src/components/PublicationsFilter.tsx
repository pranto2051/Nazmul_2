import React, { useState, useMemo } from 'react';
import type { Publication } from '@/types';
import PublicationCard from './PublicationCard';

const filters = ['all', 'conference', 'journal', 'book-chapter', 'under-review'] as const;

export default function PublicationsFilter({ publications }: { publications: Publication[] }) {
  const [q, setQ] = useState('');
  const [filter, setFilter] = useState<(typeof filters)[number]>('all');
  const [year, setYear] = useState('all');

  const results = useMemo(() => {
    return publications.filter((p) => {
      const matchFilter = filter === 'all' || p.type === filter || p.status === filter;
      const matchYear = year === 'all' || String(p.year) === year;
      const matchQuery = [p.title, p.venue, ...p.authors].join(' ').toLowerCase().includes(q.toLowerCase());
      return matchFilter && matchYear && matchQuery;
    });
  }, [publications, q, filter, year]);

  return (
    <>
      <div className="filters glass">
        <input
          type="search"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search title, venue, or author"
          aria-label="Search publications"
        />

        <select
          value={year}
          onChange={(e) => setYear(e.target.value)}
          aria-label="Filter by year"
        >
          <option value="all">All years</option>
          <option value="2026">2026</option>
          <option value="2025">2025</option>
          <option value="2024">2024</option>
        </select>

        {filters.map((f) => (
          <button
            key={f}
            type="button"
            className={`chip ${filter === f ? 'bg-accent' : ''}`}
            onClick={() => setFilter(f)}
          >
            {f.replace('-', ' ')}
          </button>
        ))}
      </div>

      <p aria-live="polite" style={{ marginBottom: '1.5rem', color: 'var(--muted-foreground)' }}>
        {results.length} records
      </p>

      <div className="publication-list">
        {results.map((p) => (
          <PublicationCard key={p.id} pub={p} />
        ))}
      </div>
    </>
  );
}
