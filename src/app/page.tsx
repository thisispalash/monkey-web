'use client';

import clsx from 'clsx';
import { useEffect } from 'react';

import { useLoading } from '@/context/LoadingContext';

export default function Landing() {

  const { setIsLoading } = useLoading();

  useEffect(() => {

    setTimeout(() => {
      setIsLoading(false);
    }, 2500);
  }, [setIsLoading]);

  return (
    <div
      className={clsx(
        'h-full w-full',
        'flex flex-col items-center justify-center gap-6',
      )}
    >
      {/* title */}
      <h1 className="text-5xl">
        Dash Mon[k]ey
      </h1>

      {/* tagline */}
      <p className="text-2xl text-center">
        Monkey see, Monkey do!
      </p>
    </div>
  );
}
