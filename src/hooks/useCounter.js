import { useState, useEffect, useRef } from 'react';

/**
 * useCounter - Animated counter that counts from 0 to target value.
 * @param {number} target - The target value to count to
 * @param {Object} options
 * @param {number} options.duration - Animation duration in ms, default 2000
 * @param {boolean} options.start - Whether to start the animation, default false
 * @param {Function} options.easing - Custom easing function
 * @returns {number} current count value
 */
export function useCounter(target, options = {}) {
  const { duration = 2000, start = false } = options;
  const [count, setCount] = useState(0);
  const frameRef = useRef(null);
  const startTimeRef = useRef(null);

  useEffect(() => {
    if (!start) {
      setCount(0);
      return;
    }

    const easeOut = (t) => 1 - Math.pow(1 - t, 3);

    const animate = (timestamp) => {
      if (!startTimeRef.current) {
        startTimeRef.current = timestamp;
      }

      const elapsed = timestamp - startTimeRef.current;
      const rawProgress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOut(rawProgress);
      
      setCount(Math.floor(easedProgress * target));

      if (rawProgress < 1) {
        frameRef.current = requestAnimationFrame(animate);
      }
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [target, duration, start]);

  return count;
}

export default useCounter;
