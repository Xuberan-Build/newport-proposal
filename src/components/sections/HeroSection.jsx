import React from 'react';
import { useJourney } from '../journey/context/JourneyContext';
import styles from './HeroSection.module.css';
import TableOfContents from '../navigation/TableOfContents';
import ExecutiveSummary from '../journey/stages/ExecutiveSummary';
import Introduction from '../journey/stages/Introduction';
import Problem from '../journey/stages/Problem';
import Opportunity from '../journey/stages/Opportunity';
import Solution from '../journey/stages/Solution';
import Implementation from '../journey/stages/Implementation';
import PricingOptions from '../journey/stages/PricingOptions';
import Consultation from '../journey/stages/Consultation';

// Individual content renderer component
const ContentRenderer = ({ section }) => {
  if (!section) return null;

  // Map section links to their corresponding components
  const sectionComponents = {
    'executive-summary': ExecutiveSummary,
    'introduction': Introduction,
    'problem': Problem,
    'opportunity': Opportunity,
    'solution': Solution,
    'implementation': Implementation,
    'pricing': PricingOptions,
    'consultation': Consultation
  };

  // Get the component for this section
  const Component = sectionComponents[section.link];

  if (Component) {
    return (
      <section id={section.link} className={styles.section}>
        <Component />
      </section>
    );
  }

  // Default landing content
  return (
    <section id="default" className={styles.section}>
      <h1 className="font-crimsonpro text-[38px] font-medium uppercase tracking-[2px] leading-[1.2em] text-white mb-widget">
        Newport Pacific: Initial Proposal
      </h1>
      <p className="font-roboto text-[21px] font-thin leading-[1.4em] text-background mb-[36px]">
        Begin exploring our proposal using the Table of Contents or the navigation buttons below.
      </p>
    </section>
  );
};

// Main HeroSection component
const HeroSection = () => {
  const { sections, activeSection, getCurrentSection, setActiveSection } = useJourney();
  const currentSection = getCurrentSection();

  // Helper function to get all subsections flattened into an array
  const getAllSubsections = () => sections.flatMap(section =>
    section.subsections ? section.subsections.map(sub => sub.link) : []
  );

  // Navigation handlers
  const handleNext = () => {
    const allSubsections = getAllSubsections();
    const currentIndex = allSubsections.indexOf(activeSection);
    if (currentIndex < allSubsections.length - 1) {
      setActiveSection(allSubsections[currentIndex + 1]);
    }
  };

  const handlePrevious = () => {
    const allSubsections = getAllSubsections();
    const currentIndex = allSubsections.indexOf(activeSection);
    if (currentIndex > 0) {
      setActiveSection(allSubsections[currentIndex - 1]);
    }
  };

  const isFirstSection = () => activeSection === getAllSubsections()[0];
  const isLastSection = () => activeSection === getAllSubsections().slice(-1)[0];

  return (
    <div className={`${styles.heroSection} relative min-h-screen bg-navy`}>
      <div className="container mx-auto flex gap-widget">
        <div className="flex-1 flex items-center justify-center">
          <div className="max-w-2xl">
            <ContentRenderer section={currentSection} />
            <div className="flex gap-4 mt-[24px]">
              <button
                onClick={handlePrevious}
                disabled={isFirstSection()}
                className={`px-6 py-3 bg-primary text-white font-roboto text-sm flex items-center gap-2
                  ${isFirstSection() ? 'opacity-50 cursor-not-allowed' : 'hover:bg-primary-dark'}
                  transition-all duration-200`}
              >
                Previous
              </button>
              <button
                onClick={handleNext}
                disabled={isLastSection()}
                className={`px-6 py-3 bg-primary text-white font-roboto text-sm flex items-center gap-2
                  ${isLastSection() ? 'opacity-50 cursor-not-allowed' : 'hover:bg-primary-dark'}
                  transition-all duration-200`}
              >
                Next
              </button>
            </div>
          </div>
        </div>
        <TableOfContents
          items={sections}
          sticky
          className="hidden lg:block"
        />
      </div>
    </div>
  );
};

export default HeroSection;
