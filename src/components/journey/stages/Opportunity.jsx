import React, { useState } from 'react';
import styles from './Opportunity.module.css';

const Opportunity = () => {
  const [expandedIndex, setExpandedIndex] = useState(null); // Track the currently expanded item

  const toggleExpand = (index) => {
    setExpandedIndex(index === expandedIndex ? null : index);
  };

  const opportunities = [
    {
      title: "Elevating Tenant Satisfaction",
      description:
        "By implementing a consistent and scalable digital infrastructure, Newport Pacific can significantly enhance tenant satisfaction, ensuring seamless communication and access to essential services.",
    },
    {
      title: "Unlocking Operational Efficiency",
      description:
        "Streamlining digital processes allows for better resource allocation, faster decision-making, and more effective management across the entire portfolio.",
    },
    {
      title: "Driving Sustainable Growth",
      description:
        "A robust digital strategy opens new opportunities for expansion while maintaining operational excellence across all properties.",
    },
    {
      title: "Strengthening Market Leadership",
      description:
        "Positioning Newport Pacific as an innovator in affordable housing enhances brand reputation, attracting new tenants and partners while retaining existing ones.",
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.header}>
          <h2 className={styles.title}>The Opportunity</h2>
        </div>

        <div className={styles.content}>
          <p className={styles.lead}>
            By addressing the operational inefficiencies and risks in your digital infrastructure,
            Newport Pacific has the opportunity to elevate tenant satisfaction, enhance efficiency,
            and unlock growth. This partnership offers a gateway to stability, scale and success.
          </p>
          <div className={styles.opportunities}>
            {opportunities.map((opportunity, index) => (
              <div
                key={index}
                className={`${styles.opportunity} ${
                  expandedIndex === index ? styles.expanded : ''
                }`}
                onClick={() => toggleExpand(index)}
              >
                <h3 className={styles.opportunityTitle}>{opportunity.title}</h3>
                {expandedIndex === index && (
                  <p className={styles.opportunityDescription}>{opportunity.description}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Opportunity;
