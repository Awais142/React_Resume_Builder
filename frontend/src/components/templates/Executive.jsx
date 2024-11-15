const Executive = ({ data }) => {
  const {
    fullName = "John Doe",
    title = "Software Engineer",
    email = "john@example.com",
    phone = "+1 234 567 890",
    location = "New York, USA",
    summary = "Experienced software engineer with a passion for building scalable applications",
    experience = [],
    education = [],
    skills = [],
  } = data || {};

  return (
    <div className="w-full max-w-2xl mx-auto bg-white shadow-lg">
      {/* Header */}
      <header className="relative bg-gray-900 text-white p-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-2 font-display">{fullName}</h1>
          <p className="text-xl text-gray-300 mb-6 font-display">{title}</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              {email}
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {phone}
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {location}
            </div>
          </div>
        </div>
      </header>

      <div className="p-8">
        {/* Summary */}
        <section className="mb-8 border-b border-gray-200 pb-8">
          <h2 className="text-2xl font-display font-bold text-gray-900 mb-4">Executive Summary</h2>
          <p className="text-gray-700 leading-relaxed">{summary}</p>
        </section>

        {/* Experience */}
        <section className="mb-8">
          <h2 className="text-2xl font-display font-bold text-gray-900 mb-6">Professional Experience</h2>
          {experience.map((job, index) => (
            <div key={index} className="mb-8">
              <div className="grid grid-cols-[1fr,auto] gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{job.title}</h3>
                  <p className="text-gray-600 font-display">{job.company}</p>
                </div>
                <div className="text-right">
                  <div className="text-gray-900 font-medium">{job.startDate} - {job.endDate}</div>
                  <div className="text-gray-600">{job.location}</div>
                </div>
              </div>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                {job.responsibilities.map((resp, idx) => (
                  <li key={idx} className="leading-relaxed">{resp}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* Education */}
        <section className="mb-8">
          <h2 className="text-2xl font-display font-bold text-gray-900 mb-6">Education</h2>
          {education.map((edu, index) => (
            <div key={index} className="mb-6 grid grid-cols-[1fr,auto] gap-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-900">{edu.degree}</h3>
                <p className="text-gray-600 font-display">{edu.school}</p>
              </div>
              <div className="text-right text-gray-900">
                {edu.startDate} - {edu.endDate}
              </div>
            </div>
          ))}
        </section>

        {/* Skills */}
        <section>
          <h2 className="text-2xl font-display font-bold text-gray-900 mb-6">Core Competencies</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="px-4 py-2 bg-gray-50 text-gray-800 rounded border border-gray-200 text-center font-medium"
              >
                {skill}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Executive;
