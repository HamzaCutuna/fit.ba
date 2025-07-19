'use client';

import { useEffect } from 'react';

interface PerformanceEventTiming extends PerformanceEntry {
  processingStart: number;
}

interface LayoutShift extends PerformanceEntry {
  value: number;
}

export default function PerformanceOptimizer() {
  useEffect(() => {
    // Preload critical resources
    const preloadLinks = [
      { href: '/images/logo.png', as: 'image' },
      { href: '/images/fit1.jpg', as: 'image' },
    ];

    preloadLinks.forEach(({ href, as }) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = href;
      link.as = as;
      document.head.appendChild(link);
    });

    // Preconnect to external domains
    const preconnectDomains = [
      'https://fonts.googleapis.com',
      'https://fonts.gstatic.com',
    ];

    preconnectDomains.forEach(domain => {
      const link = document.createElement('link');
      link.rel = 'preconnect';
      link.href = domain;
      document.head.appendChild(link);
    });

    // Add performance monitoring
    if (typeof window !== 'undefined' && 'performance' in window) {
      window.addEventListener('load', () => {
        // Report Core Web Vitals
        if ('PerformanceObserver' in window) {
          try {
            const observer = new PerformanceObserver((list) => {
              for (const entry of list.getEntries()) {
                if (entry.entryType === 'largest-contentful-paint') {
                  console.log('LCP:', entry.startTime);
                }
                if (entry.entryType === 'first-input') {
                  const firstInputEntry = entry as PerformanceEventTiming;
                  console.log('FID:', firstInputEntry.processingStart - firstInputEntry.startTime);
                }
                if (entry.entryType === 'layout-shift') {
                  const layoutShiftEntry = entry as LayoutShift;
                  console.log('CLS:', layoutShiftEntry.value);
                }
              }
            });
            
            observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });
          } catch {
            console.warn('PerformanceObserver not supported');
          }
        }
      });
    }
  }, []);

  return null;
} 