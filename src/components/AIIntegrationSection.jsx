import React from 'react';

const IntegrationCard = ({ icon, title, description }) => {
    return (
      <div className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 lg:p-10 transition-all duration-500 ease-out hover:bg-white/10 hover:border-white/20 hover:shadow-2xl hover:shadow-white/5 transform hover:scale-105 flex-shrink-0 w-96 sm:w-[420px] lg:w-[480px] xl:w-[520px] min-h-[280px] xl:min-h-[220px] mx-2 my-2">
        
        {/* External link icon */}
        <div className="absolute top-8 right-8 text-gray-400 group-hover:text-white transition-colors duration-300">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M7 7h10v10" />
            <path d="M7 17L17 7" />
          </svg>
        </div>
  
        {/* Icon */}
        <div className="mb-8 text-gray-300 group-hover:text-white transition-colors duration-300">
          {icon}
        </div>
  
        {/* Content */}
        <div className="space-y-5 pr-8">
          <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-white group-hover:text-gray-100 transition-colors duration-300 leading-tight">
            {title}
          </h3>
          <p className="text-lg lg:text-xl text-gray-400 group-hover:text-gray-300 leading-relaxed transition-colors duration-300 break-words overflow-hidden text-ellipsis">
            {description}
          </p>
        </div>
  
        {/* Glassy overlay effect */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
      </div>
    );
  };
  

const AIIntegrationSection = () => {
  const integrations = [
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      ),
      title: "X / Twitter",
      description: "Automate your Twitter posts and engagement with AI-powered content."
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ),
      title: "Facebook",
      description: "Schedule posts and manage your Facebook presence seamlessly."
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      ),
      title: "Instagram",
      description: "Create and schedule Instagram stories and posts automatically."
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      title: "LinkedIn",
      description: "Professional networking automation for business growth."
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      ),
      title: "YouTube",
      description: "Video content optimization and YouTube channel management."
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
        </svg>
      ),
      title: "TikTok",
      description: "Viral content creation and TikTok growth optimization."
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
          <path d="M21.4 8.35c-.2-.24-.5-.48-.9-.48H3.5c-.4 0-.7.24-.9.48-.2.24-.2.52 0 .76l8.4 9.52c.2.24.5.4.8.4.3 0 .6-.16.8-.4l8.4-9.52c.2-.24.2-.52 0-.76z"/>
        </svg>
      ),
      title: "Email Marketing",
      description: "Automated email campaigns and newsletter management."
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488"/>
        </svg>
      ),
      title: "WhatsApp Business",
      description: "Business messaging automation and customer communication."
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ),
      title: "Google Workspace",
      description: "Integrate with Gmail, Drive, Docs, and Google productivity suite."
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
          <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2z"/>
        </svg>
      ),
      title: "Discord",
      description: "Community management and automated Discord server tools."
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.374 0 0 5.373 0 12s5.374 12 12 12 12-5.373 12-12S18.626 0 12 0zm5.568 8.16c-.169 1.858-.896 6.728-.896 6.728-.378 2.568-1.405 3.011-2.807 1.859-.6-.492-1.007-1.092-1.007-2.179 0-.943.213-1.692.213-3.015 0-1.323-.213-2.072-.213-3.015 0-1.087.407-1.687 1.007-2.179 1.402-1.152 2.429-.709 2.807 1.859.047 1.32.896 4.87.896 6.728z"/>
        </svg>
      ),
      title: "Telegram",
      description: "Automated messaging and broadcast management for Telegram."
    }
  ];

  // Split integrations into two rows
  const row1 = integrations.slice(0, 6);
  const row2 = integrations.slice(6, 12);

  return (
    <div className="min-h-screen bg-black py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-2 mb-8">
            <div className="w-6 h-6 border-2 border-white/40 rounded-sm flex items-center justify-center">
              <div className="w-2 h-2 bg-white/60 rounded-full"></div>
            </div>
            <span className="text-gray-400 text-sm font-semibold tracking-wider uppercase">
              Our Integrations & Partners
            </span>
          </div>
          
          <div className="space-y-8 mb-12">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-tight tracking-tight">
              AI Integration with the tools
              <br />
              that You Love using everyday
            </h1>
            
            <p className="text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
              Easily connect all your favorite apps and tools to seamlessly streamline
              <br className="hidden sm:block" />
              your workflow without any hassle or extra work.
            </p>
          </div>

          <button className="bg-white text-black px-8 lg:px-10 py-4 lg:py-5 rounded-full font-bold text-base lg:text-lg hover:bg-gray-200 hover:scale-105 transition-all duration-300 transform">
            Get Started Now
          </button>
        </div>

        {/* Integration Cards - Two Sliding Rows */}
        <div className="space-y-8 lg:space-y-12">
          {/* Row 1 - Left to Right */}
          <div className="overflow-hidden">
            <div className="flex animate-slide-left-to-right whitespace-nowrap gap-8 lg:gap-10 xl:gap-12">
              {[...row1, ...row1, ...row1].map((integration, index) => (
                <IntegrationCard
                  key={`row1-${index}`}
                  icon={integration.icon}
                  title={integration.title}
                  description={integration.description}
                />
              ))}
            </div>
          </div>

          {/* Row 2 - Right to Left */}
          <div className="overflow-hidden">
            <div className="flex animate-slide-right-to-left whitespace-nowrap gap-8 lg:gap-10 xl:gap-12">
              {[...row2, ...row2, ...row2].map((integration, index) => (
                <IntegrationCard
                  key={`row2-${index}`}
                  icon={integration.icon}
                  title={integration.title}
                  description={integration.description}
                />
              ))}
            </div>
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

        /* Desktop - Faster animations */
        @media (min-width: 1440px) {
          .animate-slide-left-to-right {
            animation: slide-left-to-right 45s linear infinite;
          }

          .animate-slide-right-to-left {
            animation: slide-right-to-left 45s linear infinite;
          }
        }

        /* Large Desktop */
        @media (min-width: 1024px) and (max-width: 1439px) {
          .animate-slide-left-to-right {
            animation: slide-left-to-right 50s linear infinite;
          }

          .animate-slide-right-to-left {
            animation: slide-right-to-left 50s linear infinite;
          }
        }

        /* Tablet */
        @media (min-width: 768px) and (max-width: 1023px) {
          .animate-slide-left-to-right {
            animation: slide-left-to-right 35s linear infinite;
          }

          .animate-slide-right-to-left {
            animation: slide-right-to-left 35s linear infinite;
          }
        }

        /* Mobile - Slower animations */
        @media (max-width: 767px) {
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
      `}</style>
    </div>
  );
};

export default AIIntegrationSection;