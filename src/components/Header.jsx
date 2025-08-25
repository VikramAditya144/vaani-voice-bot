import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
          isScrolled 
            ? 'bg-black/20 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-black/20' 
            : 'bg-transparent'
        }`}
      >
        <nav className="flex items-center justify-between max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-4 lg:py-6">
          {/* Logo */}
          <div className="flex items-center space-x-3 z-50">
            <div className="relative">
              
              {/* Glow effect */}
              {/* <div className="absolute inset-0 w-8 h-8 sm:w-10 sm:h-10 bg-white/20 rounded-full blur-sm -z-10"></div> */}
            </div>
            <span className="text-white text-lg sm:text-xl lg:text-2xl font-bold tracking-tight bg-gradient-to-r from-white to-gray-300 bg-clip-text ">
              VAANI
            </span>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-8 xl:space-x-10">
            {['Company', 'Careers', 'Pricing', 'Blog', 'Change Log', 'Contact Us', 'Industries'].map((item) => (
              <a 
                key={item}
                href="#" 
                className="relative text-gray-300 hover:text-white transition-all duration-300 text-sm xl:text-base font-medium group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-gray-400 to-gray-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden lg:block">
            <button className="relative bg-gradient-to-r from-gray-500 to-gray-600 hover:from-gray-600 hover:to-gray-700 text-white px-6 py-3 rounded-full text-sm xl:text-base font-medium transition-all duration-300 shadow-lg shadow-gray-500/25 hover:shadow-gray-500/40 hover:scale-105 group overflow-hidden">
              <span className="relative z-10">Get Started</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMobileMenu}
            className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300 z-50"
          >
            <div className="w-5 h-5 flex flex-col justify-center items-center">
              <span 
                className={`block w-4 h-0.5 bg-white transition-all duration-300 ${
                  isMobileMenuOpen ? 'rotate-45 translate-y-0.5' : '-translate-y-1'
                }`}
              ></span>
              <span 
                className={`block w-4 h-0.5 bg-white transition-all duration-300 ${
                  isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}
              ></span>
              <span 
                className={`block w-4 h-0.5 bg-white transition-all duration-300 ${
                  isMobileMenuOpen ? '-rotate-45 -translate-y-0.5' : 'translate-y-1'
                }`}
              ></span>
            </div>
          </button>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
          isMobileMenuOpen 
            ? 'opacity-100 pointer-events-auto' 
            : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black/60 backdrop-blur-xl"
          onClick={toggleMobileMenu}
        ></div>
        
        {/* Menu Content */}
        <div 
          className={`absolute top-0 right-0 h-full w-80 max-w-[85vw] bg-black/40 backdrop-blur-2xl border-l border-white/10 transform transition-transform duration-500 ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col h-full pt-20 px-6">
            {/* Navigation Links */}
            <nav className="flex-1 space-y-6">
              {['Company', 'Careers', 'Pricing', 'Blog', 'Change Log', 'Contact Us', 'Industries'].map((item, index) => (
                <a 
                  key={item}
                  href="#" 
                  className={`block text-white hover:text-gray-400 transition-all duration-300 text-lg font-medium transform hover:translate-x-2 ${
                    isMobileMenuOpen 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-4'
                  }`}
                  style={{
                    transitionDelay: isMobileMenuOpen ? `${index * 50}ms` : '0ms'
                  }}
                >
                  {item}
                </a>
              ))}
            </nav>

            {/* Mobile CTA Button */}
            <div className="pb-8">
              <button 
                className={`w-full bg-gradient-to-r from-gray-500 to-gray-600 hover:from-gray-600 hover:to-gray-700 text-white px-6 py-4 rounded-full text-base font-medium transition-all duration-300 shadow-lg shadow-gray-500/25 transform ${
                  isMobileMenuOpen 
                    ? 'opacity-100 translate-y-0 scale-100' 
                    : 'opacity-0 translate-y-4 scale-95'
                }`}
                style={{
                  transitionDelay: isMobileMenuOpen ? '300ms' : '0ms'
                }}
              >
                Get Started
              </button>
              
              {/* Social Links */}
              <div 
                className={`flex justify-center space-x-6 mt-6 transition-all duration-300 ${
                  isMobileMenuOpen 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-4'
                }`}
                style={{
                  transitionDelay: isMobileMenuOpen ? '350ms' : '0ms'
                }}
              >
                {['Twitter', 'GitHub', 'LinkedIn'].map((social) => (
                  <a 
                    key={social}
                    href="#" 
                    className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                  >
                    {social}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @supports (backdrop-filter: blur(0)) {
          .backdrop-blur-xl {
            backdrop-filter: blur(24px);
          }
          .backdrop-blur-2xl {
            backdrop-filter: blur(40px);
          }
        }
      `}</style>
    </>
  );
};

export default Header;