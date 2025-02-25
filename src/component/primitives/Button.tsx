import clsx from 'clsx';

export interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
}

export default function Button({ onClick, children, className }: ButtonProps) {

  return (
    <button 
      onClick={onClick}
      className={clsx(
        'w-auto h-auto px-3 py-2 text-lg',
        'rounded-full border border-foreground',
        'transition-all duration-300',
        'bg-foreground text-background',
        'hover:bg-background hover:text-foreground',
        className,
      )}
    >
      {children}
    </button>
  );
}