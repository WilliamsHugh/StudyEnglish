import React from 'react';
import { motion } from 'framer-motion';
import Card from '../global/Card';

const PROBLEMS = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <path d="M12 8v4M12 16h.01"/>
      </svg>
    ),
    title: 'Information Overload',
    description: 'Too many resources, apps, and methods. You spend more time choosing what to learn than actually learning.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
      </svg>
    ),
    title: 'Inconsistent Progress',
    description: 'Without structure, your learning ebbs and flows. Weeks of effort fade because there\'s no system tracking your growth.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
      </svg>
    ),
    title: 'No Real-World Practice',
    description: 'The gap between classroom English and real conversation remains wide. You learn the rules, but can\'t play the game.',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

/**
 * PainPoint - Three problem cards with connection flow visualization.
 */
export default function PainPoint() {
  return (
    <section
      id="pain-points"
      className="section"
      style={{
        background: 'var(--color-neutral-light)',
        position: 'relative',
      }}
    >
      <div className="section-inner">
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
              background: 'rgba(0, 87, 217, 0.1)',
              color: 'var(--color-primary)',
              fontSize: '14px',
              fontWeight: 600,
              marginBottom: '16px',
            }}
          >
            THE PROBLEM
          </span>
          <h2
            className="section-title"
            style={{ color: 'var(--color-secondary)' }}
          >
            What Holds You Back?
          </h2>
          <p
            className="section-subtitle"
            style={{ color: 'var(--color-neutral-dark)' }}
          >
            You're not alone. Most learners face these three barriers on their
            path to fluency.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px',
            position: 'relative',
          }}
        >
          {PROBLEMS.map((problem, i) => (
            <motion.div
              key={problem.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              variants={cardVariants}
            >
              <Card
                hoverable
                style={{
                  background: '#fff',
                  padding: '36px 28px',
                  textAlign: 'center',
                  border: '1px solid rgba(0,0,0,0.04)',
                }}
              >
                {/* Icon circle */}
                <div
                  style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #ff4d4d, #cc0000)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 20px',
                    boxShadow: '0 4px 12px rgba(204, 0, 0, 0.3)',
                  }}
                >
                  {problem.icon}
                </div>

                <h3
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: 'var(--font-h3)',
                    color: 'var(--color-secondary)',
                    marginBottom: '12px',
                  }}
                >
                  {problem.title}
                </h3>
                <p
                  style={{
                    color: 'var(--color-neutral-dark)',
                    lineHeight: 1.7,
                    fontSize: '15px',
                  }}
                >
                  {problem.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Connection lines between cards (desktop only) */}
        <svg
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            pointerEvents: 'none',
            opacity: 0.3,
          }}
          className="connection-lines"
        >
          <motion.path
            d="M 33% 50% L 50% 50% L 66% 50%"
            stroke="var(--color-accent)"
            strokeWidth="2"
            fill="none"
            strokeDasharray="8 4"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.8 }}
          />
          <style>{`
            .connection-lines {
              display: none;
            }
            @media (min-width: 1024px) {
              .connection-lines {
                display: block;
              }
            }
          `}</style>
        </svg>
      </div>

      {/* Solution connector */}
      <motion.div
        initial={{ opacity: 0, scaleY: 0 }}
        whileInView={{ opacity: 1, scaleY: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 1.2 }}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '12px',
          marginTop: '40px',
          color: 'var(--color-accent)',
          fontWeight: 600,
          fontSize: '16px',
        }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <span>There's a better way</span>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </motion.div>
    </section>
  );
}
