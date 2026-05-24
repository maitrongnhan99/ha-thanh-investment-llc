import Image from 'next/image';
import Link from 'next/link';
import { PageShell } from '@/components/layout/page-shell';
import { buttonVariants } from '@/components/ui/button';
import { aboutContent, siteConfig } from '@/lib/site-config';
import { cn } from '@/lib/utils';

const heroHeadingShadow = '[text-shadow:0_1px_1px_rgba(0,0,0,0.15)]';
const heroSloganShadow = '[text-shadow:0_1px_1px_rgba(0,0,0,0.06)]';

export function AboutHero() {
  return (
    <section className="relative flex min-h-[min(72vh,640px)] items-center overflow-hidden">
      <Image
        src={aboutContent.heroImage}
        alt={aboutContent.heroImageAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-linear-to-b from-black/55 via-black/40 to-black/60"
      />
      <PageShell className="relative z-10 py-16 text-center sm:py-20 lg:py-24">
        <p className="text-xs font-semibold tracking-[0.12em] text-white uppercase">
          {aboutContent.heroLabel}
        </p>
        <h1
          className={cn(
            'font-display mt-4 text-5xl tracking-tight text-white sm:text-6xl lg:text-7xl xl:text-8xl',
            heroHeadingShadow,
          )}
        >
          {aboutContent.heroTitle}
        </h1>
        <p
          className={cn(
            'mx-auto mt-5 max-w-2xl text-xl font-semibold text-white sm:text-2xl',
            heroSloganShadow,
          )}
        >
          {aboutContent.heroSlogan}
        </p>
        <p
          className={cn(
            'mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/95 sm:text-lg',
            heroSloganShadow,
          )}
        >
          {aboutContent.heroSloganSub}
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5">
          <a
            href={siteConfig.phoneHref}
            className={cn(
              buttonVariants({ size: 'lg' }),
              'text-ink h-14 min-w-[260px] bg-white px-8 text-base font-semibold shadow-lg hover:bg-white/90 sm:min-w-[280px]',
            )}
          >
            Call {siteConfig.phone}
          </a>
          <Link
            href="/services"
            className={cn(
              buttonVariants({ variant: 'outline', size: 'lg' }),
              'h-14 min-w-[260px] border-2 border-white bg-black/30 px-8 text-base font-semibold text-white shadow-lg hover:bg-black/45 hover:text-white sm:min-w-[280px]',
            )}
          >
            View services
          </Link>
        </div>
      </PageShell>
    </section>
  );
}
