import { useState } from 'react';

const Experience = ({ data, onUpdate, onNext, onBack }) => {
  const [experiences, setExperiences] = useState(data || []);
  const [currentExperience, setCurrentExperience] = useState({
    title: '',
    company: '',
    location: '',
    startDate: '',
    endDate: '',
    current: false,
    description: '',
  });
  const [errors, setErrors] = useState({});
  const [showSuccess, setShowSuccess] = useState(false);
  const MAX_DESCRIPTION_LENGTH = 1000;
  const MIN_DESCRIPTION_LENGTH = 50;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setCurrentExperience((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const validateExperience = () => {
    const newErrors = {};
    if (!currentExperience.title.trim()) newErrors.title = 'Job title is required';
    if (!currentExperience.company.trim()) newErrors.company = 'Company name is required';
    if (!currentExperience.startDate) newErrors.startDate = 'Start date is required';
    if (!currentExperience.current && !currentExperience.endDate) {
      newErrors.endDate = 'End date is required';
    }
    if (currentExperience.startDate && currentExperience.endDate && !currentExperience.current) {
      const start = new Date(currentExperience.startDate);
      const end = new Date(currentExperience.endDate);
      if (start > end) {
        newErrors.endDate = 'End date must be after start date';
      }
    }
    if (!currentExperience.description.trim()) {
      newErrors.description = 'Description is required';
    } else if (currentExperience.description.length < MIN_DESCRIPTION_LENGTH) {
      newErrors.description = `Description must be at least ${MIN_DESCRIPTION_LENGTH} characters`;
    } else if (currentExperience.description.length > MAX_DESCRIPTION_LENGTH) {
      newErrors.description = `Description must be ${MAX_DESCRIPTION_LENGTH} characters or less`;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const addExperience = (e) => {
    e.preventDefault();
    if (validateExperience()) {
      setExperiences((prev) => [...prev, currentExperience]);
      setCurrentExperience({
        title: '',
        company: '',
        location: '',
        startDate: '',
        endDate: '',
        current: false,
        description: '',
      });
      setErrors({});
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000);
    }
  };

  const removeExperience = (index) => {
    setExperiences((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(experiences);
    onNext();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8 max-h-[calc(100vh-12rem)] overflow-y-auto">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 space-y-6">
        <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Work Experience</h2>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            Add your relevant work experience. Start with your most recent position.
          </p>
        </div>

        {experiences.length > 0 && (
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">Added Experiences</h3>
            {experiences.map((exp, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg relative group">
                <button
                  onClick={() => removeExperience(index)}
                  className="absolute top-2 right-2 text-gray-400 hover:text-red-600 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  Remove
                </button>
                <h4 className="font-medium text-gray-900 dark:text-gray-100">{exp.title}</h4>
                <p className="text-gray-600 dark:text-gray-300">{exp.company}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
                </p>
              </div>
            ))}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8">
          <div className="space-y-2">
            <label htmlFor="title" className="block text-sm font-medium text-gray-900 dark:text-white">
              Job Title
            </label>
            <div className="relative rounded-md shadow-sm">
              <input
                type="text"
                id="title"
                name="title"
                value={currentExperience.title}
                onChange={handleChange}
                className={`block w-full rounded-md shadow-sm ${
                  errors.title ? 'border-red-300' : 'border-gray-300'
                } focus:border-purple-500 focus:ring-purple-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white`}
                placeholder="e.g. Software Engineer"
              />
              {errors.title && (
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                  <svg className="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
              )}
            </div>
            {errors.title && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.title}</p>}
          </div>

          <div className="space-y-2">
            <label htmlFor="company" className="block text-sm font-medium text-gray-900 dark:text-white">
              Company
            </label>
            <div className="relative rounded-md shadow-sm">
              <input
                type="text"
                id="company"
                name="company"
                value={currentExperience.company}
                onChange={handleChange}
                className={`block w-full rounded-md shadow-sm ${
                  errors.company ? 'border-red-300' : 'border-gray-300'
                } focus:border-purple-500 focus:ring-purple-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white`}
                placeholder="e.g. Acme Inc."
              />
              {errors.company && (
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                  <svg className="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
              )}
            </div>
            {errors.company && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.company}</p>}
          </div>

          <div className="space-y-2">
            <label htmlFor="location" className="block text-sm font-medium text-gray-900 dark:text-white">
              Location
            </label>
            <div className="relative rounded-md shadow-sm">
              <input
                type="text"
                id="location"
                name="location"
                value={currentExperience.location}
                onChange={handleChange}
                className={`block w-full rounded-md shadow-sm ${
                  errors.location ? 'border-red-300' : 'border-gray-300'
                } focus:border-purple-500 focus:ring-purple-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white`}
                placeholder="e.g. New York, NY"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="startDate" className="block text-sm font-medium text-gray-900 dark:text-white">
              Start Date
            </label>
            <div className="relative rounded-md shadow-sm">
              <input
                type="month"
                id="startDate"
                name="startDate"
                value={currentExperience.startDate}
                onChange={handleChange}
                className={`block w-full rounded-md shadow-sm ${
                  errors.startDate ? 'border-red-300' : 'border-gray-300'
                } focus:border-purple-500 focus:ring-purple-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white`}
              />
              {errors.startDate && (
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                  <svg className="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
              )}
            </div>
            {errors.startDate && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.startDate}</p>}
          </div>

          <div className="space-y-2">
            <label htmlFor="endDate" className="block text-sm font-medium text-gray-900 dark:text-white">
              End Date
            </label>
            <div className="relative rounded-md shadow-sm">
              <input
                type="month"
                id="endDate"
                name="endDate"
                value={currentExperience.endDate}
                onChange={handleChange}
                disabled={currentExperience.current}
                className={`block w-full rounded-md shadow-sm ${
                  errors.endDate ? 'border-red-300' : 'border-gray-300'
                } focus:border-purple-500 focus:ring-purple-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white ${
                  currentExperience.current ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              />
              {errors.endDate && (
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                  <svg className="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
              )}
            </div>
            {errors.endDate && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.endDate}</p>}
          </div>

          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="current"
              name="current"
              checked={currentExperience.current}
              onChange={handleChange}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label htmlFor="current" className="text-sm font-medium text-gray-700 dark:text-gray-200">
              I currently work here
            </label>
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="description" className="block text-sm font-medium text-gray-900 dark:text-white">
            Description - {currentExperience.description.length}/{MAX_DESCRIPTION_LENGTH} characters (minimum {MIN_DESCRIPTION_LENGTH})
          </label>
          <div className="relative rounded-md shadow-sm">
            <textarea
              id="description"
              name="description"
              rows={4}
              minLength={MIN_DESCRIPTION_LENGTH}
              maxLength={MAX_DESCRIPTION_LENGTH}
              value={currentExperience.description}
              onChange={handleChange}
              className={`block w-full rounded-md shadow-sm ${
                errors.description ? 'border-red-300' : 'border-gray-300'
              } focus:border-purple-500 focus:ring-purple-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white`}
              placeholder="Describe your responsibilities and achievements..."
            />
            {errors.description && (
              <div className="pointer-events-none absolute top-2 right-2">
                <svg className="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
            )}
          </div>
          {errors.description && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.description}</p>}
        </div>

        {showSuccess && (
          <div className="rounded-md bg-green-50 dark:bg-green-900 p-4">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-green-800 dark:text-green-200">
                  Experience added successfully!
                </p>
              </div>
            </div>
          </div>
        )}

        <div>
          <button
            type="button"
            onClick={addExperience}
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-colors duration-200"
          >
            Add Experience
          </button>
        </div>
      </div>

      <div className="flex justify-between pt-6">
        <button
          type="button"
          onClick={onBack}
          className="inline-flex justify-center rounded-md border border-gray-300 bg-white dark:bg-gray-700 py-2 px-4 text-sm font-medium text-gray-700 dark:text-gray-200 shadow-sm hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
        >
          Back
        </button>
        <button
          type="submit"
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-colors duration-200"
        >
          Next
          <svg className="ml-2 -mr-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
    </form>
  );
};

export default Experience;