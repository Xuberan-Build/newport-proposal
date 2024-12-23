import React from 'react';
import { useJourney } from '../context/JourneyContext';
import { Check } from 'lucide-react';

const PricingOptions = () => {
  // Find the Next Steps section and get the pricing content
  const { sections } = useJourney();
  const nextStepsSection = sections.find(section => section.title === 'Next Steps');
  const pricingContent = nextStepsSection?.subsections.find(sub => sub.link === 'pricing')?.content;

  if (!pricingContent) return null;

  return (
    // Increased max-width from max-w-4xl to max-w-6xl for more space
    <div className="w-full max-w-12xl mx-auto p-1">
      <div className="bg-slate-800 rounded-lg shadow-xl p-1">
        {/* Header section with increased spacing */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Pricing Options</h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            {pricingContent.introduction}
          </p>
        </div>

        {/* Pricing tiers with improved spacing and larger cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {pricingContent.tiers.map((tier, index) => (
            <div
              key={index}
              className="bg-slate-900 rounded-lg p-3 flex flex-col"
            >
              {/* Tier header with improved typography */}
              <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
              <p className="text-3xl font-bold text-blue-400 mb-6">{tier.price}</p>

              {/* Features list with improved spacing and alignment */}
              <ul className="flex-grow space-y-4">
                {tier.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start text-gray-300">
                    <Check className="h-5 w-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-base leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA button with improved styling */}
              <button className="mt-8 bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors w-full text-lg font-semibold">
                Get Started
              </button>
            </div>
          ))}
        </div>

        {/* Added footer note */}
        <p className="text-center text-gray-400 mt-8">
          All plans include 24/7 support and a 30-day satisfaction guarantee
        </p>
      </div>
    </div>
  );
};

export default PricingOptions;
