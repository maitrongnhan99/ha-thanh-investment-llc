import { PageShell } from '@/components/layout/page-shell';
import { Badge } from '@/components/ui/badge';
import { servicesContent } from '@/lib/site-config';

export function AdditionalServices() {
  return (
    <section className="bg-canvas-soft border-border border-t">
      <PageShell className="py-section">
        <h2 className="font-display text-ink text-2xl tracking-tight sm:text-3xl">
          Additional services
        </h2>
        <p className="text-body mt-2 max-w-2xl text-base">
          We also provide general IT and repair support for homes and small
          businesses.
        </p>
        <ul className="mt-8 flex flex-wrap gap-3">
          {servicesContent.additionalServices.map((service) => (
            <li key={service}>
              <Badge
                variant="outline"
                className="h-auto rounded-full px-5 py-2.5 text-base font-normal"
              >
                {service}
              </Badge>
            </li>
          ))}
        </ul>
        <p className="text-muted-foreground mt-10 max-w-3xl text-sm leading-relaxed">
          {servicesContent.disclaimer}
        </p>
      </PageShell>
    </section>
  );
}
