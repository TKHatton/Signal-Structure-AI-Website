import Link from 'next/link';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline';
  href: string;
  children: React.ReactNode;
  className?: string;
}

export default function Button({ variant = 'primary', href, children, className = '' }: ButtonProps) {
  const baseStyles = 'inline-block px-6 py-3 font-body font-medium rounded-button transition-all duration-300 hover:scale-[1.02]';

  const variantStyles = {
    primary: 'bg-copper text-white shadow-button hover:shadow-button-hover hover:bg-copper-light',
    secondary: 'bg-navy text-white shadow-button hover:shadow-button-hover hover:bg-navy-light',
    outline: 'bg-transparent border-2 border-copper text-copper hover:bg-copper hover:text-white',
  };

  const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${className}`;

  // Check if it's an external link
  if (href.startsWith('http')) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={combinedStyles}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={combinedStyles}>
      {children}
    </Link>
  );
}
