import React, { useState, useEffect, useMemo, useCallback } from 'react';
import classNames from 'classnames';
import styles from './TableOfContents.module.css';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { useJourney } from '../journey/context/JourneyContext';

// Individual TOC item component that handles both sections and subsections
const TableOfContentsItem = ({ item, activeSection, level = 0 }) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const { setActiveSection } = useJourney();

  // Check if the item has subsections
  const hasSubsections = useMemo(
    () => item.subsections && item.subsections.length > 0,
    [item.subsections]
  );

  // Handle clicking on a TOC item
  const handleClick = useCallback(
    (e) => {
      e.preventDefault();
      setActiveSection(item.link);
      const targetElement = document.getElementById(item.link);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    },
    [item.link, setActiveSection]
  );

  return (
    <div className={styles.tocItem}>
      <div
        className={classNames(styles.link, {
          [styles.active]: activeSection === item.link,
        })}
        style={{ paddingLeft: `${level * 1.5}rem` }}
      >
        {/* Render expand button only for items with subsections */}
        {hasSubsections ? (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className={styles.expandButton}
            aria-expanded={isExpanded}
            aria-label={isExpanded ? 'Collapse section' : 'Expand section'}
          >
            {isExpanded ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
          </button>
        ) : (
          <span className="w-2" />
        )}

        <a
          href={`#${item.link}`}
          onClick={handleClick}
          aria-current={activeSection === item.link ? 'true' : 'false'}
        >
          {item.title}
        </a>
      </div>

      {/* Render subsections if they exist and section is expanded */}
      {hasSubsections && isExpanded && (
        <div className={styles.subsections}>
          {item.subsections.map((subsection, index) => (
            <TableOfContentsItem
              key={index}
              item={subsection}
              activeSection={activeSection}
              level={level + 1}
            />
          ))}
        </div>
      )}
    </div>
  );
};

// Hook to observe which section is currently in view
const useActiveSectionObserver = (setCurrentSection) => {
  useEffect(() => {
    let timeout;

    const observer = new IntersectionObserver(
      (entries) => {
        // Clear any pending timeout to prevent rapid switching
        clearTimeout(timeout);

        timeout = setTimeout(() => {
          let lastActiveSection = null;

          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              lastActiveSection = entry.target.id;
            }
          });

          // Update the active section if we found one
          if (lastActiveSection) {
            setCurrentSection(lastActiveSection);
          }
        }, 100); // Small delay to prevent rapid switching
      },
      {
        threshold: 0.4, // Lower threshold for better detection
        rootMargin: '-10% 0px -70% 0px' // Adjust the intersection root margins
      }
    );

    // Observe all sections in the document
    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    // Cleanup on unmount
    return () => {
      clearTimeout(timeout);
      observer.disconnect();
    };
  }, [setCurrentSection]);
};

// Main TableOfContents component
const TableOfContents = ({ items, activeSection, className = '', sticky = false }) => {
  const [currentSection, setCurrentSection] = useState(activeSection);
  const { setActiveSection } = useJourney();

  // Use the intersection observer to track active section
  useActiveSectionObserver((id) => {
    setCurrentSection(id);
    setActiveSection(id);
  });

  return (
    <nav
      className={classNames(styles.toc, className, {
        [styles.sticky]: sticky,
      })}
      aria-label="Table of contents"
    >
      {items.map((item, index) => (
        <TableOfContentsItem
          key={index}
          item={item}
          activeSection={currentSection}
        />
      ))}
    </nav>
  );
};

export default TableOfContents;
