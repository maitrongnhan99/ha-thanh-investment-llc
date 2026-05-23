import { PageShell } from '@/components/layout/page-shell';
import { ServiceFeatureRow } from '@/components/sections/service-feature-row';
import { aboutContent } from '@/lib/site-config';

export function AboutStory() {
  return (
    <div className="border-border border-b">
      <PageShell className="border-border py-section border-b">
        <h2 className="font-display text-ink text-3xl tracking-tight sm:text-4xl">
          {aboutContent.storyTitle}
        </h2>
        <p className="text-body mt-4 max-w-2xl text-base leading-relaxed">
          {aboutContent.storyIntro}
        </p>
      </PageShell>
      {aboutContent.storySections.map((section, index) => (
        <ServiceFeatureRow
          key={section.id}
          title={section.title}
          description={section.description}
          image={section.image}
          imageAlt={section.imageAlt}
          reversed={index % 2 === 1}
          ctaLabel={section.ctaLabel}
          ctaHref={section.ctaHref}
          showLearnMore={false}
          priority={index === 0}
        />
      ))}
    </div>
  );
}
