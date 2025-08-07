import React from 'react';
import { Palette, Code, Users, Cpu } from 'lucide-react';

interface ServicesProps {
  setCurrentPage: (page: string) => void;
}

const Services: React.FC<ServicesProps> = ({ setCurrentPage }) => {
  const services = [
    {
      icon: <Palette size={32} />,
      title: 'UI/UX Design',
      description: 'Intuitive interfaces for web and mobile apps',
      details: [
        'User research and persona development',
        'Wireframing and prototyping',
        'Visual design and brand identity',
        'Usability testing and optimization'
      ],
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: <Code size={32} />,
      title: 'Frontend Development',
      description: 'Responsive, accessible frontend using HTML, CSS, JS, React',
      details: [
        'React and Next.js applications',
        'Responsive web design',
        'Performance optimization',
        'Accessibility implementation'
      ],
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Users size={32} />,
      title: 'Sign Language Interpretation',
      description: 'In-person and virtual interpreting for events, education, and media',
      details: [
        'Live event interpretation',
        'Educational support services',
        'Media and broadcast interpretation',
        'Accessibility consulting'
      ],
      gradient: 'from-green-500 to-teal-500'
    },
    {
      icon: <Cpu size={32} />,
      title: 'IoT & Smart Systems',
      description: 'Concepts and prototypes for health tech and education tech',
      details: [
        'IoT system design and prototyping',
        'Health technology solutions',
        'Educational technology development',
        'Smart device interfaces'
      ],
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <div className="min-h-screen py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
            Services
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            I offer comprehensive design and development services with a focus on accessibility, 
            inclusivity, and cutting-edge technology solutions.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              <div className={`h-2 bg-gradient-to-r ${service.gradient}`}></div>
              <div className="p-8">
                <div className={`inline-flex p-4 bg-gradient-to-r ${service.gradient} text-white rounded-lg mb-6`}>
                  {service.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-3">
                  {service.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-start">
                      <div className={`w-2 h-2 bg-gradient-to-r ${service.gradient} rounded-full mt-2 mr-3 flex-shrink-0`}></div>
                      <span className="text-gray-700">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="bg-gray-50 rounded-2xl p-8 lg:p-12 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              My Process
            </h2>
            <p className="text-lg text-gray-600">
              A structured approach to delivering exceptional results
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', description: 'Understanding your needs, goals, and target audience' },
              { step: '02', title: 'Strategy', description: 'Developing a comprehensive plan and approach' },
              { step: '03', title: 'Design & Develop', description: 'Creating and building the solution with precision' },
              { step: '04', title: 'Launch & Optimize', description: 'Deploying and continuously improving the result' }
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {phase.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{phase.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-2xl p-8 lg:p-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Let's work together to create something amazing. I'm here to help bring your vision to life 
            with accessible, inclusive, and innovative solutions.
          </p>
          <button className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-200 shadow-lg">
            <span onClick={() => setCurrentPage('contact')} className="cursor-pointer">
              Get In Touch
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;