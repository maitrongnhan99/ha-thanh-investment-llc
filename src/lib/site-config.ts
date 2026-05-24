export const siteConfig = {
  name: 'Ha Thanh Investment LLC',
  shortName: 'Ha Thanh Investment',
  tagline: 'Reliable tech repair in Hemet',
  description:
    'Computer repair, POS systems, and IT services in Hemet, California. Serving customers since 2020.',
  phone: '714-330-1736',
  phoneHref: 'tel:+17143301736',
  address: '40490 Vista Road, Hemet, CA 92544',
  addressMapsHref:
    'https://www.google.com/maps/search/?api=1&query=40490+Vista+Road+Hemet+CA+92544',
  addressEmbedHref:
    'https://maps.google.com/maps?q=40490+Vista+Road,+Hemet,+CA+92544&hl=en&z=15&output=embed',
  foundedYear: 2020,
  location: 'Hemet, CA',
} as const;

export const navItems = [
  { label: 'About', href: '/' },
  { label: 'Services', href: '/services' },
] as const;

export const mobileNavItems = [
  { label: 'About', href: '/', icon: 'home' as const },
  { label: 'Services', href: '/services', icon: 'wrench' as const },
  {
    label: 'Contact',
    href: '/#contact',
    icon: 'message-square' as const,
  },
  {
    label: 'Call',
    href: siteConfig.phoneHref,
    icon: 'phone' as const,
    external: true as const,
  },
] as const;

export const aboutContent = {
  heroLabel: 'Trusted local repair',
  heroTitle: 'Ha Thanh Investment',
  heroSlogan: 'Hands-on repair for the tech you depend on',
  heroSloganSub:
    'Computers, POS systems, and IT support - here in Hemet since 2020',
  heroImage: '/images/team-repair.jpg',
  heroImageAlt: 'Technicians repairing computers and devices at a workbench',
  heroIntro:
    'We help local businesses and residents keep their equipment running reliably - with clear answers, fair pricing, and repairs done in-house.',
  stats: [
    {
      icon: 'calendar' as const,
      value: 'Since 2020',
      label: 'Serving Hemet and the Inland Empire',
    },
    {
      icon: 'map' as const,
      value: 'Hemet, CA',
      label: '40490 Vista Road',
    },
    {
      icon: 'wrench' as const,
      value: 'POS & repair',
      label: 'POS in F&B and computer specialists',
    },
    {
      icon: 'phone' as const,
      value: '714-330-1736',
      label: 'Call for a free consultation',
      href: 'tel:+17143301736',
    },
  ],
  storyTitle: 'Why customers choose us',
  storyIntro:
    'Practical repairs, clear communication, and hands-on support for businesses and residents across Hemet.',
  storySections: [
    {
      id: 'local',
      title: 'Local expertise since 2020',
      description:
        'We are a Hemet-based shop serving the Inland Empire with computer repair, POS systems, and technology services. You work with the same team from diagnosis through delivery-not a distant call center.',
      image: '/images/about-local-expertise.png',
      imageAlt:
        'Technician repairing a desktop computer at a local repair shop workbench',
      ctaLabel: 'Schedule a consultation',
      ctaHref: 'tel:+17143301736',
    },
    {
      id: 'repair',
      title: 'POS and computer repair under one roof',
      description:
        'From chip-level motherboard work to POS terminals that keep your registers running, we handle hardware and software issues in-house. Custom builds, refurbished systems, and same-day diagnostics are all part of what we do.',
      image: '/images/about-pos-computer-repair.jpg',
      imageAlt:
        'Technicians performing chip-level repair on a computer motherboard',
      ctaLabel: 'Explore our services',
      ctaHref: '/services',
    },
    {
      id: 'transparent',
      title: 'Clear scope before we begin',
      description:
        'We explain the problem, outline options, and confirm pricing before repairs start-so there are no surprises. Whether you run a small business or need help at home, you get straightforward answers at every step.',
      image: '/images/about-clear-scope.jpg',
      imageAlt:
        'Repair shop technician explaining repair options and pricing to a customer at the service counter',
      ctaLabel: 'Request a quote',
      ctaHref: '/#contact',
    },
  ],
};

export const servicesContent = {
  heroTitle: 'Services',
  heroSubtitle: 'POS systems, repair, assembly, and IT support',
  intro:
    'We help restaurants, retail shops, and offices with POS in F&B hardware, refurbished systems, custom assembly, and hands-on repair.',
  primaryServices: [
    {
      id: 'refurbished',
      title: 'Refurbished & recycled products',
      description:
        'We source used cases and components, refurbish and reassemble them, and deliver working units ready for deployment. Ideal for cost-conscious businesses that need reliable hardware.',
      image: '/images/service-refurbished-products.jpg',
      imageAlt:
        'Opened laptop with a replacement solid-state drive and repair tools',
    },
    {
      id: 'assembly',
      title: 'Custom assembly',
      description:
        'From workstations to POS setups, we assemble computers and related equipment to your specifications - tested and ready to install.',
      image: '/images/service-custom-assembly.jpg',
      imageAlt:
        'Computer case, motherboard, graphics card, and tools prepared for custom assembly',
    },
    {
      id: 'repair',
      title: 'Repair services',
      description:
        'Chip-level repair, POS system repair, and general laptop and desktop service. We diagnose issues quickly and explain options before proceeding.',
      image: '/images/service-repair-services.jpg',
      imageAlt:
        'Technicians diagnosing and repairing an opened laptop at a service bench',
    },
    {
      id: 'it-support',
      title: 'IT support for small business',
      description:
        'Ongoing support for networks, software installation, data backup, and troubleshooting - so you can focus on running your business.',
      image: '/images/service-it-support.jpg',
      imageAlt:
        'IT technician helping a small-business owner with a laptop, POS terminal, network switch, and backup drive',
    },
  ],
  additionalServices: [
    'Computer diagnostics and troubleshooting',
    'Laptop and desktop repair',
    'Chip repair',
    'RAM installation and upgrades',
    'Electronic device rework and fabrication',
    'Software installation',
    'Hardware upgrades',
    'Data backup',
    'Wi-Fi and network troubleshooting',
  ],
  disclaimer:
    'Refurbished units may be sold without original brand labels or country-of-origin markings. Ask us for details on any product before purchase.',
};
