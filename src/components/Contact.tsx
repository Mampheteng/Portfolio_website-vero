import React, { useState } from "react";
import { Mail, MapPin, Linkedin, Github, Twitter, Send } from "lucide-react";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);

    // Reset form after submission
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Let's Work Together
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            I’m open to freelance projects, collaborations, and speaking
            engagements. Let’s create something impactful together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info Section */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Get In Touch
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Whether you have a project in mind, need consultation, or want
                to discuss opportunities, I’d love to hear from you. I respond
                to all inquiries within 24 hours.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-purple-100 rounded-lg">
                  <Mail className="text-purple-600" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Email</h3>
                  <p className="text-gray-600">
                    mamphetengdesigns@gmail.com
                  </p>
                  <p className="text-sm text-gray-500">
                    Response within 4 hours
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-100 rounded-lg">
                  <MapPin className="text-blue-600" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Location</h3>
                  <p className="text-gray-600">Lesotho</p>
                  <p className="text-sm text-gray-500">
                    Remote work available worldwide
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="font-bold text-gray-900 mb-4">Connect With Me</h3>
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/mampheteng-koote-277950270/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 hover:scale-110 transition"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="https://github.com/Mampheteng"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-100 text-gray-800 rounded-lg hover:bg-gray-200 hover:scale-110 transition"
                >
                  <Github size={24} />
                </a>
                <a
                  href="https://x.com/Mamphetengkoote"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-blue-100 text-blue-400 rounded-lg hover:bg-blue-200 hover:scale-110 transition"
                >
                  <Twitter size={24} />
                </a>
              </div>
            </div>

            {/* Services */}
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-6 rounded-xl">
              <h3 className="font-bold mb-4">Available For:</h3>
              <ul className="space-y-2 text-sm">
                <li>• UI/UX Design Projects</li>
                <li>• Frontend Development</li>
                <li>• Sign Language Interpretation</li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white shadow-xl rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Send Me a Message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
                  placeholder="your.email@example.com"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-4 rounded-lg font-semibold hover:scale-105 transition transform flex items-center justify-center gap-2"
              >
                <Send size={20} />
                Send Message
              </button>
            </form>

            <p className="text-sm text-gray-500 text-center mt-6">
              I’ll get back to you within 24 hours.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
