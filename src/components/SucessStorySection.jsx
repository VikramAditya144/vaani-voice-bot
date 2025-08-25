import React, { useState } from 'react';
import { Play } from 'lucide-react';
import demoImage from '../assets/founder.jpeg'; // Placeholder for the image

const SuccessStorySection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handlePlayClick = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <section className="bg-black text-white min-h-screen flex items-center justify-center px-4 py-16">
      <div className="max-w-7xl w-full mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-8 lg:space-y-12">
            {/* Header */}
            <div className="flex items-center space-x-3">
              <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-black rounded-full"></div>
              </div>
              <span className="text-gray-400 text-sm font-medium tracking-wide">
                Our Success Story
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-white">"Simple framework for your</span>
              <br />
              <span className="text-gray-400">business that just works."</span>
            </h1>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              {/* Time Saved */}
              <div className="space-y-3">
                <div className="text-3xl md:text-4xl font-bold text-white">
                  500hrs
                </div>
                <div className="flex items-center space-x-2 text-gray-400">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm font-medium">Time Saved</span>
                </div>
              </div>

              {/* Tech Growth */}
              <div className="space-y-3">
                <div className="text-3xl md:text-4xl font-bold text-white">
                  200%
                </div>
                <div className="flex items-center space-x-2 text-gray-400">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                  </svg>
                  <span className="text-sm font-medium">Tec Growth</span>
                </div>
              </div>

              {/* User Rating */}
              <div className="space-y-3">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <div className="text-gray-400 text-sm font-medium">
                  User Rating
                </div>
              </div>
            </div>

            {/* Attribution */}
            <div className="pt-8 border-t border-gray-800">
              <p className="text-gray-500 text-3xl">
                Manat Choudary, <br></br>Founder VAANI
              </p>
            </div>
          </div>

          {/* Right Image/Video */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden bg-gray-900 aspect-[4/5]">
              {/* Image */}
              <img 
              src={demoImage}
                alt="Success story video thumbnail"
                className={`w-full h-full object-cover transition-all duration-300 ${
                  isPlaying ? 'scale-105 opacity-90' : 'scale-100 opacity-100'
                }`}
              />
              
              {/* Overlay */}
              {/* <div className="absolute inset-0 bg-black bg-opacity-20"></div> */}
              
              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  onClick={handlePlayClick}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  className={`
                    relative w-16 h-16 md:w-20 md:h-20 bg-white bg-opacity-90 rounded-full 
                    flex items-center justify-center text-black
                    transition-all duration-300 ease-out
                    hover:bg-opacity-100 hover:scale-110
                    ${isHovered ? 'transform translate-x-1 translate-y-1' : 'transform translate-x-0 translate-y-0'}
                    ${isPlaying ? 'animate-pulse' : ''}
                  `}
                >
                  <Play 
                    className={`w-6 h-6 md:w-8 md:h-8 ml-1 transition-transform duration-200 ${
                      isHovered ? 'scale-110' : 'scale-100'
                    }`} 
                    fill="currentColor"
                  />
                </button>
              </div>

              {/* Playing State Indicator */}
              {isPlaying && (
                <div className="absolute top-4 right-4">
                  <div className="flex space-x-1">
                    <div className="w-1 h-4 bg-white rounded-full animate-pulse"></div>
                    <div className="w-1 h-4 bg-white rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-1 h-4 bg-white rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </div>
              )}
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-white bg-opacity-10 rounded-full"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-white bg-opacity-5 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStorySection;