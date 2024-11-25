import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();
  const location = useLocation();

  return (
    <nav className="bg-light-50 dark:bg-dark-800 border-b border-light-300 dark:border-dark-700 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link to="/" className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                ResumeAI
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link
                  to="/"
                  className={`${
                    location.pathname === '/'
                      ? 'bg-purple-600 text-white'
                      : 'text-light-700 dark:text-dark-100 hover:bg-purple-500 hover:text-white'
                  } px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200`}
                >
                  Home
                </Link>
                <Link
                  to="/templates"
                  className={`${
                    location.pathname === '/templates'
                      ? 'bg-purple-600 text-white'
                      : 'text-light-700 dark:text-dark-100 hover:bg-purple-500 hover:text-white'
                  } px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200`}
                >
                  Templates
                </Link>
                <Link
                  to="/builder"
                  className={`${
                    location.pathname === '/builder'
                      ? 'bg-purple-600 text-white'
                      : 'text-light-700 dark:text-dark-100 hover:bg-purple-500 hover:text-white'
                  } px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200`}
                >
                  Builder
                </Link>
                <Link
                  to="/ai-assistant"
                  className={`${
                    location.pathname === '/ai-assistant'
                      ? 'bg-purple-600 text-white'
                      : 'text-light-700 dark:text-dark-100 hover:bg-purple-500 hover:text-white'
                  } px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200`}
                >
                  AI Assistant
                </Link>
              </div>
            </div>
          </div>

          {/* Theme Toggle Button */}
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <button
                onClick={toggleTheme}
                className="p-2 text-light-700 dark:text-dark-100 hover:bg-purple-500 hover:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
              >
                {isDark ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg bg-light-200 dark:bg-dark-700 text-light-700 dark:text-dark-100 hover:bg-light-300 dark:hover:bg-dark-600 transition-colors"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-light-50 dark:bg-dark-800 border-t border-light-300 dark:border-dark-700">
            <Link to="/" className={`${
              location.pathname === '/'
                ? 'bg-purple-600 text-white'
                : 'text-light-700 dark:text-dark-100 hover:bg-purple-500 hover:text-white'
            } block px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200`}>
              Home
            </Link>
            <Link to="/templates" className={`${
              location.pathname === '/templates'
                ? 'bg-purple-600 text-white'
                : 'text-light-700 dark:text-dark-100 hover:bg-purple-500 hover:text-white'
            } block px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200`}>
              Templates
            </Link>
            <Link to="/builder" className={`${
              location.pathname === '/builder'
                ? 'bg-purple-600 text-white'
                : 'text-light-700 dark:text-dark-100 hover:bg-purple-500 hover:text-white'
            } block px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200`}>
              Builder
            </Link>
            <Link to="/ai-assistant" className={`${
              location.pathname === '/ai-assistant'
                ? 'bg-purple-600 text-white'
                : 'text-light-700 dark:text-dark-100 hover:bg-purple-500 hover:text-white'
            } block px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200`}>
              AI Assistant
            </Link>
            
            {/* Mobile Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="w-full text-left px-3 py-2 rounded-md text-light-700 dark:text-dark-100 hover:bg-purple-500 hover:text-white flex items-center"
            >
              <span className="mr-2">{isDark ? 'Light Mode' : 'Dark Mode'}</span>
              {isDark ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
