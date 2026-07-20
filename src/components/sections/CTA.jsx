import React from 'react';
import { motion } from 'framer-motion';
import Button from '../global/Button';

/**
 * CTA - Final call-to-action section with target icon and glow effects.
 */
export default function CTA() {
  return (
    <section
      id="cta"
      className="section"
      style={{
        background: 'var(--color-primary)',
        position: 'relative',
        overflow: 'hidden',
        minHeight: '400px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Central glow */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '80%',
          height: '80%',
          background: 'radial-gradient(ellipse at center, rgba(253, 181, 21, 0.15) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      {/* Grid overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          pointerEvents: 'none',
        }}
      />

      <div
        className="section-inner"
        style={{
          position: 'relative',
          zIndex: 2,
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '24px',
        }}
      >
        {/* Target icon */}
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        >
          <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
            <circle cx="32" cy="32" r="30" stroke="var(--color-accent)" strokeWidth="2" opacity="0.4" />
            <circle cx="32" cy="32" r="20" stroke="var(--color-accent)" strokeWidth="2" opacity="0.6" />
            <circle cx="32" cy="32" r="10" fill="var(--color-accent)" />
            <line x1="32" y1="2" x2="32" y2="14" stroke="var(--color-accent)" strokeWidth="2.5" strokeLinecap="round" opacity="0.8" />
            <line x1="32" y1="50" x2="32" y2="62" stroke="var(--color-accent)" strokeWidth="2.5" strokeLinecap="round" opacity="0.8" />
            <line x1="2" y1="32" x2="14" y2="32" stroke="var(--color-accent)" strokeWidth="2.5" strokeLinecap="round" opacity="0.8" />
            <line x1="50" y1="32" x2="62" y2="32" stroke="var(--color-accent)" strokeWidth="2.5" strokeLinecap="round" opacity="0.8" />
          </svg>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            fontSize: 'var(--font-h1)',
            color: '#fff',
          }}
        >
          Your{' '}
          <span
            style={{
              color: 'var(--color-accent)',
            }}
          >
            Goal
          </span>{' '}
          Starts Today
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{
            color: 'rgba(255, 255, 255, 0.7)',
            fontSize: '18px',
            maxWidth: '500px',
            lineHeight: 1.7,
          }}
        >
          Every expert was once a beginner who refused to give up.
          Start your focused journey now.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Button
            size="xl"
            variant="primary"
            glow
            targetCursor
            style={{
              fontSize: '18px',
              fontWeight: 700,
            }}
          >
            Begin Your Journey
          </Button>
        </motion.div>

        {/* Social proof */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          style={{
            color: 'rgba(255, 255, 255, 0.4)',
            fontSize: '14px',
            marginTop: '8px',
          }}
        >
          Join 1,000+ focused learners already on the path
        </motion.p>
      </div>
    </section>
  );
}
