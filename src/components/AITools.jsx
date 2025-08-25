import { useState, useEffect } from 'react';

const AITools = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const topRowFeatures = [
    'Data Insights',
    'Predictive AI',
    'Content AI',
    'Workflow Tools',
    'Fast Decisions',
    'User Personalization'
  ];

  const bottomRowFeatures = [
    'API Support',
    'Data Security',
    'NLP Models',
    'AI Chatbots',
    'Scalable Systems',
    'Auto Scheduling'
  ];

  return (
    <div className="relative   bg-black overflow-hidden">
      {/* Main content container */}
      <div className="relative z-10  flex flex-col items-center justify-center px-4 py-16">
        
        {/* Top sliding row - Left to Right */}
        <div className="max-w-7xl mb-5 overflow-hidden">
          <div className="flex animate-slide-left-to-right whitespace-nowrap">
            {[...topRowFeatures, ...topRowFeatures, ...topRowFeatures].map((feature, index) => (
              <div
                key={`top-${index}`}
                className="flex-shrink-0 mx-3 sm:mx-4 lg:mx-6 px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 bg-gray-800/40 border border-gray-700/50 rounded-lg sm:rounded-xl text-gray-400 text-sm sm:text-base lg:text-lg font-medium backdrop-blur-sm hover:bg-gray-600/50 cursor-pointer transition-all duration-300 transform hover:scale-105"
              >
                {feature}
              </div>
            ))}
          </div>
        </div>
         {/* Bottom sliding row - Right to Left */}
         <div className="max-w-7xl  overflow-hidden">
          <div className="flex animate-slide-right-to-left whitespace-nowrap">
            {[...bottomRowFeatures, ...bottomRowFeatures, ...bottomRowFeatures].map((feature, index) => (
              <div
                key={`bottom-${index}`}
                className="flex-shrink-0 mx-3 sm:mx-4 lg:mx-6 px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 bg-gray-800/40 border border-gray-700/50 rounded-lg sm:rounded-xl text-gray-400 text-sm sm:text-base lg:text-lg font-medium backdrop-blur-sm hover:bg-gray-600/50 cursor-pointer transition-all duration-300 transform hover:scale-105"
              
              >
                {feature}
              </div>
            ))}
          </div>
        </div>
        {/* Main content area */}
        <div className="mt-10 flex flex-col lg:flex-row items-center justify-center max-w-7xl mx-auto gap-8 lg:gap-16 xl:gap-24">
          
          {/* Main heading */}
          <div className="text-center lg:text-left max-w-2xl">
            <h1 className="text-md sm:text-lg md:text-xl lg:text-3xl xl:text-5xl font-medium leading-tight tracking-tight text-white mb-0">
              Delivering AI solutions with unmatched precision and speed.
            </h1>
          </div>

          {/* CTA Button */}
          <div className="flex-shrink-0">
            <button className="px-8 sm:px-10 lg:px-12 py-3 sm:py-4 lg:py-5 bg-gray-800/60 hover:bg-gray-700/70 text-white border border-gray-600/50 hover:border-gray-500/70 rounded-lg sm:rounded-xl font-medium text-base sm:text-lg transition-all duration-300 hover:scale-105 backdrop-blur-sm">
              Get Started Now
            </button>
          </div>
        </div>

       
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes slide-left-to-right {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(0%);
          }
        }

        @keyframes slide-right-to-left {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        .animate-slide-left-to-right {
          animation: slide-left-to-right 40s linear infinite;
        }

        .animate-slide-right-to-left {
          animation: slide-right-to-left 40s linear infinite;
        }

        /* Mobile optimizations */
        @media (max-width: 768px) {
          .animate-slide-left-to-right {
            animation: slide-left-to-right 25s linear infinite;
          }

          .animate-slide-right-to-left {
            animation: slide-right-to-left 25s linear infinite;
          }
        }

        /* Reduce motion for accessibility */
        @media (prefers-reduced-motion: reduce) {
          .animate-slide-left-to-right,
          .animate-slide-right-to-left {
            animation: none;
          }
        }

        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
};

export default AITools;