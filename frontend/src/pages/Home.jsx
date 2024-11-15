import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-dark-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-dark-800 to-dark-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-primary">
              Create Professional Resumes with AI
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-dark-100 max-w-3xl mx-auto">
              Build stunning resumes in minutes with our AI-powered resume builder. Stand out from the crowd and land your dream job.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/builder"
                className="bg-primary text-dark-50 px-8 py-3 rounded-lg font-semibold hover:bg-secondary transition-colors"
              >
                Build Your Resume
              </Link>
              <Link
                to="/templates"
                className="border-2 border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary hover:text-dark-50 transition-colors"
              >
                View Templates
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
            Why Choose Our Resume Builder?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-dark-900 p-6 rounded-lg border border-dark-700 hover:border-primary transition-colors">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-semibold mb-2 text-dark-50">AI-Powered Assistance</h3>
              <p className="text-dark-300">
                Get intelligent suggestions for content and formatting to make your resume stand out.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-dark-900 p-6 rounded-lg border border-dark-700 hover:border-primary transition-colors">
              <div className="text-4xl mb-4">📝</div>
              <h3 className="text-xl font-semibold mb-2 text-dark-50">Professional Templates</h3>
              <p className="text-dark-300">
                Choose from a wide range of ATS-friendly templates designed by experts.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-dark-900 p-6 rounded-lg border border-dark-700 hover:border-primary transition-colors">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-2 text-dark-50">Easy to Use</h3>
              <p className="text-dark-300">
                Create a professional resume in minutes with our intuitive interface.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">1️⃣</div>
              <h3 className="text-xl font-semibold mb-2 text-dark-50">Choose a Template</h3>
              <p className="text-dark-300">
                Select from our collection of professional templates.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">2️⃣</div>
              <h3 className="text-xl font-semibold mb-2 text-dark-50">Fill Your Details</h3>
              <p className="text-dark-300">
                Input your information with AI-powered suggestions.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">3️⃣</div>
              <h3 className="text-xl font-semibold mb-2 text-dark-50">Download & Share</h3>
              <p className="text-dark-300">
                Export your resume in multiple formats and start applying.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-dark-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
            Ready to Build Your Professional Resume?
          </h2>
          <p className="text-xl mb-8 text-dark-200 max-w-2xl mx-auto">
            Join thousands of job seekers who have successfully landed their dream jobs using our platform.
          </p>
          <Link
            to="/builder"
            className="bg-primary text-dark-50 px-8 py-3 rounded-lg font-semibold hover:bg-secondary transition-colors inline-block"
          >
            Get Started Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
