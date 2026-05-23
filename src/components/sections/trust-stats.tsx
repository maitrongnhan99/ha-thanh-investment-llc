import { CalendarIcon, MapPinIcon, PhoneIcon, WrenchIcon } from 'lucide-react';
import { PageShell } from '@/components/layout/page-shell';
import { Card, CardContent } from '@/components/ui/card';
import { aboutContent, siteConfig } from '@/lib/site-config';

const iconMap = {
  calendar: CalendarIcon,
  map: MapPinIcon,
  wrench: WrenchIcon,
  phone: PhoneIcon,
} as const;

function StatCard({
  icon: Icon,
  value,
  label,
  href,
}: {
  icon: (typeof iconMap)[keyof typeof iconMap];
  value: string;
  label: string;
  href?: string;
}) {
  const card = (
    <Card className="bg-surface-strong h-full border-0 py-0 shadow-none">
      <CardContent className="flex h-full min-h-[140px] flex-col gap-3 p-6">
        <Icon className="text-ink size-6 shrink-0 stroke-[1.5]" />
        <div className="flex flex-1 flex-col">
          <p className="text-ink text-lg font-medium">{value}</p>
          <p className="text-body mt-1 flex-1 text-sm leading-snug">{label}</p>
        </div>
      </CardContent>
    </Card>
  );

  if (href) {
    return (
      <a
        href={href}
        className="block h-full transition-opacity hover:opacity-90"
      >
        {card}
      </a>
    );
  }

  return <div className="h-full">{card}</div>;
}

function CompanyLocationMap() {
  return (
    <div className="mt-10">
      <div className="border-border bg-card overflow-hidden rounded-xl border">
        <div className="relative aspect-[21/9] min-h-[280px] w-full sm:min-h-[360px]">
          <iframe
            src={siteConfig.addressEmbedHref}
            className="absolute inset-0 h-full w-full border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={`Map showing ${siteConfig.name} at ${siteConfig.address}`}
          />
        </div>
      </div>
      <p className="text-body mt-3 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm">
        <MapPinIcon className="text-ink size-4 shrink-0" aria-hidden />
        <span>{siteConfig.address}</span>
        <span className="text-muted-soft" aria-hidden>
          ·
        </span>
        <a
          href={siteConfig.addressMapsHref}
          target="_blank"
          rel="noopener noreferrer"
          className="text-ink font-medium hover:underline"
        >
          Open in Google Maps
        </a>
      </p>
    </div>
  );
}

export function TrustStats() {
  return (
    <section className="border-border border-b">
      <PageShell className="py-section">
        <h2 className="font-display text-ink text-2xl tracking-tight sm:text-3xl">
          Facts at a glance
        </h2>
        <p className="text-body mt-2 text-base">
          Ha Thanh Investment LLC - serving the Hemet area since 2020
        </p>
        <div className="mt-10 grid items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {aboutContent.stats.map((stat) => {
            const Icon = iconMap[stat.icon];
            return (
              <StatCard
                key={stat.value}
                icon={Icon}
                value={stat.value}
                label={stat.label}
                href={'href' in stat ? stat.href : undefined}
              />
            );
          })}
        </div>
        <CompanyLocationMap />
      </PageShell>
    </section>
  );
}
