import React from 'react';
import { Calendar, ArrowRight, Clock } from 'lucide-react';

interface BlogProps {
  setCurrentPage: (page: string) => void;
}

const Blog: React.FC<BlogProps> = ({ setCurrentPage }) => {
  const blogPosts = [
    {
      title: 'Why Accessibility Should Come First in Design',
      excerpt: 'Exploring the importance of designing with accessibility in mind from the very beginning of the design process, and how it benefits everyone.',
      date: '2024-12-15',
      readTime: '5 min read',
      category: 'Design',
      gradient: 'from-purple-500 to-blue-500'
    },
    {
      title: 'Building Voice2Sign for Lesotho\'s Deaf Community',
      excerpt: 'The journey of creating an inclusive mobile app that bridges communication gaps between Deaf and hearing individuals in Lesotho.',
      date: '2024-11-28',
      readTime: '8 min read',
      category: 'Case Study',
      gradient: 'from-green-500 to-teal-500'
    },
    {
      title: 'Lessons from STEAM 2024 (UNDP Experience)',
      excerpt: 'Key insights and learnings from participating in the STEAM 2024 program by UNDP, focusing on technology and innovation.',
      date: '2024-10-10',
      readTime: '6 min read',
      category: 'Experience',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      title: 'How I Designed My First Electric Car Dashboard',
      excerpt: 'A deep dive into the design process behind creating an intuitive and informative dashboard for electric vehicle drivers.',
      date: '2024-09-22',
      readTime: '7 min read',
      category: 'Design',
      gradient: 'from-blue-500 to-indigo-500'
    }
  ];

  return (
    <div className="min-h-screen py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
            Blog
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Thoughts on design, development, accessibility, and creating inclusive technology 
            that makes a real difference in people's lives.
          </p>
        </div>

        {/* Featured Post */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 lg:p-12 text-white relative overflow-hidden">
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-4">
                <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-medium">Featured</span>
                <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-medium">Design</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Why Accessibility Should Come First in Design
              </h2>
              <p className="text-lg mb-6 opacity-90 leading-relaxed">
                Exploring the importance of designing with accessibility in mind from the very beginning 
                of the design process, and how it benefits everyone. Learn practical strategies for 
                implementing inclusive design principles that create better experiences for all users.
              </p>
              <div className="flex items-center gap-6 text-sm mb-8">
                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  <span>Dec 15, 2024</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={16} />
                  <span>5 min read</span>
                </div>
              </div>
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-200 flex items-center gap-2">
                <a href="#" onClick={(e) => { e.preventDefault(); /* Handle article navigation */ }}>
                  Read Full Article <ArrowRight size={16} />
                </a>
              </button>
            </div>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {blogPosts.slice(1).map((post, index) => (
            <article
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer transform hover:-translate-y-2"
            >
              <div className={`h-48 bg-gradient-to-br ${post.gradient} relative`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300"></div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 text-gray-800 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    <span>{new Date(post.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'short', 
                      day: 'numeric' 
                    })}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={14} />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors duration-200">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {post.excerpt}
                </p>
                
                <button className="text-purple-600 font-medium hover:text-purple-700 transition-colors duration-200 flex items-center gap-1">
                  <a href="#" onClick={(e) => { e.preventDefault(); /* Handle article navigation */ }}>
                    Read More <ArrowRight size={14} />
                  </a>
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gray-50 rounded-2xl p-8 lg:p-12 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Stay Updated
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Subscribe to get notified about new articles on design, development, 
            accessibility, and inclusive technology.
          </p>
          
          <div className="max-w-md mx-auto">
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
              />
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:scale-105 transition-transform duration-200 whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;