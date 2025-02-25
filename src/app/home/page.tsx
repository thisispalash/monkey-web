'use client';

import clsx from 'clsx';
import { useEffect } from 'react';

import { useLoading } from '@/context/LoadingContext';
import { useSCA } from '@/context/SCAContext';

import Link from '@/component/primitives/Link';
import Button from '@/component/primitives/Button';

export default function Home() {

  const { setIsLoading } = useLoading();
  const { sca, deposit, withdraw } = useSCA();

  useEffect(() => {
    setIsLoading(false);
  }, [setIsLoading]);

  function formatAddress(address: string) {
    return address.slice(0, 6) + '..' + address.slice(-6);
  }

  return (
    <div className={clsx(
      'p-4 w-full h-full',
      'flex flex-row justify-between',
    )}>

      {/* Quick Stats */}
      <div className={clsx(
        'h-full w-1/2',
        'flex flex-col gap-4'
      )}>

        <div className="flex flex-row items-center justify-between">Dummy</div>
      </div>

      {/* SCA Stats */}
      <div className={clsx(
        'h-full w-1/2',
        'flex flex-col items-center justify-between',
      )}>

        <div className={clsx(
          'flex flex-col gap-4'
        )}>

          <h1 className="text-2xl">Smart Account</h1>

          <Link 
            href={`https://explorer.testnet.rootstock.io/address/${sca}`}
            className="pl-3"
            target="_blank"
          >
            {formatAddress(sca)}
          </Link>

        </div>

        <div className={clsx(
          'px-8 w-full',
          'flex flex-row gap-6 items-center justify-center'
        )}>
          <Button onClick={deposit}>
            Deposit
          </Button>
          <Button onClick={withdraw}>
            Withdraw
          </Button>
        </div>

        {/* Balances */}
        <div className="flex flex-col gap-4">

          {/* Total Balance */}
          <div className="flex flex-row items-center justify-between">
            <h2 className="text-lg">Balance:</h2>
            <span className="text-lg">$ 20.02</span>
          </div>

          {/* Table of tokens */}
          <div className="flex flex-col gap-2">
          </div>


        </div>

      </div>


    </div>
  );

}