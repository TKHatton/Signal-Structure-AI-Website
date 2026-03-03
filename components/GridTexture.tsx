interface GridTextureProps {
  opacity?: number;
}

export default function GridTexture({ opacity = 0.04 }: GridTextureProps) {
  return (
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
        backgroundSize: '24px 24px',
        opacity: opacity,
      }}
      aria-hidden="true"
    />
  );
}
