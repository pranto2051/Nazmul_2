import { useState } from 'react';
import { Copy, Check, ChevronDown, X } from 'lucide-react';
import type { Publication } from '@/types';
import { OWNER_NAME } from '@/content/profile';

interface Props {
  pub: Publication;
  heading?: 'h2' | 'h3';
}

export default function PublicationCard({ pub, heading: H = 'h2' }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [citeOpen, setCiteOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const bib = pub.bibtex ?? `@article{${pub.id},
  title = {${pub.title}},
  author = {${pub.authors.join(' and ')}},
  journal = {${pub.venue}},
  year = {${pub.year}}
}`;

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(bib);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      // Fallback
    }
  };

  return (
    <article className="glass glass-card interactive-glass publication-card">
      <div>
        <H>{pub.title}</H>
        <p className="authors">
          {pub.authors.map((a, i) => (
            <span key={`${a}-${i}`}>
              {a === OWNER_NAME ? <strong>{a}</strong> : a}
              {i < pub.authors.length - 1 ? ', ' : ''}
            </span>
          ))}
        </p>

        <div className="meta">
          <span>{pub.venue}</span>
          <span>·</span>
          <span>
            {pub.month ? `${pub.month} ` : ''}
            {pub.year}
          </span>
          {pub.pages && <span>· pp. {pub.pages}</span>}
          <span className="status">{pub.status.replace('-', ' ')}</span>
        </div>

        <div className="pub-actions">
          {pub.doi ? (
            <a href={pub.doi} target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm">
              DOI
            </a>
          ) : (
            <span className="todo">TODO: DOI</span>
          )}

          {pub.pdfUrl ? (
            <a href={pub.pdfUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm">
              PDF
            </a>
          ) : (
            <span className="todo">TODO: PDF</span>
          )}

          {pub.codeUrl ? (
            <a href={pub.codeUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm">
              Code
            </a>
          ) : (
            <span className="todo">TODO: Code</span>
          )}

          <button
            type="button"
            onClick={() => setCiteOpen(true)}
            className="btn btn-outline btn-sm"
          >
            Cite
          </button>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((v) => !v)}
          className="btn btn-ghost btn-sm mt-3"
          style={{ padding: 0 }}
        >
          {isOpen ? 'Hide' : 'Show'} abstract{' '}
          <ChevronDown
            className="size-4 inline transition-transform duration-200"
            style={{ transform: isOpen ? 'rotate(180deg)' : 'none' }}
          />
        </button>

        {isOpen && (
          <p className="abstract">
            {pub.abstract ? pub.abstract : 'TODO: Plain-language abstract.'}
          </p>
        )}
      </div>

      {pub.thumbnail && (
        <img
          className="publication-thumb"
          src={pub.thumbnail}
          alt={`Demo visual associated with ${pub.title}`}
          loading="lazy"
        />
      )}

      {citeOpen && (
        <div className="dialog-overlay" onClick={() => setCiteOpen(false)}>
          <div
            className="dialog-glass"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            <div className="flex justify-between items-center mb-3">
              <div>
                <h3 className="text-lg font-bold">Cite this work</h3>
                <p className="text-sm text-muted-foreground">BibTeX citation record</p>
              </div>
              <button
                type="button"
                className="icon-btn"
                onClick={() => setCiteOpen(false)}
                aria-label="Close dialog"
              >
                <X className="size-4" />
              </button>
            </div>

            <pre className="dialog-code">{bib}</pre>

            <button
              type="button"
              onClick={copy}
              className="btn btn-primary w-full"
            >
              {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
              {copied ? 'Copied to clipboard' : 'Copy BibTeX'}
            </button>
          </div>
        </div>
      )}
    </article>
  );
}
