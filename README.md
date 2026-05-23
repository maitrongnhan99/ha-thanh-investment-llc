# Ha Thanh Investment LLC — Website

Marketing site for **Ha Thanh Investment LLC**, a Hemet, California business offering computer repair, POS systems, and IT services for local businesses and residents since 2020.

## About the business

| | |
|---|---|
| **Location** | 40490 Vista Road, Hemet, CA 92544 |
| **Phone** | [714-330-1736](tel:+17143301736) |
| **Focus** | POS (F&B), chip-level repair, refurbished hardware, custom assembly, small-business IT support |

The site helps visitors learn about services and get in touch by phone or contact form.

## Site structure

| Route | Content |
|-------|---------|
| `/` | About, trust signals, story sections, contact |
| `/services` | Service lines, additional offerings, disclaimers |

Content and copy live in [`src/lib/site-config.ts`](src/lib/site-config.ts). Design tokens are documented in [`DESIGN.md`](DESIGN.md); product requirements in [`requirements.md`](requirements.md).

## Tech stack

- [Next.js](https://nextjs.org) 16 (App Router, Turbopack)
- React 19, TypeScript
- Tailwind CSS 4, [shadcn/ui](https://ui.shadcn.com) (Base UI)
- pnpm

## Development

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
pnpm build    # production build
pnpm start    # serve production build
pnpm lint     # ESLint
pnpm format   # Prettier
```

## Deploy

Deploy on [Vercel](https://vercel.com) or any Node host that supports Next.js. Set environment variables only if you add server-side integrations (e.g. contact form backend).

## License

Private — © Ha Thanh Investment LLC.
