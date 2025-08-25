import React, { useState, useEffect } from 'react';
import { Check, X, Clock, Users, Zap, Globe, CreditCard, Settings, Sparkles, ArrowRight, Shield, TrendingUp } from 'lucide-react';

const ComparisonSection = () => {
  const [activeComparison, setActiveComparison] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const comparisonData = [
    {
      feature: "Multilingual Support",
      icon: <Globe className="w-5 h-5" />,
      vaani: {
        status: true,
        detail: "50+ Languages",
        description: "Native speaker quality in 50+ languages with cultural context understanding"
      },
      competitor: {
        status: "limited",
        detail: "5-10 Languages",
        description: "Basic language support with robotic translations"
      }
    },
    {
      feature: "Setup & Integration", 
      icon: <Settings className="w-5 h-5" />,
      vaani: {
        status: true,
        detail: "Done-for-you",
        description: "White-glove setup with dedicated integration specialists"
      },
      competitor: {
        status: false,
        detail: "DIY Setup",
        description: "Complex self-service configuration requiring technical expertise"
      }
    },
    {
      feature: "Pricing Model",
      icon: <CreditCard className="w-5 h-5" />,
      vaani: {
        status: true,
        detail: "Pay-per-lead",
        description: "Only pay for qualified leads delivered to your sales team"
      },
      competitor: {
        status: false,
        detail: "Fixed Subscription",
        description: "Monthly fees regardless of performance or results"
      }
    },
    {
      feature: "Onboarding Time",
      icon: <Clock className="w-5 h-5" />,
      vaani: {
        status: true,
        detail: "< 48 Hours",
        description: "Go live in under 2 days with expert guidance"
      },
      competitor: {
        status: false,
        detail: "1-2 Weeks",
        description: "Lengthy setup process with potential delays"
      }
    },
    {
      feature: "AI Quality",
      icon: <Sparkles className="w-5 h-5" />,
      vaani: {
        status: true,
        detail: "Human-like",
        description: "Advanced conversational AI with emotional intelligence"
      },
      competitor: {
        status: "limited",
        detail: "Robotic",
        description: "Basic scripted responses with limited adaptability"
      }
    },
    {
      feature: "Lead Qualification",
      icon: <Users className="w-5 h-5" />,
      vaani: {
        status: true,
        detail: "73% Success Rate",
        description: "Industry-leading qualification accuracy with smart follow-ups"
      },
      competitor: {
        status: "limited",
        detail: "45% Success Rate",
        description: "Generic qualification with high false positive rates"
      }
    }
  ];

  const benefits = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "3x Higher Conversion",
      description: "Achieve 73% qualification rates vs industry average of 45%"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "10x Faster Setup",
      description: "Live in 48 hours vs weeks of complex configuration"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Zero Risk Pricing",
      description: "Pay only for qualified leads, no upfront costs"
    }
  ];

  const StatusIcon = ({ status, className = "" }) => {
    if (status === true) {
      return <Check className={`w-5 h-5 text-green-400 ${className}`} />;
    } else if (status === "limited") {
      return (
        <div className={`w-5 h-5 rounded-full bg-yellow-400/20 border-2 border-yellow-400 flex items-center justify-center ${className}`}>
          <div className="w-2 h-2 bg-yellow-400 rounded-full" />
        </div>
      );
    } else {
      return <X className={`w-5 h-5 text-red-400 ${className}`} />;
    }
  };

  return (
    <div className="relative bg-black min-h-screen px-4 py-16 lg:py-32 lg:px-8 overflow-hidden">
      
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Gradient Orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse top-32 right-20" style={{ animationDuration: '8s' }} />
        <div className="absolute w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse bottom-32 left-20" style={{ animationDuration: '6s', animationDelay: '2s' }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-16 lg:mb-24">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className='flex items-center gap-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full px-3 py-2'>
              <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
              <span className="text-white/60 text-sm font-medium tracking-widest uppercase">
                How Vaani Compares
              </span>
            </div>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 lg:mb-8 leading-tight">
            Why Choose Vaani Over<br />
            <span className="text-white/70">Traditional SaaS?</span>
          </h2>
          
          <p className="text-white/60 text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
            See how our managed AI approach delivers superior results compared to typical DIY solutions
          </p>
        </div>

        {/* Benefits Overview */}
        <div className="grid md:grid-cols-3 gap-6 mb-16 lg:mb-24">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`group transition-all duration-700 delay-${index * 100} ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 lg:p-8 hover:border-white/20 hover:bg-white/10 transition-all duration-500 h-full">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-white/10 rounded-xl group-hover:bg-white/20 transition-all duration-300">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white">{benefit.title}</h3>
                </div>
                <p className="text-white/70 leading-relaxed">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison Table */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden">
          
          {/* Table Header */}
          <div className="bg-white/10 p-6 lg:p-8 border-b border-white/10">
            <div className="grid grid-cols-3 gap-4 lg:gap-8">
              <div className="text-white/60 text-sm font-medium uppercase tracking-widest">
                Feature
              </div>
              <div className="text-center">
                <div className="inline-flex items-center gap-2 bg-white text-black px-4 py-2 rounded-full text-sm font-bold">
                  <Sparkles className="w-4 h-4" />
                  Vaani (Managed)
                </div>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/80 px-4 py-2 rounded-full text-sm font-medium">
                  Typical SaaS
                </div>
              </div>
            </div>
          </div>

          {/* Table Body */}
          <div className="divide-y divide-white/10">
            {comparisonData.map((item, index) => (
              <div
                key={index}
                className={`p-6 lg:p-8 transition-all duration-500 cursor-pointer hover:bg-white/5 ${
                  activeComparison === index ? 'bg-white/5' : ''
                }`}
                onClick={() => setActiveComparison(activeComparison === index ? -1 : index)}
              >
                <div className="grid grid-cols-3 gap-4 lg:gap-8 items-center">
                  
                  {/* Feature */}
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-white/10 rounded-lg text-white/80">
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-white font-semibold">{item.feature}</div>
                    </div>
                  </div>

                  {/* Vaani */}
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <StatusIcon status={item.vaani.status} />
                      <span className="text-white font-medium">{item.vaani.detail}</span>
                    </div>
                  </div>

                  {/* Competitor */}
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <StatusIcon status={item.competitor.status} />
                      <span className="text-white/70 font-medium">{item.competitor.detail}</span>
                    </div>
                  </div>
                </div>

                {/* Expanded Details */}
                {activeComparison === index && (
                  <div className="mt-6 pt-6 border-t border-white/10 grid md:grid-cols-2 gap-6 animate-in slide-in-from-top duration-300">
                    <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Sparkles className="w-4 h-4 text-green-400" />
                        <span className="text-green-400 font-medium text-sm">Vaani Advantage</span>
                      </div>
                      <p className="text-white/80 text-sm">{item.vaani.description}</p>
                    </div>
                    <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <X className="w-4 h-4 text-red-400" />
                        <span className="text-red-400 font-medium text-sm">Traditional Limitation</span>
                      </div>
                      <p className="text-white/60 text-sm">{item.competitor.description}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 lg:mt-24 text-center">
          <div className="bg-gradient-to-r from-white/10 via-white/5 to-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-8 lg:p-12">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-white mb-2">10x</div>
                <div className="text-white/70">Faster Implementation</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-white mb-2">73%</div>
                <div className="text-white/70">Lead Qualification Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-white mb-2">$0</div>
                <div className="text-white/70">Setup & Monthly Fees</div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 lg:mt-24">
          <div className="space-y-6">
            <h3 className="text-2xl lg:text-3xl font-bold text-white">
              Ready to Experience the Difference?
            </h3>
            <p className="text-white/60 max-w-2xl mx-auto">
              Join hundreds of businesses who chose Vaani's managed approach over traditional SaaS limitations
            </p>
            <button className="group bg-white text-black px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 hover:bg-white/90 flex items-center gap-3 mx-auto">
              <span>Start Your Free Demo</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            <p className="text-white/50 text-sm">
              No setup fees • Pay only for results • 48-hour implementation
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComparisonSection;