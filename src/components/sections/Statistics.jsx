import React from 'react';
import { motion } from 'framer-motion';
import { useIntersectionAnimation } from '../../hooks/useIntersectionAnimation';
import Counter from '../global/Counter';

const STATS = [
  { value: 1000, suffix: '+', label: 'Active Users', subtitle: 'And growing every day' },
  { value: 95, suffix: '%', label: 'Improvement Rate', subtitle: 'Average skill increase' },
  { value: 500, suffix: '+', label: 'Hours Tracked', subtitle: 'Of focused learning' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const statVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

/**
 * Statistics - Stats section with animated counters on scroll.
 */
export default function Statistics() {
  const [ref, isVisible] = useIntersectionAnimation({ threshold: 0.3 });

  return (
    <section
      id="statistics"
      className="section"
      style={{
        background: 'linear-gradient(180deg, var(--color-secondary) 0%, #000 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle background pattern */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            radial-gradient(circle at 20% 50%, rgba(0, 87, 217, 0.05) 0%, transparent 50%),
            radial-gradient(circle at 80% 50%, rgba(253, 181, 21, 0.05) 0%, transparent 50%)
          `,
          pointerEvents: 'none',
        }}
      />

      <div className="section-inner" ref={ref} style={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '60px' }}
        >
          <span
            style={{
              display: 'inline-block',
              padding: '4px 12px',
              borderRadius: '20px',
              background: 'rgba(253, 181, 21, 0.1)',
              color: 'var(--color-accent)',
              fontSize: '14px',
              fontWeight: 600,
              marginBottom: '16px',
            }}
          >
            THE RESULTS
          </span>
          <h2 className="section-title">
            Numbers That{' '}
            <span className="gold-text">Speak</span>
          </h2>
          <p className="section-subtitle">
            Real data from real learners who committed to the path.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '32px',
          }}
        >
          {STATS.map((stat) => (
            <motion.div
              key={stat.label}
              variants={statVariants}
              style={{
                textAlign: 'center',
                padding: '40px 24px',
                borderRadius: '16px',
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.06)',
                backdropFilter: 'blur(8px)',
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                  fontWeight: 800,
                  background: 'linear-gradient(135deg, var(--color-accent), #ffd060)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  marginBottom: '8px',
                  letterSpacing: '-0.03em',
                }}
              >
                <Counter
                  target={stat.value}
                  suffix={stat.suffix}
                  start={isVisible}
                  duration={2000}
                />
              </div>
              <h3
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '18px',
                  color: '#fff',
                  fontWeight: 600,
                  marginBottom: '6px',
                }}
              >
                {stat.label}
              </h3>
              <p
                style={{
                  color: 'var(--color-neutral-dark)',
                  fontSize: '14px',
                }}
              >
                {stat.subtitle}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
