import { marked } from 'marked';
import DOMPurify from 'dompurify';

export const parseTemplate = async (templateName, userData) => {
  try {
    // Fetch the markdown template
    const response = await fetch(`/src/templates/${templateName}.md`);
    let template = await response.text();

    // Replace all placeholders with user data
    Object.entries(userData).forEach(([key, value]) => {
      const placeholder = `[${key}]`;
      template = template.replaceAll(placeholder, value);
    });

    // Convert markdown to HTML
    const html = marked(template);

    // Sanitize HTML to prevent XSS
    const sanitizedHtml = DOMPurify.sanitize(html);

    return sanitizedHtml;
  } catch (error) {
    console.error('Error parsing template:', error);
    throw error;
  }
};

// Custom styles for different templates
export const templateStyles = {
  'modern-professional': {
    heading: 'text-2xl font-bold text-purple-600 mb-4',
    subheading: 'text-xl font-semibold text-gray-800 mb-2',
    text: 'text-gray-600',
    list: 'list-disc ml-6 space-y-2',
    contact: 'text-gray-700 flex items-center gap-4 mb-6',
    section: 'mb-8',
  },
  'minimal-classic': {
    heading: 'text-3xl font-light text-gray-900 mb-4',
    subheading: 'text-lg font-medium text-gray-800 mb-2',
    text: 'text-gray-600',
    list: 'list-none space-y-2',
    contact: 'text-gray-700 flex flex-wrap gap-4 mb-6',
    section: 'mb-6',
  },
  // Add more template styles as needed
};
