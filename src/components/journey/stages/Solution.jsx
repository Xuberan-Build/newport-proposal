import React, { useState } from 'react';
import styles from './Solution.module.css';

const Solution = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(index === expandedIndex ? null : index);
  };

  const solutionPhases = [
    {
      title: "Phase 1: Stabilization",
      description:
        "Months 1-3: We'll stabilize your operations by transitioning pilot properties, implementing reliable support systems, eliminating technical barriers like Google Map Pack issues, and documenting processes to ensure continuity.",
    },
    {
      title: "Phase 2: Optimization",
      description:
        "Months 3-6: We'll introduce premium features like SEO optimization, lead generation strategies, and data-driven insights through GA4 enhancements to transform your digital presence into a growth driver.",
    },
    {
      title: "Phase 3: Scaling",
      description:
        "Months 6-9: We'll scale successful strategies portfolio-wide, leveraging advanced tools and multi-channel marketing to ensure every property benefits from the transformation.",
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.header}>
          <h2 className={styles.title}>Solution Overview</h2>
        </div>

        <div className={styles.content}>
          <p className={styles.lead}>
          Our proposed solution is designed to stabilize Newport Pacific’s digital operations today while creating a scalable foundation for future revenue growth.
          With a three-phase approach, we will deliver immediate results, optimize your digital infrastructure, and seamlessly expand these improvements across your entire portfolio.
          </p>
          <div className={styles.phases}>
            {solutionPhases.map((phase, index) => (
              <div
                key={index}
                className={`${styles.phase} ${
                  expandedIndex === index ? styles.expanded : ''
                }`}
                onClick={() => toggleExpand(index)}
              >
                <h3 className={styles.phaseTitle}>{phase.title}</h3>
                {expandedIndex === index && (
                  <p className={styles.phaseDescription}>{phase.description}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solution;
