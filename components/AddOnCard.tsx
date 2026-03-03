interface AddOnCardProps {
  title: string;
  price: string;
  description: string;
}

export default function AddOnCard({ title, price, description }: AddOnCardProps) {
  return (
    <div className="bg-white rounded-card shadow-card p-6">
      <h4 className="font-body text-lg font-semibold text-navy mb-2">{title}</h4>
      <div className="font-mono text-2xl font-bold text-copper mb-3">{price}</div>
      <p className="font-body text-sm text-warmgray">{description}</p>
    </div>
  );
}
