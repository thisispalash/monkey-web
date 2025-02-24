'use client'

import { createAppKit } from '@reown/appkit'

import { wagmiAdapter, projectId } from './wagmi'
import { rsktestnet } from './chains/RootstockTestnet';

if (!projectId) {
  throw new Error('Project ID is not defined')
}

// Set up metadata
export const metadata = {
  name: 'Dash Mon[k]ey',
  description: 'Monkey see, Monkey do!',
  url: 'http://localhost:3000', // origin must match your domain & subdomain
  icons: ['/circus-monkey.svg']
}

// Create the modal
export const modal = createAppKit({
  adapters: [wagmiAdapter],
  projectId,
  networks: [rsktestnet],
  defaultNetwork: rsktestnet,
  // metadata: metadata,
  features: {
    analytics: true // Optional - defaults to your Cloud configuration
  }
});