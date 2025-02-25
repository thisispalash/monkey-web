'use client';

import { SCAProvider } from '@/context/SCAContext';

export default function CreateLayout({ children }: { children: React.ReactNode }) {
  return <SCAProvider>{children} </SCAProvider>;
}