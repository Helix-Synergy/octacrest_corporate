import { useEffect, useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { gsap } from 'gsap';

const ScrollToTop = () => {
  const location = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    ScrollTrigger.refresh();
    if (document.body) {
      gsap.set(document.body, { opacity: 1 });
    }
  }, [location.pathname]);

  useEffect(() => {
    // Extra precaution: refresh ScrollTrigger after a short delay for complex DOM updates
    const refreshTimeout = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);
    return () => clearTimeout(refreshTimeout);
  }, [location.pathname]);

  return null;
};

export default ScrollToTop;
