import React, { useState } from 'react';
import type { ExperienceItem } from '@/types';

const categories = ['all', 'research', 'teaching', 'professional'] as const;

export default function ExperienceFilter({ items }: { items: ExperienceItem[] }) {
  const [filter, setFilter] = useState<string>('all');

  const filteredItems = items.filter((e) => filter === 'all' || e.category === filter);

  return (
    <>
      <div className="filters glass">
        {categories.map((f) => (
          <button
            key={f}
            type="button"
            className={`chip ${filter === f ? 'bg-accent' : ''}`}
            onClick={() => setFilter(f)}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="timeline">
        {filteredItems.map((e) => (
          <article className="timeline-item" key={e.title}>
            <span className="timeline-node" />
            <span className="kicker">{e.category}</span>
            <h2>{e.title}</h2>
            <p>
              {e.organisation}
              {e.location ? `, ${e.location}` : ''} · {e.period}
            </p>
            <ul>
              {e.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </>
  );
}
