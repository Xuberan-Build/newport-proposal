//HeroContainer.jsx
import React from 'react';
import HeroSection from '../../sections/HeroSection';
import { JourneyProvider } from '../context/JourneyContext';
console.log(JourneyProvider);
import styles from './HeroContainer.module.css';

const HeroContainer = () => {
    return (
        <JourneyProvider>
            <div className={styles.container}>
                <HeroSection />
            </div>
        </JourneyProvider>
    );
};

export default HeroContainer;
