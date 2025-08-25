import React, { useState, useEffect, useRef } from 'react';
import { ArrowUpRight, Send, Image, ChevronUp, ChevronDown, Sparkles, Zap } from 'lucide-react';

const AIServicesSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const containerRef = useRef(null);

  // Mouse tracking for interactive effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height,
        });
      }
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('scroll', handleScroll);
      return () => {
        container.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  return (
    <div 
      ref={containerRef}
      className="relative bg-gradient-to-br from-black via-gray-950 to-black min-h-screen px-4 py-16 lg:py-32 xl:py-40 lg:px-8 xl:px-12 overflow-hidden"
    >
      {/* Enhanced Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white/10 rounded-full animate-pulse"
            style={{
              width: `${1 + Math.random() * 3}px`,
              height: `${1 + Math.random() * 3}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${2 + Math.random() * 4}s`,
              transform: `translateY(${scrollY * 0.1 * (Math.random() - 0.5)}px)`,
            }}
          />
        ))}
      </div>

      {/* Floating Orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute w-96 h-96 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse"
          style={{
            top: '10%',
            left: '20%',
            transform: `translate(${mousePosition.x * 50}px, ${mousePosition.y * 30}px)`,
            animationDuration: '4s'
          }}
        />
        <div 
          className="absolute w-80 h-80 bg-gradient-to-br from-cyan-500/10 via-teal-500/10 to-emerald-500/10 rounded-full blur-3xl animate-pulse"
          style={{
            bottom: '20%',
            right: '15%',
            transform: `translate(${-mousePosition.x * 40}px, ${-mousePosition.y * 25}px)`,
            animationDuration: '5s',
            animationDelay: '2s'
          }}
        />
      </div>

      {/* Dynamic mouse-following gradient */}
      <div 
        className="absolute inset-0 pointer-events-none transition-all duration-700"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 30%, transparent 60%)`,
        }}
      />

      <div className="max-w-8xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 xl:gap-32 items-center">
          
          {/* Left Card - AI Workflow Automation */}
          <div className="relative group">
            <div className="bg-gradient-to-br from-white/10 via-gray-900/40 to-black/90 backdrop-blur-2xl border border-white/20 rounded-3xl xl:rounded-4xl p-8 lg:p-12 xl:p-16 relative overflow-hidden hover:border-white/30 transition-all duration-700 hover:shadow-2xl hover:shadow-white/10">
              
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 rounded-3xl xl:rounded-4xl"></div>
              
              {/* 3D Stacked Devices with enhanced styling */}
              <div className="relative mb-12 lg:mb-16 h-96 lg:h-[28rem] xl:h-[32rem] flex items-center justify-center">
                {/* Back Device */}
                <div 
                  className="absolute w-72 lg:w-96 xl:w-[28rem] h-48 lg:h-64 xl:h-72 bg-gradient-to-br from-gray-800/40 via-gray-900/60 to-black/80 rounded-2xl xl:rounded-3xl backdrop-blur-sm border border-white/5"
                  style={{ 
                    transform: 'perspective(1200px) rotateX(-12deg) rotateY(20deg) translateZ(-60px) scale(0.8)',
                    transformOrigin: 'center center'
                  }}
                >
                  <div className="bg-gradient-to-br from-white/5 via-gray-800/15 to-black rounded-xl xl:rounded-2xl m-3 h-full border border-white/5"></div>
                </div>
                
                {/* Middle Device */}
                <div 
                  className="absolute w-72 lg:w-96 xl:w-[28rem] h-48 lg:h-64 xl:h-72 bg-gradient-to-br from-gray-800/60 via-gray-900/80 to-black/90 rounded-2xl xl:rounded-3xl backdrop-blur-sm border border-white/10"
                  style={{ 
                    transform: 'perspective(1200px) rotateX(-12deg) rotateY(20deg) translateZ(-30px) scale(0.9)',
                    transformOrigin: 'center center'
                  }}
                >
                  <div className="bg-gradient-to-br from-white/5 via-gray-800/20 to-black rounded-xl xl:rounded-2xl m-3 h-full border border-white/5"></div>
                </div>
                
                {/* Front Device - Main Interactive */}
                <div 
                  className="relative w-72 lg:w-96 xl:w-[28rem] h-48 lg:h-64 xl:h-72 bg-gradient-to-br from-gray-800/80 via-gray-900/95 to-black rounded-2xl xl:rounded-3xl backdrop-blur-2xl border border-white/25 group-hover:border-white/40 transition-all duration-700 group-hover:shadow-xl group-hover:shadow-white/10"
                  style={{ 
                    transform: 'perspective(1200px) rotateX(-12deg) rotateY(20deg)',
                    transformOrigin: 'center center'
                  }}
                >
                  <div className="bg-gradient-to-br from-white/8 via-gray-800/30 to-black/95 rounded-xl xl:rounded-2xl m-3 h-full p-4 lg:p-6 xl:p-8 border border-white/15">
                    
                    {/* Sparkle Effect */}
                    <div className="absolute top-4 right-4">
                      <Sparkles className="w-4 h-4 xl:w-5 xl:h-5 text-white/40 animate-pulse" />
                    </div>
                    
                    {/* Top Section */}
                    <div className="flex items-center justify-between mb-4 xl:mb-6">
                      <div className="flex items-center space-x-2">
                        <span className="text-white/60 text-xs xl:text-sm font-light">Today Saved Drafts, 4/11/2024</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="bg-gradient-to-r from-white via-gray-100 to-white rounded-full w-6 h-6 xl:w-8 xl:h-8 flex items-center justify-center border border-white/30 shadow-lg">
                          <span className="text-black text-xs xl:text-sm font-bold">2</span>
                        </div>
                        <ChevronUp className="w-4 h-4 xl:w-5 xl:h-5 text-white/70" />
                      </div>
                    </div>
                    
                    {/* Content Area */}
                    <div className="bg-black/70 backdrop-blur-sm rounded-xl xl:rounded-2xl p-3 xl:p-4 mb-4 xl:mb-6 border border-white/10">
                      <div className="flex items-center justify-between mb-3 xl:mb-4">
                        <div className="bg-black/90 backdrop-blur-sm rounded-full px-3 xl:px-4 py-2 border border-white/15">
                          <span className="text-white/50 text-xs xl:text-sm">Type description...</span>
                        </div>
                        <div className="bg-gradient-to-r from-white via-gray-100 to-white rounded-full px-3 xl:px-4 py-2 flex items-center space-x-2 shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer">
                          <span className="text-black text-xs xl:text-sm font-bold">Publish</span>
                          <Send className="w-3 h-3 xl:w-4 xl:h-4 text-black" />
                        </div>
                      </div>
                      <div className="bg-gray-800/50 rounded-xl p-4 xl:p-6 opacity-70 border border-white/10 flex items-center justify-center hover:opacity-90 transition-all duration-300">
                        <Image className="w-5 h-5 xl:w-6 xl:h-6 text-white/60" />
                      </div>
                    </div>
                    
                    {/* Yesterday Section */}
                    <div className="flex items-center justify-between">
                      <span className="text-white/50 text-xs xl:text-sm font-light">Yesterday, 3/11/2024</span>
                      <div className="flex items-center space-x-2">
                        <div className="bg-gradient-to-r from-white via-gray-100 to-white rounded-full w-6 h-6 xl:w-8 xl:h-8 flex items-center justify-center border border-white/30 shadow-lg">
                          <span className="text-black text-xs xl:text-sm font-bold">3</span>
                        </div>
                        <ChevronDown className="w-4 h-4 xl:w-5 xl:h-5 text-white/70" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Animated border glow */}
              <div className="absolute inset-0 rounded-3xl xl:rounded-4xl bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-1000 blur-sm"></div>
            </div>
            
            {/* Text Content */}
            <div className="mt-12 lg:mt-16 xl:mt-20 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start mb-4 xl:mb-6">
                <Zap className="w-6 h-6 xl:w-8 xl:h-8 text-gray-100 mr-3 animate-pulse" />
                <span className="text-gray-400 text-sm xl:text-base font-medium uppercase tracking-wider">AI Automation</span>
              </div>
              <h2 className="text-3xl lg:text-4xl xl:text-6xl 2xl:text-7xl font-black bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent mb-6 xl:mb-8 leading-tight">
                AI-Powered Workflow 
                <span className="block bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                  Automation
                </span>
              </h2>
              <p className="text-gray-300 text-lg xl:text-xl 2xl:text-2xl leading-relaxed font-light max-w-2xl mx-auto lg:mx-0">
                We build AI-powered systems precisely tailored to your goals. Every solution starts with a focused strategy that transforms your workflow into an intelligent, self-optimizing powerhouse.
              </p>
            </div>
          </div>
          
          {/* Right Card - Services */}
          <div className="relative group">
            <div className="bg-gradient-to-br from-white/10 via-gray-900/40 to-black/90 backdrop-blur-2xl border border-white/20 rounded-3xl xl:rounded-4xl p-8 lg:p-12 xl:p-16 relative overflow-hidden hover:border-white/30 transition-all duration-700 hover:shadow-2xl hover:shadow-white/10">
              
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-bl from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 rounded-3xl xl:rounded-4xl"></div>
              
              {/* Device Mockup */}
              <div className="relative mb-12 lg:mb-16 h-96 lg:h-[28rem] xl:h-[32rem] flex items-center justify-center">
                <div className="w-80 lg:w-96 xl:w-[30rem] h-72 lg:h-80 xl:h-96 bg-gradient-to-br from-gray-800/80 via-gray-900/95 to-black rounded-2xl xl:rounded-3xl backdrop-blur-2xl border border-white/25 p-6 xl:p-8 group-hover:border-white/40 transition-all duration-700 group-hover:shadow-xl group-hover:shadow-white/10">
                  <div className="bg-gradient-to-br from-white/8 via-gray-800/30 to-black/95 rounded-xl xl:rounded-2xl h-full p-4 xl:p-6 border border-white/15">
                    
                    {/* Sparkle Effect */}
                    <div className="absolute top-6 left-6">
                      <Sparkles className="w-4 h-4 xl:w-5 xl:h-5 text-white/40 animate-pulse" style={{ animationDelay: '1s' }} />
                    </div>
                    
                    {/* Input Area */}
                    <div className="bg-black/90 backdrop-blur-sm rounded-full px-4 xl:px-6 py-3 xl:py-4 mb-6 xl:mb-8 flex items-center justify-between border border-white/15 hover:border-white/25 transition-all duration-300">
                      <span className="text-white/60 text-sm xl:text-base font-light">Type some description here...</span>
                      <div className="bg-gradient-to-r from-white via-gray-100 to-white rounded-full px-4 xl:px-6 py-2 shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer">
                        <span className="text-black text-sm xl:text-base font-bold">Research</span>
                      </div>
                    </div>
                    
                    {/* Service Cards */}
                    <div className="space-y-3 xl:space-y-4">
                      {[
                        { name: 'Web Services Business', delay: '0s' },
                        { name: "SAAS Startup's", delay: '0.2s' },
                        { name: 'Marketing Agencies', delay: '0.4s' },
                        { name: 'Drop shipping', delay: '0.6s' }
                      ].map((service, index) => (
                        <div 
                          key={service.name}
                          className="bg-black/90 backdrop-blur-sm rounded-full px-4 xl:px-6 py-3 xl:py-4 flex items-center justify-between border border-white/15 hover:border-white/30 hover:bg-black/95 transition-all duration-500 group/item cursor-pointer hover:scale-105 hover:shadow-lg hover:shadow-white/5"
                          style={{ animationDelay: service.delay }}
                        >
                          <span className="text-white/70 text-sm xl:text-base font-light group-hover/item:text-white/90 transition-colors duration-300">
                            {service.name}
                          </span>
                          <div className="relative">
                            <ArrowUpRight className="w-4 h-4 xl:w-5 xl:h-5 text-white/50 group-hover/item:text-white/80 group-hover/item:scale-110 transition-all duration-300" />
                            <div className="absolute -inset-1 bg-white/10 rounded-full opacity-0 group-hover/item:opacity-100 transition-all duration-300 blur-sm"></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Animated border glow */}
              <div className="absolute inset-0 rounded-3xl xl:rounded-4xl bg-gradient-to-l from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-1000 blur-sm"></div>
            </div>
            
            {/* Text Content */}
            <div className="mt-12 lg:mt-16 xl:mt-20 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start mb-4 xl:mb-6">
                <Sparkles className="w-6 h-6 xl:w-8 xl:h-8 text-gray-100 mr-3 animate-pulse" style={{ animationDelay: '0.5s' }} />
                <span className="text-gray-400 text-sm xl:text-base font-medium uppercase tracking-wider">Multi-Sector</span>
              </div>
              <h2 className="text-3xl lg:text-4xl xl:text-6xl 2xl:text-7xl font-black bg-gradient-to-r from-white via-purple-100 to-white bg-clip-text text-transparent mb-6 xl:mb-8 leading-tight">
                Services for 
                <span className="block bg-gradient-to-r from-white via-purple-100 to-white   bg-clip-text text-transparent">
                  All Sectors
                </span>
              </h2>
              <p className="text-gray-300 text-lg xl:text-xl 2xl:text-2xl leading-relaxed font-light max-w-2xl mx-auto lg:mx-0">
                From brand visibility to conversion rates, we help you expand across every area. Our solutions adapt to your industry's unique challenges and opportunities.
              </p>
            </div>
          </div>
          
        </div>
      </div>
      
      {/* Enhanced Light Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-32 left-0 w-full h-96 bg-gradient-to-r from-transparent via-blue-500/5 to-transparent transform -skew-y-12 blur-3xl opacity-30"></div>
        <div className="absolute bottom-32 right-0 w-3/4 h-64 bg-gradient-to-l from-transparent via-purple-500/5 to-transparent transform skew-y-6 blur-2xl opacity-30"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-radial from-white/5 via-white/2 to-transparent blur-3xl opacity-40"></div>
      </div>

      {/* Enhanced Floating Elements */}
      <div className="absolute top-20 right-10 w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-bounce hidden lg:block shadow-lg shadow-blue-400/50"></div>
      <div className="absolute bottom-32 left-20 w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-ping hidden lg:block shadow-lg shadow-purple-400/50"></div>
      <div className="absolute top-1/2 right-32 w-2.5 h-2.5 bg-gradient-to-r from-pink-400 to-red-400 rounded-full animate-pulse hidden xl:block shadow-lg shadow-pink-400/50"></div>
      <div className="absolute top-1/4 left-1/4 w-1.5 h-1.5 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full animate-bounce hidden xl:block shadow-lg shadow-cyan-400/50" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full animate-ping hidden 2xl:block shadow-lg shadow-emerald-400/50" style={{ animationDelay: '1s' }}></div>
    </div>
  );
};

export default AIServicesSection;