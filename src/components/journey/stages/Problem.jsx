//Problem.jsx
import React, { useState } from 'react';
import styles from './Problem.module.css';

const Problem = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(index === expandedIndex ? null : index);
  };

  const painPoints = [
    {
      title: "Inconsistent Website Management",
      description:
        "Outdated or inconsistent property websites create confusion for tenants, prospective residents, and staff, eroding trust and reducing lead generation effectiveness.",
    },
    {
      title: "Communication Gaps",
      description:
        "Without reliable systems in place, delays in communication and support requests can undermine satisfaction, risking the reputation and business impact.",
    },
    {
      title: "Scalability Risks",
      description:
        "Managing a portfolio of 90+ properties requires infrastructure that grows with you. Without scalable digital solutions, Newport Pacific faces bottlenecks that hinder efficiency and prevent expansion.",
    },
    {
      title: "Business Continuity Risks",
      description:
        "An unreliable digital partner introduces operational fragility—putting business continuity at risk in the event of service failures or emergencies.",
    },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      <div className="bg-slate-800 rounded-lg shadow-xl p-8">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-white mb-4">The Problem</h2>
        </div>

        <div>
          <p className="text-gray-300 mb-8">
            At Newport Pacific, operational excellence and community satisfaction are the foundation of your success.
            However, today that foundation is at risk due to several pressing challenges.
          </p>
          <div className="space-y-4">
            {painPoints.map((point, index) => (
              <div
                key={index}
                className={`bg-slate-700 rounded-lg p-4 cursor-pointer transition-all duration-200 ${
                  expandedIndex === index ? 'bg-slate-600' : ''
                }`}
                onClick={() => toggleExpand(index)}
              >
                <h3 className="text-white font-semibold">{point.title}</h3>
                {expandedIndex === index && (
                  <p className="text-gray-300 mt-2">{point.description}</p>
                )}
              </div>
            ))}
          </div>
          <p className="text-gray-300 mt-8">
            Left unaddressed, these challenges could impact not only your operational efficiency but also your reputation as a leader in affordable housing. The stakes are too high to ignore.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Problem;
