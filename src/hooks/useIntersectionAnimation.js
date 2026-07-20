import { useEffect, useRef, useState } from 'react';

/**
 * useIntersectionAnimation - Triggers animation when element enters viewport.
 * @param {Object} options - IntersectionObserver options
 * @param {number} options.threshold - Visibility threshold (0-1), default 0.2
 * @param {boolean} options.triggerOnce - Whether to trigger only once, default true
 * @param {string} options.rootMargin - Root margin, default '0px 0px -50px 0px'
 * @returns {[React.RefObject, boolean]} [ref, isVisible]
 */
export function useIntersectionAnimation(options = {}) {
  const {
    threshold = 0.2,
    triggerOnce = true,
    rootMargin = '0px 0px -50px 0px',
  } = options;

  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold, triggerOnce, rootMargin]);

  return [ref, isVisible];
}

export default useIntersectionAnimation;
