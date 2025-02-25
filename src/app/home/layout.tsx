'use client';

import { SCAProvider } from '@/context/SCAContext';

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return <SCAProvider>{children} </SCAProvider>;
}