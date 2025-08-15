import React, { useState } from 'react';
import { ExternalLink, ArrowRight } from 'lucide-react';
import evDashboardScreenshot from '../assets/images/ev-dashboard-screenshot.png';
import propertyHiveScreenshot from '../assets/images/propertyhive-screenshot.png';
import lesrenScreenshot from "../assets/images/lesren-screenshot.png";
import subwayIndustriesScreenshot from "../assets/images/subway-industries-screenshot.png";
import impactSchoolScreenshot from "../assets/images/impact-school-screenshot.png";
import marySaloonDesignScreenshot from "../assets/images/mary-saloon-design-screenshot.png";
import agrohubScreenshot from "../assets/images/agrohub-screenshot.png";
import voice2signScreenshot from "../assets/images/voice2sign-screenshot.png";

const Portfolio: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const projects = [
    {
      id: 'voice2sign',
      title: 'Voice2Sign',
      role: 'UI/UX Designer, Frontend Developer',
      tools: ['React Native', 'Figma', 'TypeScript', 'Tailwind CSS'],
      description: 'Voice2Sign is a mobile app that facilitates two-way communication between Deaf and hearing individuals. It converts speech into sign language and sign language into voice/text.',
      problem: 'Deaf individuals in Lesotho face daily communication barriers, especially in public places or emergencies where sign language interpreters aren\'t available.',
      solution: 'Developed a mobile-first application that translates spoken language into animated sign language and vice versa, enhancing independence and accessibility.',
      process: 'User research → Wireframes → Design → Frontend Implementation',
      features: ['Emergency Alerts', 'Sign Language Animation', 'Conversation History'],
      gradient: 'from-purple-500 to-blue-600',
      images: voice2signScreenshot
    },
    {
      id: 'property-hive',
      title: 'Property Hive',
      role: 'Freelance UI/UX Designer',
      tools: ['Figma'],
      description: 'Redesigned the payment receipt flow for this property management platform. Included multiple payment states and a download CTA.',
      problem: 'The platform lacked a clear visual indicator of payment status, confusing users and causing support requests.',
      solution: 'Introduced a structured receipt flow with distinct states (Success, Pending, Failed), enhancing user understanding and reducing inquiries.',
      process: 'Analysis → User Flow → Design → Testing',
      features: ['Payment Status Indicators', 'Download Functionality', 'Clear Visual Hierarchy'],
      gradient: 'from-green-500 to-teal-600',
      images: propertyHiveScreenshot
    },
    {
      id: 'ev-dashboard',
      title: 'Electric Car Dashboard',
      role: 'UI/UX Designer',
      tools: ['Figma'],
      description: 'Designed an interactive dashboard that helps drivers monitor speed, battery, and overall performance.',
      problem: 'EV drivers struggle with information overload from scattered metrics on existing interfaces.',
      solution: 'Designed a clean, centralized dashboard that displays speed, battery levels, and other key data intuitively.',
      process: 'Research → Information Architecture → Prototyping → Testing',
      features: ['Real-time Monitoring', 'Intuitive Controls', 'Performance Analytics'],
      gradient: 'from-orange-500 to-red-600',
      images: evDashboardScreenshot
    },
    {
      id: 'lesren',
      title: 'LesRen Design',
      role: 'UI/UX Designer',
      tools: ['Figma'],
      description: 'A modern responsive website redesign for LesRen, focused on education and empowerment.',
      problem: 'LesRen\'s website lacked visual appeal and accessibility.',
      solution: 'Created an inclusive and engaging design using bold visuals, clear navigation, and mobile responsiveness.',
      process: 'Audit → Strategy → Design → Implementation',
      features: ['Responsive Design', 'Accessibility Features', 'Modern UI'],
      gradient: 'from-blue-500 to-indigo-600',
      images: lesrenScreenshot
    },
    {
      id: 'agrohub',
      title: 'AgroHub',
      role: 'Frontend Developer',
      tools: ['HTML', 'CSS', 'Next.js', 'Tailwind CSS'],
      description: 'Built the frontend for an online agricultural marketplace connecting local farmers to buyers.',
      problem: 'Farmers lacked a user-friendly digital platform to showcase products.',
      solution: 'Implemented a fully responsive interface with real-time listing features and easy navigation for buyers.',
      process: 'Planning → Development → Testing → Deployment',
      features: ['Real-time Listings', 'Farmer Profiles', 'Buyer Dashboard'],
      gradient: 'from-yellow-500 to-green-600',
      images: agrohubScreenshot
    },
    {
      id: 'impact-school',
      title: 'Impact School Website Redesign',
      role: 'UI/UX Designer',
      tools: ['Figma'],
      description: 'Redesigned the website for Impact School to reflect its innovation and impact in the tech and robotics space.',
      problem: 'Outdated visuals and unclear messaging hindered user engagement.',
      solution: 'Developed clean layouts, strong calls-to-action, and responsive designs to better communicate their mission.',
      process: 'Research → Strategy → Design → Handoff',
      features: ['Modern Design', 'Clear Messaging', 'Mobile Optimization'],
      gradient: 'from-purple-500 to-pink-600',
      images: impactSchoolScreenshot
    },
    {
      id: 'subway-industries',
      title: 'Subway Industries Design',
      role: 'UI/UX Designer',
      tools: ['Figma'],
      description: 'Crafted a professional and user-friendly website design for Subway Industries\' online presence.',
      problem: 'Their existing online branding was inconsistent and outdated.',
      solution: 'Delivered a sleek, minimal design system with clearly defined service sections and client focus.',
      process: 'Brand Analysis → Design System → Implementation',
      features: ['Brand Consistency', 'Service Showcase', 'Client Focus'],
      gradient: 'from-gray-600 to-blue-700',
      images: subwayIndustriesScreenshot
    },
    {
      id: 'mary-saloon',
      title: 'Mary Saloon Design',
      role: 'UI/UX Designer',
      tools: ['Figma'],
      description: 'Designed a beautiful and modern interface for Mary\'s Saloon appointment and services page.',
      problem: 'Customers had trouble booking appointments and browsing available styles.',
      solution: 'Created a stylish, mobile-friendly design that makes service booking seamless and visually appealing.',
      process: 'User Journey → Design → Prototype → Testing',
      features: ['Appointment Booking', 'Service Gallery', 'Mobile-First Design'],
      gradient: 'from-pink-500 to-rose-600',
      images: marySaloonDesignScreenshot
    }
  ];

  // Mapping project IDs to Figma links
  const projectLinks: Record<string, string> = {
    "voice2sign": "https://www.figma.com/design/Ewd9I7o15zdrpYajUVhuok/Voice2Sign?t=zgFrxEGfMmeC0k2V-0",
    "property-hive": "https://www.figma.com/design/1N09sixjbgL81Rmgq2uHIh/Property-Hive?node-id=2-287&p=f&t=FgMQRq5WwyhIDRpq-0",
    "ev-dashboard": "https://www.figma.com/design/z2WKNDudE3kpEUtlwdiZRZ/Electric-car-dashboard?t=zgFrxEGfMmeC0k2V-0",
    "lesren": "https://www.figma.com/design/8zpIKJYsiIIc8Q2fw8nlD8/LesREN3?t=zgFrxEGfMmeC0k2V-0",
    "agrohub": "https://www.figma.com/design/wcWAgMjyiRWEN2x3jcf7gx/AgrohUb?node-id=0-1&p=f&t=zgFrxEGfMmeC0k2V-0",
    "impact-school": "https://www.figma.com/design/F3cm1vHcyVUpkaZveAAF5W/Impact-School?t=zgFrxEGfMmeC0k2V-0",
    "subway-industries": "https://www.figma.com/design/eVUomMcu1fQNgmClXeXWCw/Subway-Industries?t=zgFrxEGfMmeC0k2V-0",
    "mary-saloon": "https://www.figma.com/design/EsaiEF6BUMZfqPaK6X912B/Saloon-Design?node-id=0-1&p=f&t=zgFrxEGfMmeC0k2V-0"
  };

  return (
    <div className="min-h-screen py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
            Portfolio & Case Studies
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A collection of projects showcasing my expertise in UI/UX design, frontend development, 
            and creating accessible digital experiences.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer transform hover:-translate-y-2"
              onClick={() => setSelectedProject(project.id)}
            >
              <div className="h-48 relative overflow-hidden rounded-t-xl">
                {project.images ? (
                  <img
                    src={project.images}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className={`w-full h-full bg-gradient-to-br ${project.gradient}`}></div>
                )}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                  <p className="text-sm opacity-90">{project.role}</p>
                </div>
              </div>

              <div className="p-6">
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tools.map((tool, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
                <button className="flex items-center text-purple-600 font-medium hover:text-purple-700 transition-colors duration-200">
                  View Case Study <ArrowRight size={16} className="ml-1" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Project Detail Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={() => setSelectedProject(null)}>
            <div className="bg-white rounded-xl max-w-4xl max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
              {(() => {
                const project = projects.find(p => p.id === selectedProject);
                if (!project) return null;
                
                return (
                  <div className="p-8">
                    <div className="h-54 relative overflow-hidden rounded-lg mb-8 flex items-center justify-center">
                      {project.images ? (
                        <img
                          src={project.images}
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className={`w-full h-full bg-gradient-to-br ${project.gradient}`}></div>
                      )}
                      <div className="absolute inset-0 bg-black/20"></div>
                      <h2 className="absolute text-3xl font-bold text-white">{project.title}</h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Project Overview</h3>
                        <p className="text-gray-600 mb-4">{project.description}</p>
                        
                        <h4 className="font-bold text-gray-900 mb-2">Role:</h4>
                        <p className="text-gray-600 mb-4">{project.role}</p>
                        
                        <h4 className="font-bold text-gray-900 mb-2">Tools Used:</h4>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tools.map((tool, index) => (
                            <span key={index} className="px-3 py-1 bg-purple-100 text-purple-600 text-sm rounded-full">
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Problem & Solution</h3>
                        
                        <h4 className="font-bold text-gray-900 mb-2">Problem:</h4>
                        <p className="text-gray-600 mb-4">{project.problem}</p>
                        
                        <h4 className="font-bold text-gray-900 mb-2">Solution:</h4>
                        <p className="text-gray-600 mb-4">{project.solution}</p>
                        
                        <h4 className="font-bold text-gray-900 mb-2">Process:</h4>
                        <p className="text-gray-600 mb-4">{project.process}</p>
                        
                        <h4 className="font-bold text-gray-900 mb-2">Key Features:</h4>
                        <ul className="list-disc list-inside text-gray-600">
                          {project.features.map((feature, index) => (
                            <li key={index}>{feature}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <div className="mt-8 flex justify-between items-center">
                      <button
                        onClick={() => setSelectedProject(null)}
                        className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                      >
                        Close
                      </button>
                      <a
                        href={projectLinks[selectedProject]}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-semibold hover:scale-105 transition-transform duration-200 flex items-center gap-2"
                      >
                        View Live Project <ExternalLink size={16} />
                      </a>
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Portfolio;
