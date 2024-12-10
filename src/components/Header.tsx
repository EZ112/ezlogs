import clsx from 'clsx';

import Link from './Link';

interface HeaderProps {
  className?: string;
}

export default function Header({ className }: HeaderProps) {
  return (
    <div className={clsx('relative flex items-center', className)}>
      <Link href="/" className="relative z-10 font-display text-4xl">
        Devlog
      </Link>
      <div className="absolute top-0 flex h-full w-full items-center justify-center gap-x-2 max-sm:relative max-sm:justify-end max-sm:gap-x-4">
        <Link
          href="/about"
          className="rounded px-2 py-1 text-stone-500 hover:bg-stone-800 hover:text-white"
        >
          About
        </Link>
        <Link
          href="/blogs"
          className="rounded px-2 py-1 text-stone-500 hover:bg-stone-800 hover:text-white"
        >
          Blogs
        </Link>
      </div>
    </div>
  );
}
