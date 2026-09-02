import { MapPinIcon, PhoneIcon } from 'lucide-react';
import { ContactForm } from '@/components/forms/contact-form';
import { PageShell } from '@/components/layout/page-shell';
import { siteConfig } from '@/lib/site-config';

export function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-20">
      <PageShell className="py-section">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="font-display text-ink text-3xl tracking-tight sm:text-4xl">
              Contact us
            </h2>
            <p className="text-body mt-4 text-base leading-relaxed">
              Reach out by phone or send us a message. We typically respond
              within one business day.
            </p>
            <ul className="mt-8 space-y-6">
              <li className="flex gap-4">
                <PhoneIcon className="text-ink mt-0.5 size-5 shrink-0" />
                <div>
                  <p className="text-ink text-sm font-medium">Phone</p>
                  <a
                    href={siteConfig.phoneHref}
                    className="text-ink mt-1 inline-block text-lg hover:underline"
                  >
                    {siteConfig.phone}
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <MapPinIcon className="text-ink mt-0.5 size-5 shrink-0" />
                <div>
                  <p className="text-ink text-sm font-medium">Addresses</p>
                  <ul className="mt-2 space-y-3">
                    {siteConfig.addresses.map((location) => (
                      <li key={location.label}>
                        <p className="text-ink text-sm font-medium">
                          {location.label}
                        </p>
                        <a
                          href={location.mapsHref}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-body mt-0.5 inline-block text-base hover:underline"
                        >
                          {location.address}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            </ul>
          </div>
          <ContactForm />
        </div>
      </PageShell>
    </section>
  );
}
