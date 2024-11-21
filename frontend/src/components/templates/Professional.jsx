import React from 'react';
import '@fontsource/playfair-display';
import '@fontsource/montserrat';

const Professional = ({ data }) => {
  const {
    personalInfo = {},
    experience = [],
    education = [],
    skills = [],
    languages = [],
    references = []
  } = data || {};

  // Extract personal info
  const {
    fullName = "John Doe",
    title = "Software Engineer",
    email = "john@example.com",
    phone = "+1 234 567 890",
  } = personalInfo || {};

  // Helper function to chunk skills into columns
  const chunkArray = (arr, size) => {
    const chunkedArr = [];
    for (let i = 0; i < arr.length; i += size) {
      chunkedArr.push(arr.slice(i, i + size));
    }
    return chunkedArr;
  };

  const skillColumns = chunkArray(skills, Math.ceil(skills.length / 3));

  return (
    <div className="w-full max-w-4xl mx-auto bg-white dark:bg-gray-800 shadow-lg p-12 my-8 transition-colors duration-200">
      {/* Header - Name and Title */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2 font-playfair">{fullName}</h1>
        <h2 className="text-2xl text-gray-600 dark:text-gray-300 font-montserrat">{title}</h2>
      </div>

      {/* Contact Information */}
      <div className="flex justify-between mb-8">
        <div className="text-left">
          <p className="text-gray-600 dark:text-gray-300">{phone}</p>
        </div>
        <div className="text-right">
          <p className="text-gray-600 dark:text-gray-300">{email}</p>
        </div>
      </div>

      {/* Skills Section */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4 font-montserrat">Skills</h3>
        <div className="grid grid-cols-3 gap-4">
          {skillColumns.map((column, columnIndex) => (
            <div key={columnIndex} className="space-y-2">
              {column.filter(skill => !languages.includes(skill)).map((skill, skillIndex) => (
                <p key={skillIndex} className="text-gray-600 dark:text-gray-300">{skill}</p>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Education Section */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4 font-montserrat">Education</h3>
        {education.map((edu, index) => (
          <div key={index} className="mb-4">
            <h4 className="font-semibold text-gray-700 dark:text-gray-200">{edu.degree}</h4>
            <p className="text-gray-600 dark:text-gray-300">{edu.school}</p>
            <p className="text-gray-500 dark:text-gray-400">{edu.year}</p>
          </div>
        ))}
      </div>

      {/* Experience Section with Timeline */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4 font-montserrat">Experience</h3>
        <div className="space-y-4">
          {experience.map((exp, index) => (
            <div key={index} className="relative pl-8 pb-4 border-l-2 border-purple-400 dark:border-purple-500">
              <div className="absolute left-[-8px] top-0 w-4 h-4 bg-purple-500 rounded-full"></div>
              <h4 className="font-semibold text-gray-700 dark:text-gray-200">{exp.position}</h4>
              <p className="text-gray-600 dark:text-gray-300">{exp.company}</p>
              <p className="text-gray-500 dark:text-gray-400">{exp.duration}</p>
              <p className="text-gray-600 dark:text-gray-300 mt-2">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Languages Section */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4 font-montserrat">Languages</h3>
        <div className="grid grid-cols-2 gap-4">
          {languages.map((language, index) => (
            <p key={index} className="text-gray-600 dark:text-gray-300">{language}</p>
          ))}
        </div>
      </div>

      {/* References Section */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4 font-montserrat">References</h3>
        <p className="text-gray-500 dark:text-gray-400 italic mb-4 text-left">
          References will be provided upon request
        </p>
        <div className="grid grid-cols-2 gap-4">
          {references.map((reference, index) => (
            <div key={index} className="mb-4">
              <p className="font-semibold text-gray-700 dark:text-gray-200">{reference.name}</p>
              <p className="text-gray-600 dark:text-gray-300">{reference.position}</p>
              <p className="text-gray-500 dark:text-gray-400">{reference.contact}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Professional;
