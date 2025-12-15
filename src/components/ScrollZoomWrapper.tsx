import { useState, useEffect, ReactNode } from 'react';

interface ScrollZoomWrapperProps {
  children: ReactNode;
  index: number;
  totalSections: number;
}

export function ScrollZoomWrapper({ children, index, totalSections }: ScrollZoomWrapperProps) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // First-person perspective - smoother and more visible
  const sectionHeight = typeof window !== 'undefined' ? window.innerHeight : 1000;
  
  // Each section starts at a specific distance
  const initialDistance = -1000 - (index * 800); // Sections spaced 800px apart in Z-space
  
  // Your travel speed (how fast you move forward)
  const travelSpeed = scrollY * 1.5;
  
  // Current position of this section relative to camera
  const currentZ = initialDistance + travelSpeed;
  
  // Calculate opacity - visible in a range
  let opacity = 1;
  if (currentZ < -800) {
    // Far away - fade in gradually
    opacity = Math.max(0, Math.min(1, (currentZ + 1200) / 400));
  } else if (currentZ > 400) {
    // Behind camera - fade out
    opacity = Math.max(0, 1 - (currentZ - 400) / 300);
  }
  
  // Blur effect - sharp when in focus range
  let blur = 0;
  if (currentZ < -600) {
    blur = Math.abs(currentZ + 600) / 80;
  } else if (currentZ > 300) {
    blur = (currentZ - 300) / 60;
  }
  
  // Perspective scale - gets bigger as it approaches
  const scale = Math.max(0.3, Math.min(3, 1 + (currentZ + 1000) / 800));
  
  // Subtle drift for realism
  const driftX = Math.sin(index * 0.3 + scrollY * 0.0008) * 15;
  const driftY = Math.cos(index * 0.5 + scrollY * 0.0008) * 10;

  // Don't render if way too far or way too close
  if (currentZ < -1500 || currentZ > 800) {
    return null;
  }

  return (
    <div
      className="fixed top-0 left-0 w-full h-screen flex items-center justify-center px-6"
      style={{
        transform: `translate3d(${driftX}px, ${driftY}px, ${currentZ}px) scale(${scale})`,
        opacity: opacity,
        filter: `blur(${Math.max(0, blur)}px)`,
        transformStyle: 'preserve-3d',
        zIndex: 100 + Math.floor(-currentZ / 10),
        pointerEvents: currentZ > -300 && currentZ < 300 ? 'auto' : 'none',
      }}
    >
      <div className="w-full max-w-7xl mx-auto">
        {children}
      </div>
    </div>
  );
}
