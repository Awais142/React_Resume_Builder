const Modern = ({ data }) => {
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
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">{fullName}</h1>
        <p className="text-xl text-primary mb-4">{title}</p>
        <div className="flex justify-center items-center gap-4 text-gray-600">
          <span>{email}</span>
          <span>•</span>
          <span>{phone}</span>
          <span>•</span>
          <span>{location}</span>
        </div>
      </header>

      {/* Summary */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-900 border-b-2 border-primary pb-2 mb-3">
          Professional Summary
        </h2>
        <p className="text-gray-700 leading-relaxed">{summary}</p>
      </section>

      {/* Experience */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-900 border-b-2 border-primary pb-2 mb-3">
          Work Experience
        </h2>
        {experience.map((job, index) => (
          <div key={index} className="mb-4">
            <h3 className="text-lg font-semibold text-gray-900">{job.title}</h3>
            <div className="text-primary mb-1">
              {job.company} • {job.location}
            </div>
            <div className="text-gray-600 text-sm mb-2">
              {job.startDate} - {job.endDate}
            </div>
            <ul className="list-disc list-inside text-gray-700">
              {job.responsibilities.map((resp, idx) => (
                <li key={idx}>{resp}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* Education */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-900 border-b-2 border-primary pb-2 mb-3">
          Education
        </h2>
        {education.map((edu, index) => (
          <div key={index} className="mb-4">
            <h3 className="text-lg font-semibold text-gray-900">{edu.degree}</h3>
            <div className="text-primary mb-1">{edu.school}</div>
            <div className="text-gray-600 text-sm">
              {edu.startDate} - {edu.endDate}
            </div>
          </div>
        ))}
      </section>

      {/* Skills */}
      <section>
        <h2 className="text-xl font-semibold text-gray-900 border-b-2 border-primary pb-2 mb-3">
          Skills
        </h2>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Modern;
