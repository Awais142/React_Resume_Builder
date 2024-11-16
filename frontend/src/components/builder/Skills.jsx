import { useState } from 'react';

const Skills = ({ data, onUpdate, onNext, onBack }) => {
  const [skills, setSkills] = useState(data || []);
  const [currentSkill, setCurrentSkill] = useState('');
  const [error, setError] = useState('');

  const handleAddSkill = (e) => {
    e.preventDefault();
    if (!currentSkill.trim()) {
      setError('Please enter a skill');
      return;
    }
    if (skills.includes(currentSkill.trim())) {
      setError('This skill has already been added');
      return;
    }
    setSkills((prev) => [...prev, currentSkill.trim()]);
    setCurrentSkill('');
    setError('');
  };

  const removeSkill = (skillToRemove) => {
    setSkills((prev) => prev.filter((skill) => skill !== skillToRemove));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (skills.length === 0) {
      setError('Please add at least one skill');
      return;
    }
    onUpdate(skills);
    onNext();
  };

  const skillSuggestions = [
    'JavaScript', 'React', 'Node.js', 'Python', 'Java', 'HTML', 'CSS', 'SQL', 'Git',
    'Agile', 'Project Management', 'Communication', 'Leadership', 'Problem Solving', 'Team Collaboration',
  ];

  const addSuggestedSkill = (skill) => {
    if (!skills.includes(skill)) {
      setSkills((prev) => [...prev, skill]);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 space-y-6">
        <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Skills</h2>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            Add your professional skills. These will help employers understand your capabilities.
          </p>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">Your Skills</label>
            <div className="mt-2 flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-700 dark:text-blue-100"
                >
                  {skill}
                  <button
                    type="button"
                    onClick={() => removeSkill(skill)}
                    className="ml-2 inline-flex items-center justify-center w-4 h-4 rounded-full hover:bg-blue-200 dark:hover:bg-blue-600"
                  >
                    <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </span>
              ))}
            </div>
          </div>

          <div>
            <label htmlFor="skill" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
              Add a Skill
            </label>
            <div className="mt-1 flex rounded-md shadow-sm">
              <input
                type="text"
                name="skill"
                id="skill"
                value={currentSkill}
                onChange={(e) => setCurrentSkill(e.target.value)}
                className={`block w-full rounded-md shadow-sm ${
                  error ? 'border-red-300' : 'border-gray-300'
                } focus:border-blue-500 focus:ring-blue-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white`}
                placeholder="Enter a skill..."
              />
              <button
                type="button"
                onClick={handleAddSkill}
                className="ml-3 inline-flex justify-center rounded-md border border-transparent bg-blue-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:bg-blue-500 dark:hover:bg-blue-600"
              >
                Add
              </button>
            </div>
            {error && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{error}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">Common Skills</label>
            <div className="mt-2 flex flex-wrap gap-2">
              {skillSuggestions.map((skill) => (
                <button
                  key={skill}
                  type="button"
                  onClick={() => addSuggestedSkill(skill)}
                  disabled={skills.includes(skill)}
                  className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                    skills.includes(skill)
                      ? 'bg-gray-100 text-gray-400 cursor-not-allowed dark:bg-gray-600 dark:text-gray-400'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600'
                  }`}
                >
                  {skill}
                  {!skills.includes(skill) && (
                    <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between pt-6">
        <button
          type="button"
          onClick={onBack}
          className="inline-flex justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600 dark:hover:bg-gray-600"
        >
          Back
        </button>
        <button
          type="submit"
          className="inline-flex justify-center rounded-md border border-transparent bg-blue-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:bg-blue-500 dark:hover:bg-blue-600"
        >
          Next
        </button>
      </div>
    </form>
  );
};
export default Skills;