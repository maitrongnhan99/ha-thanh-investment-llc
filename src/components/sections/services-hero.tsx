import Link from 'next/link';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { PageShell } from '@/components/layout/page-shell';
import { servicesContent } from '@/lib/site-config';

export function ServicesHero() {
  return (
    <section className="border-border border-b">
      <PageShell className="py-12 md:py-16">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink render={<Link href="/" />}>Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Services</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <h1 className="font-display text-ink mt-8 text-4xl tracking-tight sm:text-5xl">
          {servicesContent.heroTitle}
        </h1>
        <p className="text-ink mt-3 text-xl font-medium">
          {servicesContent.heroSubtitle}
        </p>
        <p className="text-body mt-4 max-w-2xl text-base leading-relaxed">
          {servicesContent.intro}
        </p>
      </PageShell>
    </section>
  );
}
