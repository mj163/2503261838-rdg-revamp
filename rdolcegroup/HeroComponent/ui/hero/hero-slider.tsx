import { HeroSlide } from '@/types/hero';
import { HeroSliderClient } from './hero-slider-client';

interface HeroSliderProps {
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

// This is the server component that receives props and passes them to the client component
const HeroSlider = (props: HeroSliderProps) => {
  // Any server-side logic here, like data fetching, pre-processing, etc.
  // For example, we could validate the heroItems or transform data if needed

  return <HeroSliderClient {...props} />;
};

export default HeroSlider;
