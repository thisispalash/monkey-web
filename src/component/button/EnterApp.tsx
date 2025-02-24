'use client';

import clsx from 'clsx';
import { useRouter } from 'next/navigation';

export default function EnterApp() {

  const router = useRouter();

  return (
    <button 
      onClick={() => router.push('/home')}
      className={clsx(
        'w-32 h-auto px-3 py-2 text-lg',
        'rounded-full border border-foreground',
        'transition-all duration-300',
        'bg-foreground text-background',
        'hover:bg-background hover:text-foreground',
      )}
    >
      Enter
    </button>
  );

}