'use client';

import React, { useReducer, useEffect, useCallback, useRef, useMemo } from 'react';
import { cn } from '@/lib/utils';
import { SlideImage } from './slide-image';
import { SlideControls } from './slide-controls';
import { HeroContent } from './hero-content';
import { HeroSlide } from '@/types/hero';

interface HeroSliderClientProps {
  interval?: number;
  autoPlay?: boolean;
  children?: React.ReactNode;
  heroItems: HeroSlide[];
  textPosition?: 'center' | 'left';
  minHeight?: number;
  withOverlay?: boolean;
  overlayOpacity?: number;
  withBlur?: boolean;
  className?: string;
  maxCycles?: number;
}

type SliderState = {
  currentSlide: number;
  isPlaying: boolean;
  cycles: number;
};

type SliderAction =
    | { type: 'NEXT_SLIDE'; totalSlides: number }
    | { type: 'GO_TO_SLIDE'; index: number }
    | { type: 'TOGGLE_PLAY' }
    | { type: 'SET_PLAYING'; value: boolean }
    | { type: 'SET_RANDOM_SLIDE'; totalSlides: number };

const sliderReducer = (state: SliderState, action: SliderAction): SliderState => {
  switch (action.type) {
    case 'NEXT_SLIDE': {
      const nextSlide = (state.currentSlide + 1) % action.totalSlides;
      const nextCycles = nextSlide === 0 ? state.cycles + 1 : state.cycles;
      return {
        ...state,
        currentSlide: nextSlide,
        cycles: nextCycles,
      };
    }
    case 'GO_TO_SLIDE':
      return { ...state, currentSlide: action.index };
    case 'TOGGLE_PLAY':
      return { ...state, isPlaying: !state.isPlaying };
    case 'SET_PLAYING':
      return { ...state, isPlaying: action.value };
    case 'SET_RANDOM_SLIDE': {
      // Generate a random slide index that is different from the current slide
      let randomSlide;
      if (action.totalSlides > 1) {
        do {
          randomSlide = Math.floor(Math.random() * action.totalSlides);
        } while (randomSlide === state.currentSlide);
      } else {
        randomSlide = 0;
      }

      return { ...state, currentSlide: randomSlide, isPlaying: false };
    }
    default:
      return state;
  }
};

export const HeroSliderClient = ({
                                   interval = 5000,
                                   autoPlay = true,
                                   children,
                                   heroItems,
                                   textPosition = 'left',
                                   minHeight = 700,
                                   withOverlay = true,
                                   overlayOpacity = 50,
                                   withBlur = true,
                                   className,
                                   maxCycles = 2,
                                 }: HeroSliderClientProps) => {
  const [state, dispatch] = useReducer(sliderReducer, {
    currentSlide: 0,
    isPlaying: autoPlay,
    cycles: 0,
  });

  const timeoutRef = useRef<NodeJS.Timeout | undefined>(undefined);

  const resetTimeout = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = undefined;
    }
  }, []);

  const nextSlide = useCallback(() => {
    if (state.cycles >= maxCycles) {
      // Once max cycles are reached, set to a random slide and stop playing
      dispatch({ type: 'SET_RANDOM_SLIDE', totalSlides: heroItems.length });
      return;
    }
    dispatch({ type: 'NEXT_SLIDE', totalSlides: heroItems.length });
  }, [state.cycles, maxCycles, heroItems.length]);

  // Set up the timer for auto-play
  useEffect(() => {
    resetTimeout();
    if (state.isPlaying) {
      timeoutRef.current = setTimeout(nextSlide, interval);
    }
    return resetTimeout;
  }, [state.currentSlide, state.isPlaying, interval, nextSlide, resetTimeout]);

  // Clean up on unmount
  useEffect(() => {
    return resetTimeout;
  }, [resetTimeout]);

  const handleGoToSlide = useCallback((index: number) => {
    dispatch({ type: 'GO_TO_SLIDE', index });
  }, []);

  const handlePlayToggle = useCallback(() => {
    dispatch({ type: 'TOGGLE_PLAY' });
  }, []);

  // Determine which slides should be rendered (current, previous, next)
  const visibleSlideIndices = useMemo(() => {
    const current = state.currentSlide;
    const prev = (current - 1 + heroItems.length) % heroItems.length;
    const next = (current + 1) % heroItems.length;
    return [prev, current, next];
  }, [state.currentSlide, heroItems.length]);

  return (
      <div
          className={cn('relative w-full overflow-hidden', className)}
          style={{ minHeight: `${minHeight}px` }}
          role="region"
          aria-roledescription="carousel"
          aria-label="Hero image slideshow"
      >
        {/* Image Slides - Only render current, previous, and next slides */}
        <div className="absolute inset-0">
          {heroItems.map((slide, index) =>
                  visibleSlideIndices.includes(index) && (
                      <SlideImage
                          key={index}
                          src={slide.src}
                          alt={slide.alt || `Slide ${index + 1}`}
                          isActive={index === state.currentSlide}
                          withBlur={withBlur}
                          withOverlay={withOverlay}
                          overlayOpacity={overlayOpacity}
                          priority={index === 0 || index === state.currentSlide}
                      />
                  )
          )}
        </div>

        {/* Content */}
        <div className="relative h-full">
          <div
              className={cn(
                  'container mx-auto px-8 py-24 h-full',
                  'flex items-center',
                  textPosition === 'center' && 'justify-center'
              )}
          >
            <div
                className="bg-primary-900/50 px-8 py-8 rounded-lg"
                aria-live="polite"
            >
              <HeroContent
                  title={heroItems[state.currentSlide].title}
                  description={heroItems[state.currentSlide].description}
                  textPosition={textPosition}
              >
                {children}
              </HeroContent>
            </div>
          </div>
        </div>

        {/* Controls */}
        <SlideControls
            totalSlides={heroItems.length}
            currentSlide={state.currentSlide}
            isPlaying={state.isPlaying}
            onSlideChange={handleGoToSlide}
            onPlayToggle={handlePlayToggle}
        />
      </div>
  );
};