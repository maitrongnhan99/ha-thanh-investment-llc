import Link from 'next/link';
import { ChevronRightIcon } from 'lucide-react';
import { PageShell } from '@/components/layout/page-shell';
import { siteConfig } from '@/lib/site-config';

export function ContactBand() {
  return (
    <section className="border-border bg-surface-strong border-t">
      <PageShell className="py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 md:gap-12">
          <div>
            <h2 className="font-display text-ink text-2xl tracking-tight sm:text-3xl">
              Get in touch
            </h2>
            <p className="text-body mt-2 max-w-md text-base">
              We look forward to your inquiry. Call us or send a message through
              our contact form.
            </p>
          </div>
          <div className="flex flex-col justify-center gap-4 md:items-end md:text-right">
            <div>
              <p className="text-ink text-sm font-medium">Call us</p>
              <a
                href={siteConfig.phoneHref}
                className="text-ink mt-1 inline-block text-xl font-medium hover:underline"
              >
                {siteConfig.phone}
              </a>
            </div>
            <div>
              <p className="text-ink text-sm font-medium">Send a message</p>
              <Link
                href="/#contact"
                className="text-ink mt-1 inline-flex items-center gap-1 text-base font-medium hover:underline"
              >
                To contact form
                <ChevronRightIcon className="size-4" />
              </Link>
            </div>
          </div>
        </div>
      </PageShell>
    </section>
  );
}
