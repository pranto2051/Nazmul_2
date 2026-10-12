import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, ZoomIn, X } from 'lucide-react';
import type { Figure } from '@/types';
import { cn } from '@/lib/utils';

const categories = ['all', 'architecture', 'results', 'xai', 'segmentation', 'event', 'certificate'] as const;

export default function GalleryGrid({ initialFigures }: { initialFigures: Figure[] }) {
  const [filter, setFilter] = useState<string>('all');
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [isZoomed, setIsZoomed] = useState(false);

  const items = initialFigures.filter((f) => filter === 'all' || f.category === filter);

  const move = useCallback((direction: number) => {
    setSelectedIndex((current) => {
      if (current === null) return null;
      return (current + direction + items.length) % items.length;
    });
  }, [items.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === 'ArrowRight') move(1);
      if (e.key === 'ArrowLeft') move(-1);
      if (e.key === 'Escape') {
        setSelectedIndex(null);
        setIsZoomed(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex, move]);

  const selectedItem = selectedIndex !== null ? items[selectedIndex] : null;

  return (
    <>
      <div className="filters glass">
        {categories.map((f) => (
          <button
            key={f}
            type="button"
            className={`chip ${filter === f ? 'bg-accent' : ''}`}
            onClick={() => {
              setFilter(f);
              setSelectedIndex(null);
            }}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="gallery-grid">
        {items.map((figure, idx) => (
          <figure
            key={figure.src}
            className={cn('figure', figure.aspect && `figure-${figure.aspect}`)}
            onClick={() => setSelectedIndex(idx)}
          >
            <img src={figure.src} alt={figure.alt} loading="lazy" />
            <figcaption>
              {figure.caption} {figure.demo && <span className="demo-chip">demo</span>}
            </figcaption>
          </figure>
        ))}
      </div>

      {selectedItem && (
        <div
          className="dialog-overlay"
          onClick={() => {
            setSelectedIndex(null);
            setIsZoomed(false);
          }}
        >
          <div
            className={`dialog-glass lightbox ${isZoomed ? 'zoom' : ''}`}
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            <div className="flex justify-between items-center">
              <div>
                <span className="kicker">{selectedItem.category}</span>
                <p className="text-sm font-serif text-muted-foreground mt-1">
                  {selectedItem.caption}
                </p>
              </div>
              <button
                type="button"
                className="icon-btn"
                onClick={() => {
                  setSelectedIndex(null);
                  setIsZoomed(false);
                }}
                aria-label="Close lightbox"
              >
                <X className="size-4" />
              </button>
            </div>

            <img src={selectedItem.src} alt={selectedItem.alt} />

            <div className="flex items-center justify-between mt-3">
              <button
                type="button"
                className="btn btn-outline btn-sm"
                onClick={() => move(-1)}
                aria-label="Previous figure"
              >
                <ChevronLeft className="size-4" />
              </button>

              <span className="text-sm text-muted-foreground">
                {(selectedIndex ?? 0) + 1} / {items.length}
              </span>

              <button
                type="button"
                className="btn btn-outline btn-sm"
                onClick={() => setIsZoomed((v) => !v)}
              >
                <ZoomIn className="size-4 inline mr-1" />
                {isZoomed ? 'Fit' : 'Zoom'}
              </button>

              <button
                type="button"
                className="btn btn-outline btn-sm"
                onClick={() => move(1)}
                aria-label="Next figure"
              >
                <ChevronRight className="size-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
