import { HomeHero } from '@/rdolcegroup/HeroComponent/ui/hero';
import { Button } from '@/rdolcegroup/HeroComponent/ui/button';

export default function Home() {
  return (
    <main className="min-h-screen">
      <HomeHero>
        <Button 
          className="rounded bg-primary-800 py-2 px-4 text-sm text-white data-[hover]:bg-sky-500 outline data-[hover]:data-[active]:bg-sky-700"
          href="/signup"
        >
          Get Started
        </Button>

        <Button 
          className="rounded bg-secondary-800 py-2 px-4 text-sm text-white data-[hover]:bg-sky-500 outline data-[hover]:data-[active]:bg-sky-700"
          href="/read-more"
        >
          Read more
        </Button>
      </HomeHero>
      
      <section className="container mx-auto py-24 px-4">
        <h2 className="text-3xl font-bold mb-8">Welcome to Our Website</h2>
        <p className="mb-6">
          This is a demonstration of the Hero Slider component. The slider above showcases 
          our properties and mission with a fully accessible, performance-optimized implementation.
        </p>
        <p>
          The hero slider has been built with Next.js app router, TailwindCSS, and Radix UI primitives.
          It follows best practices for performance, accessibility, and maintainability.
        </p>
      </section>
    </main>
  );
}
