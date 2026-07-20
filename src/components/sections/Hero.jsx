import React from 'react';
import { motion } from 'framer-motion';
import Button from '../global/Button';

/**
 * Hero - Main hero section with gradient background, floating devices, grid, glow lines.
 */
export default function Hero() {
  return (
    <section
      id="hero"
      className="section"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        paddingTop: 'calc(var(--header-height) + 40px)',
        background: 'linear-gradient(180deg, var(--color-secondary) 0%, var(--color-primary) 50%, #000 100%)',
      }}
    >
      {/* Soft radial glow */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -40%)',
          width: '60%',
          height: '60%',
          background: 'radial-gradient(ellipse at center, rgba(0, 87, 217, 0.4) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      {/* Grid background */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: 'var(--grid-size, 20px) var(--grid-size, 20px)',
          pointerEvents: 'none',
        }}
      />

      {/* Glow lines - diagonal SVG lines converging at center */}
      <svg
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          opacity: 0.4,
        }}
        viewBox="0 0 1440 900"
        preserveAspectRatio="none"
      >
        <motion.line
          x1="100" y1="0" x2="720" y2="450"
          stroke="url(#glowGrad1)"
          strokeWidth="1"
          animate={{ opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.line
          x1="1340" y1="0" x2="720" y2="450"
          stroke="url(#glowGrad2)"
          strokeWidth="1"
          animate={{ opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        />
        <motion.line
          x1="0" y1="900" x2="720" y2="450"
          stroke="url(#glowGrad1)"
          strokeWidth="0.8"
          animate={{ opacity: [0.2, 0.6, 0.2] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        />
        <motion.line
          x1="1440" y1="800" x2="720" y2="450"
          stroke="url(#glowGrad2)"
          strokeWidth="0.8"
          animate={{ opacity: [0.2, 0.6, 0.2] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
        />
        <defs>
          <linearGradient id="glowGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="50%" stopColor="rgba(0, 87, 217, 0.5)" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
          <linearGradient id="glowGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="50%" stopColor="rgba(253, 181, 21, 0.3)" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
      </svg>

      {/* Arrow animation - traveling from left to center */}
      <motion.div
        style={{
          position: 'absolute',
          top: '35%',
          left: '10%',
          pointerEvents: 'none',
        }}
        animate={{
          x: [0, 100, 200],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M12 4L20 12M20 12L12 20M20 12H4" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </motion.div>

      {/* Content */}
      <div
        className="section-inner"
        style={{
          position: 'relative',
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          gap: '24px',
        }}
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span
            style={{
              display: 'inline-block',
              padding: '6px 16px',
              borderRadius: '24px',
              background: 'rgba(253, 181, 21, 0.1)',
              border: '1px solid rgba(253, 181, 21, 0.2)',
              color: 'var(--color-accent)',
              fontSize: '14px',
              fontWeight: 600,
              letterSpacing: '0.02em',
            }}
          >
            🎯 Focus On Ultimate Result
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{
            fontSize: 'var(--font-h1)',
            maxWidth: '800px',
            lineHeight: 1.15,
          }}
        >
          Focus on Progress.{' '}
          <span
            style={{
              background: 'linear-gradient(135deg, var(--color-accent), #ffd060)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Achieve Ultimate Results.
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          style={{
            color: 'var(--color-neutral-dark)',
            fontSize: '18px',
            maxWidth: '560px',
            lineHeight: 1.7,
          }}
        >
          Stop wandering through endless lessons. Our AI-powered platform
          creates a personalized path to your English goals — tracking every
          milestone that matters.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          style={{
            display: 'flex',
            gap: '16px',
            flexWrap: 'wrap',
            justifyContent: 'center',
            marginTop: '8px',
          }}
        >
          <Button size="lg" glow targetCursor>
            Start Your Journey
          </Button>
          <Button variant="secondary" size="lg">
            See How It Works
          </Button>
        </motion.div>

        {/* Floating Devices Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          style={{
            position: 'relative',
            width: '100%',
            maxWidth: '900px',
            marginTop: '40px',
            height: '400px',
          }}
        >
          {/* Laptop device */}
          <motion.div
            style={{
              position: 'absolute',
              top: '20px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '80%',
              maxWidth: '700px',
              background: 'linear-gradient(180deg, #1a2a4a 0%, #0d1a33 100%)',
              borderRadius: '12px',
              border: '1px solid rgba(255,255,255,0.08)',
              overflow: 'hidden',
              boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
            }}
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          >
            {/* Laptop top bar */}
            <div style={{
              padding: '12px 16px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              borderBottom: '1px solid rgba(255,255,255,0.06)',
            }}>
              <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#ff5f57' }} />
              <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#ffbd2e' }} />
              <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#28c840' }} />
              <div style={{ flex: 1 }} />
              <div style={{
                width: '40%',
                height: '6px',
                background: 'rgba(255,255,255,0.06)',
                borderRadius: '3px',
              }} />
            </div>
            {/* Dashboard preview */}
            <div style={{ padding: '20px' }}>
              {/* Progress bar simulation */}
              <div style={{ marginBottom: '16px' }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginBottom: '6px',
                  fontSize: '12px',
                  color: 'rgba(255,255,255,0.5)',
                }}>
                  <span>Speaking Progress</span>
                  <span>78%</span>
                </div>
                <div style={{
                  width: '100%',
                  height: '8px',
                  background: 'rgba(255,255,255,0.06)',
                  borderRadius: '4px',
                  overflow: 'hidden',
                }}>
                  <motion.div
                    initial={{ width: '0%' }}
                    whileInView={{ width: '78%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 2.5, ease: 'easeOut', delay: 1.5 }}
                    style={{
                      height: '100%',
                      background: 'linear-gradient(90deg, var(--color-primary), var(--color-accent))',
                      borderRadius: '4px',
                    }}
                  />
                </div>
              </div>
              {/* Chart bars */}
              <div style={{
                display: 'flex',
                gap: '8px',
                height: '80px',
                alignItems: 'flex-end',
              }}>
                {[45, 60, 35, 75, 55, 85, 65, 90, 70, 95, 80, 78].map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: '0%' }}
                    whileInView={{ height: `${h}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 2, ease: 'easeOut', delay: 2 + i * 0.1 }}
                    style={{
                      flex: 1,
                      background: `linear-gradient(180deg, var(--color-accent), var(--color-primary))`,
                      borderRadius: '4px 4px 0 0',
                      minWidth: '12px',
                    }}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Mobile device */}
          <motion.div
            style={{
              position: 'absolute',
              right: '5%',
              bottom: '20px',
              width: '120px',
              height: '200px',
              background: 'linear-gradient(180deg, #1a2a4a 0%, #0d1a33 100%)',
              borderRadius: '16px',
              border: '1px solid rgba(255,255,255,0.08)',
              overflow: 'hidden',
              boxShadow: '0 20px 60px rgba(0,0,0,0.4)',
            }}
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
          >
            <div style={{
              padding: '8px',
              display: 'flex',
              justifyContent: 'center',
            }}>
              <div style={{ width: '40px', height: '4px', background: 'rgba(255,255,255,0.1)', borderRadius: '2px' }} />
            </div>
            <div style={{ padding: '8px 12px' }}>
              <div style={{
                width: '100%',
                height: '4px',
                background: 'rgba(253,181,21,0.2)',
                borderRadius: '2px',
                marginBottom: '12px',
              }}>
                <motion.div
                  initial={{ width: '0%' }}
                  whileInView={{ width: '85%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 2.5, delay: 3 }}
                  style={{
                    height: '100%',
                    background: 'var(--color-accent)',
                    borderRadius: '2px',
                  }}
                />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                {[60, 40, 75].map((w, i) => (
                  <div key={i} style={{
                    width: `${w}%`,
                    height: '8px',
                    background: 'rgba(255,255,255,0.06)',
                    borderRadius: '4px',
                  }} />
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
