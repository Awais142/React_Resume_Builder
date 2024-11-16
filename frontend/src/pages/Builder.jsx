import { useState } from 'react';
import PersonalInfo from '../components/builder/PersonalInfo';
import Experience from '../components/builder/Experience';
import Education from '../components/builder/Education';
import Skills from '../components/builder/Skills';
import TemplateSelection from '../components/builder/TemplateSelection';

const Builder = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    personalInfo: {
      fullName: '',
      title: '',
      email: '',
      phone: '',
      location: '',
      summary: '',
    },
    experience: [],
    education: [],
    skills: [],
    selectedTemplate: 'modern',
  });

  const steps = [
    { title: 'Personal Info', description: 'Basic information about you' },
    { title: 'Experience', description: 'Your work history' },
    { title: 'Education', description: 'Your educational background' },
    { title: 'Skills', description: 'Your key competencies' },
    { title: 'Template', description: 'Choose your resume design' },
  ];

  const handleNext = () => {
    setActiveStep((prev) => Math.min(prev + 1, steps.length - 1));
  };

  const handleBack = () => {
    setActiveStep((prev) => Math.max(prev - 1, 0));
  };

  const handleUpdateFormData = (section, data) => {
    setFormData((prev) => ({
      ...prev,
      [section]: data,
    }));
  };

  const renderStep = () => {
    switch (activeStep) {
      case 0:
        return (
          <PersonalInfo
            data={formData.personalInfo}
            onUpdate={(data) => handleUpdateFormData('personalInfo', data)}
            onNext={handleNext}
          />
        );
      case 1:
        return (
          <Experience
            data={formData.experience}
            onUpdate={(data) => handleUpdateFormData('experience', data)}
            onNext={handleNext}
            onBack={handleBack}
          />
        );
      case 2:
        return (
          <Education
            data={formData.education}
            onUpdate={(data) => handleUpdateFormData('education', data)}
            onNext={handleNext}
            onBack={handleBack}
          />
        );
      case 3:
        return (
          <Skills
            data={formData.skills}
            onUpdate={(data) => handleUpdateFormData('skills', data)}
            onNext={handleNext}
            onBack={handleBack}
          />
        );
      case 4:
        return (
          <TemplateSelection
            data={formData}
            selectedTemplate={formData.selectedTemplate}
            onUpdate={(template) => handleUpdateFormData('selectedTemplate', template)}
            onBack={handleBack}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col flex-grow">
        {/* Stepper - Fixed at top */}
        <div className="py-4 sticky top-0 bg-gray-50 dark:bg-gray-900 z-10">
          <div className="flex justify-between items-center relative">
            {/* Progress Line */}
            <div className="absolute top-5 left-0 w-full h-0.5">
              <div className="w-full h-full bg-gray-200 dark:bg-gray-700" />
              <div
                className="absolute top-0 left-0 h-full bg-purple-600 dark:bg-purple-400 transition-all duration-500 ease-in-out"
                style={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}
              />
            </div>

            {/* Step Indicators */}
            {steps.map((step, index) => (
              <div key={step.title} className="flex-1">
                <div className="relative flex flex-col items-center">
                  <button
                    onClick={() => index < activeStep && setActiveStep(index)}
                    disabled={index > activeStep}
                    className={`w-10 h-10 rounded-full flex items-center justify-center relative z-10 transition-all duration-200 ${
                      index === activeStep
                        ? 'bg-white dark:bg-gray-800 border-2 border-purple-600 dark:border-purple-400 text-purple-600 dark:text-purple-400'
                        : index < activeStep
                        ? 'bg-purple-600 dark:bg-purple-400 border-2 border-purple-600 dark:border-purple-400 text-white'
                        : 'bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600 text-gray-500 dark:text-gray-400'
                    } ${index < activeStep ? 'cursor-pointer hover:scale-110' : 'cursor-default'}`}
                  >
                    {index < activeStep ? (
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ) : (
                      index + 1
                    )}
                  </button>
                  <div className="mt-2 hidden md:block text-center">
                    <div className="text-sm font-medium text-gray-900 dark:text-white">{step.title}</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">{step.description}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Form Content */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 md:p-8 transition-colors duration-200 flex-grow">
          {renderStep()}
        </div>
      </div>
    </div>
  );
};

export default Builder;
