import React from 'react';
import { Download, Award, Code, Palette, Users } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Introduction */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
              About Me
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              I am a creative and detail-oriented UI/UX Designer and Frontend Developer based in Lesotho. 
              My work blends technology, design, and accessibility. I'm also a certified Sign Language 
              Interpreter, which fuels my passion for inclusive design and creating solutions that work 
              for everyone.
            </p>
            <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold flex items-center gap-2 mx-auto hover:scale-105 transition-transform duration-200 shadow-lg">
              <Download size={20} />
              Download CV
            </button>
          </div>
        </section>

        {/* Skills & Tools */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Skills & Tools
            </h2>
            <p className="text-lg text-gray-600">
              Technologies and tools I work with daily
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Design Skills */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-purple-100 rounded-lg mr-4">
                  <Palette className="text-purple-600" size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Design</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-purple-100 text-purple-600 text-sm rounded-full">Figma</span>
                <span className="px-3 py-1 bg-purple-100 text-purple-600 text-sm rounded-full">Canva</span>
              </div>
            </div>

            {/* Development Skills */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-blue-100 rounded-lg mr-4">
                  <Code className="text-blue-600" size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Development</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 text-blue-600 text-sm rounded-full">HTML</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-600 text-sm rounded-full">CSS</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-600 text-sm rounded-full">JavaScript</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-600 text-sm rounded-full">React</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-600 text-sm rounded-full">Next.js</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-600 text-sm rounded-full">TypeScript</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-600 text-sm rounded-full">Tailwind CSS</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-600 text-sm rounded-full">Python</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-600 text-sm rounded-full">GitHub</span>
              </div>
            </div>

            {/* Mobile Development */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-green-100 rounded-lg mr-4">
                  <Users className="text-green-600" size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Mobile & Other</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-green-100 text-green-600 text-sm rounded-full">Expo</span>
                <span className="px-3 py-1 bg-green-100 text-green-600 text-sm rounded-full">React Native</span>
                <span className="px-3 py-1 bg-green-100 text-green-600 text-sm rounded-full">Sign Language</span>
              </div>
            </div>
          </div>
        </section>

        {/* Education & Certifications */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Education & Certifications
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  title: 'Certificate in IoT',
                  institution: 'Impact School',
                  type: 'certification'
                },
                {
                  title: 'Certificate of Excellence in Cybersecurity and Artificial Intelligence',
                  institution: '',
                  type: 'certification'
                },
                {
                  title: 'Certificate of Excellence',
                  institution: 'First Global Challenge',
                  type: 'certification'
                },
                {
                  title: 'Certificate in Mobile App Development',
                  institution: 'GSMA / ITU / EY / Equals',
                  type: 'certification'
                },
                {
                  title: 'STEAM 2024 Program',
                  institution: 'UNDP (Tech Category)',
                  type: 'program'
                }
              ].map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 flex items-start">
                  <div className="p-3 bg-purple-100 rounded-lg mr-4 flex-shrink-0">
                    <Award className="text-purple-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">{item.title}</h3>
                    {item.institution && (
                      <p className="text-gray-600">{item.institution}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Extra-Curricular */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Extra-Curricular Activities
            </h2>
          </div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-purple-500 to-blue-600 p-8 rounded-xl text-white">
              <h3 className="text-xl font-bold mb-4">National Sign Language Interpreter</h3>
              <p className="leading-relaxed">
                Providing interpretation services for BBC, Ministers, and the Education Sector, 
                breaking down communication barriers and promoting accessibility.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-500 to-teal-600 p-8 rounded-xl text-white">
              <h3 className="text-xl font-bold mb-4">Sign Language Interpreter</h3>
              <p className="leading-relaxed">
                Provided sign language interpretation services for the First Global Challenge team, 
                ensuring accessibility and inclusive participation in international robotics competitions.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;