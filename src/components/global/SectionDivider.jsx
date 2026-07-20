import React from 'react';
import { motion } from 'framer-motion';

/**
 * SectionDivider - Glow line separator between sections.
 * @param {Object} props
 * @param {string} props.variant - 'standard' | 'glow'
 * @param {boolean} props.animated - Whether to animate the divider
 */
export default function SectionDivider({
  variant = 'standard',
  animated = true,
  className = '',
  ...rest
}) {
  const variants = {
    standard: {
      background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)',
      height: '1px',
    },
    glow: {
      background: 'linear-gradient(90deg, transparent, var(--color-accent), transparent)',
      height: '2px',
      boxShadow: '0 0 8px rgba(253, 181, 21, 0.3)',
    },
  };

  const current = variants[variant] || variants.standard;

  return (
    <motion.div
      className={className}
      style={{
        width: '100%',
        maxWidth: '600px',
        margin: '0 auto',
        ...current,
      }}
      initial={animated ? { width: 0, opacity: 0 } : undefined}
      whileInView={animated ? { width: '100%', opacity: 1 } : undefined}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      {...rest}
    />
  );
}
