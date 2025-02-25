'use client';

import clsx from 'clsx';
import { useEffect, useState } from 'react';

import { useLoading } from '@/context/LoadingContext';
import { useSCA } from '@/context/SCAContext';

import Button from '@/component/primitives/Button';

const Input = ({ value, setValue, min, max }: { value: string, setValue: (value: string) => void, min?: number, max?: number }) => {
  return (
    <input 
      type="number" 
      className={clsx(
        'w-28 px-3 py-1 rounded-lg',
        'text-3xl font-hover uppercase',
        'border border-foreground/50 border-dashed',
        'bg-foreground/25',
        '[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none',
      )} 
      onChange={(e) => setValue(e.target.value)} 
      value={value}
      min={min}
      max={max}
    />
  )
}

export default function Create() {

  const [from, setFrom] = useState('0');
  const [to, setTo] = useState('0');
  const [pct, setPct] = useState('0');
  const [token, setToken] = useState<'RUSDT' | 'WRBTC'>('RUSDT');

  const { setIsLoading } = useLoading();
  const { deployStacker } = useSCA();

  const handleTokenChange = (value: string) => {
    if (value === 'WRBTC') {
      setToken('WRBTC');
    } else {
      setToken('RUSDT');
    }
  }

  useEffect(() => {
    setIsLoading(false);
  }, [setIsLoading]);
  return (
    <div className={clsx(
      'pl-16 py-12 w-full h-full',
      'flex flex-col items-center justify-between',
    )}>

      <div className="flex flex-col gap-8">

        <div className="flex flex-row gap-6 items-center">

          <span className="text-3xl font-code uppercase">for</span>

          <span className={clsx(
            'px-3 py-1 rounded-lg',
            'text-3xl font-hover uppercase',
            'border border-foreground/50 border-dashed',
            'bg-foreground/25',
          )}>
            WRBTC/RUSDT
          </span>

        </div>

        <div className="flex flex-row p-8 gap-6 items-center">

          <span className="text-3xl font-code uppercase">in range</span>

          <div className="flex flex-row gap-6">
            <Input value={from} setValue={setFrom} max={Number(to)} />
            <Input value={to} setValue={setTo} min={Number(from)} />
          </div>


        </div>

        <div className="flex flex-row gap-6 p-16">

          <span className="text-3xl font-code uppercase">trade</span>
          
          <Input value={pct} setValue={setPct} min={1} max={100} />

          {/* <input type="range" min={1} max={100} value={pct} onChange={(e) => setPct(e.target.value)} /> */}

          <input
            type="text"
            className={clsx(
              'w-28 px-3 py-1 rounded-lg',
              'text-3xl font-hover uppercase',
              'border border-foreground/50 border-dashed',
              'bg-foreground/25',
            )}
            value={token}
            onChange={(e) => handleTokenChange(e.target.value)}
          />
        </div>

      </div>

      <div className="mx-auto w-1/2 flex items-center justify-center">
        <Button onClick={deployStacker}>
          Deploy
        </Button>
      </div>






    </div>
  );
}