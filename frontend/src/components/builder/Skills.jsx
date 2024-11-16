import { useState } from 'react';

const Skills = ({ data, onUpdate, onNext, onBack }) => {
  const [skills, setSkills] = useState(data || []);
  const [currentSkill, setCurrentSkill] = useState('');
  const [error, setError] = useState('');
  const MAX_SKILLS = 15;
  const MAX_SKILL_LENGTH = 30;
  const [showSuccess, setShowSuccess] = useState(false);

  const skillCategories = {
    technical: [
      'JavaScript', 'React', 'Node.js', 'Python', 'Java', 'HTML', 'CSS', 'SQL', 'Git',
      'TypeScript', 'Angular', 'Vue.js', 'PHP', 'Ruby', 'C++', 'C#', 'AWS', 'Docker'
    ],
    soft: [
      'Communication', 'Leadership', 'Problem Solving', 'Team Collaboration', 'Time Management',
      'Adaptability', 'Critical Thinking', 'Creativity', 'Project Management'
    ],
    languages: [
      'English', 'Spanish', 'French', 'German', 'Chinese', 'Japanese', 'Korean', 'Arabic'
    ]
  };

  const handleAddSkill = (e) => {
    e.preventDefault();
    if (!currentSkill.trim()) {
      setError('Please enter a skill');
      return;
    }
    if (currentSkill.length > MAX_SKILL_LENGTH) {
      setError(`Skill name must be ${MAX_SKILL_LENGTH} characters or less`);
      return;
    }
    if (skills.includes(currentSkill.trim())) {
      setError('This skill has already been added');
      return;
    }
    if (skills.length >= MAX_SKILLS) {
      setError(`You can add up to ${MAX_SKILLS} skills`);
      return;
    }
    setSkills((prev) => [...prev, currentSkill.trim()]);
    setCurrentSkill('');
    setError('');
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
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
                  className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800 dark:bg-purple-700 dark:text-purple-100"
                >
                  {skill}
                  <button
                    type="button"
                    onClick={() => removeSkill(skill)}
                    className="ml-2 inline-flex items-center justify-center w-4 h-4 rounded-full hover:bg-purple-200 dark:hover:bg-purple-600"
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
              Add a Skill ({skills.length}/{MAX_SKILLS})
            </label>
            <div className="mt-1 flex rounded-md shadow-sm">
              <input
                type="text"
                name="skill"
                id="skill"
                value={currentSkill}
                onChange={(e) => setCurrentSkill(e.target.value)}
                maxLength={MAX_SKILL_LENGTH}
                className={`block w-full rounded-md shadow-sm ${
                  error ? 'border-red-300' : 'border-gray-300'
                } focus:border-purple-500 focus:ring-purple-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white`}
                placeholder="Enter a skill..."
              />
              <button
                type="button"
                onClick={handleAddSkill}
                disabled={skills.length >= MAX_SKILLS}
                className={`ml-3 inline-flex justify-center rounded-md border border-transparent py-2 px-4 text-sm font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 ${
                  skills.length >= MAX_SKILLS
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-purple-600 hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600'
                }`}
              >
                Add
              </button>
            </div>
            {error && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{error}</p>}
          </div>

          {Object.entries(skillCategories).map(([category, categorySkills]) => (
            <div key={category} className="space-y-2">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 capitalize">
                {category} Skills
              </label>
              <div className="mt-2 flex flex-wrap gap-2">
                {categorySkills.map((skill) => (
                  <button
                    key={skill}
                    type="button"
                    onClick={() => addSuggestedSkill(skill)}
                    disabled={skills.includes(skill) || skills.length >= MAX_SKILLS}
                    className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                      skills.includes(skill)
                        ? 'bg-gray-100 text-gray-400 cursor-not-allowed dark:bg-gray-600 dark:text-gray-400'
                        : skills.length >= MAX_SKILLS
                        ? 'bg-gray-100 text-gray-400 cursor-not-allowed dark:bg-gray-600 dark:text-gray-400'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600'
                    }`}
                  >
                    {skill}
                    {!skills.includes(skill) && skills.length < MAX_SKILLS && (
                      <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                      </svg>
                    )}
                  </button>
                ))}
              </div>
            </div>
          ))}

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
                    Skill added successfully!
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="flex justify-between pt-6">
        <button
          type="button"
          onClick={onBack}
          className="inline-flex justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600 dark:hover:bg-gray-600"
        >
          Back
        </button>
        <button
          type="submit"
          className="inline-flex justify-center rounded-md border border-transparent bg-purple-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 dark:bg-purple-500 dark:hover:bg-purple-600"
        >
          Next
        </button>
      </div>
    </form>
  );
};
export default Skills;