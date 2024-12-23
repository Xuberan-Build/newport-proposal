import React from 'react';
import { useJourney } from '../context/JourneyContext';
import styles from './CurrentLandscape.module.css';

const CurrentLandscape = () => {
  const { getCurrentStage, nextStage } = useJourney();
  const currentStage = getCurrentStage();

  const executiveSummary = {
    opener: "As a leader managing 90+ properties across five states, Newport Pacific is no stranger to the challenges of maintaining operational excellence while navigating the complexities of digital transformation.",
    problem: "However, unreliable digital infrastructure has disrupted your ability to maintain consistency across your portfolio, risking business continuity and limiting your ability to scale efficiently.",
    costOfInaction: "Without immediate stabilization, these challenges threaten to impact your brand reputation, tenant satisfaction, and ability to achieve long-term growth.",
    solution: "Our proposed partnership delivers a scalable solution to stabilize operations, optimize performance, and unlock growth opportunities across your entire portfolio. Through a phased approach, we will immediately address your most pressing needs while laying the groundwork for sustained digital transformation.",
    valueProposition: "This partnership empowers Newport Pacific to focus on its mission of providing high-quality affordable housing, while we ensure your digital infrastructure operates seamlessly at scale.",
    vision: "Together, we can create a future where Newport Pacific's digital operations are as robust and dependable as the communities you serve, setting a new standard for excellence in your industry."
  };

  const painPoints = [
    {
      title: "Inconsistent Website Management",
      description: "Outdated or inconsistent property websites create confusion for tenants, prospective residents, and even staff, eroding trust and reducing lead generation effectiveness."
    },
    {
      title: "Communication Gaps",
      description: "Without reliable digital systems, delays in tenant communication and support requests can undermine resident satisfaction, risking the reputation you've worked hard to build."
    },
    {
      title: "Scalability Risks",
      description: "Managing a portfolio of 90+ properties requires infrastructure that grows with you. Without scalable digital solutions, Newport Pacific faces bottlenecks that hinder efficiency and prevent expansion."
    },
    {
      title: "Business Continuity Risks",
      description: "An unreliable digital partner introduces operational fragility—putting business continuity at risk in the event of service failures or emergencies."
    }
  ];

  return (
    <div className="space-y-12 max-w-4xl mx-auto px-6">
      <section className="text-center">
        <h1 className="text-4xl font-serif mb-4">{currentStage.title}</h1>
        <p className="text-xl text-gray-600">{currentStage.subtitle}</p>
      </section>

      <section className="space-y-6">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-serif mb-6">Executive Summary</h2>
          <div className="space-y-4">
            <p>{executiveSummary.opener}</p>
            <p>{executiveSummary.problem}</p>
            <p>{executiveSummary.costOfInaction}</p>
            <p>{executiveSummary.solution}</p>
            <p className="font-medium">{executiveSummary.valueProposition}</p>
            <p>{executiveSummary.vision}</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-serif mb-6">Portfolio Overview</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <p className="text-3xl font-serif text-blue-600 mb-2">{currentStage.metrics.properties}</p>
              <p className="text-sm uppercase">Properties</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-serif text-blue-600 mb-2">{currentStage.metrics.units}</p>
              <p className="text-sm uppercase">Total Units</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-serif text-blue-600 mb-2">{currentStage.metrics.markets}</p>
              <p className="text-sm uppercase">Markets</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-serif mb-6">Current Challenges</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {painPoints.map((point, index) => (
              <div key={index} className="space-y-2">
                <h3 className="font-medium">{point.title}</h3>
                <p className="text-gray-600">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="text-center">
        <button
          onClick={nextStage}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Explore Our Solution
        </button>
      </div>
    </div>
  );
};

export default CurrentLandscape;
