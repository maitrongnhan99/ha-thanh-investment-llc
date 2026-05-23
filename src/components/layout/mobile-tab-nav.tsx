'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  HomeIcon,
  MessageSquareIcon,
  PhoneIcon,
  WrenchIcon,
  type LucideIcon,
} from 'lucide-react';
import { useEffect, useState } from 'react';
import { mobileNavItems } from '@/lib/site-config';
import { cn } from '@/lib/utils';

const iconMap = {
  home: HomeIcon,
  wrench: WrenchIcon,
  'message-square': MessageSquareIcon,
  phone: PhoneIcon,
} satisfies Record<(typeof mobileNavItems)[number]['icon'], LucideIcon>;

function isContactHref(href: string) {
  return href.includes('#contact');
}

function isNavItemActive(
  pathname: string,
  hash: string,
  href: string,
  external?: boolean,
) {
  if (external) return false;
  if (isContactHref(href)) {
    return pathname === '/' && hash === '#contact';
  }
  const path = href.split('#')[0] || '/';
  return pathname === path;
}

export function MobileTabNav() {
  const pathname = usePathname();
  const [hash, setHash] = useState('');

  useEffect(() => {
    const syncHash = () => setHash(window.location.hash);
    syncHash();
    window.addEventListener('hashchange', syncHash);
    return () => window.removeEventListener('hashchange', syncHash);
  }, [pathname]);

  return (
    <nav
      aria-label="Primary"
      className="pointer-events-none fixed inset-x-0 bottom-0 z-50 md:hidden"
    >
      <div className="pointer-events-auto mx-auto max-w-lg p-3 pb-[calc(0.75rem+env(safe-area-inset-bottom,0px))]">
        <div className="bg-card text-ink ring-border flex items-stretch justify-around gap-0.5 rounded-4xl px-1.5 py-1.5 shadow-[0_4px_24px_rgba(12,10,9,0.1)] ring-1">
          {mobileNavItems.map((item) => {
            const Icon = iconMap[item.icon];
            const external = 'external' in item && item.external;
            const active = isNavItemActive(pathname, hash, item.href, external);
            const className = cn(
              'flex min-w-0 flex-1 flex-col items-center gap-1 rounded-2xl px-1 py-1.5 transition-colors',
              active
                ? 'bg-surface-strong text-ink'
                : 'text-muted-foreground hover:text-ink',
            );

            const content = (
              <>
                <Icon
                  className="size-5 shrink-0"
                  strokeWidth={active ? 2 : 1.75}
                  aria-hidden
                />
                <span className="w-full truncate text-center text-[10px] leading-none font-medium">
                  {item.label}
                </span>
              </>
            );

            if (external) {
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={className}
                  aria-label={item.label}
                >
                  {content}
                </a>
              );
            }

            return (
              <Link
                key={item.href}
                href={item.href}
                className={className}
                aria-current={active ? 'page' : undefined}
              >
                {content}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
