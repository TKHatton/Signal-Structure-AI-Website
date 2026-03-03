import SignalDot from './SignalDot';
import Button from './Button';

interface ServiceCardProps {
  title: string;
  description: string;
  price: string;
  priceNote?: string;
  features: string[];
  ctaText: string;
  ctaHref: string;
  badge?: string;
  featured?: boolean;
}

export default function ServiceCard({
  title,
  description,
  price,
  priceNote,
  features,
  ctaText,
  ctaHref,
  badge,
  featured = false,
}: ServiceCardProps) {
  return (
    <div
      className={`relative bg-white rounded-card shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 p-8 ${
        featured ? 'border-l-4 border-copper' : 'border-t-4 border-copper'
      }`}
    >
      {/* Badge */}
      {badge && (
        <div className="absolute -top-3 left-8 bg-copper text-white px-4 py-1 rounded-full text-xs font-body font-semibold uppercase tracking-wider">
          {badge}
        </div>
      )}

      {/* Header */}
      <div className="mb-6">
        <h3 className="font-body text-2xl font-bold text-navy mb-3">{title}</h3>
        <p className="font-body text-warmgray mb-4">{description}</p>
        <div className="flex items-baseline gap-2">
          <span className="font-mono text-3xl font-bold text-copper">{price}</span>
          {priceNote && (
            <span className="font-body text-sm text-warmgray-light">{priceNote}</span>
          )}
        </div>
      </div>

      {/* Features */}
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <SignalDot size={7} className="mt-1.5 flex-shrink-0" />
            <span className="font-body text-navy">{feature}</span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <Button
        href={ctaHref}
        variant={featured ? 'primary' : 'secondary'}
        className="w-full text-center"
      >
        {ctaText}
      </Button>
    </div>
  );
}
