'use client';

import clsx from 'clsx';
import { useEffect } from 'react';

import { useLoading } from '@/context/LoadingContext';

import LeftSide from './LeftSide';
import RightSide from './RightSide';

export default function Home() {

  const { setIsLoading } = useLoading();

  useEffect(() => {
    setIsLoading(false);
  }, [setIsLoading]);

  return (
    <div className={clsx(
      'p-4 w-full h-full',
      'flex flex-row justify-between',
    )}>

      {/* Quick Stats */}
      <LeftSide />

      {/* SCA Stats */}
      <RightSide />


    </div>
  );

}