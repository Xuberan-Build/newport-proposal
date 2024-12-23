import React from 'react';
import { useJourney } from '../context/JourneyContext';
import { ArrowRight } from 'lucide-react';

const Consultation = () => {
  const { sections } = useJourney();
  const nextStepsSection = sections.find(section => section.title === 'Next Steps');
  const consultContent = nextStepsSection?.subsections.find(
    sub => sub.link === 'consultation'
  )?.content;

  if (!consultContent) return null;

  return (
    <div className="w-full max-w-12xl mx-auto p-1">
      <div className="bg-slate-800 rounded-lg shadow-xl p-8">
        {/* Header Section with more emphasis */}
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-white mb-4">
            {consultContent.header}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {consultContent.description}
          </p>
        </div>

        {/* Main content with calendar focus */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column - Streamlined consultation points */}
          <div className="lg:col-span-4 space-y-6">
            <h3 className="text-xl font-semibold text-white mb-4">
              {consultContent.callToAction}
            </h3>
            <div className="space-y-4">
              {consultContent.consultationPoints.map((point, index) => (
                <div key={index} className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-blue-400 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-300 text-lg">{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Expanded calendar */}
          <div className="lg:col-span-8 bg-slate-300 rounded-lg">
            <iframe
              src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ22g9C8VINONFxSzxQ6rf_a1oz-gSHeJwpbKgEZMLrct8YWxRZ4lluGD9QT43K4YrdTxLc8hMYA?gv=true"
              style={{
                border: 0,
                borderRadius: '8px',
                backgroundColor: 'transparent',
                minHeight: '700px'
              }}
              width="100%"
              height="100%"
              frameBorder="0"
              title="Schedule Consultation"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Consultation;
