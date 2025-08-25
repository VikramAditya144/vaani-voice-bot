import { PersonStandingIcon } from 'lucide-react';
import React from 'react';

const Reinvent = () => {
  return (
    <section className="bg-black text-white py-20 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Quote Section */}
        <div className="text-center mb-20 lg:mb-32">
          {/* Quote Icon */}
          <div className="flex justify-center mb-8">
            <svg 
              className="w-16 h-16 lg:w-20 lg:h-20 text-gray-400" 
              fill="currentColor" 
              viewBox="0 0 24 24"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
            </svg>
          </div>

          {/* Main Quote */}
          <blockquote className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-medium leading-tight max-w-4xl mx-auto mb-12 lg:mb-16">
            "We're not looking to reinvent the wheel here. We're here to supercharge your existing efforts & take it next level"
          </blockquote>

          {/* Author */}
          <div className="flex items-center justify-center gap-3">
            <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-gray-800 flex items-center justify-center">
              <PersonStandingIcon className="w-6 h-6 lg:w-8 lg:h-8 text-gray-400" />    
            </div>
            <span className="text-gray-400 text-base lg:text-lg font-medium">
              Co-founder & ex google designer
            </span>
          </div>
        </div>

        {/* Stats Section */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 lg:gap-24">
          {/* Stat 1 */}
          <div className="text-center">
            <div className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-3 lg:mb-4 text-white">
              500+
            </div>
            <div className="text-gray-400 text-sm sm:text-base lg:text-lg font-medium">
              Total Scaled Brands
            </div>
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px h-20 lg:h-24 bg-gray-800"></div>

          {/* Stat 2 */}
          <div className="text-center">
            <div className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-3 lg:mb-4 text-white">
              15+
            </div>
            <div className="text-gray-400 text-sm sm:text-base lg:text-lg font-medium">
              yrs expertise in AI
            </div>
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px h-20 lg:h-24 bg-gray-800"></div>

          {/* Stat 3 */}
          <div className="text-center">
            <div className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-3 lg:mb-4 text-white">
              50m+
            </div>
            <div className="text-gray-400 text-sm sm:text-base lg:text-lg font-medium">
              Total Customers of Clients
            </div>
          </div>
        </div>

        {/* CTA Button - Bottom Right */}
        
      </div>
    </section>
  );
};

export default Reinvent;