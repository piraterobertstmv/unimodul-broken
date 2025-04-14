import { useEffect, useCallback, useRef } from "react";

export const AnimationObserver = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  const setupIntersectionObserver = useCallback(() => {
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          requestAnimationFrame(() => {
            entry.target.classList.add('visible');
          });
        }
      });
    };

    const observerOptions = {
      threshold: 0.05,
      rootMargin: '100px'
    };

    observerRef.current = new IntersectionObserver(observerCallback, observerOptions);

    const elementsToAnimate = document.querySelectorAll('.animate-on-scroll, .section-transition');
    
    elementsToAnimate.forEach(element => {
      observerRef.current?.observe(element);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  useEffect(() => {
    const observer = setupIntersectionObserver();
    
    setTimeout(() => {
      const elementsToAnimate = document.querySelectorAll('.animate-on-scroll, .section-transition');
      elementsToAnimate.forEach(element => {
        const rect = element.getBoundingClientRect();
        const isInViewport = (
          rect.top >= -100 && 
          rect.left >= 0 &&
          rect.bottom <= (window.innerHeight + 100) && 
          rect.right <= window.innerWidth
        );
        
        if (isInViewport) {
          element.classList.add('visible');
        }
      });
    }, 200);
    
    const routeChangeHandler = () => {
      setTimeout(setupIntersectionObserver, 100);
    };

    window.addEventListener('popstate', routeChangeHandler);
    
    window.addEventListener('resize', setupIntersectionObserver);
    
    return () => {
      window.removeEventListener('popstate', routeChangeHandler);
      window.removeEventListener('resize', setupIntersectionObserver);
      observer?.();
    };
  }, [setupIntersectionObserver]);

  return null;
};