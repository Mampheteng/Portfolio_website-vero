import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="flex items-center justify-center gap-2 text-sm text-gray-400">
            © 2025 Mampheteng Koote — Built with{' '}
            <Heart size={16} className="text-red-500 fill-current" />
            using React, Tailwind, and Figma.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;