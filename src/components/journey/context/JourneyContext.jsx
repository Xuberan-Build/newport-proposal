import { createContext, useContext, useState } from 'react';

const JourneyContext = createContext();

export const JourneyProvider = ({ children }) => {
  const [activeSection, setActiveSection] = useState('executive-summary');
  const [presentationMode, setPresentationMode] = useState(false);
  const [progress, setProgress] = useState(0);

  const sections = [
    {
      title: 'Overview',
      link: 'overview',
      subsections: [], // Overview is a standalone page with narrative focus
      content: {
        challenge: "In today's digital landscape, managing 90+ properties across five states demands more than just operational excellence—it requires a digital infrastructure as robust as your communities. Yet with unreliable systems threatening both daily operations and future growth, the status quo puts Newport Pacific's market leadership at risk.",
        solution: "We propose a transformative partnership that will not only stabilize your digital operations but revolutionize how you engage with residents, manage properties, and scale your portfolio. Through our proven three-phase approach, we'll turn your digital presence from a pain point into a powerful competitive advantage.",
        vision: "Imagine a future where your digital infrastructure matches the excellence of your physical communities—where every property benefits from seamless operations, enhanced resident engagement, and data-driven insights. This isn't just about fixing today's problems—it's about building tomorrow's success."
      }
    },
    {
      title: 'Key Details',
      link: 'key-details',
      subsections: [
        {
          title: 'Executive Summary',
          link: 'executive-summary',
          content: {
            opening: "As a leader managing 90+ properties across five states, Newport Pacific is no stranger to the challenges of maintaining operational excellence while navigating the complexities of digital transformation.",
            problem: "However, unreliable digital infrastructure has disrupted your ability to maintain consistency across your portfolio, risking business continuity and limiting your ability to scale efficiently.",
            costOfInaction: "Without immediate stabilization, these challenges threaten to impact your brand reputation, tenant satisfaction, and ability to achieve long-term growth.",
            solution: "Our proposed partnership delivers a scalable solution to stabilize operations, optimize performance, and unlock growth opportunities across your entire portfolio. Through a phased approach, we will immediately address your most pressing needs while laying the groundwork for sustained digital transformation.",
            valueProposition: "This partnership empowers Newport Pacific to focus on its mission of providing high-quality affordable housing, while we ensure your digital infrastructure operates seamlessly at scale.",
            vision: "Together, we can create a future where Newport Pacific's digital operations are as robust and dependable as the communities you serve, setting a new standard for excellence in your industry."
          }
        },
        {
          title: 'Introduction',
          link: 'introduction',
          content: {
            mission: "For years, Newport Pacific has cultivated thriving communities, not just properties—ensuring affordable housing meets high standards of safety and quality. Yet, as the digital landscape evolves, even the most resilient organizations must adapt to maintain their leadership in an ever-changing world.",
            challenges: "Operational disruptions—like inconsistent website management and unreliable support—have created barriers to maintaining this high standard. With over 90 properties to manage, even small inefficiencies can lead to outsized challenges.",
            decisionPoint: "Addressing these challenges now is critical to ensuring the stability of your portfolio and setting the stage for scalable growth. This proposal outlines a path to overcome these obstacles and position Newport Pacific for continued success in an increasingly digital world."
          }
        },
        {
          title: 'The Problem',
          link: 'problem',
          content: {
            stakes: "At Newport Pacific, operational excellence and community satisfaction are more than goals—they are the foundation of your success. Yet today, that foundation is at risk.",
            painPoints: [
              {
                title: "Inconsistent Website Management",
                description: "Outdated or inconsistent property websites create confusion for tenants, prospective residents, and staff, eroding trust and reducing lead generation effectiveness."
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
            ]
          }
        },
        {
          title: 'The Opportunity',
          link: 'opportunity',
          content: {
            vision: "By addressing the operational inefficiencies and risks in your digital infrastructure, Newport Pacific has the opportunity to elevate tenant satisfaction, enhance efficiency, and unlock future growth. This partnership offers a roadmap to stability and success.",
            urgency: "Acting now ensures you not only solve today's issues but also gain a competitive edge in an evolving market—positioning Newport Pacific as a leader in operational excellence for affordable housing."
          }
        }
      ]
    },
    {
      title: 'Solution',
      link: 'solution',
      subsections: [
        {
          title: 'Implementation',
          link: 'implementation',
          content: {
            phases: [
              {
                title: "Phase 1: Stabilization",
                description: "Months 1-3: We'll stabilize your operations by transitioning pilot properties, implementing reliable support systems, eliminating technical barriers like Google Map Pack issues, and documenting processes to ensure continuity."
              },
              {
                title: "Phase 2: Optimization",
                description: "Months 3-6: We'll introduce premium features like SEO optimization, lead generation strategies, and data-driven insights through GA4 enhancements to transform your digital presence into a growth driver."
              },
              {
                title: "Phase 3: Scaling",
                description: "Months 6-9: We'll scale successful strategies portfolio-wide, leveraging advanced tools and multi-channel marketing to ensure every property benefits from the transformation."
              }
            ]
          }
        }
      ]
    },
    {
      title: 'Next Steps',
      link: 'next-steps',
      subsections: [
        {
          title: 'Pricing Options',
          link: 'pricing',
          content: {
            introduction: "Choose the package that best fits your portfolio's needs. All plans include our core stabilization features with additional optimization and scaling capabilities available in higher tiers.",
            tiers: [
              {
                name: "Essential",
                price: "$2,499/mo",
                features: [
                  "Basic website maintenance",
                  "24/7 emergency support",
                  "Google Maps integration",
                  "Basic SEO optimization",
                  "Monthly performance reports"
                ]
              },
              {
                name: "Professional",
                price: "$4,999/mo",
                features: [
                  "Everything in Essential",
                  "Advanced SEO optimization",
                  "Lead generation system",
                  "GA4 implementation",
                  "Quarterly strategy sessions",
                  "Priority support"
                ]
              },
              {
                name: "Enterprise",
                price: "Custom",
                features: [
                  "Everything in Professional",
                  "Custom development",
                  "Advanced analytics",
                  "Multi-channel marketing",
                  "Dedicated success manager",
                  "Monthly strategy sessions"
                ]
              }
            ]
          }
        },
        {
          title: 'Schedule Consultation',
          link: 'consultation',
          content: {
            header: "Schedule Your Strategy Session",
            description: "Let's discuss how we can transform your digital infrastructure and set Newport Pacific up for sustainable growth.",
            callToAction: "During your consultation, we'll cover:",
            consultationPoints: [
              "A detailed analysis of your current digital infrastructure",
              "Specific opportunities for operational improvement",
              "Custom recommendations for your portfolio",
              "Implementation timeline and next steps"
            ],
            contactInfo: {
              phone: "(555) 123-4567",
              email: "solutions@example.com",
              availability: "Monday - Friday, 9am - 5pm PST"
            }
          }
        }
      ]
    }
  ];

  const value = {
    activeSection,
    setActiveSection,
    presentationMode,
    setPresentationMode,
    progress,
    setProgress,
    sections,
    getCurrentSection: () => {
      // First check if it's a main section
      const mainSection = sections.find(section => section.link === activeSection);
      if (mainSection) return mainSection;

      // Then check subsections
      for (const section of sections) {
        const subsection = section.subsections?.find(sub => sub.link === activeSection);
        if (subsection) return subsection;
      }
      return null;
    }
  };

  return (
    <JourneyContext.Provider value={value}>
      {children}
    </JourneyContext.Provider>
  );
};

export const useJourney = () => {
  const context = useContext(JourneyContext);
  if (!context) {
    throw new Error('useJourney must be used within a JourneyProvider');
  }
  return context;
};

export default JourneyContext;
