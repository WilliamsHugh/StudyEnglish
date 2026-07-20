import React from 'react';
import { useCounter } from '../../hooks/useCounter';

/**
 * Counter - Animated number counter component.
 * @param {Object} props
 * @param {number} props.target - Target number to count to
 * @param {number} props.duration - Animation duration in ms
 * @param {boolean} props.start - Whether to start animation
 * @param {string} props.suffix - Text suffix (e.g., '+', '%')
 * @param {string} props.prefix - Text prefix (e.g., '$')
 * @param {string} props.className
 */
export default function Counter({
  target,
  duration = 2000,
  start = false,
  suffix = '',
  prefix = '',
  className = '',
  ...rest
}) {
  const count = useCounter(target, { duration, start });

  const formatNumber = (num) => {
    if (num >= 1000) {
      return num.toLocaleString('en-US');
    }
    return num.toString();
  };

  return (
    <span className={className} {...rest}>
      {prefix}{formatNumber(count)}{suffix}
    </span>
  );
}
