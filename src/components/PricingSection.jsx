import React, { useState, useEffect } from 'react';
import { Check, ArrowRight, Phone, Calendar, MessageCircle, Shield, Clock, Users, Zap, ChevronDown, ChevronUp, Sparkles, Star, DollarSign } from 'lucide-react';

const PricingSection = () => {
  const [openFAQ, setOpenFAQ] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const pricingFeatures = [
    {
      icon: <DollarSign className="w-5 h-5" />,
      title: "Pay Only for Results",
      description: "No monthly fees, setup costs, or hidden charges"
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "Qualified Leads Only",
      description: "We pre-qualify every lead before sending to your team"
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: "48-Hour Setup",
      description: "Go live in under 2 days with white-glove onboarding"
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: "Risk-Free Trial",
      description: "30-day money-back guarantee on your first qualified leads"
    }
  ];

  const ctaOptions = [
    {
      id: 'demo',
      icon: <Calendar className="w-6 h-6" />,
      title: "Book a Live Demo",
      subtitle: "See Vaani in action",
      description: "15-minute personalized demo showing how Vaani will work for your business",
      action: "Schedule Demo",
      popular: true
    },
    {
      id: 'quote',
      icon: <MessageCircle className="w-6 h-6" />,
      title: "Get Custom Quote",
      subtitle: "Tailored pricing",
      description: "Receive a personalized quote based on your specific requirements and volume",
      action: "Request Quote",
      popular: false
    },
    {
      id: 'call',
      icon: <Phone className="w-6 h-6" />,
      title: "Speak with Expert",
      subtitle: "Immediate assistance",
      description: "Talk directly with our AI specialists about your lead generation challenges",
      action: "Call Now",
      popular: false
    }
  ];


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
        <div className="absolute w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse top-20 left-20" style={{ animationDuration: '8s' }} />
        <div className="absolute w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse bottom-20 right-20" style={{ animationDuration: '6s', animationDelay: '3s' }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-16 lg:mb-24">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className='flex items-center gap-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full px-3 py-2'>
              <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
              <span className="text-white/60 text-sm font-medium tracking-widest uppercase">
                Get Started
              </span>
            </div>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 lg:mb-8 leading-tight">
            Simple Pricing,<br />
            <span className="text-white/70">Maximum Results</span>
          </h2>
          
          <p className="text-white/60 text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
            Pay only for qualified leads delivered to your sales team. No monthly fees, no setup costs, no risk.
          </p>
        </div>

        {/* Pricing Model Highlights */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 lg:mb-24">
          {pricingFeatures.map((feature, index) => (
            <div
              key={index}
              className={`group transition-all duration-700 delay-${index * 100} ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-white/20 hover:bg-white/10 transition-all duration-500 h-full">
                <div className="p-3 bg-white/10 rounded-xl group-hover:bg-white/20 transition-all duration-300 w-fit mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Pricing Card */}
        <div className="max-w-4xl mx-auto mb-16 lg:mb-24">
          <div className="bg-gradient-to-br from-white/10 via-white/5 to-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 lg:p-12 relative overflow-hidden">
            
            {/* Popular Badge */}
            <div className="absolute -top-1 -right-1">
              <div className="bg-white text-black px-6 py-2 rounded-bl-2xl rounded-tr-3xl font-bold text-sm flex items-center gap-2">
                <Star className="w-4 h-4 fill-current" />
                Most Popular
              </div>
            </div>

            <div className="text-center mb-8">
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                Pay-Per-Qualified-Lead Model
              </h3>
              <div className="flex items-center justify-center gap-2 mb-4">
                <span className="text-4xl lg:text-5xl font-bold text-white">₹ 200</span>
                <span className="text-white/60 text-lg">per qualified lead</span>
              </div>
              <p className="text-white/70 max-w-2xl mx-auto">
                Pricing varies by industry and qualification complexity. Most clients see 3-5x ROI within the first month.
              </p>
            </div>

            {/* What's Included */}
            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-white flex items-center gap-2">
                  <Sparkles className="w-5 h-5" />
                  What's Included
                </h4>
                <div className="space-y-3">
                  {[
                    "AI-powered lead qualification",
                    "50+ language support",
                    "CRM integration & sync",
                    "Real-time analytics dashboard",
                    "Dedicated success manager",
                    "White-glove setup & training"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-white/80">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-xl font-bold text-white flex items-center gap-2">
                  <Shield className="w-5 h-5" />
                  Zero Risk Guarantee
                </h4>
                <div className="space-y-3">
                  {[
                    "30-day money-back guarantee",
                    "No setup or monthly fees",
                    "Cancel anytime, no contracts",
                    "Free 48-hour implementation",
                    "Unlimited support included",
                    "Performance optimization"
                  ].map((guarantee, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-white/80">{guarantee}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Options */}
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 mb-16 lg:mb-24">
          {ctaOptions.map((option, index) => (
            <div
              key={option.id}
              className={`group relative transition-all duration-500 ${
                option.popular ? 'scale-105' : 'hover:scale-105'
              }`}
            >
              <div className={`bg-white/5 backdrop-blur-xl border rounded-2xl p-6 lg:p-8 transition-all duration-500 h-full ${
                option.popular 
                  ? 'border-white/30 shadow-2xl shadow-white/10' 
                  : 'border-white/10 hover:border-white/20'
              }`}>
                
                {option.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-white text-black px-4 py-1 rounded-full text-sm font-bold">
                      Recommended
                    </div>
                  </div>
                )}

                <div className="text-center">
                  <div className={`p-4 rounded-2xl mx-auto w-fit mb-6 transition-all duration-300 ${
                    option.popular 
                      ? 'bg-white/20' 
                      : 'bg-white/10 group-hover:bg-white/20'
                  }`}>
                    {option.icon}
                  </div>

                  <h3 className="text-xl lg:text-2xl font-bold text-white mb-2">
                    {option.title}
                  </h3>
                  <p className="text-white/60 text-sm font-medium mb-4">
                    {option.subtitle}
                  </p>
                  <p className="text-white/70 text-sm leading-relaxed mb-6">
                    {option.description}
                  </p>

                  <button className={`w-full py-3 px-6 rounded-full font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
                    option.popular
                      ? 'bg-white text-black hover:bg-white/90'
                      : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
                  }`}>
                    <span>{option.action}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            {/* <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h3>
            <p className="text-white/60 text-lg">
              Common questions about pricing, privacy, and getting started
            </p> */}
          </div>

          {/* <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-300"
              >
                <button
                  className="w-full p-6 text-left flex items-center justify-between focus:outline-none"
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                >
                  <span className="text-white font-semibold text-lg">{faq.question}</span>
                  {openFAQ === index ? (
                    <ChevronUp className="w-5 h-5 text-white/60 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-white/60 flex-shrink-0" />
                  )}
                </button>
                
                {openFAQ === index && (
                  <div className="px-6 pb-6 animate-in slide-in-from-top duration-300">
                    <p className="text-white/70 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>} */}
        </div> 

        {/* Final CTA */}
        

      </div>
    </div>
  );
};

export default PricingSection;