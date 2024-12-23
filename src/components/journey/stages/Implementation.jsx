//Implementation.jsx
import React, { useState } from 'react';
import styles from './Implementation.module.css';

const Implementation = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(index === expandedIndex ? null : index);
  };

  const phases = [
    {
      title: "Phase 1: Stabilization (Months 1-3)",
      description: `
        In the Stabilization stage, we focus on immediate stability measures:
        - Pilot property transitions
        - Support system implementation
        - Google Map Pack fixes
        - Process documentation
        These steps ensure a strong foundation for consistent operations.
      `,
    },
    {
      title: "Phase 2: Optimization (Months 3-6)",
      description: `
        During Optimization, we introduce targeted improvements to maximize efficiency and growth:
        - SEO optimization implementation
        - Lead generation strategies
        - GA4 enhancements
        - Data-driven insights
        - Performance improvements
      `,
    },
    {
      title: "Phase 3: Scaling (Months 6-9)",
      description: `
        In the Scaling stage, we expand proven strategies across your portfolio:
        - Portfolio-wide strategy scaling
        - Advanced tools implementation
        - Multi-channel marketing
      `,
    },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      <div className="bg-slate-800 rounded-lg shadow-xl p-8">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-white">Implementation</h2>
        </div>

        <div>
          <p className="text-gray-300 mb-8">
            This proposed solution will stabilize Newport Pacific's digital operations today while creating a scalable path for growth. With a three-phase approach, we will deliver immediate results, optimize your digital infrastructure, and seamlessly expand these improvements across your entire portfolio.
          </p>

          <div className="space-y-4 mb-8">
            {phases.map((phase, index) => (
              <div
                key={index}
                className={`bg-slate-700 rounded-lg p-4 cursor-pointer transition-all duration-200 ${
                  expandedIndex === index ? 'bg-slate-600' : ''
                }`}
                onClick={() => toggleExpand(index)}
              >
                <h3 className="text-white font-semibold">{phase.title}</h3>
                {expandedIndex === index && (
                  <div className="text-gray-300 mt-2 whitespace-pre-line">
                    {phase.description}
                  </div>
                )}
              </div>
            ))}
          </div>

          <p className="text-gray-300 mb-6">
            Our solution integrates seamlessly into your operations, ensuring a smooth transition and a scalable infrastructure that evolves with Newport Pacific's needs.
          </p>

          <div className="mt-8">
            <p className="text-gray-300">
              This phased approach ensures Newport Pacific can confidently navigate today's challenges while building the infrastructure for tomorrow's success—empowering your mission with reliable, scalable digital operations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Implementation;
