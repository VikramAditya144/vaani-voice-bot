import React, { useState } from 'react';
import { 
  ArrowLeft, Play, Download, CheckCircle, TrendingUp, Users, 
  Calendar, Phone, BarChart3, Clock, Target, Award, Zap,
  Building2, GraduationCap, Heart, ShoppingCart, Car, Briefcase
} from 'lucide-react';

const IndustryDetail = ({ industry, onBack }) => {
  const [activeTab, setActiveTab] = useState('overview');

  const industryIcons = {
    'Real Estate': <Building2 className="w-8 h-8" />,
    'Education': <GraduationCap className="w-8 h-8" />,
    'Healthcare': <Heart className="w-8 h-8" />,
    'E-commerce': <ShoppingCart className="w-8 h-8" />,
    'Automotive': <Car className="w-8 h-8" />,
    'Insurance': <Briefcase className="w-8 h-8" />
  };

  const detailedFeatures = {
    'Real Estate': [
      {
        title: "Smart Lead Qualification",
        description: "AI identifies serious buyers vs casual browsers through intelligent questioning",
        benefits: ["60% reduction in wasted time", "Prioritized hot leads", "Budget verification"]
      },
      {
        title: "Property Matching Engine",
        description: "Matches customer preferences with available properties automatically",
        benefits: ["Higher satisfaction rates", "Faster decision making", "Reduced back-and-forth"]
      },
      {
        title: "Tour Scheduling Automation",
        description: "Seamlessly books property visits based on availability and preferences",
        benefits: ["24/7 booking capability", "Calendar integration", "Reminder notifications"]
      }
    ],
    'Education': [
      {
        title: "Course Counseling AI",
        description: "Provides detailed information about courses, career prospects, and requirements",
        benefits: ["Informed decision making", "Higher enrollment rates", "Reduced counselor workload"]
      },
      {
        title: "Multi-Language Support",
        description: "Communicates with students and parents in their preferred regional language",
        benefits: ["Better understanding", "Increased trust", "Cultural sensitivity"]
      },
      {
        title: "Application Assistance",
        description: "Guides students through the entire application and admission process",
        benefits: ["Higher completion rates", "Reduced errors", "Faster processing"]
      }
    ],
    'Healthcare': [
      {
        title: "Appointment Intelligence",
        description: "Smart scheduling that considers doctor availability, patient history, and urgency",
        benefits: ["Reduced wait times", "Better resource utilization", "Patient satisfaction"]
      },
      {
        title: "Medical Communication",
        description: "HIPAA-compliant conversations with medical terminology understanding",
        benefits: ["Accurate information", "Privacy compliance", "Professional interaction"]
      },
      {
        title: "Follow-up Care Management",
        description: "Automated post-treatment follow-ups and medication reminders",
        benefits: ["Better health outcomes", "Improved adherence", "Reduced readmissions"]
      }
    ],
    'E-commerce': [
      {
        title: "Cart Recovery Intelligence",
        description: "Personalized outreach based on browsing behavior and cart value",
        benefits: ["Higher recovery rates", "Increased AOV", "Customer retention"]
      },
      {
        title: "Order Support Automation",
        description: "Handle order inquiries, tracking, and modifications automatically",
        benefits: ["24/7 support", "Faster resolution", "Reduced support costs"]
      },
      {
        title: "Upselling Engine",
        description: "Intelligent product recommendations during customer conversations",
        benefits: ["Increased revenue", "Better customer experience", "Higher LTV"]
      }
    ],
    'Automotive': [
      {
        title: "Vehicle Consultation AI",
        description: "Expert advice on models, features, and financing options",
        benefits: ["Informed decisions", "Faster sales cycle", "Higher satisfaction"]
      },
      {
        title: "Service Scheduling",
        description: "Automated maintenance reminders and service bookings",
        benefits: ["Improved retention", "Predictable revenue", "Customer loyalty"]
      },
      {
        title: "Trade-in Evaluation",
        description: "Instant vehicle valuation and trade-in processing",
        benefits: ["Faster transactions", "Accurate pricing", "Increased conversions"]
      }
    ],
    'Insurance': [
      {
        title: "Policy Explanation Engine",
        description: "Simplifies complex insurance terms and conditions",
        benefits: ["Better understanding", "Faster decisions", "Reduced disputes"]
      },
      {
        title: "Claims Processing Support",
        description: "Guides customers through claims with empathy and accuracy",
        benefits: ["Faster processing", "Customer satisfaction", "Reduced errors"]
      },
      {
        title: "Risk Assessment AI",
        description: "Intelligent questioning for accurate risk evaluation",
        benefits: ["Better pricing", "Reduced fraud", "Improved profitability"]
      }
    ]
  };

  const useCases = {
    'Real Estate': [
      {
        scenario: "High-Value Property Inquiry",
        description: "Luxury apartment inquiry from potential NRI buyer",
        process: [
          "AI detects premium property interest",
          "Qualifies budget and timeline in English",
          "Schedules virtual tour with sales manager",
          "Follows up with property documentation"
        ],
        outcome: "₹2.5 Cr property sale completed in 15 days"
      },
      {
        scenario: "First-Time Buyer Support",
        description: "Young couple looking for their first home",
        process: [
          "Educates about home loan process in Hindi",
          "Explains different property types and locations",
          "Connects with bank partnership for pre-approval",
          "Schedules site visits for shortlisted properties"
        ],
        outcome: "Successful purchase with 90% loan approval"
      }
    ],
    'Education': [
      {
        scenario: "International Student Inquiry",
        description: "Student from abroad interested in engineering program",
        process: [
          "AI provides course details in English",
          "Explains visa and accommodation process",
          "Connects with international student advisor",
          "Schedules virtual campus tour"
        ],
        outcome: "Successful enrollment with scholarship assistance"
      }
    ],
    'Healthcare': [
      {
        scenario: "Emergency Appointment Booking",
        description: "Patient needs urgent consultation for chest pain",
        process: [
          "AI quickly assesses urgency level",
          "Finds immediate cardiologist availability",
          "Books emergency slot within 30 minutes",
          "Sends prep instructions and location"
        ],
        outcome: "Life-saving early intervention achieved"
      }
    ],
    'E-commerce': [
      {
        scenario: "High-Value Cart Abandonment",
        description: "Customer left ₹15,000 electronics cart incomplete",
        process: [
          "AI calls within 2 hours of abandonment",
          "Offers assistance with product questions",
          "Provides limited-time discount code",
          "Simplifies checkout process"
        ],
        outcome: "Cart recovered with 12% additional items added"
      }
    ],
    'Automotive': [
      {
        scenario: "Test Drive Follow-up",
        description: "Family test drove SUV but left without purchasing",
        process: [
          "AI follows up within 24 hours",
          "Addresses specific concerns about pricing",
          "Offers extended warranty and financing options",
          "Schedules meeting with sales manager"
        ],
        outcome: "Purchase completed with financing arrangement"
      }
    ],
    'Insurance': [
      {
        scenario: "Life Insurance Inquiry",
        description: "New parent looking for term life insurance",
        process: [
          "AI explains different policy types",
          "Calculates coverage needs based on family situation",
          "Provides instant quotes from multiple providers",
          "Schedules medical examination"
        ],
        outcome: "₹1 Cr term policy purchased within 1 week"
      }
    ]
  };

  const metrics = {
    'Real Estate': [
      { label: "Lead Qualification Rate", value: "67%", change: "+23%" },
      { label: "Average Response Time", value: "< 2 min", change: "-85%" },
      { label: "Tour Conversion Rate", value: "78%", change: "+45%" },
      { label: "Customer Satisfaction", value: "4.8/5", change: "+0.7" }
    ],
    'Education': [
      { label: "Inquiry to Enrollment", value: "84%", change: "+31%" },
      { label: "Average Response Time", value: "< 5 min", change: "-78%" },
      { label: "Parent Satisfaction", value: "4.9/5", change: "+0.8" },
      { label: "Counseling Efficiency", value: "3x", change: "+200%" }
    ],
    'Healthcare': [
      { label: "Appointment Booking Rate", value: "91%", change: "+28%" },
      { label: "No-Show Reduction", value: "65%", change: "-65%" },
      { label: "Patient Satisfaction", value: "4.7/5", change: "+0.5" },
      { label: "Staff Time Saved", value: "75%", change: "+75%" }
    ],
    'E-commerce': [
      { label: "Cart Recovery Rate", value: "56%", change: "+41%" },
      { label: "Customer Support Calls", value: "-89%", change: "-89%" },
      { label: "Average Order Value", value: "+23%", change: "+23%" },
      { label: "Customer Satisfaction", value: "4.6/5", change: "+0.6" }
    ],
    'Automotive': [
      { label: "Test Drive Conversion", value: "72%", change: "+34%" },
      { label: "Service Bookings", value: "+145%", change: "+145%" },
      { label: "Customer Retention", value: "88%", change: "+22%" },
      { label: "Sales Cycle Time", value: "-40%", change: "-40%" }
    ],
    'Insurance': [
      { label: "Policy Conversion Rate", value: "63%", change: "+38%" },
      { label: "Claims Processing Time", value: "-60%", change: "-60%" },
      { label: "Customer Satisfaction", value: "4.5/5", change: "+0.9" },
      { label: "Agent Productivity", value: "+85%", change: "+85%" }
    ]
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

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="flex items-center gap-4 mb-12">
          <button 
            onClick={onBack}
            className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
          >
            <ArrowLeft className="w-6 h-6 text-white" />
          </button>
          
          <div className="flex items-center gap-4">
            <div className="p-4 bg-white/10 rounded-2xl">
              {industryIcons[industry.title]}
            </div>
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-white">{industry.title}</h1>
              <p className="text-white/70 text-lg">{industry.subtitle}</p>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-12 bg-white/5 p-2 rounded-2xl">
          {['overview', 'features', 'use-cases', 'metrics'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 capitalize ${
                activeTab === tab 
                  ? 'bg-white/20 text-white' 
                  : 'text-white/60 hover:text-white hover:bg-white/10'
              }`}
            >
              {tab.replace('-', ' ')}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="min-h-[600px]">
          
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-white mb-6">Industry Overview</h2>
                  <p className="text-white/70 text-lg leading-relaxed mb-6">
                    {industry.description}
                  </p>
                  <div className="bg-white/10 rounded-2xl p-6">
                    <h3 className="text-xl font-semibold text-white mb-4">Key Challenges Solved</h3>
                    <ul className="space-y-3">
                      {['Manual lead follow-ups', 'Language barriers', 'Time zone limitations', 'Inconsistent messaging'].map((challenge, idx) => (
                        <li key={idx} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-green-400" />
                          <span className="text-white/80">{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl p-8">
                  <h3 className="text-2xl font-bold text-white mb-6">Quick Stats</h3>
                  <div className="grid grid-cols-2 gap-6">
                    {Object.entries(industry.stats).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-3xl font-bold text-white mb-2">{value}</div>
                        <div className="text-white/70 capitalize">{key}</div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="bg-white/10 rounded-2xl p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">Demo Video</h3>
                  <div className="aspect-video bg-black/40 rounded-xl flex items-center justify-center border border-white/20">
                    <button className="flex items-center gap-3 text-white hover:scale-105 transition-transform">
                      <Play className="w-12 h-12" />
                      <span className="text-lg font-medium">Watch {industry.title} Demo</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Features Tab */}
          {activeTab === 'features' && (
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-white mb-8">Specialized Features</h2>
              <div className="grid lg:grid-cols-3 gap-8">
                {(detailedFeatures[industry.title] || []).map((feature, idx) => (
                  <div key={idx} className="bg-white/5 rounded-2xl p-8 border border-white/10">
                    <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                    <p className="text-white/70 mb-6">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, bidx) => (
                        <li key={bidx} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-400 rounded-full" />
                          <span className="text-white/80 text-sm">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Use Cases Tab */}
          {activeTab === 'use-cases' && (
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-white mb-8">Real-World Use Cases</h2>
              <div className="space-y-8">
                {(useCases[industry.title] || []).map((useCase, idx) => (
                  <div key={idx} className="bg-white/5 rounded-3xl p-8 border border-white/10">
                    <div className="grid lg:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-4">{useCase.scenario}</h3>
                        <p className="text-white/70 mb-6">{useCase.description}</p>
                        <div className="bg-green-500/20 rounded-2xl p-4">
                          <h4 className="font-semibold text-white mb-2">Outcome</h4>
                          <p className="text-green-300">{useCase.outcome}</p>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-4">Process Flow</h4>
                        <div className="space-y-3">
                          {useCase.process.map((step, sidx) => (
                            <div key={sidx} className="flex items-start gap-3">
                              <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center text-sm font-bold text-white mt-1">
                                {sidx + 1}
                              </div>
                              <p className="text-white/80">{step}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Metrics Tab */}
          {activeTab === 'metrics' && (
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-white mb-8">Performance Metrics</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {(metrics[industry.title] || []).map((metric, idx) => (
                  <div key={idx} className="bg-white/5 rounded-2xl p-6 border border-white/10">
                    <div className="text-3xl font-bold text-white mb-2">{metric.value}</div>
                    <div className="text-white/70 mb-2">{metric.label}</div>
                    <div className="flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-green-400" />
                      <span className="text-green-400 text-sm font-medium">{metric.change}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <button className="bg-white text-black px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-transform duration-300 flex items-center gap-3 mx-auto">
            <span>Get {industry.title} Demo</span>
            <Download className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default IndustryDetail;