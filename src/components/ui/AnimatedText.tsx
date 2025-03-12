
import React, { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedTextProps {
  phrases: string[];
  className?: string;
  interval?: number;
}

export default function AnimatedText({
  phrases,
  className,
  interval = 3000,
}: AnimatedTextProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (phrases.length <= 1) return;
    
    const timer = setInterval(() => {
      setIsAnimating(true);
      
      // Wait for slide-out animation to complete
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % phrases.length);
        setIsAnimating(false);
      }, 800); // Match the animation duration
    }, interval);
    
    return () => clearInterval(timer);
  }, [phrases, interval]);
  
  return (
    <div className={cn("relative overflow-hidden h-[1.2em]", className)} ref={containerRef}>
      <div 
        className={cn(
          "absolute w-full transition-all duration-800",
          isAnimating ? "animate-text-slide" : "animate-text-reveal"
        )}
      >
        {phrases[currentIndex]}
      </div>
    </div>
  );
}
