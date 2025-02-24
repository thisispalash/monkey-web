'use client';

export default function WalletButton() {

  return (
    // @ts-expect-error msg
    <appkit-button 
      balance='hide'
      label='Sign in'
      loadingLabel='Modal Open'
    />
  );

}