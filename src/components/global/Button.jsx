import React from 'react';
import { motion } from 'framer-motion';

/**
 * Button - CTA button with glow effect and target cursor behavior.
 * @param {Object} props
 * @param {string} props.variant - 'primary' | 'secondary' | 'ghost'
 * @param {string} props.size - 'sm' | 'md' | 'lg' | 'xl'
 * @param {boolean} props.glow - Enable glow effect
 * @param {boolean} props.targetCursor - Enable custom target cursor
 * @param {React.ReactNode} props.children
 * @param {Function} props.onClick
 */
export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  glow = false,
  targetCursor = false,
  onClick,
  className = '',
  as: Component = 'button',
  ...rest
}) {
  const variants = {
    primary: {
      background: 'linear-gradient(135deg, var(--color-accent), #e8a000)',
      color: '#081B39',
      border: 'none',
    },
    secondary: {
      background: 'transparent',
      color: '#fff',
      border: '1px solid rgba(255,255,255,0.2)',
    },
    ghost: {
      background: 'transparent',
      color: 'var(--color-neutral-dark)',
      border: 'none',
    },
    gold: {
      background: 'linear-gradient(135deg, var(--color-accent), #e8a000)',
      color: '#081B39',
      border: 'none',
    },
  };

  const sizes = {
    sm: { padding: '6px 16px', fontSize: '14px', borderRadius: '6px' },
    md: { padding: '10px 24px', fontSize: '15px', borderRadius: '8px' },
    lg: { padding: '14px 36px', fontSize: '16px', borderRadius: '10px' },
    xl: { padding: '16px 48px', fontSize: '18px', borderRadius: '12px' },
  };

  const currentVariant = variants[variant] || variants.primary;
  const currentSize = sizes[size] || sizes.md;

  const Tag = Component;

  return (
    <motion.div
      className={`interactive ${targetCursor ? 'target-cursor' : ''} ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      style={{ display: 'inline-block' }}
    >
      <Tag
        onClick={onClick}
        style={{
          ...currentVariant,
          ...currentSize,
          cursor: targetCursor ? 'none' : 'pointer',
          fontFamily: 'var(--font-body)',
          fontWeight: 600,
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          transition: 'all 0.3s var(--ease-standard)',
          boxShadow: glow
            ? '0 4px 16px rgba(253, 181, 21, 0.4)'
            : 'none',
          position: 'relative',
          overflow: 'hidden',
        }}
        onMouseEnter={(e) => {
          if (glow) {
            e.currentTarget.style.boxShadow = '0 8px 32px rgba(253, 181, 21, 0.8)';
          }
        }}
        onMouseLeave={(e) => {
          if (glow) {
            e.currentTarget.style.boxShadow = '0 4px 16px rgba(253, 181, 21, 0.4)';
          }
        }}
        {...rest}
      >
        {children}
        {variant === 'primary' && (
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M3 8H13M13 8L9 4M13 8L9 12"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </Tag>
    </motion.div>
  );
}
