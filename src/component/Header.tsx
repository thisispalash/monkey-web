'use client';

import clsx from 'clsx';
import { usePathname } from 'next/navigation';

import Link from './primitives/Link';
import WalletButton from './web3/WalletButton';

export default function Header() {

  const pathname = usePathname();
  
  if (pathname === '/') return null;

  return (
    <div className={clsx(
      'h-auto w-full py-2 px-4',
      'flex flex-row items-center justify-between'
    )}>
      {/* nav links */}
      <div className={clsx(
        'flex flex-row items-center gap-6'
      )}>
        <Link href="#">market</Link>
        <Link href="/create">create</Link>
        <Link href="#">history</Link>
      </div>

      {/* Wallet button */}
      <WalletButton />
    </div>
  );
}