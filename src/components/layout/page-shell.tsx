import { cn } from '@/lib/utils';

type PageShellProps = {
  children: React.ReactNode;
  className?: string;
  as?: 'div' | 'section';
};

export function PageShell({
  children,
  className,
  as: Component = 'div',
}: PageShellProps) {
  return (
    <Component
      className={cn(
        'mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8',
        className,
      )}
    >
      {children}
    </Component>
  );
}
