import { useState, useEffect, useCallback } from 'react';

/**
 * useScrollProgress - Tracks overall scroll position and returns a 0-100 percentage.
 * Used for the progress line animation and scroll storytelling.
 */
export function useScrollProgress() {
  const [progress, setProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('hero');

  const handleScroll = useCallback(() => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    
    if (docHeight <= 0) {
      setProgress(0);
      return;
    }
    
    const currentProgress = Math.min((scrollTop / docHeight) * 100, 100);
    setProgress(currentProgress);

    // Determine active section for scroll storytelling
    if (currentProgress < 20) {
      setActiveSection('hero');
    } else if (currentProgress < 35) {
      setActiveSection('pain');
    } else if (currentProgress < 60) {
      setActiveSection('features');
    } else if (currentProgress < 80) {
      setActiveSection('testimonials');
    } else {
      setActiveSection('cta');
    }
  }, []);

  useEffect(() => {
    let ticking = false;
    
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    handleScroll(); // Initial call
    
    return () => window.removeEventListener('scroll', onScroll);
  }, [handleScroll]);

  return { progress, activeSection };
}

export default useScrollProgress;
