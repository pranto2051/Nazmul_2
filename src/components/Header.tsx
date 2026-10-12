import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Menu, Moon, Sun, X } from 'lucide-react';

const navItems = [
  { label: 'Research', href: '/research' },
  { label: 'Publications', href: '/publications' },
  { label: 'Experience', href: '/experience' },
  { label: 'Projects', href: '/projects' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'CV', href: '/cv' },
] as const;

export default function Header({ currentPath = '' }: { currentPath?: string }) {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [isOpen, setIsOpen] = useState(false);
  const [path, setPath] = useState(currentPath);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setPath(window.location.pathname);
      const isDark = document.documentElement.classList.contains('dark') ||
        localStorage.getItem('theme') === 'dark' ||
        (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
      setTheme(isDark ? 'dark' : 'light');
    }
  }, []);

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    if (typeof window !== 'undefined') {
      if (next === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      localStorage.setItem('theme', next);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      closeButtonRef.current?.focus();
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const isActive = (href: string) => {
    if (href === '/') return path === '/';
    return path.startsWith(href);
  };

  return (
    <header className="site-header glass glass-nav">
      <a href="/" className="brand" aria-label="Nazmul Hasan Shouvo home">
        NHS<span>.</span>
      </a>

      <nav className="desktop-nav" aria-label="Primary">
        {navItems.map(({ label, href }) => (
          <a
            key={href}
            href={href}
            className="nav-link"
          >
            {isActive(href) && <span className="nav-active" />}
            <span>{label}</span>
          </a>
        ))}
      </nav>

      <div className="nav-actions">
        <button
          type="button"
          onClick={toggleTheme}
          className="icon-btn"
          aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
        >
          {theme === 'dark' ? <Sun className="size-4" /> : <Moon className="size-4" />}
        </button>

        <a href="/contact" className="contact-button">
          Get in touch
        </a>

        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="icon-btn menu-button"
          aria-label="Open menu"
        >
          <Menu className="size-5" />
        </button>
      </div>

      {isOpen && (
        <div className="mobile-sheet" onClick={() => setIsOpen(false)}>
          <nav
            onClick={(e) => e.stopPropagation()}
            aria-label="Mobile navigation"
          >
            <button
              ref={closeButtonRef}
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
              className="icon-btn sheet-close"
            >
              <X className="size-5" />
            </button>

            <a href="/" onClick={() => setIsOpen(false)}>
              Home
            </a>
            {navItems.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                onClick={() => setIsOpen(false)}
              >
                {label}
              </a>
            ))}
            <a href="/contact" onClick={() => setIsOpen(false)}>
              Contact <ArrowRight className="size-4 inline" />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
