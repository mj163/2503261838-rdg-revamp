'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface SlideControlsProps {
  totalSlides: number;
  currentSlide: number;
  isPlaying: boolean;
  onSlideChange: (index: number) => void;
  onPlayToggle: () => void;
}

export const SlideControls = ({
  totalSlides,
  currentSlide,
  isPlaying,
  onSlideChange,
  onPlayToggle,
}: SlideControlsProps) => {
  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onSlideChange(index);
    }
  };

  return (
    <>
      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div 
          className="flex items-center space-x-3" 
          role="tablist"
          aria-label="Slide navigation"
        >
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => onSlideChange(index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className={cn(
                'w-2 h-2 rounded-full transition-all duration-300',
                index === currentSlide ? 'bg-white w-4' : 'bg-white/50 hover:bg-white/75'
              )}
              aria-label={`Go to slide ${index + 1}`}
              aria-selected={index === currentSlide}
              role="tab"
              tabIndex={0}
            />
          ))}
        </div>
      </div>

      {/* Play/Pause Button */}
      <button
        onClick={onPlayToggle}
        className="absolute bottom-8 right-8 z-10 p-2 text-white/75 hover:text-white transition-colors"
        aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
        aria-pressed={!isPlaying}
      >
        {isPlaying ? (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <rect x="6" y="4" width="4" height="16" />
            <rect x="14" y="4" width="4" height="16" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M8 5v14l11-7z" />
          </svg>
        )}
      </button>
    </>
  );
};
