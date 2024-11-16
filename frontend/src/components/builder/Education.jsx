import { useState } from 'react';

const Education = ({ data, onUpdate, onNext, onBack }) => {
  const [educations, setEducations] = useState(data || []);
  const [currentEducation, setCurrentEducation] = useState({
    school: '',
    degree: '',
    field: '',
    location: '',
    startDate: '',
    endDate: '',
    current: false,
    description: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setCurrentEducation((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const validateEducation = () => {
    const newErrors = {};
    if (!currentEducation.school.trim()) newErrors.school = 'School name is required';
    if (!currentEducation.degree.trim()) newErrors.degree = 'Degree is required';
    if (!currentEducation.field.trim()) newErrors.field = 'Field of study is required';
    if (!currentEducation.startDate) newErrors.startDate = 'Start date is required';
    if (!currentEducation.current && !currentEducation.endDate) {
      newErrors.endDate = 'End date is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const addEducation = (e) => {
    e.preventDefault();
    if (validateEducation()) {
      setEducations((prev) => [...prev, currentEducation]);
      setCurrentEducation({
        school: '',
        degree: '',
        field: '',
        location: '',
        startDate: '',
        endDate: '',
        current: false,
        description: '',
      });
      setErrors({});
    }
  };

  const removeEducation = (index) => {
    setEducations((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(educations);
    onNext();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 space-y-6">
        <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Education</h2>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            Add your educational background. Start with your most recent degree.
          </p>
        </div>

        {educations.length > 0 && (
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">Added Education</h3>
            {educations.map((edu, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg relative group">
                <button
                  onClick={() => removeEducation(index)}
                  className="absolute top-2 right-2 text-gray-400 hover:text-red-600 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  Remove
                </button>
                <h4 className="font-medium text-gray-900 dark:text-gray-100">{edu.degree} in {edu.field}</h4>
                <p className="text-gray-600 dark:text-gray-300">{edu.school}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {edu.startDate} - {edu.current ? 'Present' : edu.endDate}
                </p>
              </div>
            ))}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8">
          <div className="space-y-2">
            <label htmlFor="school" className="block text-sm font-medium text-gray-900 dark:text-white">
              School
            </label>
            <div className="relative rounded-md shadow-sm">
              <input
                type="text"
                id="school"
                name="school"
                value={currentEducation.school}
                onChange={handleChange}
                className={`block w-full rounded-md border-0 py-2.5 px-3 bg-white dark:bg-gray-900 text-gray-900 dark:text-white shadow-sm ring-1 ring-inset ${
                  errors.school
                    ? 'ring-red-300 dark:ring-red-500 focus:ring-red-500'
                    : 'ring-gray-300 dark:ring-gray-700 focus:ring-blue-500'
                } focus:ring-2 focus:ring-inset sm:text-sm transition-colors duration-200`}
                placeholder="e.g. Harvard University"
              />
              {errors.school && (
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                  <svg className="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
              )}
            </div>
            {errors.school && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.school}</p>}
          </div>

          <div className="space-y-2">
            <label htmlFor="degree" className="block text-sm font-medium text-gray-900 dark:text-white">
              Degree
            </label>
            <div className="relative rounded-md shadow-sm">
              <input
                type="text"
                id="degree"
                name="degree"
                value={currentEducation.degree}
                onChange={handleChange}
                className={`block w-full rounded-md border-0 py-2.5 px-3 bg-white dark:bg-gray-900 text-gray-900 dark:text-white shadow-sm ring-1 ring-inset ${
                  errors.degree
                    ? 'ring-red-300 dark:ring-red-500 focus:ring-red-500'
                    : 'ring-gray-300 dark:ring-gray-700 focus:ring-blue-500'
                } focus:ring-2 focus:ring-inset sm:text-sm transition-colors duration-200`}
                placeholder="e.g. Bachelor of Science"
              />
              {errors.degree && (
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                  <svg className="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
              )}
            </div>
            {errors.degree && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.degree}</p>}
          </div>

          <div className="space-y-2">
            <label htmlFor="field" className="block text-sm font-medium text-gray-900 dark:text-white">
              Field of Study
            </label>
            <div className="relative rounded-md shadow-sm">
              <input
                type="text"
                id="field"
                name="field"
                value={currentEducation.field}
                onChange={handleChange}
                className={`block w-full rounded-md border-0 py-2.5 px-3 bg-white dark:bg-gray-900 text-gray-900 dark:text-white shadow-sm ring-1 ring-inset ${
                  errors.field
                    ? 'ring-red-300 dark:ring-red-500 focus:ring-red-500'
                    : 'ring-gray-300 dark:ring-gray-700 focus:ring-blue-500'
                } focus:ring-2 focus:ring-inset sm:text-sm transition-colors duration-200`}
                placeholder="e.g. Computer Science"
              />
              {errors.field && (
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                  <svg className="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
              )}
            </div>
            {errors.field && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.field}</p>}
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
                value={currentEducation.location}
                onChange={handleChange}
                className="block w-full rounded-md border-0 py-2.5 px-3 bg-white dark:bg-gray-900 text-gray-900 dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm transition-colors duration-200"
                placeholder="e.g. Cambridge, MA"
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
                value={currentEducation.startDate}
                onChange={handleChange}
                className={`block w-full rounded-md border-0 py-2.5 px-3 bg-white dark:bg-gray-900 text-gray-900 dark:text-white shadow-sm ring-1 ring-inset ${
                  errors.startDate
                    ? 'ring-red-300 dark:ring-red-500 focus:ring-red-500'
                    : 'ring-gray-300 dark:ring-gray-700 focus:ring-blue-500'
                } focus:ring-2 focus:ring-inset sm:text-sm transition-colors duration-200`}
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
                value={currentEducation.endDate}
                onChange={handleChange}
                disabled={currentEducation.current}
                className={`block w-full rounded-md border-0 py-2.5 px-3 bg-white dark:bg-gray-900 text-gray-900 dark:text-white shadow-sm ring-1 ring-inset ${
                  errors.endDate
                    ? 'ring-red-300 dark:ring-red-500 focus:ring-red-500'
                    : 'ring-gray-300 dark:ring-gray-700 focus:ring-blue-500'
                } focus:ring-2 focus:ring-inset sm:text-sm transition-colors duration-200 ${
                  currentEducation.current ? 'opacity-50 cursor-not-allowed' : ''
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
              checked={currentEducation.current}
              onChange={handleChange}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label htmlFor="current" className="text-sm font-medium text-gray-700 dark:text-gray-200">
              I am currently studying here
            </label>
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="description" className="block text-sm font-medium text-gray-900 dark:text-white">
            Description (Optional)
          </label>
          <div className="relative rounded-md shadow-sm">
            <textarea
              id="description"
              name="description"
              rows={4}
              value={currentEducation.description}
              onChange={handleChange}
              className="block w-full rounded-md border-0 py-2.5 px-3 bg-white dark:bg-gray-900 text-gray-900 dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm transition-colors duration-200"
              placeholder="Add any relevant details about your education..."
            />
          </div>
        </div>

        <div>
          <button
            type="button"
            onClick={addEducation}
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
          >
            Add Education
          </button>
        </div>
      </div>

      <div className="flex justify-between pt-6">
        <button
          type="button"
          onClick={onBack}
          className="inline-flex justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Back
        </button>
        <button
          type="submit"
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
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
export default Education;