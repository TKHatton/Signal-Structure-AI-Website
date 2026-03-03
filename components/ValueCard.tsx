interface ValueCardProps {
  title: string;
  description: string;
}

export default function ValueCard({ title, description }: ValueCardProps) {
  return (
    <div className="bg-white/10 rounded-lg p-6 text-center">
      <h4 className="font-body text-lg font-semibold text-white mb-2">{title}</h4>
      <p className="font-body text-sm text-white/70">{description}</p>
    </div>
  );
}
