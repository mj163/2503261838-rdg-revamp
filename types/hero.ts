export interface HeroSlide {
  title: string;
  description: string;
  src: string;
  alt?: string;
}

export interface HeroContent {
  heroItems: HeroSlide[];
}
