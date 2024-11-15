import { Link } from 'react-router-dom';

const Templates = () => {
  return (
    <div className="bg-light-100 dark:bg-dark-900 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-display font-bold text-light-900 dark:text-dark-50 mb-4">
            Professional Resume Templates
          </h1>
          <p className="text-light-700 dark:text-dark-200 text-lg max-w-2xl mx-auto">
            Choose from our collection of professionally designed templates to create your perfect resume
          </p>
        </div>

        {/* Templates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {templates.map((template, index) => (
            <div
              key={index}
              className="group bg-light-50 dark:bg-dark-800 rounded-lg overflow-hidden border border-light-300 dark:border-dark-700 hover:border-primary dark:hover:border-primary transition-all duration-300"
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
                    className="bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
                  >
                    Use This Template
                  </Link>
                </div>
              </div>
              {/* Template Info */}
              <div className="p-4">
                <h3 className="text-xl font-display font-semibold text-light-900 dark:text-dark-50 mb-2">
                  {template.name}
                </h3>
                <p className="text-light-700 dark:text-dark-200 text-sm">
                  {template.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {template.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-xs px-2 py-1 rounded-full bg-light-200 dark:bg-dark-700 text-light-700 dark:text-dark-200"
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
    image: 'https://placehold.co/600x800/2563eb/ffffff?text=Modern+Professional',
    tags: ['Professional', 'Clean', 'Modern'],
  },
  {
    id: 'creative-designer',
    name: 'Creative Designer',
    description: 'Stand out with this creative and bold design',
    image: 'https://placehold.co/600x800/2563eb/ffffff?text=Creative+Designer',
    tags: ['Creative', 'Bold', 'Designer'],
  },
  {
    id: 'executive-elite',
    name: 'Executive Elite',
    description: 'Sophisticated design for senior professionals',
    image: 'https://placehold.co/600x800/2563eb/ffffff?text=Executive+Elite',
    tags: ['Executive', 'Corporate', 'Professional'],
  },
  {
    id: 'tech-innovator',
    name: 'Tech Innovator',
    description: 'Modern template perfect for tech professionals',
    image: 'https://placehold.co/600x800/2563eb/ffffff?text=Tech+Innovator',
    tags: ['Tech', 'Modern', 'Innovative'],
  },
  {
    id: 'minimal-classic',
    name: 'Minimal Classic',
    description: 'Simple and elegant design that never goes out of style',
    image: 'https://placehold.co/600x800/2563eb/ffffff?text=Minimal+Classic',
    tags: ['Minimal', 'Classic', 'Clean'],
  },
  {
    id: 'startup-savvy',
    name: 'Startup Savvy',
    description: 'Dynamic design for startup and entrepreneurial professionals',
    image: 'https://placehold.co/600x800/2563eb/ffffff?text=Startup+Savvy',
    tags: ['Startup', 'Dynamic', 'Modern'],
  },
];

export default Templates;
