import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Users, Globe, TrendingUp, Zap, BarChart, DollarSign, Target, Award, Phone, MessageCircle, Bot, Building, Headphones, Mic } from 'lucide-react';

const PitchDeck = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(true);

  const slides = [
    {
      type: 'title',
      title: 'Vaani',
      subtitle: 'Apke Business ki Vaani!',
      tagline: 'Multilingual. Managed. Measured.',
      description: 'End-to-End Voice Agents for Indian Businesses',
      contact: 'hello@vaani.ai'
    },
    {
      type: 'problem',
      title: 'The Problem',
      subtitle: 'Indian SMEs Lose Revenue Due to:',
      problems: [
        {
          icon: <TrendingUp className="w-8 h-8 text-red-400" />,
          title: 'Missed Sales Opportunities',
          description: '47% of Indian SMEs cite sales as their greatest challenge, with 70% of leads going unconverted due to poor follow-ups.',
          stat: '70%'
        },
        {
          icon: <Globe className="w-8 h-8 text-red-400" />,
          title: 'Language Barriers',
          description: '22+ official languages; Tier 2/3 markets require hyperlocal dialects.',
          stat: '22+'
        },
        {
          icon: <Zap className="w-8 h-8 text-red-400" />,
          title: 'Tech Complexity',
          description: '68% lack resources to integrate DIY SaaS voice AI solutions.',
          stat: '68%'
        }
      ]
    },
    {
      type: 'solution',
      title: 'The Solution',
      subtitle: 'Vaani: Done-For-You Voice AI',
      solutions: [
        {
          icon: <Bot className="w-8 h-8 text-white" />,
          title: 'Managed Service',
          description: 'Full setup, campaign execution, and reporting—no tech lift for clients.'
        },
        {
          icon: <MessageCircle className="w-8 h-8 text-white" />,
          title: 'Multilingual Mastery',
          description: '5 core languages (Hindi, English, Tamil, Telugu, Bengali) with dialect adaptation.'
        },
        {
          icon: <DollarSign className="w-8 h-8 text-white" />,
          title: 'Revenue Focus',
          description: 'Outbound/inbound sales calls driving lead conversion and revenue growth.'
        }
      ]
    },
    {
      type: 'market',
      title: 'Market Opportunity',
      subtitle: '$5B+ Market by 2030',
      marketData: [
        {
          segment: 'Conversational AI',
          size2024: '$516.8M',
          projection2033: '$4,936.9M',
          cagr: '26.4%'
        },
        {
          segment: 'Voice Recognition',
          size2024: '$462.8M',
          projection2033: '$2,982.4M',
          cagr: '23%'
        }
      ],
      totalAddressable: '60M+ SMEs'
    },
    {
      type: 'product',
      title: 'Product & Tech',
      subtitle: 'Core Features',
      features: [
        {
          icon: <Globe className="w-8 h-8 text-white" />,
          title: 'Dialect Intelligence',
          description: 'NLP for regional slang (e.g., "Bhaiyya" in Hindi vs. "Anna" in Tamil)',
          metric: 'Regional Adaptation'
        },
        {
          icon: <BarChart className="w-8 h-8 text-white" />,
          title: 'Performance Dashboard',
          description: 'Tracks FCR (First Call Resolution), CSAT, and revenue impact',
          metric: 'Real-time Analytics'
        },
        {
          icon: <Building className="w-8 h-8 text-white" />,
          title: 'CRM Integration',
          description: 'Works with Zoho, Salesforce, Tally',
          metric: '$0.0062–$0.0173/min'
        }
      ]
    },
    {
      type: 'business',
      title: 'Business Model',
      subtitle: 'Pay-for-Performance Pricing',
      models: [
        {
          name: 'Pay-per-Qualified Lead',
          price: '₹200/lead',
          useCase: 'Real estate/edtech'
        },
        {
          name: 'Revenue Share',
          price: '10% of closed deals',
          useCase: 'High-ticket sales'
        }
      ],
      mvpCost: '$10K–$25K'
    },
    {
      type: 'gtm',
      title: 'Go-to-Market',
      subtitle: '3-Step Launch Plan',
      steps: [
        {
          phase: 'Pilot',
          description: 'Target 50 SMEs in real estate/education via chamber-of-commerce partnerships',
          timeline: 'Q1 2025'
        },
        {
          phase: 'Scale',
          description: 'Expand to healthcare with appointment scheduling; add 3 languages',
          timeline: 'Q3 2025'
        },
        {
          phase: 'Enterprise',
          description: 'Integrate inbound support for e-commerce/IT services',
          timeline: '2027'
        }
      ]
    },
    {
      type: 'competitive',
      title: 'Competitive Edge',
      subtitle: 'Vaani vs. Competitors',
      comparison: [
        {
          differentiator: 'Service Model',
          vaani: 'Managed end-to-end',
          competitors: 'SaaS (self-setup)'
        },
        {
          differentiator: 'Language Depth',
          vaani: 'Dialect adaptation',
          competitors: 'Basic multilingual'
        },
        {
          differentiator: 'Onboarding',
          vaani: '48 hours',
          competitors: 'Weeks'
        }
      ]
    },
    {
      type: 'traction',
      title: 'Traction & Financials',
      subtitle: 'Projections (Year 1)',
      metrics: [
        {
          label: 'Pilot Revenue',
          value: '₹2–5L/month',
          description: '10 clients, 100 leads/day at ₹200/lead'
        },
        {
          label: 'Market Share',
          value: '5%',
          description: 'of India\'s $500M conversational AI market by 2026'
        },
        {
          label: 'Roadmap',
          value: '1M+ calls/month',
          description: 'by 2027 with healthcare vertical'
        }
      ]
    },
    {
      type: 'team',
      title: 'Team & Ask',
      subtitle: 'Vision: Democratize voice AI for 1M+ Indian SMEs by 2030',
      team: 'AI architects (ex-IBM/Texas Instruments), SaaS growth experts',
      ask: '₹5 crore',
      uses: [
        'Language expansion (20+ dialects)',
        'Sales team hiring',
        'R&D for vertical-specific bots'
      ]
    }
  ];

  const cardClasses = isDarkMode 
    ? 'bg-white/5 border-white/10 text-white' 
    : 'bg-black/5 border-black/10 text-black';

  const glassEffect = isDarkMode
    ? 'bg-white/10 backdrop-blur-xl border border-white/20'
    : 'bg-black/10 backdrop-blur-xl border border-black/20';

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const renderSlide = (slide) => {
    switch (slide.type) {
      case 'title':
        return (
          <div className="flex flex-col items-center justify-center h-full text-center space-y-8">
            <div className="space-y-6">
              <h1 className="font-serif text-8xl md:text-9xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                {slide.title}
              </h1>
              <p className="text-3xl md:text-4xl font-light text-gray-300">
                {slide.subtitle}
              </p>
              <div className="space-y-2">
                <p className="text-xl md:text-2xl font-medium text-gray-400">
                  {slide.tagline}
                </p>
                <p className="text-lg md:text-xl text-gray-500">
                  {slide.description}
                </p>
              </div>
            </div>
            <div className={`${glassEffect} rounded-2xl px-8 py-4`}>
              <p className="text-lg font-mono">{slide.contact}</p>
            </div>
          </div>
        );

      case 'problem':
        return (
          <div className="space-y-12">
            <div className="text-center">
              <h2 className="font-serif text-6xl md:text-7xl font-bold mb-4">{slide.title}</h2>
              <p className={`text-2xl ${isDarkMode ? 'text-white/80' : 'text-gray-700'}`}>
                {slide.subtitle}
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {slide.problems.map((problem, index) => (
                <div
                  key={index}
                  className={`${glassEffect} rounded-3xl p-8 transition-all duration-500 hover:scale-105`}
                >
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div className={`p-4 rounded-2xl ${isDarkMode ? 'bg-white/10' : 'bg-gray-100'}`}>
                        {problem.icon}
                      </div>
                      <div className="text-right">
                        <span className="text-4xl font-bold text-red-400">{problem.stat}</span>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-3">{problem.title}</h3>
                      <p className={`leading-relaxed ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>
                        {problem.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'solution':
        return (
          <div className="space-y-12">
            <div className="text-center">
              <h2 className="font-serif text-6xl md:text-7xl font-bold mb-4">{slide.title}</h2>
              <p className={`text-2xl ${isDarkMode ? 'text-white/80' : 'text-gray-700'}`}>
                {slide.subtitle}
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {slide.solutions.map((solution, index) => (
                <div
                  key={index}
                  className={`${glassEffect} rounded-3xl p-8 transition-all duration-500 hover:scale-105`}
                >
                  <div className="space-y-6">
                    <div className={`p-4 rounded-2xl bg-gradient-to-br from-gray-600 to-gray-800 w-fit`}>
                      {solution.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-3">{solution.title}</h3>
                      <p className={`leading-relaxed ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>
                        {solution.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'market':
        return (
          <div className="space-y-12">
            <div className="text-center">
              <h2 className="font-serif text-6xl md:text-7xl font-bold mb-4">{slide.title}</h2>
              <p className={`text-2xl ${isDarkMode ? 'text-white/80' : 'text-gray-700'}`}>
                {slide.subtitle}
              </p>
            </div>
            <div className="space-y-8">
              <div className={`${glassEffect} rounded-3xl p-8`}>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-white/20">
                        <th className="text-left py-4 text-lg font-semibold">Segment</th>
                        <th className="text-left py-4 text-lg font-semibold">2024 Size</th>
                        <th className="text-left py-4 text-lg font-semibold">2033 Projection</th>
                        <th className="text-left py-4 text-lg font-semibold">CAGR</th>
                      </tr>
                    </thead>
                    <tbody>
                      {slide.marketData.map((data, index) => (
                        <tr key={index} className="border-b border-white/10">
                          <td className="py-4 font-medium">{data.segment}</td>
                          <td className="py-4 text-gray-300">{data.size2024}</td>
                          <td className="py-4 text-green-400 font-semibold">{data.projection2033}</td>
                          <td className="py-4 text-blue-400 font-semibold">{data.cagr}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="text-center">
                <div className={`${glassEffect} rounded-2xl p-6 inline-block`}>
                  <p className="text-xl font-semibold">Total Addressable Market</p>
                  <p className="text-3xl font-bold text-gradient bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
                    {slide.totalAddressable}
                  </p>
                </div>
              </div>
            </div>
          </div>
        );

      case 'product':
        return (
          <div className="space-y-12">
            <div className="text-center">
              <h2 className="font-serif text-6xl md:text-7xl font-bold mb-4">{slide.title}</h2>
              <p className={`text-2xl ${isDarkMode ? 'text-white/80' : 'text-gray-700'}`}>
                {slide.subtitle}
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {slide.features.map((feature, index) => (
                <div
                  key={index}
                  className={`${glassEffect} rounded-3xl p-8 transition-all duration-500 hover:scale-105`}
                >
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div className={`p-4 rounded-2xl bg-gradient-to-br from-gray-600 to-gray-800`}>
                        {feature.icon}
                      </div>
                      <span className="text-sm font-mono text-gray-400">{feature.metric}</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                      <p className={`leading-relaxed ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'business':
        return (
          <div className="space-y-12">
            <div className="text-center">
              <h2 className="font-serif text-6xl md:text-7xl font-bold mb-4">{slide.title}</h2>
              <p className={`text-2xl ${isDarkMode ? 'text-white/80' : 'text-gray-700'}`}>
                {slide.subtitle}
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {slide.models.map((model, index) => (
                <div
                  key={index}
                  className={`${glassEffect} rounded-3xl p-8 transition-all duration-500 hover:scale-105`}
                >
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold">{model.name}</h3>
                    <div className="text-3xl font-bold text-green-400">{model.price}</div>
                    <p className={`${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>
                      {model.useCase}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center">
              <div className={`${glassEffect} rounded-2xl p-6 inline-block`}>
                <p className="text-lg">Cost to Build MVP</p>
                <p className="text-2xl font-bold text-blue-400">{slide.mvpCost}</p>
              </div>
            </div>
          </div>
        );

      case 'gtm':
        return (
          <div className="space-y-12">
            <div className="text-center">
              <h2 className="font-serif text-6xl md:text-7xl font-bold mb-4">{slide.title}</h2>
              <p className={`text-2xl ${isDarkMode ? 'text-white/80' : 'text-gray-700'}`}>
                {slide.subtitle}
              </p>
            </div>
            <div className="space-y-6">
              {slide.steps.map((step, index) => (
                <div
                  key={index}
                  className={`${glassEffect} rounded-3xl p-8 transition-all duration-500 hover:scale-105`}
                >
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-600 to-gray-800 flex items-center justify-center">
                        <span className="text-xl font-bold text-white">{index + 1}</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-2xl font-bold">{step.phase}</h3>
                        <span className="text-sm font-mono text-gray-400">{step.timeline}</span>
                      </div>
                      <p className={`leading-relaxed ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'competitive':
        return (
          <div className="space-y-12">
            <div className="text-center">
              <h2 className="font-serif text-6xl md:text-7xl font-bold mb-4">{slide.title}</h2>
              <p className={`text-2xl ${isDarkMode ? 'text-white/80' : 'text-gray-700'}`}>
                {slide.subtitle}
              </p>
            </div>
            <div className={`${glassEffect} rounded-3xl p-8`}>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-4 text-lg font-semibold">Differentiator</th>
                      <th className="text-left py-4 text-lg font-semibold text-green-400">Vaani</th>
                      <th className="text-left py-4 text-lg font-semibold text-gray-400">Competitors</th>
                    </tr>
                  </thead>
                  <tbody>
                    {slide.comparison.map((item, index) => (
                      <tr key={index} className="border-b border-white/10">
                        <td className="py-4 font-medium">{item.differentiator}</td>
                        <td className="py-4 text-green-400 font-semibold">{item.vaani}</td>
                        <td className="py-4 text-gray-400">{item.competitors}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        );

      case 'traction':
        return (
          <div className="space-y-12">
            <div className="text-center">
              <h2 className="font-serif text-6xl md:text-7xl font-bold mb-4">{slide.title}</h2>
              <p className={`text-2xl ${isDarkMode ? 'text-white/80' : 'text-gray-700'}`}>
                {slide.subtitle}
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {slide.metrics.map((metric, index) => (
                <div
                  key={index}
                  className={`${glassEffect} rounded-3xl p-8 transition-all duration-500 hover:scale-105 text-center`}
                >
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-gray-300">{metric.label}</h3>
                    <div className="text-4xl font-bold text-green-400">{metric.value}</div>
                    <p className={`text-sm leading-relaxed ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>
                      {metric.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'team':
        return (
          <div className="space-y-12">
            <div className="text-center">
              <h2 className="font-serif text-6xl md:text-7xl font-bold mb-4">{slide.title}</h2>
              <p className={`text-xl ${isDarkMode ? 'text-white/80' : 'text-gray-700'}`}>
                {slide.subtitle}
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className={`${glassEffect} rounded-3xl p-8`}>
                <h3 className="text-2xl font-bold mb-4">Core Team</h3>
                <p className={`leading-relaxed ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>
                  {slide.team}
                </p>
              </div>
              <div className={`${glassEffect} rounded-3xl p-8`}>
                <h3 className="text-2xl font-bold mb-4">Ask: <span className="text-green-400">{slide.ask}</span></h3>
                <ul className="space-y-3">
                  {slide.uses.map((use, index) => (
                    <li key={index} className={`flex items-center space-x-3 ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>
                      <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                      <span>{use}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className={`min-h-screen transition-all duration-700 ${isDarkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 z-50 p-6">
        <div className={`${glassEffect} rounded-2xl px-6 py-4`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold">Vaani</h1>
              <span className="text-sm text-gray-400">Pitch Deck</span>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-400">
                {currentSlide + 1} / {slides.length}
              </span>
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className={`p-2 rounded-lg ${glassEffect} hover:scale-105 transition-all`}
              >
                {isDarkMode ? '☀️' : '🌙'}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Content */}
      <div className="pt-24 pb-8 px-6 min-h-screen flex items-center">
        <div className="w-full max-w-7xl mx-auto">
          {renderSlide(slides[currentSlide])}
        </div>
      </div>

      {/* Navigation */}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2">
        <div className={`${glassEffect} rounded-2xl px-6 py-4 flex items-center space-x-4`}>
          <button
            onClick={prevSlide}
            className="p-2 rounded-lg hover:bg-white/10 transition-all disabled:opacity-50"
            disabled={currentSlide === 0}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <div className="flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentSlide ? 'bg-white' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
          
          <button
            onClick={nextSlide}
            className="p-2 rounded-lg hover:bg-white/10 transition-all disabled:opacity-50"
            disabled={currentSlide === slides.length - 1}
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PitchDeck;