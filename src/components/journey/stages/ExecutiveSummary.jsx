import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './ExecutiveSummary.module.css';

const ExecutiveSummary = () => {
  const portfolioStats = {
    properties: 90,
    totalUnits: 16267,
    markets: 5,
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.header}>
          <h2 className={styles.title}>Executive Summary</h2>
        </div>
        <div className={styles.content}>
          <p className={styles.lead}>
            Newport Pacific Capital Company manages an extensive portfolio of premium properties,
            delivering professional community management and exceptional resident experiences across
            multiple states.
          </p>
          <div className={styles.stats}>
            <div className={styles.stat}>
              <span className={styles.statNumber}>{portfolioStats.properties}+</span>
              <span className={styles.statLabel}>Properties</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>{portfolioStats.totalUnits.toLocaleString()}</span>
              <span className={styles.statLabel}>Total Units</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>{portfolioStats.markets}</span>
              <span className={styles.statLabel}>Strategic Markets</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExecutiveSummary;
