'use client';

import clsx from 'clsx';

import { useSCA } from '@/context/SCAContext';

import Link from '@/component/primitives/Link';
import Button from '@/component/primitives/Button';

export default function RightSide() {
  
  const { sca, deposit, withdraw, deployMonkey } = useSCA();

  // if (!sca) {
  //   return (
  //     <div className="flex flex-col gap-6 items-center justify-center h-full w-full">
  //       <h1 className="text-2xl">Smart Account</h1>
  //       <Button onClick={deployMonkey}>
  //         Deploy Monkey
  //       </Button>
  //     </div>
  //   )
  // }

  function formatAddress(address: string) {
    if (!address) address = '0x0e14e3FF0EA55F08e6f9C18e3bb77ee53dd02602';
    return address.slice(0, 6) + '..' + address.slice(-6);
  }

  const balance = {
    total: 102700,
    tokens: [
      {
        address: process.env.NEXT_PUBLIC_RUSDT as `0x${string}`,
        name: 'RUSDT',
        balance: 1000
      },
      {
        address: process.env.NEXT_PUBLIC_WRBTC as `0x${string}`,
        name: 'WRBTC',
        balance: 1.03
      },
    ]  
  }

  return (
    <div className={clsx(
      'h-full w-1/2',
      'flex flex-col items-center justify-between',
    )}>

      <div className="flex flex-col gap-4">

        <div className={clsx(
          'flex flex-col gap-4'
        )}>

          <h1 className="text-2xl">Smart Account</h1>
          <Link 
            href={`https://explorer.testnet.rootstock.io/address/${sca}`}
            className="pl-3"
            target="_blank"
          >
            {formatAddress(sca ?? '')}
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

      </div>

      {/* Balances */}
      <div className="flex flex-col gap-4">

        {/* Total Balance */}
        <div className="flex flex-row items-center justify-between">
          <h2 className="text-lg">Balance:</h2>
          <span className="text-lg">${balance.total}</span>
        </div>

        {/* Table of tokens */}
        <div className="flex flex-col gap-2">
          {balance.tokens.map((token) => (
            <div className="flex flex-row gap-4 items-center" key={token.address}>
              <h2 className="text-lg">{formatAddress(token.address)}</h2>
              <span className="text-lg">{token.balance} {token.name}</span>
            </div>
          ))}
        </div>


      </div>

    </div>
  );
}