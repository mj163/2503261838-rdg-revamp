import React from 'react';
import { cn } from '@/lib/utils';

interface HeroContentProps {
  title: string;
  description: string;
  children?: React.ReactNode;
  textPosition?: 'center' | 'left';
  className?: string;
}

export const HeroContent = ({
  title,
  description,
  children,
  textPosition = 'left',
  className,
}: HeroContentProps) => {
  return (
    <div
      className={cn(
        'flex flex-col gap-6 z-10 max-w-4xl',
        textPosition === 'center' && 'items-center text-center',
        className
      )}
    >
      <h2 className="text-4xl lg:text-5xl xl:text-6xl leading-tight font-semibold text-white whitespace-normal w-full">
        {title}
      </h2>
      <p className="md:text-lg text-white max-w-[600px]">
        {description}
      </p>
      {children && (
        <div
          className={cn(
            'flex flex-wrap gap-4 mt-2',
            textPosition === 'center' ? 'justify-center' : 'justify-start'
          )}
        >
          {children}
        </div>
      )}
    </div>
  );
};
