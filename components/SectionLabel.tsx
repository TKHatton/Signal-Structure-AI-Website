import SignalDot from './SignalDot';

interface SectionLabelProps {
  children: React.ReactNode;
  variant?: 'light' | 'dark';
}

export default function SectionLabel({ children, variant = 'dark' }: SectionLabelProps) {
  const textColor = variant === 'light' ? 'text-white/70' : 'text-warmgray';

  return (
    <div className="flex items-center gap-2 mb-4">
      <SignalDot size={7} />
      <span className={`font-body text-xs font-medium uppercase tracking-[0.08em] ${textColor}`}>
        {children}
      </span>
    </div>
  );
}
