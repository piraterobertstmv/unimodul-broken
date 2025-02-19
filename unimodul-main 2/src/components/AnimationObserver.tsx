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
      threshold: 0.1,
      rootMargin: '50px'
    };

    observerRef.current = new IntersectionObserver(observerCallback, observerOptions);

    document.querySelectorAll('.animate-on-scroll, .section-transition').forEach(element => {
      observerRef.current?.observe(element);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  useEffect(() => {
    const observer = setupIntersectionObserver();
    
    const routeChangeHandler = () => {
      setTimeout(setupIntersectionObserver, 100);
    };

    window.addEventListener('popstate', routeChangeHandler);
    
    return () => {
      window.removeEventListener('popstate', routeChangeHandler);
      observer?.();
    };
  }, [setupIntersectionObserver]);

  return null;
};