import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="bg-light-100 dark:bg-dark-900 transition-colors duration-200">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white dark:bg-gray-900">
        {/* Background decoration */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-[100rem] h-full">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-50 via-purple-100 to-purple-50 dark:from-purple-950/20 dark:via-purple-900/20 dark:to-purple-950/20 [mask-image:radial-gradient(farthest-side_at_center,white,transparent)]"></div>
          </div>
          <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[40rem] h-[40rem] rounded-full bg-gradient-to-r from-purple-500/40 to-blue-500/40 blur-3xl opacity-20 dark:opacity-10"></div>
          <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[40rem] h-[40rem] rounded-full bg-gradient-to-r from-purple-500/40 to-blue-500/40 blur-3xl opacity-20 dark:opacity-10"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32 md:pt-32 md:pb-40">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
              <span className="text-gray-900 dark:text-white">Create Your Professional Resume with </span>
              <span className="relative">
                <span className="relative z-10 bg-gradient-to-r from-purple-600 to-purple-500 dark:from-purple-400 dark:to-purple-300 text-transparent bg-clip-text">AI Power</span>
                <span className="absolute -bottom-1.5 left-0 w-full h-0.5 bg-gradient-to-r from-purple-600 to-purple-500 dark:from-purple-400 dark:to-purple-300"></span>
              </span>
            </h1>
            
            <p className="mt-8 text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Build stunning resumes in minutes with our AI-powered resume builder. Stand out from the crowd and land your dream job with professionally designed templates.
            </p>

            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/builder"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl bg-purple-600 text-white font-semibold shadow-lg shadow-purple-500/25 hover:bg-purple-500 transition-all duration-200 hover:scale-105 hover:shadow-purple-500/30"
              >
                <span>Build Your Resume</span>
                <svg className="ml-2 -mr-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link
                to="/templates"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl text-gray-700 dark:text-gray-200 font-semibold hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200"
              >
                <span>View Templates</span>
                <svg className="ml-2 -mr-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Stats Section */}
            <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div className="p-6 rounded-2xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700">
                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">10k+</div>
                <div className="mt-2 text-gray-600 dark:text-gray-300">Resumes Created</div>
              </div>
              <div className="p-6 rounded-2xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700">
                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">98%</div>
                <div className="mt-2 text-gray-600 dark:text-gray-300">Success Rate</div>
              </div>
              <div className="p-6 rounded-2xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700">
                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">24/7</div>
                <div className="mt-2 text-gray-600 dark:text-gray-300">AI Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Resume Builder Section */}
      <section className="relative py-24 bg-gray-50 dark:bg-gray-800/50">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(139,92,246,0.05)_50%,transparent_75%)] bg-[length:20px_20px]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
              Why Choose Our
              <span className="relative ml-2 inline-block">
                <span className="relative z-10 bg-gradient-to-r from-purple-600 to-purple-500 dark:from-purple-400 dark:to-purple-300 text-transparent bg-clip-text">Resume Builder</span>
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-purple-600 to-purple-500 dark:from-purple-400 dark:to-purple-300"></span>
              </span>
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Stand out from the crowd with our powerful features and professional templates
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* AI-Powered */}
            <div className="group relative p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 dark:border-gray-700">
              <div className="absolute -top-4 left-8 w-8 h-8 bg-purple-600 text-white rounded-lg flex items-center justify-center shadow-lg shadow-purple-500/30">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-4">AI-Powered Writing</h3>
              <p className="mt-4 text-gray-600 dark:text-gray-300">
                Our AI assistant helps you write compelling content and suggests improvements to make your resume stand out.
              </p>
              <div className="mt-6 flex items-center text-purple-600 dark:text-purple-400 font-medium">
                Learn more
                <svg className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>

            {/* Professional Templates */}
            <div className="group relative p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 dark:border-gray-700">
              <div className="absolute -top-4 left-8 w-8 h-8 bg-purple-600 text-white rounded-lg flex items-center justify-center shadow-lg shadow-purple-500/30">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-4">Professional Templates</h3>
              <p className="mt-4 text-gray-600 dark:text-gray-300">
                Choose from our collection of ATS-friendly templates designed by HR professionals and career experts.
              </p>
              <div className="mt-6 flex items-center text-purple-600 dark:text-purple-400 font-medium">
                View templates
                <svg className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>

            {/* Easy Customization */}
            <div className="group relative p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 dark:border-gray-700">
              <div className="absolute -top-4 left-8 w-8 h-8 bg-purple-600 text-white rounded-lg flex items-center justify-center shadow-lg shadow-purple-500/30">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-4">Easy Customization</h3>
              <p className="mt-4 text-gray-600 dark:text-gray-300">
                Customize every aspect of your resume with our intuitive editor. Change colors, fonts, and layouts with ease.
              </p>
              <div className="mt-6 flex items-center text-purple-600 dark:text-purple-400 font-medium">
                Try it now
                <svg className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>

          {/* Additional Features List */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-6 h-6 text-purple-600 dark:text-purple-400 mt-1">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-900 dark:text-white">Real-time Preview</h4>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">
                    See changes instantly as you edit your resume
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-6 h-6 text-purple-600 dark:text-purple-400 mt-1">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-900 dark:text-white">Multiple Export Options</h4>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">
                    Download your resume in PDF, Word, or plain text format
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-6 h-6 text-purple-600 dark:text-purple-400 mt-1">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-900 dark:text-white">ATS Optimization</h4>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">
                    Ensure your resume passes through ATS systems
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-6 h-6 text-purple-600 dark:text-purple-400 mt-1">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-900 dark:text-white">Privacy Focused</h4>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">
                    Your data is encrypted and never shared with third parties
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-white dark:bg-gray-900 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold">
              <span className="text-gray-900 dark:text-white">How It </span>
              <span className="relative">
                <span className="relative z-10 bg-gradient-to-r from-purple-600 to-purple-500 dark:from-purple-400 dark:to-purple-300 text-transparent bg-clip-text">Works</span>
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-purple-600 to-purple-500 dark:from-purple-400 dark:to-purple-300"></span>
              </span>
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Create your professional resume in just three simple steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="group relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
              <div className="absolute -top-4 left-8 w-8 h-8 bg-purple-600 text-white rounded-lg flex items-center justify-center shadow-lg shadow-purple-500/30">
                1
              </div>
              <div className="flex flex-col h-full">
                <div className="mb-6 text-purple-600 dark:text-purple-400">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Choose Your Template</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 flex-grow">
                  Select from our collection of professionally designed, ATS-friendly templates that match your style and industry.
                </p>
                <Link to="/templates" className="inline-flex items-center text-purple-600 dark:text-purple-400 font-medium group-hover:text-purple-500">
                  Browse Templates
                  <svg className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Step 2 */}
            <div className="group relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
              <div className="absolute -top-4 left-8 w-8 h-8 bg-purple-600 text-white rounded-lg flex items-center justify-center shadow-lg shadow-purple-500/30">
                2
              </div>
              <div className="flex flex-col h-full">
                <div className="mb-6 text-purple-600 dark:text-purple-400">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Fill Your Information</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 flex-grow">
                  Input your details with our AI-powered form that provides smart suggestions to make your content stand out.
                </p>
                <button className="inline-flex items-center text-purple-600 dark:text-purple-400 font-medium group-hover:text-purple-500">
                  Learn More
                  <svg className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Step 3 */}
            <div className="group relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
              <div className="absolute -top-4 left-8 w-8 h-8 bg-purple-600 text-white rounded-lg flex items-center justify-center shadow-lg shadow-purple-500/30">
                3
              </div>
              <div className="flex flex-col h-full">
                <div className="mb-6 text-purple-600 dark:text-purple-400">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Preview & Download</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 flex-grow">
                  Review your resume in real-time, make adjustments, and download it in your preferred format to start applying.
                </p>
                <Link to="/builder" className="inline-flex items-center text-purple-600 dark:text-purple-400 font-medium group-hover:text-purple-500">
                  Start Building
                  <svg className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <Link
              to="/builder"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-purple-600 rounded-xl shadow-lg shadow-purple-500/25 hover:bg-purple-500 transition-all duration-200 hover:scale-105 hover:shadow-purple-500/30"
            >
              Create Your Resume Now
              <svg className="ml-2 -mr-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Ready to Build Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950/30 dark:to-purple-900/30"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM5MzM0ZWEiIGZpbGwtb3BhY2l0eT0iMC4wNCI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyOHYySDI0di0yaDEyek0zNiAyMnYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-50"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-8">
              <span className="text-gray-900 dark:text-white">Ready to Build Your </span>
              <span className="relative">
                <span className="relative z-10 bg-gradient-to-r from-purple-600 to-purple-500 dark:from-purple-400 dark:to-purple-300 text-transparent bg-clip-text">Professional Resume?</span>
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-purple-600 to-purple-500 dark:from-purple-400 dark:to-purple-300"></span>
              </span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
              Join thousands of job seekers who have successfully landed their dream jobs using our AI-powered resume builder.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/builder"
                className="w-full sm:w-auto px-8 py-4 text-lg font-medium text-white bg-purple-600 rounded-lg shadow-lg hover:bg-purple-500 transition-colors inline-block"
              >
                Start Building Now
              </Link>
              <Link
                to="/templates"
                className="w-full sm:w-auto px-8 py-4 text-lg font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors inline-block border border-gray-200 dark:border-gray-700"
              >
                View Templates
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Resume Builder</h3>
              <p className="text-gray-600 dark:text-gray-400">Create professional resumes with AI-powered tools.</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/templates" className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400">
                    Templates
                  </Link>
                </li>
                <li>
                  <Link to="/builder" className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400">
                    Resume Builder
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Connect</h3>
              <a 
                href="https://github.com/Awais142" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
                GitHub
              </a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800 text-center">
            <p className="text-gray-600 dark:text-gray-400">
              Made with{' '}
              <span className="text-red-500">❤</span>
              {' '}by{' '}
              <a 
                href="https://github.com/Awais142" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-purple-600 dark:text-purple-400 hover:text-purple-500 font-medium"
              >
                Awais
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
