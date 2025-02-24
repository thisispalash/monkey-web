'use client';

import clsx from 'clsx';

import { LoadingProvider, useLoading } from '@/context/LoadingContext';

import Loader from '@/component/Loader';

export default function ClientLayout({ children }: { children: React.ReactNode }) {

  return (
    <LoadingProvider>
      <Loader />
      <ClientLayoutContent>{children}</ClientLayoutContent>
    </LoadingProvider>
  );
}

function ClientLayoutContent({ children }: { children: React.ReactNode }) {

  const { isLoading } = useLoading();

  return (
    <main className={clsx(
      'h-screen w-full p-6',
      'transition-opacity duration-1000',
      isLoading ? 'opacity-0' : 'opacity-100',
    )}>
      {children}
    </main>
  );
}