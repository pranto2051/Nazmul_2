import { useState, useEffect, useRef, useCallback } from 'react';
import {
  ArrowRight,
  BookOpen,
  Briefcase,
  ChevronRight,
  Code2,
  FileText,
  GraduationCap,
  Home,
  Image,
  Mail,
  Moon,
  Sparkles,
  Sun,
  Users,
  X,
} from 'lucide-react';

const navItems = [
  { label: 'Home', href: '/', icon: Home },
  { label: 'Research', href: '/research', icon: Sparkles },
  { label: 'Publications', href: '/publications', icon: BookOpen },
  { label: 'Experience', href: '/experience', icon: Briefcase },
  { label: 'Education', href: '/education', icon: GraduationCap },
  { label: 'Projects', href: '/projects', icon: Code2 },
  { label: 'Activities', href: '/activities', icon: Users },
  { label: 'Gallery', href: '/gallery', icon: Image },
  { label: 'CV', href: '/cv', icon: FileText },
] as const;

export default function Header({ currentPath = '' }: { currentPath?: string }) {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [isOpen, setIsOpen] = useState(false);
  const [isRendered, setIsRendered] = useState(false);
  const [path, setPath] = useState(currentPath);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const isClosingRef = useRef(false);

  useEffect(() => {
    const syncState = () => {
      setPath(window.location.pathname);
      const isDark =
        document.documentElement.classList.contains('dark') ||
        localStorage.getItem('theme') === 'dark' ||
        (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
      setTheme(isDark ? 'dark' : 'light');
    };

    syncState();

    document.addEventListener('astro:page-load', syncState);
    document.addEventListener('astro:after-swap', syncState);
    window.addEventListener('popstate', syncState);

    return () => {
      document.removeEventListener('astro:page-load', syncState);
      document.removeEventListener('astro:after-swap', syncState);
      window.removeEventListener('popstate', syncState);
    };
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

  const openMenu = useCallback(() => {
    isClosingRef.current = false;
    setIsRendered(true);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setIsOpen(true);
      });
    });
  }, []);

  const closeMenu = useCallback(() => {
    if (isClosingRef.current) return;
    isClosingRef.current = true;
    setIsOpen(false);
    setTimeout(() => {
      setIsRendered(false);
      isClosingRef.current = false;
    }, 400); // Wait for slide-out transition
  }, []);

  // Lock body scroll and focus management
  useEffect(() => {
    if (isRendered) {
      document.body.style.overflow = 'hidden';
      const timer = setTimeout(() => {
        closeButtonRef.current?.focus();
      }, 100);
      return () => {
        clearTimeout(timer);
        document.body.style.overflow = '';
      };
    } else {
      document.body.style.overflow = '';
    }
  }, [isRendered]);

  // Close on ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        closeMenu();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, closeMenu]);

  // Close on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 980 && isOpen) {
        closeMenu();
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen, closeMenu]);

  const handleNav = (href: string) => {
    setPath(href);
    closeMenu();
  };

  const isActive = (href: string) => {
    if (href === '/') return path === '/' || path === '';
    return path.startsWith(href);
  };

  return (
    <header className="site-header glass glass-nav">
      <a
        href="/"
        className="brand"
        aria-label="Nazmul Hasan Shouvo home"
        onClick={() => handleNav('/')}
      >
        NHS<span>.</span>
      </a>

      <nav className="desktop-nav" aria-label="Primary">
        {navItems.map(({ label, href }) => (
          <a
            key={href}
            href={href}
            className="nav-link"
            onClick={() => handleNav(href)}
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

        <a
          href="/contact"
          className="contact-button"
          onClick={() => handleNav('/contact')}
        >
          Get in touch
        </a>

        {/* Animated Hamburger Menu Button */}
        <button
          type="button"
          onClick={() => (isOpen ? closeMenu() : openMenu())}
          className={`icon-btn menu-button ${isOpen ? 'is-active' : ''}`}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
        >
          <span className="hamburger-box" aria-hidden="true">
            <span className="hamburger-line line-1" />
            <span className="hamburger-line line-2" />
            <span className="hamburger-line line-3" />
          </span>
        </button>
      </div>

      {/* Animated Slide-in Drawer from Right to Left */}
      {isRendered && (
        <div
          className={`mobile-sheet ${isOpen ? 'is-open' : 'is-closing'}`}
          onClick={closeMenu}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
        >
          <div className="mobile-sheet-backdrop" />
          <nav
            className="mobile-sheet-drawer"
            onClick={(e) => e.stopPropagation()}
            aria-label="Mobile navigation"
          >
            {/* Drawer Top Header */}
            <div className="mobile-drawer-header">
              <a
                href="/"
                className="brand mobile-drawer-brand"
                onClick={() => handleNav('/')}
              >
                NHS<span>.</span>
                <span className="drawer-status-pill">
                  <span className="drawer-status-dot" aria-hidden="true" />
                  Canterbury, UK
                </span>
              </a>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={toggleTheme}
                  className="icon-btn mobile-drawer-theme-btn"
                  aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
                  title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
                >
                  {theme === 'dark' ? <Sun className="size-4" /> : <Moon className="size-4" />}
                </button>

                <button
                  ref={closeButtonRef}
                  type="button"
                  onClick={closeMenu}
                  aria-label="Close menu"
                  className="icon-btn sheet-close"
                >
                  <X className="size-5" />
                </button>
              </div>
            </div>

            {/* Nav Items List with Staggered Entrance Animation */}
            <div className="mobile-nav-links">
              {navItems.map(({ label, href, icon: Icon }, idx) => {
                const active = isActive(href);
                return (
                  <a
                    key={href}
                    href={href}
                    className={`mobile-nav-item ${active ? 'is-active' : ''}`}
                    style={{ '--nav-idx': idx } as React.CSSProperties}
                    onClick={() => handleNav(href)}
                  >
                    <div className="mobile-nav-item-left">
                      <span className="mobile-nav-icon-wrap" aria-hidden="true">
                        <Icon className="size-4" />
                      </span>
                      <span className="mobile-nav-label">{label}</span>
                    </div>
                    {active ? (
                      <span className="mobile-nav-active-dot" />
                    ) : (
                      <ChevronRight className="size-4 mobile-nav-arrow" aria-hidden="true" />
                    )}
                  </a>
                );
              })}

              <a
                href="/contact"
                className={`mobile-nav-item mobile-nav-contact ${isActive('/contact') ? 'is-active' : ''}`}
                style={{ '--nav-idx': navItems.length } as React.CSSProperties}
                onClick={() => handleNav('/contact')}
              >
                <div className="mobile-nav-item-left">
                  <span className="mobile-nav-icon-wrap" aria-hidden="true">
                    <Mail className="size-4" />
                  </span>
                  <span className="mobile-nav-label">Contact</span>
                </div>
                <ArrowRight className="size-4 mobile-nav-arrow" aria-hidden="true" />
              </a>
            </div>

            {/* Drawer Footer */}
            <div className="mobile-drawer-footer">
              <a
                href="/contact"
                className="btn btn-primary w-full justify-center mobile-cta-btn"
                onClick={() => handleNav('/contact')}
              >
                <span>Get in touch</span>
                <ArrowRight className="size-4 inline ml-1.5" />
              </a>

              <div className="mobile-drawer-meta">
                <span className="text-xs text-muted-foreground font-medium">Nazmul Hasan Shouvo</span>
                <span className="text-[11px] text-muted-foreground/80">AI & Medical Imaging Researcher</span>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

