const Modern = ({ data }) => {
  console.log("Modern template received data:", data);

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

  return (
    <div className="w-full max-w-2xl mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden transition-colors duration-200">
      {/* Header Section */}
      <header className="bg-gradient-to-r from-blue-500 to-purple-600 dark:from-blue-700 dark:to-purple-800 text-white p-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-2">{fullName}</h1>
          <p className="text-xl mb-4">{title}</p>
          <div className="flex justify-center gap-4 text-sm">
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
        </div>
      </header>

      <div className="p-8">
        {/* Summary Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Professional Summary</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{summary}</p>
        </section>

        {/* Experience Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Experience</h2>
          {experience.map((job, index) => (
            <div key={index} className="mb-6">
              <div className="grid grid-cols-[1fr,auto] gap-4 mb-2">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{job.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{job.company}</p>
                </div>
                <div className="text-right text-gray-600 dark:text-gray-400">
                  {job.startDate} - {job.current ? 'Present' : job.endDate}
                  <div>{job.location}</div>
                </div>
              </div>
              {job.description && (
                <p className="text-gray-700 dark:text-gray-300 mb-2">{job.description}</p>
              )}
              {job.responsibilities && job.responsibilities.length > 0 && (
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                  {job.responsibilities.map((resp, idx) => (
                    <li key={idx}>{resp}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </section>

        {/* Education Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Education</h2>
          {education.map((edu, index) => (
            <div key={index} className="mb-4">
              <div className="grid grid-cols-[1fr,auto] gap-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{edu.degree}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{edu.school}</p>
                  {edu.field && (
                    <p className="text-gray-500 dark:text-gray-400">{edu.field}</p>
                  )}
                </div>
                <div className="text-right text-gray-600 dark:text-gray-400">
                  {edu.startDate} - {edu.current ? 'Present' : edu.endDate}
                  {edu.location && <div>{edu.location}</div>}
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Skills Section */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm transition-colors duration-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Modern;
