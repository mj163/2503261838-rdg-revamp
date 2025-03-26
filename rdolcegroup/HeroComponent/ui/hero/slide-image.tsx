'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface SlideImageProps {
  src: string;
  alt: string;
  isActive: boolean;
  withBlur?: boolean;
  withOverlay?: boolean;
  overlayOpacity?: number;
  priority?: boolean;
}

export const SlideImage = ({
  src,
  alt,
  isActive,
  withBlur = false,
  withOverlay = true,
  overlayOpacity = 50,
  priority = false,
}: SlideImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  return (
    <div
      className={cn(
        'absolute inset-0 transition-opacity duration-1000',
        isActive ? 'opacity-100' : 'opacity-0'
      )}
      role="img"
      aria-hidden={!isActive}
    >
      <div className="relative w-full h-full">
        {hasError ? (
          <div className="w-full h-full flex items-center justify-center bg-gray-800">
            <span className="text-white text-lg">Image could not be loaded</span>
          </div>
        ) : (
          <>
            <Image
              src={src}
              alt={alt}
              fill
              priority={priority && isActive}
              quality={90}
              sizes="100vw"
              className={cn(
                'object-cover',
                withBlur && 'filter blur-[2px]',
                !isLoaded && 'opacity-0',
                isLoaded && 'opacity-100',
                'transition-opacity duration-500'
              )}
              onLoad={() => setIsLoaded(true)}
              onError={() => setHasError(true)}
              loading={priority ? 'eager' : 'lazy'}
            />
            {withOverlay && (
              <div
                className="absolute inset-0 bg-black"
                style={{ opacity: overlayOpacity / 100 }}
                aria-hidden="true"
              />
            )}
          </>
        )}
      </div>
    </div>
  );
};
