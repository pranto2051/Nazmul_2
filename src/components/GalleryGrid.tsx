import { useState, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import {
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  ZoomOut,
  X,
  CheckCircle2,
  Target,
  Layers,
  Sparkles,
  Calendar,
  ExternalLink,
  Cpu,
  ArrowRight,
  Maximize2,
} from 'lucide-react';
import type { Figure } from '@/types';
import { cn } from '@/lib/utils';

const categories = ['all', 'architecture', 'results', 'xai', 'segmentation', 'event', 'certificate'] as const;

export default function GalleryGrid({ initialFigures }: { initialFigures: Figure[] }) {
  const [filter, setFilter] = useState<string>('all');
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [isZoomed, setIsZoomed] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const items = initialFigures.filter((f) => filter === 'all' || f.category === filter);

  const move = useCallback(
    (direction: number) => {
      setSelectedIndex((current) => {
        if (current === null) return null;
        return (current + direction + items.length) % items.length;
      });
      setIsZoomed(false);
    },
    [items.length]
  );

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

  // Lock body scroll when modal is open
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

  const selectedItem = selectedIndex !== null ? items[selectedIndex] : null;

  return (
    <>
      {/* FILTER BUTTONS */}
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

      {/* GALLERY GRID */}
      <div className="gallery-grid">
        {items.map((figure, idx) => (
          <figure
            key={figure.src + idx}
            className={cn('figure group cursor-pointer transition-transform hover:-translate-y-1', figure.aspect && `figure-${figure.aspect}`)}
            onClick={() => {
              setSelectedIndex(idx);
              setIsZoomed(false);
            }}
          >
            <div className="relative overflow-hidden rounded-md">
              <img
                src={figure.src}
                alt={figure.alt}
                loading="lazy"
                className="w-full transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white text-xs font-semibold px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md flex items-center gap-1.5 shadow-lg">
                  <Maximize2 className="size-3.5" /> View Details
                </span>
              </div>
            </div>
            <figcaption className="mt-2 text-xs font-medium flex items-center justify-between">
              <span>{figure.caption}</span>
              {figure.demo && <span className="demo-chip">demo</span>}
            </figcaption>
          </figure>
        ))}
      </div>

      {/* RICH SPLIT-VIEW LIGHTBOX MODAL (PORTAL TO BODY FOR TRUE CENTER & MAXIMUM Z-INDEX) */}
      {mounted && selectedItem && typeof document !== 'undefined' && createPortal(
        <div
          className="gallery-modal-overlay"
          onClick={() => {
            setSelectedIndex(null);
            setIsZoomed(false);
          }}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="gallery-modal-container glass interactive-glass"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="gallery-modal-grid">
              {/* ========================================================== */}
              {/* LEFT SIDE: LARGE IMAGE VIEWER & CONTROLS                   */}
              {/* ========================================================== */}
              <div className="gallery-viewer-col">
                {/* TOP BAR OVERVIEW */}
                <div className="gallery-viewer-header">
                  <div className="flex items-center gap-2">
                    <span className="kicker uppercase font-bold text-xs tracking-wider">
                      {selectedItem.category}
                    </span>
                    <span className="text-xs text-muted-foreground">·</span>
                    <span className="text-xs font-mono font-medium text-foreground bg-muted/60 px-2 py-0.5 rounded-md">
                      {(selectedIndex ?? 0) + 1} / {items.length}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <button
                      type="button"
                      className="icon-btn size-8"
                      onClick={() => setIsZoomed((v) => !v)}
                      title={isZoomed ? 'Fit to window' : 'Zoom in'}
                      aria-label={isZoomed ? 'Fit to window' : 'Zoom in'}
                    >
                      {isZoomed ? <ZoomOut className="size-4" /> : <ZoomIn className="size-4" />}
                    </button>

                    <a
                      href={selectedItem.src}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="icon-btn size-8"
                      title="Open full resolution image in new tab"
                      aria-label="Open full resolution in new tab"
                    >
                      <ExternalLink className="size-3.5" />
                    </a>
                  </div>
                </div>

                {/* IMAGE STAGE */}
                <div className="gallery-viewer-stage">
                  <img
                    src={selectedItem.src}
                    alt={selectedItem.alt}
                    className={cn('gallery-viewer-img', isZoomed && 'zoomed')}
                    onClick={() => setIsZoomed((v) => !v)}
                    title="Click to zoom in/out"
                  />

                  {/* PREVIOUS BUTTON */}
                  <button
                    type="button"
                    className="gallery-nav-btn gallery-nav-prev"
                    onClick={() => move(-1)}
                    aria-label="Previous image"
                    title="Previous image (Left Arrow)"
                  >
                    <ChevronLeft className="size-5" />
                  </button>

                  {/* NEXT BUTTON */}
                  <button
                    type="button"
                    className="gallery-nav-btn gallery-nav-next"
                    onClick={() => move(1)}
                    aria-label="Next image"
                    title="Next image (Right Arrow)"
                  >
                    <ChevronRight className="size-5" />
                  </button>
                </div>

                {/* BOTTOM CAPTION BAR */}
                <div className="gallery-viewer-caption-bar">
                  <p className="truncate m-0 font-serif italic text-xs">
                    {selectedItem.caption}
                  </p>
                  {selectedItem.demo && (
                    <span className="demo-chip text-[10px] shrink-0">research demo</span>
                  )}
                </div>
              </div>

              {/* ========================================================== */}
              {/* RIGHT SIDE: RICH DETAILS & TECHNICAL SPECIFICATIONS        */}
              {/* ========================================================== */}
              <div className="gallery-details-col">
                {/* HEADER */}
                <div className="gallery-details-header">
                  <div className="gallery-details-top-row">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="edu-status-pill text-[11px] py-0.5">
                        <span className="edu-status-dot" aria-hidden="true" />
                        {selectedItem.category.toUpperCase()}
                      </span>
                      {selectedItem.dateOrVenue && (
                        <span className="text-xs text-muted-foreground flex items-center gap-1">
                          <Calendar className="size-3 text-primary" />
                          {selectedItem.dateOrVenue}
                        </span>
                      )}
                    </div>

                    <button
                      type="button"
                      className="icon-btn size-8 shrink-0 hover:bg-destructive/20"
                      onClick={() => {
                        setSelectedIndex(null);
                        setIsZoomed(false);
                      }}
                      aria-label="Close dialog"
                      title="Close (Escape)"
                    >
                      <X className="size-4" />
                    </button>
                  </div>

                  <h2 className="gallery-details-title">
                    {selectedItem.title || selectedItem.caption}
                  </h2>
                </div>

                {/* 1. METHODOLOGY & IMPLEMENTATION */}
                {selectedItem.whatWasDone && (
                  <div className="gallery-detail-card">
                    <span className="gallery-detail-label text-emerald-500">
                      <CheckCircle2 className="size-4" />
                      Methodology & Implementation
                    </span>
                    <p className="gallery-detail-text">
                      {selectedItem.whatWasDone}
                    </p>
                  </div>
                )}

                {/* 2. SCIENTIFIC RATIONALE & SIGNIFICANCE */}
                {selectedItem.whyUsed && (
                  <div className="gallery-detail-card">
                    <span className="gallery-detail-label text-sky-500">
                      <Target className="size-4" />
                      Scientific Rationale & Significance
                    </span>
                    <p className="gallery-detail-text">
                      {selectedItem.whyUsed}
                    </p>
                  </div>
                )}

                {/* 3. TECHNICAL OVERVIEW & DESCRIPTION */}
                {selectedItem.description && (
                  <div className="gallery-detail-card">
                    <span className="gallery-detail-label text-amber-500">
                      <Layers className="size-4" />
                      Technical Overview & Description
                    </span>
                    <p className="gallery-detail-text font-serif leading-relaxed text-muted-foreground">
                      {selectedItem.description}
                    </p>
                  </div>
                )}

                {/* 4. KEY FINDINGS & HIGHLIGHTS */}
                {selectedItem.highlights && selectedItem.highlights.length > 0 && (
                  <div className="gallery-detail-card">
                    <span className="gallery-detail-label text-purple-400">
                      <Sparkles className="size-4" />
                      Key Findings & Results
                    </span>
                    <ul className="gallery-highlights-list">
                      {selectedItem.highlights.map((h, i) => (
                        <li key={i} className="gallery-highlight-item">
                          <CheckCircle2 className="size-3.5 gallery-highlight-icon" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* 5. TECHNOLOGIES & FRAMEWORKS */}
                {selectedItem.toolsOrTech && selectedItem.toolsOrTech.length > 0 && (
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5 mb-2">
                      <Cpu className="size-3.5 text-primary" />
                      Technologies & Frameworks
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedItem.toolsOrTech.map((tool) => (
                        <span key={tool} className="chip text-xs">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* FOOTER ACTIONS & CONTROLS */}
                <div className="gallery-modal-footer">
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      className="btn btn-outline btn-sm text-xs py-1.5 px-3 flex items-center gap-1"
                      onClick={() => move(-1)}
                    >
                      <ChevronLeft className="size-3.5" /> Previous
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline btn-sm text-xs py-1.5 px-3 flex items-center gap-1"
                      onClick={() => move(1)}
                    >
                      Next <ChevronRight className="size-3.5" />
                    </button>
                  </div>

                  {selectedItem.relatedLink && (
                    <a
                      href={selectedItem.relatedLink.href}
                      className="btn btn-primary btn-sm text-xs py-1.5 px-3 flex items-center gap-1.5"
                    >
                      <span>{selectedItem.relatedLink.label}</span>
                      <ArrowRight className="size-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
