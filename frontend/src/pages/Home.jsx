import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="bg-light-100 dark:bg-dark-900 transition-colors duration-200">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-light-900 dark:text-dark-50 mb-8">
              Create Professional Resumes with <span className="text-primary">AI</span>
            </h1>
            <p className="text-xl text-light-700 dark:text-dark-200 mb-12 max-w-3xl mx-auto">
              Build stunning resumes in minutes with our AI-powered resume builder. Stand out from the crowd and land your dream job.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/builder"
                className="px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-medium"
              >
                Build Your Resume
              </Link>
              <Link
                to="/templates"
                className="px-8 py-3 bg-light-200 dark:bg-dark-700 text-light-900 dark:text-dark-50 rounded-lg hover:bg-light-300 dark:hover:bg-dark-600 transition-colors font-medium"
              >
                View Templates
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-light-50 dark:bg-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-display font-bold text-light-900 dark:text-dark-50 text-center mb-12">
            Why Choose Our Resume Builder?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="p-6 rounded-lg bg-light-100 dark:bg-dark-700 border border-light-300 dark:border-dark-600">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-display font-semibold text-light-900 dark:text-dark-50 mb-2">
                AI-Powered Assistance
              </h3>
              <p className="text-light-700 dark:text-dark-200">
                Get intelligent suggestions for content and formatting to make your resume stand out.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-6 rounded-lg bg-light-100 dark:bg-dark-700 border border-light-300 dark:border-dark-600">
              <div className="text-4xl mb-4">📝</div>
              <h3 className="text-xl font-display font-semibold text-light-900 dark:text-dark-50 mb-2">
                Professional Templates
              </h3>
              <p className="text-light-700 dark:text-dark-200">
                Choose from a wide range of ATS-friendly templates designed by experts.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-6 rounded-lg bg-light-100 dark:bg-dark-700 border border-light-300 dark:border-dark-600">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-display font-semibold text-light-900 dark:text-dark-50 mb-2">
                Easy to Use
              </h3>
              <p className="text-light-700 dark:text-dark-200">
                Create a professional resume in minutes with our intuitive interface.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-light-100 dark:bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-display font-bold text-light-900 dark:text-dark-50 text-center mb-12">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">1️⃣</div>
              <h3 className="text-xl font-display font-semibold text-light-900 dark:text-dark-50 mb-2">
                Choose a Template
              </h3>
              <p className="text-light-700 dark:text-dark-200">
                Select from our collection of professional templates.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">2️⃣</div>
              <h3 className="text-xl font-display font-semibold text-light-900 dark:text-dark-50 mb-2">
                Fill Your Details
              </h3>
              <p className="text-light-700 dark:text-dark-200">
                Input your information with AI-powered suggestions.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">3️⃣</div>
              <h3 className="text-xl font-display font-semibold text-light-900 dark:text-dark-50 mb-2">
                Download & Share
              </h3>
              <p className="text-light-700 dark:text-dark-200">
                Export your resume in multiple formats and start applying.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-light-50 dark:bg-dark-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-display font-bold mb-6 text-light-900 dark:text-dark-50">
            Ready to Build Your Professional Resume?
          </h2>
          <p className="text-xl mb-8 text-light-700 dark:text-dark-200 max-w-2xl mx-auto">
            Join thousands of job seekers who have successfully landed their dream jobs using our platform.
          </p>
          <Link
            to="/builder"
            className="px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors inline-block font-medium"
          >
            Get Started Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
