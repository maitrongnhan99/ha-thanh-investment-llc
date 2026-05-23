'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { buttonVariants } from '@/components/ui/button';
import { navItems, siteConfig } from '@/lib/site-config';
import { cn } from '@/lib/utils';

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="border-border bg-background/95 sticky top-0 z-50 border-b backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="block shrink-0">
          <Image
            src="/logo.svg"
            alt={siteConfig.name}
            width={210}
            height={76}
            className="h-11 w-auto sm:h-14"
            unoptimized
            loading="eager"
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'hover:text-ink text-[15px] font-medium transition-colors',
                pathname === item.href ? 'text-ink' : 'text-muted-foreground',
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={siteConfig.phoneHref}
            className={buttonVariants({
              size: 'lg',
              className: 'hidden sm:inline-flex',
            })}
          >
            Call {siteConfig.phone}
          </a>
        </div>
      </div>
    </header>
  );
}
