import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import useScrollProgress from '../hooks/useScrollProgress';
import Header from './sections/Header';
import Hero from './sections/Hero';
import PainPoint from './sections/PainPoint';
import Features from './sections/Features';
import Statistics from './sections/Statistics';
import Testimonials from './sections/Testimonials';
import CTA from './sections/CTA';
import FAQ from './sections/FAQ';
import Footer from './sections/Footer';
import SectionDivider from './global/SectionDivider';

/**
 * LandingPage - Main orchestrator combining all sections with scroll storytelling.
 * Includes progress line, target cursor, and scroll effects.
 */
export default function LandingPage() {
  const { progress } = useScrollProgress();

  return (
    <>
      {/* Progress Line - fixed on left edge */}
      <div className="progress-line" role="progressbar" aria-valuenow={Math.round(progress)} aria-valuemin={0} aria-valuemax={100}>
        <div className="progress-line-fill" style={{ height: `${progress}%` }} />
      </div>


      {/* Sections */}
      <Header />
      <Hero />
      <PainPoint />
      <div style={{ padding: '0 0 60px' }}>
        <SectionDivider variant="glow" />
      </div>
      <Features />
      <div style={{ padding: '0 0 60px' }}>
        <SectionDivider variant="standard" />
      </div>
      <Statistics />
      <div style={{ padding: '0 0 60px' }}>
        <SectionDivider variant="glow" />
      </div>
      <Testimonials />
      <CTA />
      <FAQ />
      <Footer />

      {/* Target cursor SVG overlay (only for elements with .target-cursor) */}
      <TargetCursor />
    </>
  );
}

/**
 * TargetCursor - Custom crosshair cursor that follows mouse on target elements.
 */
function TargetCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const targetElements = document.querySelectorAll('.target-cursor');

    const handleMouseEnter = () => setVisible(true);
    const handleMouseLeave = () => setVisible(false);

    targetElements.forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    const handleGlobalMove = (e) => {
      // Check if mouse is over a target element
      const target = e.target.closest('.target-cursor');
      if (target) {
        setPos({ x: e.clientX, y: e.clientY });
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('mousemove', handleGlobalMove);

    return () => {
      targetElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
      window.removeEventListener('mousemove', handleGlobalMove);
    };
  }, []);

  return (
    <motion.div
      className="target-cursor-svg"
      animate={{
        opacity: visible ? 0.7 : 0,
        scale: visible ? 1 : 0.5,
      }}
      transition={{ duration: 0.15 }}
      style={{
        position: 'fixed',
        left: pos.x - 12,
        top: pos.y - 12,
        width: 24,
        height: 24,
        pointerEvents: 'none',
        zIndex: 99999,
        transform: 'translate(16px, 16px)',
      }}
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" stroke="var(--color-accent)" strokeWidth="1.5" />
        <circle cx="12" cy="12" r="2" fill="var(--color-accent)" />
        <line x1="12" y1="2" x2="12" y2="6" stroke="var(--color-accent)" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="12" y1="18" x2="12" y2="22" stroke="var(--color-accent)" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="2" y1="12" x2="6" y2="12" stroke="var(--color-accent)" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="18" y1="12" x2="22" y2="12" stroke="var(--color-accent)" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </motion.div>
  );
}
