import React, { useState, useEffect } from 'react';
import { 
  Globe, Settings, Phone, BarChart3, Database, Clock, Sparkles, Zap, Shield, Users, 
  ChevronRight, ArrowUpRight, Activity, CheckCircle, Mic, Volume2, Languages, 
  TrendingUp, Calendar, Server, Wifi, Download, Upload, PlayCircle, PauseCircle,
  Monitor, Headphones, MessageSquare, Target, Award, Timer
} from 'lucide-react';

const Features = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [callStatus, setCallStatus] = useState('connecting');
  const [metrics, setMetrics] = useState({ calls: 12394, rate: 73 });

  const features = [
    {
      id: 1,
      icon: <Globe className="w-8 h-8" />,
      title: "Multilingual AI Conversations",
      subtitle: "5+ Indian Languages & Dialects",
      description: "Advanced NLP engine trained on regional dialects delivers authentic conversations in Hindi, English, Tamil, Telugu, and Bengali with 96% accuracy",
      stats: "5+ Languages",
      highlights: ["Voice Recognition", "Dialect Processing", "Cultural Context", "Accent Adaptation"],
      size: "large",
      mockData: {
        currentLanguage: "Hindi (Conversational)",
        confidence: "96.3%",
        activeDialects: ["Mumbai Hindi", "Delhi Hindi", "Hyderabadi"],
        processingTime: "0.3s"
      },
      liveElements: [
        { icon: <Languages />, label: "Language Detection", status: "active" },
        { icon: <Mic />, label: "Voice Processing", status: "processing" },
        { icon: <Volume2 />, label: "Response Generation", status: "ready" }
      ]
    },
    {
      id: 2,
      icon: <Settings className="w-8 h-8" />,
      title: "Managed Infrastructure",
      subtitle: "Zero-Touch Deployment",
      description: "Complete end-to-end setup and maintenance. Our team handles everything from AI training to server management",
      stats: "100% Managed",
      highlights: ["Auto-Setup", "24/7 Monitoring", "Regular Updates", "Tech Support"],
      size: "medium",
      mockData: {
        setupStatus: "Deployment Ready",
        uptime: "99.9%",
        lastUpdate: "2 hours ago",
        supportResponse: "< 5 min"
      },
      liveElements: [
        { icon: <Server />, label: "Infrastructure", status: "healthy" },
        { icon: <Shield />, label: "Security", status: "secured" },
        { icon: <Wifi />, label: "Connection", status: "stable" }
      ]
    },
    {
      id: 3,
      icon: <Phone className="w-8 h-8" />,
      title: "Smart Call Management",
      subtitle: "Inbound & Outbound Automation",
      description: "Intelligent call routing, automatic follow-ups, and lead qualification with real-time conversation analysis",
      stats: "Bidirectional",
      highlights: ["Auto-Dialing", "Call Routing", "Lead Scoring", "Follow-up Automation"],
      size: "medium",
      mockData: {
        callsActive: "23 ongoing",
        queueSize: "147 pending",
        avgDuration: "3m 42s",
        successRate: "78%"
      },
      liveElements: [
        { icon: <PlayCircle />, label: "Active Calls", status: "live" },
        { icon: <Target />, label: "Lead Qualification", status: "processing" },
        { icon: <Timer />, label: "Call Timer", status: "tracking" }
      ]
    },
    {
      id: 4,
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Real-Time Analytics Dashboard",
      subtitle: "Live Performance Insights",
      description: "Comprehensive analytics with call recordings, sentiment analysis, conversion tracking, and predictive insights",
      stats: "Live Tracking",
      highlights: ["Conversion Metrics", "Sentiment Analysis", "Call Recordings", "Predictive AI"],
      size: "large",
      mockData: {
        totalCalls: "12,394",
        conversionRate: "73.2%",
        avgSentiment: "Positive (8.4/10)",
        revenueImpact: "$234,500"
      },
      liveElements: [
        { icon: <TrendingUp />, label: "Live Metrics", status: "updating" },
        { icon: <Monitor />, label: "Dashboard", status: "active" },
        { icon: <Award />, label: "Performance", status: "excellent" }
      ]
    },
    {
      id: 5,
      icon: <Database className="w-8 h-8" />,
      title: "Universal CRM Integration",
      subtitle: "15+ Platform Connectors",
      description: "Seamless two-way sync with Salesforce, Zoho, HubSpot, Pipedrive and custom APIs with real-time data synchronization",
      stats: "15+ Platforms",
      highlights: ["Two-way Sync", "Custom APIs", "Data Mapping", "Auto-Updates"],
      size: "medium",
      mockData: {
        connectedSystems: "3 Active CRMs",
        syncStatus: "Real-time",
        lastSync: "30 seconds ago",
        dataAccuracy: "99.7%"
      },
      liveElements: [
        { icon: <Download />, label: "Data Import", status: "syncing" },
        { icon: <Upload />, label: "Data Export", status: "completed" },
        { icon: <Activity />, label: "Live Sync", status: "active" }
      ]
    },
    {
      id: 6,
      icon: <Clock className="w-8 h-8" />,
      title: "Rapid Deployment",
      subtitle: "48-Hour Go-Live",
      description: "Industry's fastest deployment with dedicated onboarding team, AI training, and complete system configuration",
      stats: "48 Hours",
      highlights: ["Quick Setup", "AI Training", "Team Onboarding", "Go-Live Support"],
      size: "medium",
      mockData: {
        setupProgress: "Ready for Deployment",
        trainingComplete: "AI Model Trained",
        goLiveDate: "Tomorrow 9 AM",
        teamReadiness: "100%"
      },
      liveElements: [
        { icon: <Calendar />, label: "Schedule", status: "planned" },
        { icon: <CheckCircle />, label: "Training", status: "complete" },
        { icon: <Zap />, label: "Activation", status: "ready" }
      ]
    }
  ];

  // Auto-rotate features with enhanced timing
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Simulate live data updates
  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics(prev => ({
        calls: prev.calls + Math.floor(Math.random() * 5),
        rate: 73 + (Math.random() * 6 - 3)
      }));
      
      const statuses = ['connecting', 'active', 'processing'];
      setCallStatus(statuses[Math.floor(Math.random() * statuses.length)]);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const getGridClass = (size) => {
    switch (size) {
      case 'large':
        return 'md:col-span-2 lg:col-span-2';
      case 'medium':
        return 'md:col-span-1 lg:col-span-1';
      default:
        return 'md:col-span-1 lg:col-span-1';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'active':
      case 'live':
      case 'healthy':
      case 'excellent':
        return 'text-green-400';
      case 'processing':
      case 'updating':
      case 'syncing':
        return 'text-blue-400';
      case 'ready':
      case 'complete':
      case 'planned':
        return 'text-yellow-400';
      default:
        return 'text-gray-400';
    }
  };

  return (
    <div className="relative bg-black min-h-screen px-4 py-16 lg:py-24 overflow-hidden">
      
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Dynamic Gradient Orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse top-20 right-10" style={{ animationDuration: '8s' }} />
        <div className="absolute w-80 h-80 bg-gradient-to-r from-green-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse bottom-32 left-10" style={{ animationDuration: '12s', animationDelay: '2s' }} />
        <div className="absolute w-64 h-64 bg-gradient-to-r from-orange-500/8 to-red-500/8 rounded-full blur-3xl animate-pulse top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" style={{ animationDuration: '10s', animationDelay: '4s' }} />
      </div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        
        {/* Enhanced Header Section */}
        <div className="text-center mb-20 lg:mb-28">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className='flex items-center gap-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full px-4 py-3'>
              <Sparkles className="w-5 h-5 text-white animate-pulse" />
              <span className="text-white/70 text-sm font-semibold tracking-widest uppercase">
                Enterprise Features
              </span>
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            </div>
          </div>
           
          <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-8 lg:mb-10 leading-tight">
            Advanced AI<br />
            <span className="text-white/70">Calling Platform</span>
          </h2>
          
          <p className="text-white/60 text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed">
            Enterprise-grade infrastructure meets zero-complexity deployment
          </p>
        </div>

        {/* Enhanced Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-20">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className={`${getGridClass(feature.size)} group cursor-pointer transition-all duration-700 ${
                activeFeature === index ? 'scale-[1.02] z-20' : 'hover:scale-[1.01] z-10'
              }`}
              onClick={() => setActiveFeature(index)}
            >
              <div className={`relative bg-white/5 backdrop-blur-xl border rounded-3xl p-8 lg:p-10 h-full transition-all duration-700 overflow-hidden ${
                activeFeature === index 
                  ? 'border-white/30 shadow-2xl shadow-white/10 bg-white/8' 
                  : 'border-white/10 hover:border-white/20'
              } ${feature.size === 'large' ? 'min-h-[500px]' : 'min-h-[450px]'}`}>
                
                {/* Enhanced Header */}
                <div className="flex items-start justify-between mb-8">
                  <div className={`p-4 rounded-2xl transition-all duration-500 ${
                    activeFeature === index ? 'bg-white/20 scale-110' : 'bg-white/10'
                  }`}>
                    <div className={`transition-all duration-300 ${
                      activeFeature === index ? 'text-white scale-110' : 'text-white/70'
                    }`}>
                      {feature.icon}
                    </div>
                  </div>
                  
                  <div className="flex flex-col items-end gap-2">
                    <div className={`text-xs font-bold px-3 py-1.5 rounded-full transition-all duration-500 ${
                      activeFeature === index 
                        ? 'bg-white/20 text-white scale-105' 
                        : 'bg-white/10 text-white/60'
                    }`}>
                      {feature.stats}
                    </div>
                    <ArrowUpRight className={`w-5 h-5 transition-all duration-300 ${
                      activeFeature === index ? 'text-white scale-110' : 'text-white/40'
                    }`} />
                  </div>
                </div>

                {/* Enhanced Content */}
                <div className="space-y-6 mb-8">
                  <div>
                    <h3 className={`text-2xl lg:text-3xl font-bold transition-all duration-500 mb-2 ${
                      activeFeature === index ? 'text-white' : 'text-white/90'
                    }`}>
                      {feature.title}
                    </h3>
                    <p className={`text-sm font-medium transition-colors duration-500 ${
                      activeFeature === index ? 'text-white/80' : 'text-white/50'
                    }`}>
                      {feature.subtitle}
                    </p>
                  </div>
                  
                  <p className={`text-white/70 leading-relaxed transition-all duration-500 ${
                    activeFeature === index ? 'text-white/85' : ''
                  } ${feature.size === 'large' ? 'text-base' : 'text-sm'}`}>
                    {feature.description}
                  </p>
                </div>

                {/* Live Status Elements */}
                <div className="space-y-3 mb-6">
                  {feature.liveElements.map((element, idx) => (
                    <div
                      key={idx}
                      className={`flex items-center gap-3 p-3 rounded-xl transition-all duration-500 ${
                        activeFeature === index 
                          ? 'bg-white/15 border border-white/20 transform translate-x-1' 
                          : 'bg-white/5 border border-white/5'
                      }`}
                      style={{
                        animationDelay: activeFeature === index ? `${idx * 200}ms` : '0ms'
                      }}
                    >
                      <div className={`p-2 rounded-lg transition-all duration-300 ${
                        activeFeature === index ? 'bg-white/20' : 'bg-white/10'
                      }`}>
                        <div className={`w-4 h-4 ${getStatusColor(element.status)}`}>
                          {element.icon}
                        </div>
                      </div>
                      <div className="flex-1">
                        <span className={`text-sm font-medium transition-colors duration-300 ${
                          activeFeature === index ? 'text-white' : 'text-white/60'
                        }`}>
                          {element.label}
                        </span>
                      </div>
                      <div className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        element.status === 'active' || element.status === 'live' ? 'bg-green-400 animate-pulse' :
                        element.status === 'processing' ? 'bg-blue-400 animate-ping' :
                        'bg-yellow-400'
                      }`} />
                    </div>
                  ))}
                </div>

                {/* Enhanced Mock Interface */}
                <div className={`bg-black/50 rounded-2xl p-5 border transition-all duration-500 mb-6 ${
                  activeFeature === index ? 'border-white/20 bg-black/60' : 'border-white/10'
                }`}>
                  <div className="space-y-3">
                    {Object.entries(feature.mockData).map(([key, value], idx) => (
                      <div
                        key={key}
                        className={`flex items-center justify-between p-3 rounded-lg transition-all duration-500 ${
                          activeFeature === index && idx === 0
                            ? 'bg-white/20 border border-white/30 shadow-lg'
                            : activeFeature === index 
                            ? 'bg-white/10 border border-white/20'
                            : 'bg-white/5'
                        }`}
                        style={{
                          animationDelay: activeFeature === index ? `${idx * 150}ms` : '0ms'
                        }}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                            idx === 0 ? 'bg-green-400/20' : 
                            idx === 1 ? 'bg-blue-400/20' : 'bg-yellow-400/20'
                          }`}>
                            {idx === 0 && <Activity className="w-3 h-3 text-green-400" />}
                            {idx === 1 && <CheckCircle className="w-3 h-3 text-blue-400" />}
                            {idx === 2 && <Zap className="w-3 h-3 text-yellow-400" />}
                            {idx === 3 && <Target className="w-3 h-3 text-purple-400" />}
                          </div>
                          <span className={`text-sm font-medium transition-colors duration-300 ${
                            activeFeature === index && idx === 0
                              ? 'text-white'
                              : 'text-white/70'
                          }`}>
                            {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                          </span>
                        </div>
                        <span className={`text-sm font-bold transition-colors duration-300 ${
                          activeFeature === index && idx === 0
                            ? 'text-white'
                            : 'text-white/80'
                        }`}>
                          {value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Enhanced Highlights Tags */}
                <div className="flex flex-wrap gap-2">
                  {feature.highlights.slice(0, feature.size === 'large' ? 4 : 3).map((highlight, idx) => (
                    <span
                      key={idx}
                      className={`text-xs px-3 py-1.5 rounded-full transition-all duration-500 ${
                        activeFeature === index 
                          ? 'bg-white/20 text-white border border-white/30 transform scale-105' 
                          : 'bg-white/10 text-white/60 border border-white/10'
                      }`}
                      style={{
                        animationDelay: activeFeature === index ? `${idx * 100}ms` : '0ms'
                      }}
                    >
                      {highlight}
                    </span>
                  ))}
                </div>

                {/* Enhanced Active Indicator */}
                {activeFeature === index && (
                  <>
                    <div className="absolute top-6 left-6">
                      <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50" />
                    </div>
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/10 via-transparent to-white/5 animate-pulse" />
                  </>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Feature Navigation */}
        <div className="flex justify-center mb-20">
          <div className="flex gap-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full p-3">
            {features.map((feature, index) => (
              <button
                key={index}
                onClick={() => setActiveFeature(index)}
                className={`group relative overflow-hidden transition-all duration-300 ${
                  activeFeature === index 
                    ? 'w-12 h-4 bg-white rounded-full' 
                    : 'w-4 h-4 bg-white/30 hover:bg-white/50 rounded-full'
                }`}
              >
                {activeFeature === index && (
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-white to-green-400 rounded-full animate-pulse" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Enhanced Key Benefits Summary */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {[
            { 
              icon: <Zap className="w-6 h-6" />, 
              title: "Lightning Setup", 
              description: "Industry's fastest 48-hour deployment with zero downtime",
              metric: "48 Hours",
              stat: "vs 2-3 weeks industry average"
            },
            { 
              icon: <Shield className="w-6 h-6" />, 
              title: "Managed Infrastructure", 
              description: "Enterprise-grade security with 99.9% uptime guarantee",
              metric: "99.9% SLA",
              stat: "24/7 monitoring included"
            },
            { 
              icon: <Users className="w-6 h-6" />, 
              title: "Native AI Conversations", 
              description: "Multi-dialect support with cultural context awareness",
              metric: "96.3% Accuracy",
              stat: "across 5+ Indian languages"
            }
          ].map((benefit, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all duration-500 hover:bg-white/10 group hover:scale-105"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="p-3 bg-white/10 rounded-2xl group-hover:bg-white/20 transition-all duration-300 group-hover:scale-110">
                  <div className="text-white/70 group-hover:text-white transition-colors duration-300">
                    {benefit.icon}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-white">{benefit.metric}</div>
                  <div className="text-xs text-white/50">{benefit.stat}</div>
                </div>
              </div>
              <h4 className="font-bold text-xl text-white mb-3">{benefit.title}</h4>
              <p className="text-white/70 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Enhanced CTA Section */}
        <div className="text-center">
          <button className="group bg-gradient-to-r from-white to-white/90 text-black px-10 py-5 rounded-full text-xl font-bold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-white/20 flex items-center gap-4 mx-auto mb-6">
            <span>Experience All Features</span>
            <ChevronRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
          </button>
          <p className="text-white/60 text-lg">Live demo • No setup required • See results instantly</p>
        </div>
      </div>
    </div>
  );
};

export default Features;