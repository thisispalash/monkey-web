'use client';

import clsx from 'clsx';

export default function LeftSide() {
  return (
    <div className={clsx(
      'h-full w-1/2',
      'flex flex-col gap-4'
    )}>

      <div className="flex flex-row items-center justify-between">Dummy</div>
    </div>
  );
}