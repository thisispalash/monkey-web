'use client';

import clsx from 'clsx';
import { useEffect } from 'react';
import { useAppKitAccount } from '@reown/appkit/react';

import { useLoading } from '@/context/LoadingContext';

import EnterApp from '@/component/button/EnterApp';
import WalletButton from '@/component/web3/WalletButton';

export default function Landing() {

  const { setIsLoading } = useLoading();
  const { isConnected } = useAppKitAccount();

  useEffect(() => setIsLoading(false), [setIsLoading]);

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

      {isConnected ? <EnterApp /> : <WalletButton />}
    </div>
  );
}
