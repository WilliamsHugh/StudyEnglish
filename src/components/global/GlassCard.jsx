import React from 'react';
import { motion } from 'framer-motion';

/**
 * GlassCard - Frosted glass effect card (for testimonials).
 * @param {Object} props
 * @param {React.ReactNode} props.children
 * @param {string} props.className
 * @param {boolean} props.hoverRotate - Enable slight rotation on hover
 */
export default function GlassCard({
  children,
  className = '',
  style = {},
  hoverRotate = false,
  ...rest
}) {
  return (
    <motion.div
      className={`glass-card ${className}`}
      style={{
        background: 'rgba(255, 255, 255, 0.08)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        border: '1px solid rgba(255, 255, 255, 0.15)',
        borderRadius: '16px',
        padding: '28px',
        transition: 'all 0.3s var(--ease-standard)',
        ...style,
      }}
      whileHover={
        hoverRotate
          ? {
              rotate: 2,
              scale: 1.02,
              boxShadow: '0 12px 40px rgba(0, 87, 217, 0.2)',
            }
          : {
              y: -4,
              boxShadow: '0 12px 40px rgba(0, 87, 217, 0.2)',
            }
      }
      {...rest}
    >
      {children}
    </motion.div>
  );
}
