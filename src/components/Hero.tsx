import clsx from 'clsx';

interface HeroProps {
  className?: string;
}

export default function Hero({ className }: HeroProps) {
  return (
    <div className={clsx('flex flex-col gap-y-8', className)}>
      <div className="flex h-[60vh] items-center justify-center rounded-md bg-[url('../assets/images/bg.jpg')] bg-cover bg-center font-display text-4xl max-sm:text-2xl">
        Code in Harmony
      </div>
      <div className="flex justify-between max-sm:flex-col">
        <div className="font-display text-2xl">Izzi Dzikri</div>
        <div className="w-2/5 text-sm text-stone-500 max-sm:w-full">
          Welcome to my devlog! It&apos;s where I share what I learned from my
          coding journey. You can think of it as a peek behind the scenes on
          what I learned.
        </div>
      </div>
    </div>
  );
}
