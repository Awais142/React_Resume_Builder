import { useState } from 'react';
import Modern from '../templates/Modern';
import Creative from '../templates/Creative';
import Minimal from '../templates/Minimal';
import Executive from '../templates/Executive';

const TemplateSelection = ({ data, selectedTemplate, onUpdate, onBack }) => {
  const [selected, setSelected] = useState(selectedTemplate);
  const [previewData] = useState(data);

  const templates = [
    {
      id: 'modern',
      name: 'Modern',
      component: Modern,
      description: 'Clean and professional design with a modern touch',
    },
    {
      id: 'creative',
      name: 'Creative',
      component: Creative,
      description: 'Stand out with a unique and creative layout',
    },
    {
      id: 'minimal',
      name: 'Minimal',
      component: Minimal,
      description: 'Simple and elegant design focusing on content',
    },
    {
      id: 'executive',
      name: 'Executive',
      component: Executive,
      description: 'Sophisticated design for senior professionals',
    },
  ];

  const handleSelect = (templateId) => {
    setSelected(templateId);
    onUpdate(templateId);
  };

  return (
    <form className="space-y-8 max-h-[calc(100vh-12rem)] overflow-y-auto">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 space-y-6">
        <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Template Selection</h2>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            Choose a template that suits your style. You can preview each template before making a decision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8">
          {/* Template Selection */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">Choose a Template</h3>
            <div className="grid gap-4">
              {templates.map((template) => (
                <div
                  key={template.id}
                  className={`relative rounded-lg border p-4 cursor-pointer transition-all ${
                    selected === template.id
                      ? 'border-purple-500 ring-2 ring-purple-500'
                      : 'border-gray-300 dark:border-gray-600 hover:border-purple-300'
                  }`}
                  onClick={() => handleSelect(template.id)}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-base font-medium text-gray-900 dark:text-gray-100">{template.name}</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{template.description}</p>
                    </div>
                    <div
                      className={`w-5 h-5 rounded-full border-2 ${
                        selected === template.id
                          ? 'border-purple-500 bg-purple-500'
                          : 'border-gray-300 dark:border-gray-600'
                      }`}
                    >
                      {selected === template.id && (
                        <svg
                          className="w-full h-full text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Template Preview */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">Preview</h3>
            <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
              <div className="bg-white dark:bg-gray-900 p-4 transform scale-[1] origin-top">
                {templates.map(
                  (template) =>
                    template.id === selected && (
                      <template.component key={template.id} data={previewData} />
                    )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between pt-6">
        <button
          type="button"
          onClick={onBack}
          className="inline-flex justify-center rounded-md border border-gray-300 bg-white dark:bg-gray-700 py-2 px-4 text-sm font-medium text-gray-700 dark:text-gray-200 shadow-sm hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
        >
          Back
        </button>
        <button
          type="submit"
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
        >
          Generate Resume
          <svg className="ml-2 -mr-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
    </form>
  );
};

export default TemplateSelection;
