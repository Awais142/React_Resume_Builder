import { useState } from 'react';

const PersonalInfo = ({ data, onUpdate, onNext }) => {
  const [formData, setFormData] = useState(data);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.title.trim()) newErrors.title = 'Professional title is required';
    if (!formData.location.trim()) newErrors.location = 'Location is required';
    if (!formData.summary.trim()) newErrors.summary = 'Summary is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      onUpdate(formData);
      onNext();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 space-y-6">
        <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Personal Information</h2>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            Start with the basics. This information will appear at the top of your resume.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8">
          {/* Full Name */}
          <div className="space-y-2">
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-900 dark:text-white">
              Full Name
            </label>
            <div className="relative rounded-md shadow-sm">
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className={`block w-full rounded-md border-0 py-2.5 px-3 bg-white dark:bg-gray-900 text-gray-900 dark:text-white shadow-sm ring-1 ring-inset ${
                  errors.fullName
                    ? 'ring-red-300 dark:ring-red-500 focus:ring-red-500'
                    : 'ring-gray-300 dark:ring-gray-700 focus:ring-purple-500'
                } focus:ring-2 focus:ring-inset sm:text-sm transition-colors duration-200`}
                placeholder="John Doe"
              />
              {errors.fullName && (
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                  <svg className="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
              )}
            </div>
            {errors.fullName && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.fullName}</p>}
          </div>

          {/* Professional Title */}
          <div className="space-y-2">
            <label htmlFor="title" className="block text-sm font-medium text-gray-900 dark:text-white">
              Professional Title
            </label>
            <div className="relative rounded-md shadow-sm">
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className={`block w-full rounded-md border-0 py-2.5 px-3 bg-white dark:bg-gray-900 text-gray-900 dark:text-white shadow-sm ring-1 ring-inset ${
                  errors.title
                    ? 'ring-red-300 dark:ring-red-500 focus:ring-red-500'
                    : 'ring-gray-300 dark:ring-gray-700 focus:ring-purple-500'
                } focus:ring-2 focus:ring-inset sm:text-sm transition-colors duration-200`}
                placeholder="Software Engineer"
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

          {/* Email */}
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-gray-900 dark:text-white">
              Email Address
            </label>
            <div className="relative rounded-md shadow-sm">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`block w-full rounded-md border-0 py-2.5 px-3 bg-white dark:bg-gray-900 text-gray-900 dark:text-white shadow-sm ring-1 ring-inset ${
                  errors.email
                    ? 'ring-red-300 dark:ring-red-500 focus:ring-red-500'
                    : 'ring-gray-300 dark:ring-gray-700 focus:ring-purple-500'
                } focus:ring-2 focus:ring-inset sm:text-sm transition-colors duration-200`}
                placeholder="john@example.com"
              />
              {errors.email && (
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                  <svg className="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
              )}
            </div>
            {errors.email && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.email}</p>}
          </div>

          {/* Phone */}
          <div className="space-y-2">
            <label htmlFor="phone" className="block text-sm font-medium text-gray-900 dark:text-white">
              Phone Number
            </label>
            <div className="relative rounded-md shadow-sm">
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={`block w-full rounded-md border-0 py-2.5 px-3 bg-white dark:bg-gray-900 text-gray-900 dark:text-white shadow-sm ring-1 ring-inset ${
                  errors.phone
                    ? 'ring-red-300 dark:ring-red-500 focus:ring-red-500'
                    : 'ring-gray-300 dark:ring-gray-700 focus:ring-purple-500'
                } focus:ring-2 focus:ring-inset sm:text-sm transition-colors duration-200`}
                placeholder="+1 (555) 000-0000"
              />
              {errors.phone && (
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                  <svg className="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
              )}
            </div>
            {errors.phone && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.phone}</p>}
          </div>

          {/* Location */}
          <div className="space-y-2">
            <label htmlFor="location" className="block text-sm font-medium text-gray-900 dark:text-white">
              Location
            </label>
            <div className="relative rounded-md shadow-sm">
              <input
                type="text"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className={`block w-full rounded-md border-0 py-2.5 px-3 bg-white dark:bg-gray-900 text-gray-900 dark:text-white shadow-sm ring-1 ring-inset ${
                  errors.location
                    ? 'ring-red-300 dark:ring-red-500 focus:ring-red-500'
                    : 'ring-gray-300 dark:ring-gray-700 focus:ring-purple-500'
                } focus:ring-2 focus:ring-inset sm:text-sm transition-colors duration-200`}
                placeholder="New York, USA"
              />
              {errors.location && (
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                  <svg className="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
              )}
            </div>
            {errors.location && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.location}</p>}
          </div>
        </div>

        {/* Summary */}
        <div className="space-y-2">
          <label htmlFor="summary" className="block text-sm font-medium text-gray-900 dark:text-white">
            Professional Summary
          </label>
          <div className="relative rounded-md shadow-sm">
            <textarea
              id="summary"
              name="summary"
              rows={4}
              value={formData.summary}
              onChange={handleChange}
              className={`block w-full rounded-md border-0 py-2.5 px-3 bg-white dark:bg-gray-900 text-gray-900 dark:text-white shadow-sm ring-1 ring-inset ${
                errors.summary
                  ? 'ring-red-300 dark:ring-red-500 focus:ring-red-500'
                  : 'ring-gray-300 dark:ring-gray-700 focus:ring-purple-500'
              } focus:ring-2 focus:ring-inset sm:text-sm transition-colors duration-200`}
              placeholder="Write a brief summary of your professional background and key achievements..."
            />
            {errors.summary && (
              <div className="pointer-events-none absolute top-2 right-2">
                <svg className="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
            )}
          </div>
          {errors.summary && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.summary}</p>}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-end">
        <button
          type="submit"
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-colors duration-200"
        >
          Next Step
          <svg className="ml-2 -mr-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
    </form>
  );
};

export default PersonalInfo;
