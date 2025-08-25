import React, { useState, useEffect } from 'react';
import { Database, Phone, BarChart3, Upload, Users, FileText, Monitor, Zap, TrendingUp, Clock, Shield, Globe, ChevronRight, Sparkles } from 'lucide-react';

const HowVaaniWorks = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      id: 1,
      number: "01",
      title: "Connect Your Data",
      subtitle: "Upload or Sync CRM",
      description: "Seamlessly integrate your existing CRM or upload lead lists. Connect with Salesforce, HubSpot, and more platforms instantly.",
      mockupElements: [
        { icon: <Database className="w-4 h-4" />, label: "Salesforce CRM", active: true },
        { icon: <FileText className="w-4 h-4" />, label: "Lead Database", active: false },
        { icon: <Upload className="w-4 h-4" />, label: "CSV Import", active: false },
        { icon: <Shield className="w-4 h-4" />, label: "Secure Sync", active: false }
      ]
    },
    {
      id: 2,
      number: "02",
      title: "AI Calls & Qualifies",
      subtitle: "Multi-Language Support",
      description: "Vaani intelligently calls leads in their preferred language, qualifying prospects with natural conversations.",
      mockupElements: [
        { icon: <Phone className="w-4 h-4" />, label: "Active Call", active: true },
        { icon: <Globe className="w-4 h-4" />, label: "50+ Languages", active: false },
        { icon: <Users className="w-4 h-4" />, label: "Lead Qualification", active: false },
        { icon: <Clock className="w-4 h-4" />, label: "24/7 Availability", active: false }
      ]
    },
    {
      id: 3,
      number: "03",
      title: "Track Real-Time Results",
      subtitle: "Analytics Dashboard",
      description: "Monitor call performance, qualification rates, and conversion metrics through comprehensive real-time analytics.",
      mockupElements: [
        { icon: <BarChart3 className="w-4 h-4" />, label: "Live Analytics", active: true },
        { icon: <TrendingUp className="w-4 h-4" />, label: "Conversion Rate", active: false },
        { icon: <Monitor className="w-4 h-4" />, label: "Dashboard", active: false },
        { icon: <Zap className="w-4 h-4" />, label: "Real-time Updates", active: false }
      ]
    }
  ];

  // Auto-advance steps
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative bg-black min-h-screen px-4 py-16 lg:py-32 lg:px-8 overflow-hidden">
      
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Gradient Orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse top-20 left-20" style={{ animationDuration: '6s' }} />
        <div className="absolute w-80 h-80 bg-white/3 rounded-full blur-3xl animate-pulse bottom-20 right-20" style={{ animationDuration: '8s', animationDelay: '3s' }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-16 lg:mb-24">
          <div className="flex items-center justify-center  gap-3 mb-8">
            <div className='flex items-center gap-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full px-3 py-2'>
            <div className="w-2 h-2  bg-white rounded-full animate-pulse" />
                <span className="text-white/60 text-sm font-medium tracking-widest uppercase">
                How it Works
                </span>
            </div>
            </div>
           
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 lg:mb-8 leading-tight">
            Seamless Process,<br />
            <span className="text-white/70">Effortless Management</span>
          </h2>
          
          <p className="text-white/60 text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
            Three simple steps to transform your sales process with AI-powered automation
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className={`group cursor-pointer transition-all duration-700 ${
                activeStep === index ? 'scale-105' : 'hover:scale-102'
              }`}
              onClick={() => setActiveStep(index)}
            >
              {/* Step Card */}
              <div className={`relative bg-white/5 backdrop-blur-xl border rounded-3xl p-8 lg:p-10 transition-all duration-700 ${
                activeStep === index 
                  ? 'border-white/30 shadow-2xl shadow-white/10' 
                  : 'border-white/10 hover:border-white/20'
              }`}>
                
                {/* Step Number */}
                <div className="flex items-center gap-4 mb-8">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center text-black font-bold text-lg transition-all duration-500 ${
                    activeStep === index ? 'bg-white' : 'bg-white/80'
                  }`}>
                    {step.number}
                  </div>
                  <div className="w-16 h-px bg-white/20" />
                </div>

                {/* Content */}
                <div className="space-y-4 mb-8">
                  <div>
                    <h3 className={`text-2xl lg:text-3xl font-bold transition-colors duration-500 ${
                      activeStep === index ? 'text-white' : 'text-white/90'
                    }`}>
                      {step.title}
                    </h3>
                    <p className="text-white/50 text-sm font-medium mt-2">{step.subtitle}</p>
                  </div>
                  
                  <p className={`text-white/70 leading-relaxed transition-colors duration-500 ${
                    activeStep === index ? 'text-white/80' : ''
                  }`}>
                    {step.description}
                  </p>
                </div>

                {/* Mockup Interface */}
                <div className="bg-black/40 rounded-2xl p-6 border border-white/10">
                  <div className="space-y-3">
                    {step.mockupElements.map((element, idx) => (
                      <div
                        key={idx}
                        className={`flex items-center gap-3 p-3 rounded-lg transition-all duration-500 ${
                          element.active && activeStep === index
                            ? 'bg-white/15 border border-white/20'
                            : 'bg-white/5 border border-white/5'
                        }`}
                        style={{
                          animationDelay: activeStep === index ? `${idx * 200}ms` : '0ms'
                        }}
                      >
                        <div className={`p-2 rounded-lg transition-all duration-300 ${
                          element.active && activeStep === index
                            ? 'bg-white/20 text-white'
                            : 'bg-white/10 text-white/60'
                        }`}>
                          {element.icon}
                        </div>
                        <span className={`text-sm font-medium transition-colors duration-300 ${
                          element.active && activeStep === index
                            ? 'text-white'
                            : 'text-white/60'
                        }`}>
                          {element.label}
                        </span>
                        {element.active && activeStep === index && (
                          <div className="ml-auto">
                            <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Connection Animation for Active Step */}
                  {activeStep === index && index < steps.length - 1 && (
                    <div className="absolute -right-6 top-1/2 transform -translate-y-1/2 hidden lg:block">
                      <div className="flex items-center">
                        <div className="w-8 h-px bg-white/30 animate-pulse" />
                        <ChevronRight className="w-4 h-4 text-white/30 animate-pulse" />
                      </div>
                    </div>
                  )}
                </div>

                {/* Active Glow Effect */}
                {activeStep === index && (
                  <div className="absolute inset-0 rounded-3xl bg-white/5 animate-pulse" />
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Progress Indicators */}
        <div className="flex justify-center mt-12 gap-3">
          {steps.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveStep(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeStep === index 
                  ? 'bg-white' 
                  : 'bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-3 gap-6 mt-16 lg:mt-24">
          {[
            { value: "73%", label: "Conversion Rate", description: "Average qualification success" },
            { value: "50+", label: "Languages", description: "Global communication support" },
            { value: "24/7", label: "Availability", description: "Round-the-clock operations" }
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center group"
            >
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 lg:p-8 hover:border-white/20 transition-all duration-500 group-hover:bg-white/10">
                <div className="text-3xl lg:text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-white/80 font-medium mb-1">{stat.label}</div>
                <div className="text-white/50 text-sm">{stat.description}</div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 lg:mt-24">
          <button className="group bg-white text-black px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 hover:bg-white/90 flex items-center gap-3 mx-auto">
            <span>Start Your Free Demo</span>
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
          <p className="text-white/50 text-sm mt-4">No credit card required • Setup in 5 minutes</p>
        </div>
      </div>
    </div>
  );
};

export default HowVaaniWorks;