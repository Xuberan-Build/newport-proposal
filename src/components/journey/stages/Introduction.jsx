import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './Introduction.module.css';

const Introduction = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.header}>
          <h2 className={styles.title}>Introduction</h2>
        </div>

        <div className={styles.content}>
          <p className={styles.lead}>
            Newport Pacific has built thriving communities by ensuring affordable housing meets the highest standards of safety and quality. To maintain leadership in a rapidly evolving digital world, adaptation is essential.
          </p>
          <p>
  Inconsistent website management, delayed communications, and unreliable systems hinder operational efficiency. Managing 90+ properties amplifies these issues, impacting tenant satisfaction, discoverability, and scalability.
</p>
<p>
  Solving these challenges now is critical to sustaining excellence and enabling growth.<br /><br />
  This proposal outlines a clear path to future-proof your operations, ensuring Newport Pacific remains an industry leader.
</p>

        </div>
      </div>
    </div>
  );
};

export default Introduction;
