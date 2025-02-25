'use client';

import { createContext, useContext, useState } from 'react';

interface SCAContextType {
  sca: string;
  deposit: () => void;
  withdraw: () => void;
};

const SCAContext = createContext<SCAContextType | undefined>(undefined);

export function SCAProvider({ children }: { children: React.ReactNode }) {
  const [sca, setSCA] = useState('0x96e03e38aD4B5EF728f4C5F305eddBB509B652d0');

  function deposit() {
    console.log('deposit');
  }

  function withdraw() {
    console.log('withdraw');
  }

  return (
    <SCAContext.Provider value={{ sca, deposit, withdraw }}>
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