import { useEffect } from 'react';

export const SmoothScroll = () => {
  useEffect(() => {
    const smoothScroll = (e: WheelEvent) => {
      e.preventDefault();

      const delta = e.deltaY;
      const scrollSpeed = 0.6; // Reduced from 1.2 to make it faster
      const maxScroll = 60; // Maximum scroll distance per event
      
      // Limit the scroll distance while keeping it smooth
      const scrollDistance = Math.min(Math.abs(delta) * scrollSpeed, maxScroll) * Math.sign(delta);
      
      window.scrollBy({
        top: scrollDistance,
        behavior: 'auto' // Changed from 'smooth' to 'auto' for more responsive scrolling
      });
    };

    // Add smooth scrolling to anchor links only
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(this: HTMLAnchorElement, e: Event) {
        e.preventDefault();
        const href = this.getAttribute('href');
        if (!href) return;
        
        document.querySelector(href)?.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      });
    });

    // Only apply custom scroll to touchpad/mouse wheel
    const isTrackpad = (e: WheelEvent) => Math.abs(e.deltaY) < 50;
    
    const handleScroll = (e: WheelEvent) => {
      if (!isTrackpad(e)) {
        // For mouse wheel, use native scrolling
        return;
      }
      smoothScroll(e);
    };

    window.addEventListener('wheel', handleScroll, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, []);

  return null;
}; 