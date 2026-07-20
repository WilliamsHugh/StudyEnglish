import React from 'react';
import { motion } from 'framer-motion';

const FOOTER_LINKS = [
  { label: 'Privacy Policy', href: '#' },
  { label: 'Terms of Service', href: '#' },
  { label: 'Contact Us', href: '#' },
];

/**
 * Footer - Branding footer with links and copyright.
 */
export default function Footer() {
  return (
    <footer
      style={{
        background: '#050d1a',
        padding: '60px var(--padding-mobile) 30px',
        borderTop: '1px solid rgba(255,255,255,0.04)',
      }}
    >
      <div className="section-inner">
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '32px',
            textAlign: 'center',
          }}
        >
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <a
              href="#"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                fontFamily: 'var(--font-heading)',
                fontWeight: 700,
                fontSize: '24px',
                color: '#fff',
                letterSpacing: '-0.03em',
              }}
            >
              <svg width="36" height="36" viewBox="0 0 32 32" fill="none">
                <circle cx="16" cy="16" r="14" stroke="var(--color-accent)" strokeWidth="2"/>
                <circle cx="16" cy="16" r="6" fill="var(--color-accent)"/>
                <line x1="16" y1="2" x2="16" y2="8" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round"/>
                <line x1="16" y1="24" x2="16" y2="30" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round"/>
                <line x1="2" y1="16" x2="8" y2="16" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round"/>
                <line x1="24" y1="16" x2="30" y2="16" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <span>FOUR</span>
            </a>
            <p
              style={{
                color: 'var(--color-neutral-dark)',
                fontSize: '14px',
                marginTop: '8px',
                maxWidth: '300px',
                lineHeight: 1.6,
              }}
            >
              Focus On Ultimate Result. AI-powered English learning that tracks
              what matters.
            </p>
          </motion.div>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              display: 'flex',
              gap: '24px',
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}
          >
            {FOOTER_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                style={{
                  color: 'var(--color-neutral-dark)',
                  fontSize: '14px',
                  transition: 'color 0.3s ease',
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-accent)'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-neutral-dark)'}
              >
                {link.label}
              </a>
            ))}
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{
              display: 'flex',
              gap: '16px',
            }}
          >
            {['Twitter', 'LinkedIn', 'YouTube'].map((social) => (
              <a
                key={social}
                href="#"
                aria-label={social}
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  border: '1px solid rgba(255,255,255,0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--color-neutral-dark)',
                  fontSize: '12px',
                  fontWeight: 600,
                  transition: 'all 0.3s ease',
                  textDecoration: 'none',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--color-accent)';
                  e.currentTarget.style.color = 'var(--color-accent)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                  e.currentTarget.style.color = 'var(--color-neutral-dark)';
                }}
              >
                {social[0]}
              </a>
            ))}
          </motion.div>

          {/* Divider */}
          <div
            style={{
              width: '100%',
              maxWidth: '400px',
              height: '1px',
              background: 'rgba(255,255,255,0.04)',
            }}
          />

          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            style={{
              color: 'rgba(255,255,255,0.25)',
              fontSize: '13px',
              lineHeight: 1.6,
            }}
          >
            Designed by FOUR Team — Focus On Ultimate Result
          </motion.p>
        </div>
      </div>
    </footer>
  );
}
