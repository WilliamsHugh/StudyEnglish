import React from 'react';
import { motion } from 'framer-motion';
import Badge from '../global/Badge';

const FEATURES = [
  {
    title: 'Learn with Smart Lessons',
    description: 'AI adapts each lesson to your skill level. Focus on what matters most — not what you already know.',
    side: 'left',
    preview: 'flashcard',
  },
  {
    title: 'Practice with Real Conversations',
    description: 'Simulated dialogues with AI partners. Build confidence before speaking with real people.',
    side: 'right',
    preview: 'audio',
  },
  {
    title: 'Track Every Milestone',
    description: 'Beautiful dashboards show your progress across vocabulary, grammar, speaking, and listening.',
    side: 'left',
    preview: 'dashboard',
  },
  {
    title: 'Compete & Stay Motivated',
    description: 'Friendly leaderboards and daily streaks keep you coming back. Turn learning into a habit.',
    side: 'right',
    preview: 'leaderboard',
  },
  {
    title: 'Achieve Your Goal',
    description: 'From beginner to confident speaker. Follow a clear path to your ultimate result.',
    side: 'left',
    preview: 'goal',
  },
];

const slideVariants = {
  hiddenLeft: { opacity: 0, x: -80 },
  hiddenRight: { opacity: 0, x: 80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

/**
 * Features - Timeline-based feature showcase with alternating cards and animations.
 */
export default function Features() {
  return (
    <section
      id="features"
      className="section"
      style={{
        background: 'linear-gradient(180deg, #fff 0%, var(--color-neutral-light) 100%)',
        position: 'relative',
      }}
    >
      <div className="section-inner">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '80px' }}
        >
          <Badge variant="blue" size="md" style={{ marginBottom: '16px' }}>
            THE JOURNEY
          </Badge>
          <h2
            className="section-title"
            style={{
              background: 'linear-gradient(135deg, var(--color-secondary), var(--color-primary))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Your Path to Mastery
          </h2>
          <p className="section-subtitle" style={{ color: 'var(--color-neutral-dark)' }}>
            Five steps. One direction. Your ultimate result.
          </p>
        </motion.div>

        {/* Timeline */}
        <div style={{ position: 'relative' }}>
          {/* Timeline line */}
          <div
            style={{
              position: 'absolute',
              left: '50%',
              top: 0,
              bottom: 0,
              width: '2px',
              background: 'linear-gradient(180deg, var(--color-primary), var(--color-accent))',
              transform: 'translateX(-50%)',
              display: 'none',
            }}
            className="timeline-line"
          />

          <style>{`
            @media (min-width: 768px) {
              .timeline-line { display: block !important; }
            }
          `}</style>

          {FEATURES.map((feature, i) => {
            const isLeft = feature.side === 'left';

            return (
              <motion.div
                key={feature.title}
                initial={isLeft ? 'hiddenLeft' : 'hiddenRight'}
                whileInView="visible"
                viewport={{ once: true, margin: '-80px' }}
                variants={slideVariants}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: i < FEATURES.length - 1 ? '60px' : 0,
                  flexDirection: isLeft ? 'row' : 'row-reverse',
                }}
                className="feature-row"
              >
                {/* Content Card */}
                <div
                  style={{
                    flex: 1,
                    maxWidth: '480px',
                    padding: '0 24px',
                  }}
                >
                  <motion.div
                    whileHover={{ y: -4 }}
                    style={{
                      background: '#fff',
                      borderRadius: '16px',
                      padding: '32px',
                      boxShadow: '0 2px 16px rgba(0,0,0,0.06)',
                      border: '1px solid rgba(0,0,0,0.04)',
                      transition: 'all 0.3s ease',
                    }}
                  >
                    {/* Step number */}
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        marginBottom: '16px',
                      }}
                    >
                      <div
                        style={{
                          width: '36px',
                          height: '36px',
                          borderRadius: '50%',
                          background: 'linear-gradient(135deg, var(--color-primary), #003d99)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#fff',
                          fontWeight: 700,
                          fontSize: '16px',
                        }}
                      >
                        {i + 1}
                      </div>
                      <div
                        style={{
                          width: '8px',
                          height: '8px',
                          borderRadius: '50%',
                          background: isLeft ? 'var(--color-primary)' : 'var(--color-accent)',
                        }}
                      />
                    </div>

                    <h3
                      style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: 'var(--font-h3)',
                        color: 'var(--color-secondary)',
                        marginBottom: '12px',
                      }}
                    >
                      {feature.title}
                    </h3>
                    <p
                      style={{
                        color: 'var(--color-neutral-dark)',
                        lineHeight: 1.7,
                      }}
                    >
                      {feature.description}
                    </p>

                    {/* Animation preview */}
                    <div
                      style={{
                        marginTop: '20px',
                        padding: '16px',
                        background: 'var(--color-neutral-light)',
                        borderRadius: '10px',
                        overflow: 'hidden',
                      }}
                    >
                      {feature.preview === 'flashcard' && (
                        <FlashcardPreview />
                      )}
                      {feature.preview === 'audio' && (
                        <AudioWavePreview />
                      )}
                      {feature.preview === 'dashboard' && (
                        <DashboardPreview />
                      )}
                      {feature.preview === 'leaderboard' && (
                        <LeaderboardPreview />
                      )}
                      {feature.preview === 'goal' && (
                        <GoalPreview />
                      )}
                    </div>
                  </motion.div>
                </div>

                {/* Timeline dot */}
                <div
                  className="timeline-dot"
                  style={{
                    width: '16px',
                    height: '16px',
                    borderRadius: '50%',
                    background: isLeft ? 'var(--color-primary)' : 'var(--color-accent)',
                    border: '3px solid var(--color-neutral-light)',
                    boxShadow: '0 0 0 4px rgba(0,87,217,0.15)',
                    flexShrink: 0,
                    zIndex: 2,
                  }}
                />

                {/* Empty space for the other side */}
                <div style={{ flex: 1 }} />
              </motion.div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 767px) {
          .feature-row {
            flex-direction: column !important;
          }
          .timeline-dot {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}

/* ---- Internal preview animations ---- */

function FlashcardPreview() {
  const [flipped, setFlipped] = React.useState(false);

  return (
    <div
      onClick={() => setFlipped(!flipped)}
      style={{
        perspective: '600px',
        cursor: 'pointer',
        height: '80px',
      }}
    >
      <motion.div
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.4, ease: 'easeInOut' }}
        style={{
          width: '100%',
          height: '100%',
          position: 'relative',
          transformStyle: 'preserve-3d',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backfaceVisibility: 'hidden',
            background: 'linear-gradient(135deg, var(--color-primary), #003d99)',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            fontWeight: 600,
            fontSize: '14px',
          }}
        >
          👆 Tap to flip · "Achieve"
        </div>
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
            background: 'linear-gradient(135deg, var(--color-accent), #e8a000)',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#081B39',
            fontWeight: 600,
            fontSize: '14px',
          }}
        >
          🎯 Đạt được · "To reach a goal"
        </div>
      </motion.div>
    </div>
  );
}

function AudioWavePreview() {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '4px',
        height: '60px',
      }}
    >
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
        <motion.div
          key={i}
          animate={{
            scaleY: [0.4, 1.2, 0.6, 1.5, 0.4],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            delay: i * 0.1,
            ease: 'easeInOut',
          }}
          style={{
            width: '6px',
            height: '40px',
            background: `linear-gradient(180deg, var(--color-primary), var(--color-accent))`,
            borderRadius: '3px',
            transformOrigin: 'bottom',
          }}
        />
      ))}
    </div>
  );
}

function DashboardPreview() {
  return (
    <div style={{ height: '60px', display: 'flex', alignItems: 'flex-end', gap: '6px' }}>
      {[35, 55, 40, 70, 50, 85, 65, 90].map((h, i) => (
        <motion.div
          key={i}
          initial={{ height: '0%' }}
          whileInView={{ height: `${h}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: i * 0.1, ease: 'easeOut' }}
          style={{
            flex: 1,
            background: `linear-gradient(180deg, var(--color-accent), var(--color-primary))`,
            borderRadius: '4px 4px 0 0',
          }}
        />
      ))}
    </div>
  );
}

function LeaderboardPreview() {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCount((c) => (c >= 1247 ? 0 : c + 1));
    }, 5);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '12px',
        height: '50px',
        fontFamily: 'var(--font-heading)',
        fontWeight: 700,
        fontSize: '24px',
        color: 'var(--color-accent)',
      }}
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2z"/>
      </svg>
      <span>#{count.toLocaleString()}</span>
    </div>
  );
}

function GoalPreview() {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '50px',
      }}
    >
      <motion.div
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <circle cx="20" cy="20" r="18" stroke="var(--color-accent)" strokeWidth="2" />
          <circle cx="20" cy="20" r="10" stroke="var(--color-accent)" strokeWidth="2" />
          <circle cx="20" cy="20" r="4" fill="var(--color-accent)" />
          <line x1="20" y1="2" x2="20" y2="8" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" />
          <line x1="20" y1="32" x2="20" y2="38" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" />
          <line x1="2" y1="20" x2="8" y2="20" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" />
          <line x1="32" y1="20" x2="38" y2="20" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </motion.div>
    </div>
  );
}
