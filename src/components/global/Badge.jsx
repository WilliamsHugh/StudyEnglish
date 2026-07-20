import React from 'react';

/**
 * Badge - Highlight accent text/tag.
 * @param {Object} props
 * @param {React.ReactNode} props.children
 * @param {string} props.variant - 'gold' | 'blue' | 'neutral'
 * @param {string} props.size - 'sm' | 'md'
 */
export default function Badge({
  children,
  variant = 'gold',
  size = 'sm',
  className = '',
  ...rest
}) {
  const colors = {
    gold: {
      background: 'rgba(253, 181, 21, 0.12)',
      color: 'var(--color-accent)',
      border: '1px solid rgba(253, 181, 21, 0.2)',
    },
    blue: {
      background: 'rgba(0, 87, 217, 0.12)',
      color: '#4a9eff',
      border: '1px solid rgba(0, 87, 217, 0.2)',
    },
    neutral: {
      background: 'rgba(255, 255, 255, 0.08)',
      color: 'var(--color-neutral-medium)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
    },
  };

  const sizes = {
    sm: { padding: '4px 12px', fontSize: '12px', borderRadius: '20px' },
    md: { padding: '6px 16px', fontSize: '14px', borderRadius: '24px' },
  };

  const currentColor = colors[variant] || colors.gold;
  const currentSize = sizes[size] || sizes.sm;

  return (
    <span
      className={className}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '6px',
        fontWeight: 600,
        letterSpacing: '0.02em',
        textTransform: 'uppercase',
        ...currentColor,
        ...currentSize,
      }}
      {...rest}
    >
      {children}
    </span>
  );
}
