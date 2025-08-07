import React from 'react';
import { ArrowRight, Github, Linkedin, Twitter, Mail } from 'lucide-react';

interface HomeProps {
  setCurrentPage: (page: string) => void;
}

const Home: React.FC<HomeProps> = ({ setCurrentPage }) => {
  const handleScrollToPortfolio = () => {
    setCurrentPage('portfolio');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleContact = () => {
    setCurrentPage('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Mampheteng Koote
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
              A UI/UX Designer, Frontend Developer, and Certified Sign Language Interpreter
              passionate about accessible tech and inclusive design.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button
                onClick={handleScrollToPortfolio}
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 hover:scale-105 transition-transform duration-200 shadow-lg hover:shadow-xl"
              >
                View Portfolio <ArrowRight size={20} />
              </button>
              <button
                onClick={handleContact}
                className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-purple-600 hover:text-white transition-colors duration-200"
              >
                Contact Me
              </button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-6">
              <a
                href="#"
                className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow duration-200 hover:scale-110 transform"
              >
                <Linkedin size={24} className="text-blue-600" />
              </a>
              <a
                href="#"
                className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow duration-200 hover:scale-110 transform"
              >
                <Github size={24} className="text-gray-800" />
              </a>
              <a
                href="#"
                className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow duration-200 hover:scale-110 transform"
              >
                <Twitter size={24} className="text-blue-400" />
              </a>
              <a
                href="#"
                className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow duration-200 hover:scale-110 transform"
              >
                <Mail size={24} className="text-purple-600" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Short Bio Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
            Bridging Design, Development & Accessibility
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            With a background in Computer Science and hands-on experience in IoT, blockchain, 
            and mobile design, I bridge the gap between design, development, and accessibility. 
            My unique perspective as a certified Sign Language Interpreter brings a deep 
            understanding of inclusive design to every project I create.
          </p>
        </div>
      </section>

      {/* Featured Work Preview */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Featured Work
            </h2>
            <p className="text-lg text-gray-600">
              A glimpse into some of my recent projects
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Voice2Sign Preview */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
              <div className="h-48 bg-gradient-to-br from-purple-500 to-blue-600"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Voice2Sign</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Mobile app facilitating two-way communication between Deaf and hearing individuals
                </p>
                <div className="flex gap-2">
                  <span className="px-2 py-1 bg-purple-100 text-purple-600 text-xs rounded">React Native</span>
                  <span className="px-2 py-1 bg-blue-100 text-blue-600 text-xs rounded">TypeScript</span>
                </div>
              </div>
            </div>

            {/* Property Hive Preview */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
              <div className="h-48 bg-gradient-to-br from-green-500 to-teal-600"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Property Hive</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Payment receipt flow redesign for property management platform
                </p>
                <div className="flex gap-2">
                  <span className="px-2 py-1 bg-green-100 text-green-600 text-xs rounded">Figma</span>
                  <span className="px-2 py-1 bg-teal-100 text-teal-600 text-xs rounded">UI/UX</span>
                </div>
              </div>
            </div>

            {/* Electric Car Dashboard Preview */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
              <div className="h-48 bg-gradient-to-br from-orange-500 to-red-600"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">EV Dashboard</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Interactive dashboard for electric vehicle performance monitoring
                </p>
                <div className="flex gap-2">
                  <span className="px-2 py-1 bg-orange-100 text-orange-600 text-xs rounded">Figma</span>
                  <span className="px-2 py-1 bg-red-100 text-red-600 text-xs rounded">Design</span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <button
              onClick={handleScrollToPortfolio}
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:scale-105 transition-transform duration-200 shadow-lg"
            >
              View All Projects
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;