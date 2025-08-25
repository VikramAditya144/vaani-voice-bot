import React, { useState, useEffect } from 'react';
import { 
  Building2, GraduationCap, Heart, ShoppingCart, Car, Briefcase,
  TrendingUp, Users, Calendar, Phone, BarChart3, Clock,
  ArrowUpRight, ChevronRight, Sparkles, Target, Award, Zap
} from 'lucide-react';

const Industries = ({ onIndustrySelect }) => {
  const [activeIndustry, setActiveIndustry] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);

  const industries = [
    {
      id: 1,
      icon: <Building2 className="w-8 h-8" />,
      title: "Real Estate",
      subtitle: "Property Lead Automation",
      description: "Transform property inquiries into qualified leads with AI-powered follow-ups and personalized conversations",
      stats: { conversion: "67%", calls: "2,400+", time: "80%" },
      features: ["Lead Qualification", "Property Matching", "Tour Scheduling", "Follow-up Automation"],
      caseStudy: {
        company: "Mumbai Realty Group",
        challenge: "Manual follow-ups causing 60% lead loss",
        solution: "Automated Hindi/English property consultations",
        results: "3x faster lead qualification, 67% conversion rate"
      },
      mockInterface: {
        status: "Qualifying Lead",
        prospect: "Priya Sharma - 3BHK Inquiry",
        language: "Hindi (Mumbai Dialect)",
        nextAction: "Schedule Site Visit"
      },
      gradient: "from-blue-500/20 to-cyan-500/20",
      size: "large"
    },
    {
      id: 2,
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Education",
      subtitle: "Admissions Enhancement",
      description: "Boost enrollment rates with personalized admission calls and automated student guidance",
      stats: { conversion: "84%", calls: "1,800+", time: "90%" },
      features: ["Course Counseling", "Admission Guidance", "Parent Communication", "Fee Discussion"],
      caseStudy: {
        company: "Delhi Engineering College",
        challenge: "Low admission conversion despite high inquiries",
        solution: "Multi-language counseling with regional context",
        results: "84% inquiry-to-admission conversion rate"
      },
      mockInterface: {
        status: "Course Counseling",
        prospect: "Rahul Patel - B.Tech Inquiry",
        language: "Gujarati + English",
        nextAction: "Application Assistance"
      },
      gradient: "from-green-500/20 to-emerald-500/20",
      size: "medium"
    },
    {
      id: 3,
      icon: <Heart className="w-8 h-8" />,
      title: "Healthcare",
      subtitle: "Patient Engagement",
      description: "Streamline appointment scheduling and patient communication with empathetic AI interactions",
      stats: { conversion: "91%", calls: "3,200+", time: "75%" },
      features: ["Appointment Booking", "Reminder Calls", "Follow-up Care", "Insurance Verification"],
      caseStudy: {
        company: "Chennai Multi-Specialty Hospital",
        challenge: "High no-show rates and manual scheduling",
        solution: "Tamil + English appointment management",
        results: "91% appointment confirmation rate"
      },
      mockInterface: {
        status: "Appointment Reminder",
        prospect: "Mrs. Lakshmi - Cardiology",
        language: "Tamil (Chennai)",
        nextAction: "Confirm Appointment"
      },
      gradient: "from-red-500/20 to-pink-500/20",
      size: "medium"
    },
    {
      id: 4,
      icon: <ShoppingCart className="w-8 h-8" />,
      title: "E-commerce",
      subtitle: "Sales Acceleration",
      description: "Convert abandoned carts and nurture high-value customers with intelligent sales conversations",
      stats: { conversion: "56%", calls: "5,100+", time: "85%" },
      features: ["Cart Recovery", "Upselling", "Customer Support", "Order Assistance"],
      caseStudy: {
        company: "FashionForward Online",
        challenge: "78% cart abandonment rate",
        solution: "Personalized recovery calls in customer's language",
        results: "56% cart recovery conversion"
      },
      mockInterface: {
        status: "Cart Recovery",
        prospect: "Anjali Singh - ₹4,500 Cart",
        language: "Hindi + English",
        nextAction: "Offer Assistance"
      },
      gradient: "from-orange-500/20 to-yellow-500/20",
      size: "medium"
    },
    {
      id: 5,
      icon: <Car className="w-8 h-8" />,
      title: "Automotive",
      subtitle: "Sales & Service",
      description: "Drive vehicle sales and service bookings with expert automotive consultations",
      stats: { conversion: "72%", calls: "1,600+", time: "70%" },
      features: ["Test Drive Booking", "Service Reminders", "Finance Options", "Trade-in Evaluation"],
      caseStudy: {
        company: "AutoMax Dealers",
        challenge: "Low test drive conversion rates",
        solution: "Regional language vehicle consultations",
        results: "72% test drive to purchase rate"
      },
      mockInterface: {
        status: "Vehicle Consultation",
        prospect: "Vikram Reddy - SUV Interest",
        language: "Telugu + English",
        nextAction: "Schedule Test Drive"
      },
      gradient: "from-purple-500/20 to-indigo-500/20",
      size: "medium"
    },
    {
      id: 6,
      icon: <Briefcase className="w-8 h-8" />,
      title: "Insurance",
      subtitle: "Policy & Claims",
      description: "Enhance policy sales and claims assistance with trustworthy, multilingual support",
      stats: { conversion: "63%", calls: "2,900+", time: "88%" },
      features: ["Policy Consultation", "Claims Processing", "Renewal Reminders", "Risk Assessment"],
      caseStudy: {
        company: "SecureLife Insurance",
        challenge: "Complex policy explanations causing confusion",
        solution: "Simplified explanations in native languages",
        results: "63% policy conversion rate"
      },
      mockInterface: {
        status: "Policy Consultation",
        prospect: "Sunita Joshi - Term Insurance",
        language: "Marathi + English",
        nextAction: "Quote Generation"
      },
      gradient: "from-teal-500/20 to-blue-500/20",
      size: "large"
    }
  ];

  // Auto-rotate industries
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndustry((prev) => (prev + 1) % industries.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const getGridClass = (size) => {
    return size === 'large' ? 'md:col-span-2 lg:col-span-2' : 'md:col-span-1 lg:col-span-1';
  };

  const handleCardClick = (industry, index) => {
    setActiveIndustry(index);
    // Add navigation after a short delay to show the selection
    if (onIndustrySelect) {
      setTimeout(() => {
        onIndustrySelect(industry);
      }, 300);
    }
  };

  return (
    <div className="relative bg-black min-h-screen px-4 py-16 lg:py-24 overflow-hidden">
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Gradient Orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse top-20 left-20" style={{ animationDuration: '8s' }} />
        <div className="absolute w-80 h-80 bg-white/3 rounded-full blur-3xl animate-pulse bottom-20 right-20" style={{ animationDuration: '12s', animationDelay: '3s' }} />
        <div className="absolute w-64 h-64 bg-white/2 rounded-full blur-3xl animate-pulse top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" style={{ animationDuration: '10s', animationDelay: '5s' }} />
      </div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-20 lg:mb-28">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className='flex items-center gap-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full px-4 py-3'>
              <Sparkles className="w-5 h-5 text-white animate-pulse" />
              <span className="text-white/70 text-sm font-semibold tracking-widest uppercase">
                Industries We Serve
              </span>
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            </div>
          </div>
           
          <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-8 lg:mb-10 leading-tight">
            Tailored Solutions<br />
            <span className="text-white/70">for Every Industry</span>
          </h2>
          
          <p className="text-white/60 text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed">
            Specialized AI calling solutions designed for your industry's unique requirements
          </p>
        </div>

        {/* Industries Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-20">
          {industries.map((industry, index) => (
            <div
              key={industry.id}
              className={`${getGridClass(industry.size)} group cursor-pointer transition-all duration-700 ${
                activeIndustry === index ? 'scale-[1.02] z-20' : 'hover:scale-[1.01] z-10'
              }`}
              onClick={() => handleCardClick(industry, index)}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className={`relative bg-gradient-to-br ${industry.gradient} backdrop-blur-xl border rounded-3xl p-8 lg:p-10 h-full transition-all duration-700 overflow-hidden ${
                activeIndustry === index 
                  ? 'border-white/30 shadow-2xl shadow-white/10' 
                  : 'border-white/10 hover:border-white/20'
              } ${industry.size === 'large' ? 'min-h-[500px]' : 'min-h-[450px]'}`}>
                
                {/* Header */}
                <div className="flex items-start justify-between mb-8">
                  <div className={`p-4 rounded-2xl transition-all duration-500 ${
                    activeIndustry === index ? 'bg-white/20 scale-110' : 'bg-white/10'
                  }`}>
                    <div className={`transition-all duration-300 ${
                      activeIndustry === index ? 'text-white scale-110' : 'text-white/70'
                    }`}>
                      {industry.icon}
                    </div>
                  </div>
                  
                  <ArrowUpRight className={`w-6 h-6 transition-all duration-300 ${
                    activeIndustry === index || hoveredCard === index ? 'text-white scale-110' : 'text-white/40'
                  }`} />
                </div>

                {/* Content */}
                <div className="space-y-6 mb-8">
                  <div>
                    <h3 className={`text-2xl lg:text-3xl font-bold transition-all duration-500 mb-2 ${
                      activeIndustry === index ? 'text-white' : 'text-white/90'
                    }`}>
                      {industry.title}
                    </h3>
                    <p className={`text-sm font-medium transition-colors duration-500 ${
                      activeIndustry === index ? 'text-white/80' : 'text-white/50'
                    }`}>
                      {industry.subtitle}
                    </p>
                  </div>
                  
                  <p className={`text-white/70 leading-relaxed transition-all duration-500 ${
                    activeIndustry === index ? 'text-white/85' : ''
                  } ${industry.size === 'large' ? 'text-base' : 'text-sm'}`}>
                    {industry.description}
                  </p>
                </div>

                {/* Live Interface Mockup */}
                <div className={`bg-black/50 rounded-2xl p-5 border transition-all duration-500 mb-6 ${
                  activeIndustry === index ? 'border-white/20 bg-black/60' : 'border-white/10'
                }`}>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                        <span className="text-xs text-white/80 font-medium">LIVE</span>
                      </div>
                      <span className="text-xs text-white/60">{industry.mockInterface.status}</span>
                    </div>
                    
                    <div className="bg-white/10 rounded-lg p-3">
                      <div className="text-sm font-medium text-white mb-1">
                        {industry.mockInterface.prospect}
                      </div>
                      <div className="text-xs text-white/70">
                        Language: {industry.mockInterface.language}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between p-2 bg-white/5 rounded-lg">
                      <span className="text-xs text-white/70">Next Action:</span>
                      <span className="text-xs text-white font-medium">
                        {industry.mockInterface.nextAction}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Stats Row */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {Object.entries(industry.stats).map(([key, value], idx) => (
                    <div key={key} className="text-center">
                      <div className={`text-lg font-bold transition-colors duration-300 ${
                        activeIndustry === index ? 'text-white' : 'text-white/80'
                      }`}>
                        {value}
                      </div>
                      <div className="text-xs text-white/60 capitalize">{key}</div>
                    </div>
                  ))}
                </div>

                {/* Features Tags */}
                <div className="flex flex-wrap gap-2">
                  {industry.features.slice(0, industry.size === 'large' ? 4 : 3).map((feature, idx) => (
                    <span
                      key={idx}
                      className={`text-xs px-3 py-1.5 rounded-full transition-all duration-500 ${
                        activeIndustry === index 
                          ? 'bg-white/20 text-white border border-white/30' 
                          : 'bg-white/10 text-white/60 border border-white/10'
                      }`}
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Active Indicator */}
                {activeIndustry === index && (
                  <div className="absolute top-6 left-6">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50" />
                  </div>
                )}

                {/* Learn More Button */}
                <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-4 py-2 text-white text-sm font-medium hover:bg-white/30 transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Industry Navigation */}
        <div className="flex justify-center mb-20">
          <div className="flex gap-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full p-3">
            {industries.map((industry, index) => (
              <button
                key={index}
                onClick={() => setActiveIndustry(index)}
                className={`group relative overflow-hidden transition-all duration-300 ${
                  activeIndustry === index 
                    ? 'w-12 h-4 bg-white rounded-full' 
                    : 'w-4 h-4 bg-white/30 hover:bg-white/50 rounded-full'
                }`}
                title={industry.title}
              >
                {activeIndustry === index && (
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-white to-green-400 rounded-full animate-pulse" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Case Study Highlight */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 lg:p-12 mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Award className="w-6 h-6 text-white" />
                <span className="text-white/70 text-sm font-medium tracking-wider uppercase">
                  Success Story
                </span>
              </div>
              
              <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                {industries[activeIndustry].caseStudy.company}
              </h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-white font-semibold mb-2">Challenge</h4>
                  <p className="text-white/70">{industries[activeIndustry].caseStudy.challenge}</p>
                </div>
                
                <div>
                  <h4 className="text-white font-semibold mb-2">Vaani Solution</h4>
                  <p className="text-white/70">{industries[activeIndustry].caseStudy.solution}</p>
                </div>
                
                <div>
                  <h4 className="text-white font-semibold mb-2">Results</h4>
                  <p className="text-white/70">{industries[activeIndustry].caseStudy.results}</p>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: <TrendingUp />, label: "Conversion Rate", value: industries[activeIndustry].stats.conversion },
                { icon: <Phone />, label: "Calls Handled", value: industries[activeIndustry].stats.calls },
                { icon: <Clock />, label: "Time Saved", value: industries[activeIndustry].stats.time },
                { icon: <Target />, label: "Success Rate", value: "94%" }
              ].map((metric, index) => (
                <div key={index} className="bg-white/10 rounded-2xl p-6 text-center">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <div className="w-6 h-6 text-white">{metric.icon}</div>
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">{metric.value}</div>
                  <div className="text-sm text-white/60">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <button className="group bg-gradient-to-r from-white to-white/90 text-black px-10 py-5 rounded-full text-xl font-bold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-white/20 flex items-center gap-4 mx-auto mb-6">
            <span>Explore Your Industry Solution</span>
            <ChevronRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
          </button>
          <p className="text-white/60 text-lg">Custom demo • Industry-specific scenarios • See immediate ROI</p>
        </div>
      </div>
    </div>
  );
};

export default Industries;