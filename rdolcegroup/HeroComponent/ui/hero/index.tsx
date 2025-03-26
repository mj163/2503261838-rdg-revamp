import { heroContent } from '@/data/hero-content';
import HeroSlider from './hero-slider';

interface HomeHeroProps {
  className?: string;
  children?: React.ReactNode;
}

export function HomeHero({ className, children }: HomeHeroProps) {
  return (
    <section id="home-hero">
      <HeroSlider
        heroItems={heroContent.heroItems}
        className={className}
        textPosition="center"
        minHeight={600}
        withOverlay={true}
        overlayOpacity={40}
        withBlur={false}
        autoPlay={true}
        interval={6000}
        maxCycles={5}
      >
        {children}
      </HeroSlider>
    </section>
  );
}
