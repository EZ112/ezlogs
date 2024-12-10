import clsx from 'clsx';

interface LinkProps {
  href: string;
  className?: string;
  children: string;
}

export default function Link({ href, className, children }: LinkProps) {
  return (
    <a href={href} className={clsx('text-sm', className)}>
      {children}
    </a>
  );
}
