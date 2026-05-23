import { AboutHero } from '@/components/sections/about-hero';
import { AboutStory } from '@/components/sections/about-story';
import { ContactSection } from '@/components/sections/contact-section';
import { TrustStats } from '@/components/sections/trust-stats';

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <TrustStats />
      <AboutStory />
      <ContactSection />
    </>
  );
}
