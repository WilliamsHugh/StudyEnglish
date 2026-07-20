import React from 'react';
import { motion } from 'framer-motion';

/**
 * Card - Floating card with shadow and hover elevation.
 * @param {Object} props
 * @param {React.ReactNode} props.children
 * @param {string} props.className
 * @param {Object} props.style
 * @param {boolean} props.hoverable - Enable hover elevation, default true
 */
export default function Card({
  children,
  className = '',
  style = {},
  hoverable = true,
  ...rest
}) {
  return (
    <motion.div
      className={`card ${className}`}
      style={{
        background: '#fff',
        borderRadius: '16px',
        padding: '32px',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
        transition: 'all 0.3s var(--ease-standard)',
        ...style,
      }}
      whileHover={
        hoverable
          ? {
              y: -8,
              boxShadow: '0 8px 24px rgba(0, 87, 217, 0.3)',
            }
          : undefined
      }
      {...rest}
    >
      {children}
    </motion.div>
  );
}
