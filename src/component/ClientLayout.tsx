'use client';

import clsx from 'clsx';
import { usePathname } from 'next/navigation';

import { LoadingProvider, useLoading } from '@/context/LoadingContext';
import Web3Provider from '@/context/Web3Context';

import Loader from '@/component/Loader';
import WalletButton from '@/component/web3/WalletButton';

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
  const pathname = usePathname();

  return (
    <Web3Provider cookies={null}>
      <main className={clsx(
        'h-screen w-full p-6',
        'transition-opacity duration-1000',
        isLoading ? 'opacity-0' : 'opacity-100',
      )}>
        {pathname !== '/' && (
          <div className={clsx(
            'w-full',
            'flex items-center justify-end',
          )}>
            <WalletButton />
          </div>
        )}
        {children}
      </main>
    </Web3Provider>
  );
}