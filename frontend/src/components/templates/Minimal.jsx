const Minimal = ({ data }) => {
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
    <div className="w-full max-w-2xl mx-auto bg-white p-8 shadow-lg">
      {/* Header */}
      <header className="border-b border-gray-200 pb-4 mb-8">
        <h1 className="text-3xl font-light text-gray-900 mb-1">{fullName}</h1>
        <p className="text-lg text-gray-600 mb-4">{title}</p>
        <div className="flex flex-wrap gap-4 text-sm text-gray-600">
          <span>{email}</span>
          <span>{phone}</span>
          <span>{location}</span>
        </div>
      </header>

      {/* Summary */}
      <section className="mb-8">
        <p className="text-gray-700 leading-relaxed">{summary}</p>
      </section>

      {/* Experience */}
      <section className="mb-8">
        <h2 className="text-lg uppercase tracking-wider text-gray-900 mb-4">Experience</h2>
        {experience.map((job, index) => (
          <div key={index} className="mb-6">
            <div className="grid grid-cols-[1fr,auto] gap-4 mb-2">
              <div>
                <h3 className="font-medium text-gray-900">{job.title}</h3>
                <p className="text-gray-600">{job.company}</p>
              </div>
              <div className="text-right text-gray-500 text-sm">
                {job.startDate} - {job.endDate}
                <div>{job.location}</div>
              </div>
            </div>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              {job.responsibilities.map((resp, idx) => (
                <li key={idx}>{resp}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* Education */}
      <section className="mb-8">
        <h2 className="text-lg uppercase tracking-wider text-gray-900 mb-4">Education</h2>
        {education.map((edu, index) => (
          <div key={index} className="mb-4 grid grid-cols-[1fr,auto] gap-4">
            <div>
              <h3 className="font-medium text-gray-900">{edu.degree}</h3>
              <p className="text-gray-600">{edu.school}</p>
            </div>
            <div className="text-right text-gray-500 text-sm">
              {edu.startDate} - {edu.endDate}
            </div>
          </div>
        ))}
      </section>

      {/* Skills */}
      <section>
        <h2 className="text-lg uppercase tracking-wider text-gray-900 mb-4">Skills</h2>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="px-3 py-1 border border-gray-300 text-gray-700 rounded text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Minimal;
