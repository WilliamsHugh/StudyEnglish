import React from 'react';
import { motion } from 'framer-motion';
import GlassCard from '../global/GlassCard';
import Badge from '../global/Badge';

const TESTIMONIALS = [
  {
    name: 'Sarah Chen',
    role: 'Software Engineer',
    avatar: 'SC',
    quote: 'I went from struggling with technical meetings to leading them confidently in 3 months. FOUR\'s focus on real conversations was the game changer for me.',
    rating: 5,
  },
  {
    name: 'Marco Rossi',
    role: 'Business Analyst',
    avatar: 'MR',
    quote: 'The progress tracking kept me accountable. Seeing my improvement graph go up every week was addictive. I finally feel in control of my learning.',
    rating: 5,
  },
  {
    name: 'Yuki Tanaka',
    role: 'Graduate Student',
    avatar: 'YT',
    quote: 'What sets FOUR apart is the laser focus on outcomes. No fluff, no wasted time. Just clear, measurable progress toward my IELTS goals.',
    rating: 5,
  },
  {
    name: 'Ana Martinez',
    role: 'Marketing Manager',
    avatar: 'AM',
    quote: 'I tried every app out there. FOUR is the first that actually understood I didn\'t want to "learn English" — I wanted to present confidently at conferences.',
    rating: 5,
  },
];

const testimonialsVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

/**
 * Testimonials - Glassmorphism cards with slight rotation on hover.
 */
export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="section"
      style={{
        background: 'linear-gradient(180deg, var(--color-secondary) 0%, var(--color-primary) 100%)',
        position: 'relative',
      }}
    >
      {/* Ambient glow */}
      <div
        style={{
          position: 'absolute',
          top: '20%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '60%',
          height: '50%',
          background: 'radial-gradient(ellipse at center, rgba(253, 181, 21, 0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div className="section-inner" style={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '60px' }}
        >
          <Badge variant="gold" size="md" style={{ marginBottom: '16px' }}>
            TESTIMONIALS
          </Badge>
          <h2 className="section-title">
            What Our{' '}
            <span className="gold-text">Learners</span> Say
          </h2>
          <p className="section-subtitle">
            Real stories from real people who found their focus.
          </p>
        </motion.div>

        <motion.div
          variants={testimonialsVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="testimonials-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px',
          }}
        >
          {TESTIMONIALS.map((testimonial) => (
            <motion.div key={testimonial.name} variants={cardVariants}>
              <GlassCard
                hoverRotate
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                  height: '100%',
                }}
              >
                {/* Avatar */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '14px',
                  }}
                >
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, var(--color-accent), #e8a000)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 700,
                      fontSize: '16px',
                      color: 'var(--color-secondary)',
                    }}
                  >
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div
                      style={{
                        fontWeight: 600,
                        fontSize: '16px',
                        color: '#fff',
                      }}
                    >
                      {testimonial.name}
                    </div>
                    <div
                      style={{
                        fontSize: '13px',
                        color: 'rgba(255,255,255,0.5)',
                      }}
                    >
                      {testimonial.role}
                    </div>
                  </div>
                </div>

                {/* Stars */}
                <div style={{ display: 'flex', gap: '3px' }}>
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="var(--color-accent)">
                      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2z" />
                    </svg>
                  ))}
                </div>

                {/* Quote */}
                <p
                  style={{
                    color: 'rgba(255,255,255,0.8)',
                    lineHeight: 1.7,
                    fontSize: '15px',
                    fontStyle: 'italic',
                    flex: 1,
                  }}
                >
                  "{testimonial.quote}"
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
