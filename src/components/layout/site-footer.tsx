'use client';

import Link from 'next/link';
import { ChevronUpIcon } from 'lucide-react';
import { PageShell } from '@/components/layout/page-shell';
import { Separator } from '@/components/ui/separator';
import { navItems, siteConfig } from '@/lib/site-config';

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-surface-dark text-on-dark">
      <PageShell className="py-12 md:py-16">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <p className="font-display text-2xl font-light tracking-tight">
            {siteConfig.tagline}
          </p>
          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-on-dark-soft hover:text-on-dark text-sm"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={siteConfig.phoneHref}
              className="text-on-dark-soft hover:text-on-dark text-sm"
            >
              {siteConfig.phone}
            </a>
            {siteConfig.addresses.map((location) => (
              <a
                key={location.label}
                href={location.mapsHref}
                target="_blank"
                rel="noopener noreferrer"
                className="text-on-dark-soft hover:text-on-dark text-sm"
              >
                Directions ({location.label})
              </a>
            ))}
          </nav>
        </div>

        <Separator className="my-8 bg-white/15" />

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-on-dark-soft text-sm">
            © {siteConfig.name} {year}. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <div className="text-on-dark-soft flex flex-col gap-1 text-sm sm:text-right">
              {siteConfig.addresses.map((location) => (
                <span key={location.label}>{location.address}</span>
              ))}
            </div>
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-on-dark hover:text-on-dark-soft inline-flex items-center gap-1 text-sm transition-colors"
              aria-label="Back to top"
            >
              <ChevronUpIcon className="size-4" />
              Back to top
            </button>
          </div>
        </div>
      </PageShell>
    </footer>
  );
}
