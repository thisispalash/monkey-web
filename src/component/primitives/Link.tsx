import clsx from 'clsx';

export interface LinkProps {
  href: string;
  onClick?: () => void;
  className?: string;
  children: React.ReactNode;
}


export default function Link({ href, children, onClick, className }: LinkProps) {

  return (
    <a
      href={href}
      onClick={onClick}
      className={clsx(
        'lowercase text-lg',
        'hover:font-hover hover:text-2xl',
        'transition-all duration-300 ease-in-out',
        className,
      )}
    >
      {children}
    </a>
  )
}