import { PageShell } from '@/components/layout/page-shell';
import { aboutContent } from '@/lib/site-config';

export function AboutHero() {
  return (
    <section>
      <PageShell className="py-section">
        <p className="text-muted-foreground text-xs font-semibold tracking-[0.08em] uppercase">
          {aboutContent.heroLabel}
        </p>
        <h1 className="font-display mt-4 max-w-3xl text-4xl tracking-tight sm:text-5xl lg:text-6xl">
          {aboutContent.heroTitle}
        </h1>
        <p className="text-body mt-6 max-w-2xl text-base leading-relaxed sm:text-lg">
          {aboutContent.heroIntro}
        </p>
      </PageShell>
    </section>
  );
}
