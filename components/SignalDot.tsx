interface SignalDotProps {
  size?: number;
  className?: string;
}

export default function SignalDot({ size = 7, className = '' }: SignalDotProps) {
  return (
    <span
      className={`inline-block rounded-full bg-copper ${className}`}
      style={{ width: `${size}px`, height: `${size}px` }}
      aria-hidden="true"
    />
  );
}
