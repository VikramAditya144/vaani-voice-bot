import React from 'react';
import { Settings, Wand2, Share2, X, Image } from 'lucide-react';

const OutBoundAISection = () => {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-br "></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/3 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 container mx-auto px-4 py-16 lg:py-24">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Settings className="w-6 h-6 text-white/70" />
            <span className="text-white/70 text-sm font-medium tracking-wide">
              More Features/Services
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Outbound AI Systems
          </h1>
          
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Seamlessly automate workflows, analyze performance, and unlock new
            opportunities with intelligent AI tools.
          </p>
        </div>

        {/* Main Content Card */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-8 lg:p-12 shadow-2xl">
            
            {/* Top Section */}
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8 gap-6">
              {/* Input Section */}
              <div className="flex-1">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Indie hackers, business owners!!..."
                    className="w-full bg-white/5 border border-white/20 rounded-2xl px-6 py-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent transition-all duration-300"
                  />
                </div>
              </div>

              {/* AI Enhancer Button */}
              <div className="flex items-center gap-4">
                <button className="bg-gradient-to-r from-white to-gray-300 text-black px-6 py-3 rounded-2xl font-semibold flex items-center gap-2 hover:shadow-lg hover:scale-105 transition-all duration-300">
                  <Wand2 className="w-5 h-5" />
                  AI Enhancer
                </button>
              </div>
            </div>

            {/* Media Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {[1, 2, 3, 4].map((index) => (
                <div key={index} className="relative group">
                  <div className="aspect-square bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Image className="w-8 h-8 text-white/30" />
                    </div>
                    <button className="absolute top-3 right-3 w-8 h-8 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100">
                      <X className="w-4 h-4 text-white" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Section */}
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              {/* User Profile */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-white/20 to-white/10 rounded-full border border-white/20 flex items-center justify-center">
                  <div className="w-8 h-8 bg-white/30 rounded-full"></div>
                </div>
                <div>
                  <p className="text-white font-medium">Pranav NB</p>
                  <p className="text-gray-400 text-sm">Indie hackers, business owners!!...</p>
                </div>
              </div>

              {/* Share Button */}
              <button className="bg-white/10 hover:bg-white/20 border border-white/20 px-6 py-3 rounded-2xl font-semibold flex items-center gap-2 transition-all duration-300 hover:scale-105">
                <Share2 className="w-5 h-5" />
                Share
              </button>
            </div>
          </div>

          {/* Bottom Text */}
          <div className="text-center mt-12">
            <p className="text-gray-400 text-lg italic">
              "Plan and execute your social media using all-in-one dashboard"
            </p>
          </div>
        </div>

        {/* Bottom Right Action */}
        {/* <div className="fixed bottom-8 right-8 z-20">
          <button className="bg-white text-black px-6 py-3 rounded-2xl font-semibold flex items-center gap-2 shadow-2xl hover:shadow-white/20 hover:scale-105 transition-all duration-300">
            <Wand2 className="w-5 h-5" />
            Get Atom AI
          </button>
        </div> */}

        {/* Bottom Left Badge */}
        {/* <div className="fixed bottom-8 left-8 z-20">
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 px-4 py-2 rounded-full">
            <span className="text-white text-sm font-medium">Made in Framer</span>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default OutBoundAISection;