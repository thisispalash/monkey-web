'use client';

import clsx from 'clsx';
import Image from 'next/image';

import { useLoading } from '@/context/LoadingContext';

export default function Loader() {

  const { isLoading } = useLoading();

  return (
    <div className={clsx(
      'fixed inset-0 z-50 flex items-center justify-center transition-all duration-1000',
      isLoading ? 'scale-100' : 'scale-[20] opacity-0 pointer-events-none'
    )}>
      <div className={clsx(
        'h-36 w-36 relative',
        isLoading && 'animate-pulse'
      )}
      >
        <Image
          src="/circus-monkey.svg"
          alt="Logo"
          fill
          className="object-contain"
        />
      </div>
    </div>
  );
} 