import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../global/Button';
import logoImage from '../../assets/logo.png';

const NAV_LINKS = [
  { label: 'Learn', href: '#hero' },
  { label: 'Features', href: '#features' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
];

/**
 * Header - Navigation bar with blur effect on scroll and underline hover.
 */
export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      className="header"
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: 'var(--header-height)',
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 var(--padding-mobile)',
        transition: 'all 0.3s ease',
        background: scrolled
          ? 'rgba(8, 27, 57, 0.75)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(18px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(18px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.05)' : 'none',
      }}
    >
      {/* Logo */}
      <a href="#" style={{
        display: 'flex',
        alignItems: 'center',
        height: '100%',
      }}>
        <img
          src={logoImage}
          alt="FOUR - Focus On Ultimate Result"
          style={{
            height: '100%',
            width: 'auto',
            maxHeight: '56px',
            objectFit: 'contain',
          }}
        />
      </a>

      {/* Desktop Navigation */}
      <nav style={{
        display: 'flex',
        alignItems: 'center',
        gap: '32px',
      }}
      className="desktop-nav"
      >
        {NAV_LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            style={{
              position: 'relative',
              color: 'var(--color-neutral-medium)',
              fontSize: '15px',
              fontWeight: 500,
              padding: '4px 0',
              transition: 'color 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#fff';
              const underline = e.currentTarget.querySelector('.nav-underline');
              if (underline) underline.style.width = '100%';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'var(--color-neutral-medium)';
              const underline = e.currentTarget.querySelector('.nav-underline');
              if (underline) underline.style.width = '0%';
            }}
          >
            {link.label}
            <span
              className="nav-underline"
              style={{
                position: 'absolute',
                bottom: -2,
                left: 0,
                width: '0%',
                height: '2px',
                background: 'var(--color-accent)',
                transition: 'width 0.3s ease',
                borderRadius: '1px',
              }}
            />
          </a>
        ))}
      </nav>

      {/* Mobile menu toggle */}
      <button
        className="mobile-menu-btn"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        style={{
          display: 'none',
          background: 'none',
          border: 'none',
          color: '#fff',
          cursor: 'pointer',
          padding: '8px',
        }}
        aria-label="Toggle menu"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          {mobileMenuOpen ? (
            <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" />
          ) : (
            <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" />
          )}
        </svg>
      </button>

      {/* CTA Button */}
      <div className="desktop-cta">
        <Button size="sm" glow>
          Get Started
        </Button>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav, .desktop-cta {
            display: none !important;
          }
          .mobile-menu-btn {
            display: flex !important;
          }
        }
      `}</style>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            style={{
              position: 'fixed',
              top: 'var(--header-height)',
              left: 0,
              right: 0,
              background: 'rgba(8, 27, 57, 0.95)',
              backdropFilter: 'blur(18px)',
              padding: '24px var(--padding-mobile)',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              borderBottom: '1px solid rgba(255,255,255,0.05)',
            }}
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  color: 'var(--color-neutral-medium)',
                  fontSize: '18px',
                  fontWeight: 500,
                  padding: '8px 0',
                }}
              >
                {link.label}
              </a>
            ))}
            <Button size="md" glow style={{ marginTop: '8px' }}>
              Get Started
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
