import React from 'react';
import { useJourney } from '../context/JourneyContext';
import { ArrowRight } from 'lucide-react';

const Overview = () => {
  // We'll use the journey context to access our narrative content
  const { sections } = useJourney();
  const overviewContent = sections[0].content;

  // Each section will have a subtle entrance animation
  const sectionClasses = "transform transition-all duration-500 hover:translate-x-2";

  return (
    <div id="overview" className="w-full max-w-4xl mx-auto p-6">
      <div className="bg-slate-800 rounded-lg shadow-xl p-8">
        {/* Header Section - Creates immediate impact */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">
            Digital Excellence Awaits
          </h1>
          <p className="text-xl text-gray-300">
            A transformative partnership to elevate Newport Pacific's digital presence
          </p>
        </div>

        {/* Narrative Flow - Each section builds on the previous */}
        <div className="space-y-12">
          {/* The Challenge Section */}
          <div className={sectionClasses}>
            <div className="bg-slate-700 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold text-white mb-2 flex items-center">
                The Challenge
                <ArrowRight className="ml-2 h-6 w-6 text-gray-400" />
              </h2>
              <p className="text-gray-300 leading-relaxed">
                {overviewContent.challenge}
              </p>
            </div>
          </div>

          {/* The Solution Section */}
          <div className={sectionClasses}>
            <div className="bg-slate-700 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold text-white mb-2 flex items-center">
                The Solution
                <ArrowRight className="ml-2 h-6 w-6 text-gray-400" />
              </h2>
              <p className="text-gray-300 leading-relaxed">
                {overviewContent.solution}
              </p>
            </div>
          </div>

          {/* The Vision Section */}
          <div className={sectionClasses}>
            <div className="bg-slate-700 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold text-white mb-2 flex items-center">
                The Vision
                <ArrowRight className="ml-2 h-6 w-6 text-gray-400" />
              </h2>
              <p className="text-gray-300 leading-relaxed">
                {overviewContent.vision}
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action - Encourages further exploration */}
        <div className="mt-12 text-center">
          <p className="text-gray-300 mb-6">
            Ready to transform your digital infrastructure?
          </p>
          <button
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300"
            onClick={() => {
              // Navigate to the next section using the journey context
              const nextSection = document.getElementById('executive-summary');
              if (nextSection) {
                nextSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Explore Our Approach
          </button>
        </div>
      </div>
    </div>
  );
};

export default Overview;
