'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import router from 'next/router';

import { useWriteContract } from 'wagmi';
import { useAppKitAccount } from '@reown/appkit/react';

import * as abi from '@/abi/index';
import * as envio from '@/lib/envio/index';


interface SCAContextType {
  sca: string | null;
  deposit: () => void;
  withdraw: () => void;
  deployMonkey: () => void;
};

const SCAContext = createContext<SCAContextType | undefined>(undefined);

export function SCAProvider({ children }: { children: React.ReactNode }) {

  const { address, isConnected } = useAppKitAccount();
  const { writeContract, isSuccess } = useWriteContract();
  const [sca, setSCA] = useState<string | null>(null);

  useEffect(() => {
    if (!isConnected) {
      router.push('/');
    }
  }, [isConnected]);

  const getSCA = async () => {
    if (isConnected) {
      const monkey = await envio.findSCA(address as string);
      console.log('monkey', monkey);
      setSCA(monkey.monkey || null);
    }
  }

  useEffect(() => {
    getSCA();
  }, [])


  function deposit() {
    console.log('deposit');
  }

  function withdraw() {
    console.log('withdraw');
  }

  function deployMonkey() {
    writeContract({
      address: process.env.NEXT_PUBLIC_MONKEY_FACTORY as `0x${string}`,
      abi: abi.MonkeyFactory,
      functionName: 'createMonkey',
      args: [address as string, '0000-0000-0000-0000-0000'],
    });
  }

  return (
    <SCAContext.Provider value={{ 
      sca, 
      deposit, 
      withdraw,
      deployMonkey
    }}>
      {children}
    </SCAContext.Provider>
  );
}

export function useSCA() {
  const context = useContext(SCAContext);
  if (!context) {
    throw new Error('useSCA must be used within a SCAProvider');
  }
  return context;
}