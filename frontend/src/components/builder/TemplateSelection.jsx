import { useState, useRef } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import Modern from '../templates/Modern';
import Creative from '../templates/Creative';
import Minimal from '../templates/Minimal';
import Executive from '../templates/Executive';
import Professional from '../templates/Professional';

const TemplateSelection = ({ data, selectedTemplate, onUpdate, onBack }) => {
  const [selected, setSelected] = useState(selectedTemplate);
  const [previewData] = useState(data);
  const [downloadFormat, setDownloadFormat] = useState('pdf');
  const [isDownloading, setIsDownloading] = useState(false);
  const resumeRef = useRef(null);

  const templates = [
    {
      id: 'professional',
      name: 'Professional',
      component: Professional,
      description: 'Clean and organized layout with modern timeline features',
    },
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

  const downloadAsPNG = async () => {
    try {
      setIsDownloading(true);
      const element = resumeRef.current;
      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        logging: false,
      });

      // Create a link element and trigger download
      const link = document.createElement('a');
      link.download = `${data.personalInfo?.fullName || 'resume'}_${selected}.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();
    } catch (error) {
      console.error('Error generating PNG:', error);
    } finally {
      setIsDownloading(false);
    }
  };

  const downloadAsPDF = async () => {
    try {
      setIsDownloading(true);
      const element = resumeRef.current;
      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        logging: false,
      });
      const imgData = canvas.toDataURL('image/png');

      // Calculate dimensions to fit on A4
      const imgWidth = 210; // A4 width in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      
      const pdf = new jsPDF('p', 'mm', 'a4');
      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
      pdf.save(`${data.personalInfo?.fullName || 'resume'}_${selected}.pdf`);
    } catch (error) {
      console.error('Error generating PDF:', error);
    } finally {
      setIsDownloading(false);
    }
  };

  const handleDownload = async () => {
    if (downloadFormat === 'png') {
      await downloadAsPNG();
    } else {
      await downloadAsPDF();
    }
  };

  const SelectedTemplate = templates.find(t => t.id === selected)?.component || Modern;

  return (
    <div className="space-y-8">
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

          {/* Download Options */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">Download Options</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Select Format
                </label>
                <select
                  value={downloadFormat}
                  onChange={(e) => setDownloadFormat(e.target.value)}
                  className="block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:text-white sm:text-sm"
                >
                  <option value="pdf">PDF Format</option>
                  <option value="png">PNG Format</option>
                </select>
              </div>
              <button
                onClick={handleDownload}
                disabled={isDownloading}
                className={`w-full px-4 py-2 text-sm font-medium rounded-md text-white ${
                  isDownloading
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500'
                }`}
              >
                {isDownloading ? 'Downloading...' : 'Download Resume'}
              </button>
            </div>
          </div>
        </div>

        {/* Template Preview */}
        <div className="mt-8">
          <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-4">Preview</h3>
          <div ref={resumeRef} className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
            <SelectedTemplate data={previewData} />
          </div>
        </div>
      </div>

      <div className="flex justify-between">
        <button
          onClick={onBack}
          className="px-6 py-2.5 text-sm font-medium rounded-lg text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 transition-all duration-300"
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default TemplateSelection;
