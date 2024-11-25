import { Link } from 'react-router-dom';

const Templates = () => {
  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gray-900 dark:text-white">Professional </span>
            <span className="relative">
              <span className="relative z-10 bg-gradient-to-r from-purple-600 to-purple-500 dark:from-purple-400 dark:to-purple-300 text-transparent bg-clip-text">Resume Templates</span>
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-purple-600 to-purple-500 dark:from-purple-400 dark:to-purple-300"></span>
            </span>
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            Choose from our collection of professionally designed templates to create your perfect resume
          </p>
        </div>

        {/* Templates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {templates.map((template, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-gray-800 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 hover:border-purple-500 dark:hover:border-purple-400 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              {/* Template Preview */}
              <div className="relative aspect-[3/4] overflow-hidden">
                <img
                  src={template.image}
                  alt={template.name}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Link
                    to={`/builder?template=${template.id}`}
                    className="bg-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-500 transition-colors shadow-lg hover:shadow-purple-500/25"
                  >
                    Use This Template
                  </Link>
                </div>
              </div>
              {/* Template Info */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {template.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {template.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {template.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-xs px-3 py-1 rounded-full bg-purple-50 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 border border-purple-100 dark:border-purple-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Template data
const templates = [
  {
    id: 'modern-professional',
    name: 'Modern Professional',
    description: 'Clean and professional design perfect for any industry',
    image: 'https://placehold.co/600x800/9333ea/ffffff?text=Modern+Professional',
    tags: ['Professional', 'Clean', 'Modern'],
  },
  {
    id: 'creative-designer',
    name: 'Creative Designer',
    description: 'Stand out with this creative and bold design',
    image: 'https://placehold.co/600x800/9333ea/ffffff?text=Creative+Designer',
    tags: ['Creative', 'Bold', 'Designer'],
  },
  {
    id: 'executive-elite',
    name: 'Executive Elite',
    description: 'Sophisticated design for senior professionals',
    image: 'https://placehold.co/600x800/9333ea/ffffff?text=Executive+Elite',
    tags: ['Executive', 'Corporate', 'Professional'],
  },
  {
    id: 'tech-innovator',
    name: 'Tech Innovator',
    description: 'Modern template perfect for tech professionals',
    image: 'https://placehold.co/600x800/9333ea/ffffff?text=Tech+Innovator',
    tags: ['Tech', 'Modern', 'Innovative'],
  },
  {
    id: 'minimal-classic',
    name: 'Minimal Classic',
    description: 'Simple and elegant design that never goes out of style',
    image: 'https://placehold.co/600x800/9333ea/ffffff?text=Minimal+Classic',
    tags: ['Minimal', 'Classic', 'Elegant'],
  },
];

export default Templates;
