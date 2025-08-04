'use client';
import { Suspense } from 'react';
import CaseStudyDetail from '../../../components/case studies/CaseStudyDetail';
import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

export default function Page() {
  useEffect(() => {
      const lenis = new Lenis({
        duration: 2.5, // feel free to tweak for more smoothness
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // default ease
        smooth: true,
      });
  
      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
  
      requestAnimationFrame(raf);
    }, []);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CaseStudyDetail />
    </Suspense>
  );
}
