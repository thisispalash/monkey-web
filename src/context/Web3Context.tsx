'use client'

import React, { type ReactNode } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { cookieToInitialState, WagmiProvider, type Config } from 'wagmi'

import { createAppKit } from '@reown/appkit'

import { wagmiAdapter, projectId, networks } from '@/lib/web3/wagmi'
import { rsktestnet } from '@/lib/web3/chains/RootstockTestnet';

if (!projectId) {
  throw new Error('Project ID is not defined')
}

// Set up metadata
const metadata = {
  name: 'Dash Mon[k]ey',
  description: 'Monkey see, Monkey do!',
  url: 'http://localhost:3000', // origin must match your domain & subdomain
  icons: ['/circus-monkey.svg']
}

// Create the modal
export const modal = createAppKit({
  adapters: [wagmiAdapter],
  projectId,
  networks,
  defaultNetwork: rsktestnet,
  metadata: metadata,
  enableWalletConnect: false,
  features: {
    analytics: true,
    swaps: false,
    connectMethodsOrder: ['wallet', 'social', 'email'],
  },
  includeWalletIds: [
    'c57ca95b47569778a828d19178114f4db188b89b763c899ba0be274e97267d96', // MetaMask
    '19177a98252e07ddfc9af2083ba8e07ef627cb6103467ffebb3f8f4205fd7927', // Ledger
    'fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa', // Coinbase
  ],
  featuredWalletIds: [
    'c57ca95b47569778a828d19178114f4db188b89b763c899ba0be274e97267d96', // MetaMask
  ],
  allWallets: 'ONLY_MOBILE',
  themeMode: 'light',
  themeVariables: {
    '--w3m-font-family': 'var(--font-default)',
    '--w3m-accent': 'var(--foreground)',
    '--w3m-color-mix': 'var(--background)',
    '--w3m-color-mix-strength': 100
  },
});

// Set up queryClient
const queryClient = new QueryClient()

function ContextProvider({ children, cookies }: { children: ReactNode; cookies: string | null }) {
  const initialState = cookieToInitialState(wagmiAdapter.wagmiConfig as Config, cookies)

  return (
    <WagmiProvider config={wagmiAdapter.wagmiConfig as Config} initialState={initialState}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  );
}

export default ContextProvider;