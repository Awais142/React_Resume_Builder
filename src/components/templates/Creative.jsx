const Creative = ({ data }) => {
  console.log("Creative template received data:", data); // Add debug log

  const {
    personalInfo = {},
    experience = [],
    education = [],
    skills = [],
  } = data || {};

  // Extract personal info
  const {
    fullName = "John Doe",
    title = "Software Engineer",
    email = "john@example.com",
    phone = "+1 234 567 890",
    location = "New York, USA",
    summary = "Experienced software engineer with a passion for building scalable applications",
  } = personalInfo || {};

  // Helper function to categorize skills
  const categorizeSkills = (skillList) => {
    const categories = {
      programming: ['JavaScript', 'React', 'Node.js', 'Python', 'Java', 'HTML', 'CSS', 'SQL', 'Git', 'TypeScript', 'Angular', 'Vue.js', 'PHP', 'Ruby', 'C++', 'C#', 'AWS', 'Docker'],
      general: ['Communication', 'Leadership', 'Problem Solving', 'Team Collaboration', 'Time Management', 'Adaptability', 'Critical Thinking', 'Creativity', 'Project Management'],
      languages: ['English', 'Spanish', 'French', 'German', 'Chinese', 'Japanese', 'Korean', 'Arabic']
    };

    return {
      programming: skillList.filter(skill => categories.programming.includes(skill)),
      general: skillList.filter(skill => categories.general.includes(skill)),
      languages: skillList.filter(skill => categories.languages.includes(skill))
    };
  };

  const categorizedSkills = categorizeSkills(skills);

  return (
    <div className="w-full max-w-2xl mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden transition-colors duration-200">
      {/* Header */}
      <header className="bg-gradient-to-r from-purple-600 to-blue-500 dark:from-purple-800 dark:to-blue-700 text-white p-8">
        <h1 className="text-5xl font-extrabold mb-2">{fullName}</h1>
        <p className="text-2xl mb-4 italic">{title}</p>
        <div className="flex flex-wrap gap-4 text-sm">
          <span className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            {email}
          </span>
          <span className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            {phone}
          </span>
          <span className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {location}
          </span>
        </div>
      </header>

      <div className="p-8">
        {/* Summary */}
        <section className="mb-8">
          <h2 className="text-3xl font-bold text-primary dark:text-primary-dark mb-4 border-b-2 border-gray-300 dark:border-gray-600 pb-2">About Me</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{summary}</p>
        </section>

        {/* Experience */}
        <section className="mb-8">
          <h2 className="text-3xl font-bold text-primary dark:text-primary-dark mb-4 border-b-2 border-gray-300 dark:border-gray-600 pb-2">Experience</h2>
          {experience.map((job, index) => (
            <div key={index} className="mb-6">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{job.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{job.company} • {job.location}</p>
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {job.startDate} - {job.endDate}
                </span>
              </div>
              <div className="text-gray-700 dark:text-gray-300">
                {job.description}
              </div>
            </div>
          ))}
        </section>

        {/* Education */}
        <section className="mb-8">
          <h2 className="text-3xl font-bold text-primary dark:text-primary-dark mb-4 border-b-2 border-gray-300 dark:border-gray-600 pb-2">Education</h2>
          {education && education.length > 0 ? (
            education.map((edu, index) => (
              <div key={index} className="mb-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{edu.degree}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{edu.school}</p>
                    <p className="text-gray-600 dark:text-gray-400">{edu.field}</p>
                    {edu.location && (
                      <p className="text-gray-500 dark:text-gray-400">{edu.location}</p>
                    )}
                    {edu.description && (
                      <p className="text-gray-700 dark:text-gray-300 mt-2">{edu.description}</p>
                    )}
                  </div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {edu.startDate} - {edu.current ? 'Present' : edu.endDate}
                  </span>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500 dark:text-gray-400">No education information provided</p>
          )}
        </section>

        {/* Skills */}
        <section className="mb-8">
          <h2 className="text-3xl font-bold text-primary dark:text-primary-dark mb-4 border-b-2 border-gray-300 dark:border-gray-600 pb-2">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Programming Skills */}
            {categorizedSkills.programming.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Programming</h3>
                <div className="flex flex-wrap gap-3">
                  {categorizedSkills.programming.map((skill, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm font-medium transition-colors duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* General Skills */}
            {categorizedSkills.general.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">General Skills</h3>
                <div className="flex flex-wrap gap-3">
                  {categorizedSkills.general.map((skill, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm font-medium transition-colors duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Languages */}
            {categorizedSkills.languages.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Languages</h3>
                <div className="flex flex-wrap gap-3">
                  {categorizedSkills.languages.map((skill, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm font-medium transition-colors duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Creative;
