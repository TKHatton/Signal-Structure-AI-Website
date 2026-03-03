import SectionLabel from './SectionLabel';
import FadeIn from './FadeIn';

interface StepCardProps {
  stepNumber: string;
  label: string;
  headline: string;
  body: string;
  visual: React.ReactNode;
  reverse?: boolean;
}

export default function StepCard({
  stepNumber,
  label,
  headline,
  body,
  visual,
  reverse = false,
}: StepCardProps) {
  return (
    <div className="relative">
      {/* Large watermark number */}
      <div className="absolute top-0 left-0 font-mono text-[120px] font-bold text-navy opacity-5 leading-none pointer-events-none">
        {stepNumber}
      </div>

      {/* Content grid */}
      <div
        className={`relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
          reverse ? 'lg:grid-flow-dense' : ''
        }`}
      >
        {/* Text side */}
        <FadeIn direction={reverse ? 'right' : 'left'} className={reverse ? 'lg:col-start-2' : ''}>
          <SectionLabel>{label}</SectionLabel>
          <h3 className="font-display text-3xl md:text-4xl text-navy mb-4">{headline}</h3>
          <p className="font-body text-lg text-warmgray leading-relaxed">{body}</p>
        </FadeIn>

        {/* Visual side */}
        <FadeIn direction={reverse ? 'left' : 'right'} delay={0.2} className={reverse ? 'lg:col-start-1 lg:row-start-1' : ''}>
          {visual}
        </FadeIn>
      </div>
    </div>
  );
}
