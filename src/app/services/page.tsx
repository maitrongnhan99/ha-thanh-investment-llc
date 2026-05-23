import type { Metadata } from 'next';
import { AdditionalServices } from '@/components/sections/additional-services';
import { ServiceFeatureRow } from '@/components/sections/service-feature-row';
import { ServicesHero } from '@/components/sections/services-hero';
import { servicesContent, siteConfig } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'Services',
  description: `POS systems, computer repair, assembly, and IT support from ${siteConfig.name} in Hemet, CA.`,
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      {servicesContent.primaryServices.map((service, index) => (
        <ServiceFeatureRow
          key={service.id}
          title={service.title}
          description={service.description}
          image={service.image}
          imageAlt={service.imageAlt}
          reversed={index % 2 === 1}
          priority={index === 0}
        />
      ))}
      <AdditionalServices />
    </>
  );
}
