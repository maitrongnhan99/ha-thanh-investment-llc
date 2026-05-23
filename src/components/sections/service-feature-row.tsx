import Image from 'next/image';
import Link from 'next/link';
import { ExternalLinkIcon } from 'lucide-react';
import { PageShell } from '@/components/layout/page-shell';
import { buttonVariants } from '@/components/ui/button';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { siteConfig } from '@/lib/site-config';
import { cn } from '@/lib/utils';

type ServiceFeatureRowProps = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  reversed?: boolean;
  ctaLabel?: string;
  ctaHref?: string;
  showLearnMore?: boolean;
  /** First above-the-fold image on the page (LCP). */
  priority?: boolean;
};

export function ServiceFeatureRow({
  title,
  description,
  image,
  imageAlt,
  reversed = false,
  ctaLabel = 'Call for a quote',
  ctaHref = siteConfig.phoneHref,
  showLearnMore = true,
  priority = false,
}: ServiceFeatureRowProps) {
  return (
    <section className="border-border border-b last:border-b-0">
      <PageShell className="py-section">
        <div
          className={cn(
            'grid items-center gap-10 lg:grid-cols-2 lg:gap-16',
            reversed && 'lg:[&>div:first-child]:order-2',
          )}
        >
          <div className="border-border bg-card overflow-hidden rounded-xl border">
            <AspectRatio ratio={4 / 3}>
              <Image
                src={image}
                alt={imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                loading={priority ? 'eager' : 'lazy'}
                fetchPriority={priority ? 'high' : 'auto'}
              />
            </AspectRatio>
          </div>
          <div>
            <h2 className="font-display text-ink text-2xl tracking-tight sm:text-3xl">
              {title}
            </h2>
            <p className="text-body mt-4 text-base leading-relaxed">
              {description}
            </p>
            {showLearnMore ? (
              <Link
                href="/#contact"
                className="text-ink mt-6 inline-flex items-center gap-1.5 text-[15px] font-medium hover:underline"
              >
                Learn more
                <ExternalLinkIcon className="size-4" />
              </Link>
            ) : null}
            <div className={showLearnMore ? 'mt-6' : 'mt-8'}>
              <a href={ctaHref} className={buttonVariants({ size: 'lg' })}>
                {ctaLabel}
              </a>
            </div>
          </div>
        </div>
      </PageShell>
    </section>
  );
}
