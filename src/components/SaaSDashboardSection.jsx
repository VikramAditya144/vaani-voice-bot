import React, { useState, useEffect, useRef } from 'react';
import { Star, TrendingUp, Users, DollarSign, Sparkles, Zap } from 'lucide-react';
import { Area, AreaChart, CartesianGrid, XAxis, Pie, PieChart, Sector, Label } from 'recharts';

const SaaSDashboardSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [activeMonth, setActiveMonth] = useState('january');
  const containerRef = useRef(null);

  // Chart data
  const pieData = [
    { month: "january", desktop: 186, fill: "#ffffff" },
    { month: "february", desktop: 305, fill: "#d1d5db" },
    { month: "march", desktop: 237, fill: "#9ca3af" },
    { month: "april", desktop: 173, fill: "#6b7280" },
    { month: "may", desktop: 209, fill: "#4b5563" },
  ];

  const areaData = [
    { month: "Jan", desktop: 186, mobile: 80 },
    { month: "Feb", desktop: 305, mobile: 200 },
    { month: "Mar", desktop: 237, mobile: 120 },
    { month: "Apr", desktop: 73, mobile: 190 },
    { month: "May", desktop: 209, mobile: 130 },
    { month: "Jun", desktop: 214, mobile: 140 },
  ];

  const activeIndex = React.useMemo(
    () => pieData.findIndex((item) => item.month === activeMonth),
    [activeMonth]
  );

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
      className="relative bg-gradient-to-br bg-black min-h-screen px-4 py-16 lg:py-32 xl:py-40 lg:px-8 xl:px-12 overflow-hidden"
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
          className="absolute w-96 h-96 bg-gradient-to-br from-white/5 via-gray-400/5 to-gray-600/5 rounded-full blur-3xl animate-pulse"
          style={{
            top: '10%',
            left: '20%',
            transform: `translate(${mousePosition.x * 50}px, ${mousePosition.y * 30}px)`,
            animationDuration: '4s'
          }}
        />
        <div 
          className="absolute w-80 h-80 bg-gradient-to-br from-gray-300/5 via-white/5 to-gray-500/5 rounded-full blur-3xl animate-pulse"
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
          
          {/* Left Card - System Efficiency with Pie Chart */}
          <div className="relative group">
            <div className="bg-gradient-to-br from-white/10 via-gray-900/40 to-black/90 backdrop-blur-2xl border border-white/20 rounded-3xl xl:rounded-4xl p-8 lg:p-12 xl:p-16 relative overflow-hidden hover:border-white/30 transition-all duration-700 hover:shadow-2xl hover:shadow-white/10">
              
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 rounded-3xl xl:rounded-4xl"></div>
              
              {/* Dashboard Content */}
              <div className="relative mb-12 lg:mb-16 h-96 lg:h-[28rem] xl:h-[32rem]">
                
                {/* Header Tags */}
                <div className="flex flex-wrap gap-3 mb-8 xl:mb-12">
                  <div className="bg-black/50 backdrop-blur-sm px-4 xl:px-6 py-2 xl:py-3 rounded-xl border border-white/15">
                    <span className="text-white/80 text-sm xl:text-base font-medium">Data Transfer</span>
                  </div>
                  <div className="bg-gradient-to-r from-white via-gray-100 to-white px-4 xl:px-6 py-2 xl:py-3 rounded-full shadow-xl">
                    <span className="text-black text-sm xl:text-base font-bold">Right Planning</span>
                  </div>
                </div>

                {/* Interactive Pie Chart */}
                <div className="relative mb-8 xl:mb-12 h-64 lg:h-72 xl:h-80">
                  <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-gray-500/5 to-white/5 rounded-2xl border border-white/10 backdrop-blur-sm"></div>
                  
                  {/* Month Selector */}
                  <div className="absolute top-4 right-4 xl:top-6 xl:right-6 z-10">
                    <select 
                      value={activeMonth} 
                      onChange={(e) => setActiveMonth(e.target.value)}
                      className="bg-black/60 backdrop-blur-sm border border-white/20 rounded-lg px-3 py-1 text-white/80 text-sm focus:outline-none focus:border-white/40"
                    >
                      {pieData.map((item) => (
                        <option key={item.month} value={item.month} className="bg-black">
                          {item.month.charAt(0).toUpperCase() + item.month.slice(1)}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="w-full h-full flex items-center justify-center relative z-10 p-4">
                    <PieChart width={280} height={280}>
                      <defs>
                        <filter id="pieGlow">
                          <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                          <feMerge>
                            <feMergeNode in="coloredBlur"/>
                            <feMergeNode in="SourceGraphic"/>
                          </feMerge>
                        </filter>
                      </defs>
                      <Pie
                        data={pieData}
                        dataKey="desktop"
                        nameKey="month"
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={100}
                        strokeWidth={2}
                        stroke="rgba(255,255,255,0.3)"
                        activeIndex={activeIndex}
                        activeShape={({ outerRadius = 0, ...props }) => (
                          <g>
                            <Sector {...props} outerRadius={outerRadius + 10} filter="url(#pieGlow)" />
                            <Sector
                              {...props}
                              outerRadius={outerRadius + 25}
                              innerRadius={outerRadius + 12}
                              fill="rgba(255,255,255,0.6)"
                            />
                          </g>
                        )}
                      >
                        <Label
                          content={({ viewBox }) => {
                            if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                              return (
                                <text
                                  x={viewBox.cx}
                                  y={viewBox.cy}
                                  textAnchor="middle"
                                  dominantBaseline="middle"
                                >
                                  <tspan
                                    x={viewBox.cx}
                                    y={viewBox.cy}
                                    className="fill-white text-2xl xl:text-3xl font-bold"
                                  >
                                    {pieData[activeIndex].desktop.toLocaleString()}
                                  </tspan>
                                  <tspan
                                    x={viewBox.cx}
                                    y={(viewBox.cy || 0) + 24}
                                    className="fill-white/70 text-sm"
                                  >
                                    Visitors
                                  </tspan>
                                </text>
                              )
                            }
                          }}
                        />
                      </Pie>
                    </PieChart>
                  </div>
                  <Sparkles className="absolute top-2 right-2 w-4 h-4 xl:w-5 xl:h-5 text-white/40 animate-pulse" />
                </div>

                {/* Scrolling Features */}
                <div className="overflow-hidden mask-gradient">
                  <div className="flex animate-scroll whitespace-nowrap">
                    {['Allocation', 'Tracking', 'Collaboration', 'Budget'].map((item, index) => (
                      <div key={index} className="inline-flex items-center mx-3 xl:mx-4 text-white/70 text-sm xl:text-base bg-black/60 backdrop-blur-sm px-4 xl:px-5 py-2 xl:py-3 rounded-full border border-white/15 hover:border-white/25 hover:bg-black/70 transition-all duration-300">
                        {item}
                      </div>
                    ))}
                    {['Allocation', 'Tracking', 'Collaboration', 'Budget'].map((item, index) => (
                      <div key={`dup-${index}`} className="inline-flex items-center mx-3 xl:mx-4 text-white/70 text-sm xl:text-base bg-black/60 backdrop-blur-sm px-4 xl:px-5 py-2 xl:py-3 rounded-full border border-white/15 hover:border-white/25 hover:bg-black/70 transition-all duration-300">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Animated border glow */}
              <div className="absolute inset-0 rounded-3xl xl:rounded-4xl bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-1000 blur-sm"></div>
            </div>
            
            {/* Text Content */}
            <div className="mt-12 lg:mt-16 xl:mt-20 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start mb-4 xl:mb-6">
                <Zap className="w-6 h-6 xl:w-8 xl:h-8 text-white/70 mr-3 animate-pulse" />
                <span className="text-white/70 text-sm xl:text-base font-medium uppercase tracking-wider">System Analytics</span>
              </div>
              <h2 className="text-3xl lg:text-4xl xl:text-6xl 2xl:text-7xl font-black bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent mb-6 xl:mb-8 leading-tight">
                System 
                <span className="block bg-gradient-to-r from-gray-300 via-white to-gray-300 bg-clip-text text-transparent">
                  Efficiency
                </span>
              </h2>
              <p className="text-gray-300 text-lg xl:text-xl 2xl:text-2xl leading-relaxed font-light max-w-2xl mx-auto lg:mx-0">
                Manual marketing is a thing of the past. We integrate AI to streamline campaigns.
              </p>
            </div>
          </div>
          
          {/* Right Card - Business Growth with Area Chart */}
          <div className="relative group">
            <div className="bg-gradient-to-br from-white/10 via-gray-900/40 to-black/90 backdrop-blur-2xl border border-white/20 rounded-3xl xl:rounded-4xl p-8 lg:p-12 xl:p-16 relative overflow-hidden hover:border-white/30 transition-all duration-700 hover:shadow-2xl hover:shadow-white/10">
              
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-bl from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 rounded-3xl xl:rounded-4xl"></div>
              
              {/* Dashboard Content */}
              <div className="relative mb-12 lg:mb-16 h-96 lg:h-[28rem] xl:h-[32rem]">
                
                {/* Header Tags */}
                <div className="flex flex-wrap gap-3 mb-8 xl:mb-12">
                  <div className="bg-black/50 backdrop-blur-sm px-4 xl:px-6 py-2 xl:py-3 rounded-xl border border-white/15">
                    <span className="text-white/80 text-sm xl:text-base font-medium">Cost saved</span>
                  </div>
                  <div className="bg-black/50 backdrop-blur-sm px-4 xl:px-6 py-2 xl:py-3 rounded-xl border border-white/15">
                    <span className="text-white/80 text-sm xl:text-base font-medium">last 60 days</span>
                  </div>
                </div>

                {/* Area Chart with enhanced styling */}
                <div className="relative mb-8 xl:mb-12 h-48 lg:h-56 xl:h-64">
                  <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-gray-500/5 to-white/5 rounded-2xl border border-white/10 backdrop-blur-sm"></div>
                  
                  <div className="w-full h-full relative z-10 p-4">
                    <AreaChart width={350} height={200} data={areaData} margin={{ left: 12, right: 12 }}>
                      <defs>
                        <linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#ffffff" stopOpacity={0.8} />
                          <stop offset="95%" stopColor="#ffffff" stopOpacity={0.1} />
                        </linearGradient>
                        <linearGradient id="fillMobile" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#d1d5db" stopOpacity={0.8} />
                          <stop offset="95%" stopColor="#d1d5db" stopOpacity={0.1} />
                        </linearGradient>
                        <filter id="areaGlow">
                          <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                          <feMerge>
                            <feMergeNode in="coloredBlur"/>
                            <feMergeNode in="SourceGraphic"/>
                          </feMerge>
                        </filter>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" vertical={false} />
                      <XAxis 
                        dataKey="month" 
                        tickLine={false} 
                        axisLine={false} 
                        tickMargin={8}
                        tick={{ fill: 'rgba(255,255,255,0.7)', fontSize: 12 }}
                      />
                      <Area
                        dataKey="mobile"
                        type="natural"
                        fill="url(#fillMobile)"
                        fillOpacity={0.4}
                        stroke="#d1d5db"
                        strokeWidth={2}
                        filter="url(#areaGlow)"
                        stackId="a"
                      />
                      <Area
                        dataKey="desktop"
                        type="natural"
                        fill="url(#fillDesktop)"
                        fillOpacity={0.4}
                        stroke="#ffffff"
                        strokeWidth={2}
                        filter="url(#areaGlow)"
                        stackId="a"
                      />
                    </AreaChart>
                  </div>
                  
                  <div className="absolute top-4 right-4 xl:top-6 xl:right-6 text-white font-bold text-xl xl:text-2xl 2xl:text-3xl">
                    $80,376
                  </div>
                  <Sparkles className="absolute top-2 right-2 w-4 h-4 xl:w-5 xl:h-5 text-white/40 animate-pulse" />
                </div>

                {/* User Profile Card with enhanced styling */}
                <div className="bg-black/60 backdrop-blur-xl rounded-2xl xl:rounded-3xl p-4 xl:p-6 border border-white/20 hover:border-white/30 transition-all duration-500 hover:bg-black/70 group/profile">
                  <div className="flex items-center gap-4 xl:gap-6">
                    <div className="relative">
                      <div className="w-12 h-12 xl:w-16 xl:h-16 bg-gradient-to-br from-white via-gray-200 to-gray-300 rounded-full flex items-center justify-center shadow-xl group-hover/profile:shadow-2xl transition-all duration-300">
                        <Users className="text-black w-6 h-6 xl:w-8 xl:h-8" />
                      </div>
                      <div className="absolute -top-1 -right-1 w-4 h-4 xl:w-5 xl:h-5 bg-gradient-to-br from-green-400 to-green-600 rounded-full border-2 border-black/20"></div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 xl:gap-3 mb-2">
                        <span className="text-white font-semibold text-base xl:text-lg group-hover/profile:text-white/90 transition-colors duration-300">Pranav</span>
                        <div className="w-3 h-3 xl:w-4 xl:h-4 bg-gradient-to-br from-green-400 to-green-600 rounded-full animate-pulse"></div>
                      </div>
                      <div className="flex items-center gap-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className="w-3 h-3 xl:w-4 xl:h-4 fill-white text-white group-hover/profile:scale-110 transition-all duration-300" style={{ animationDelay: `${star * 0.1}s` }} />
                        ))}
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-white via-gray-100 to-white px-4 xl:px-6 py-2 xl:py-3 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer">
                      <span className="text-black text-sm xl:text-base font-bold">Happy Client</span>
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
                <TrendingUp className="w-6 h-6 xl:w-8 xl:h-8 text-white/70 mr-3 animate-pulse" style={{ animationDelay: '0.5s' }} />
                <span className="text-white/70 text-sm xl:text-base font-medium uppercase tracking-wider">Growth Analytics</span>
              </div>
              <h2 className="text-3xl lg:text-4xl xl:text-6xl 2xl:text-7xl font-black bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent mb-6 xl:mb-8 leading-tight">
                Business Growth 
                <span className="block bg-gradient-to-r from-gray-300 via-white to-gray-300 bg-clip-text text-transparent">
                  Automation
                </span>
              </h2>
              <p className="text-gray-300 text-lg xl:text-xl 2xl:text-2xl leading-relaxed font-light max-w-2xl mx-auto lg:mx-0">
                We don't just drive traffic—we drive results. With predictive analytics, optimized targeting, and performance monitoring.
              </p>
            </div>
          </div>
          
        </div>
      </div>
      
      {/* Enhanced Light Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-32 left-0 w-full h-96 bg-gradient-to-r from-transparent via-white/3 to-transparent transform -skew-y-12 blur-3xl opacity-30"></div>
        <div className="absolute bottom-32 right-0 w-3/4 h-64 bg-gradient-to-l from-transparent via-gray-300/3 to-transparent transform skew-y-6 blur-2xl opacity-30"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-radial from-white/5 via-white/2 to-transparent blur-3xl opacity-40"></div>
      </div>

      {/* Enhanced Floating Elements */}
      <div className="absolute top-20 right-10 w-3 h-3 bg-gradient-to-r from-white to-gray-300 rounded-full animate-bounce hidden lg:block shadow-lg shadow-white/20"></div>
      <div className="absolute bottom-32 left-20 w-2 h-2 bg-gradient-to-r from-gray-300 to-white rounded-full animate-ping hidden lg:block shadow-lg shadow-gray-300/20"></div>
      <div className="absolute top-1/2 right-32 w-2.5 h-2.5 bg-gradient-to-r from-white to-gray-400 rounded-full animate-pulse hidden xl:block shadow-lg shadow-white/20"></div>
      <div className="absolute top-1/4 left-1/4 w-1.5 h-1.5 bg-gradient-to-r from-gray-200 to-white rounded-full animate-bounce hidden xl:block shadow-lg shadow-gray-200/20" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-gradient-to-r from-white to-gray-300 rounded-full animate-ping hidden 2xl:block shadow-lg shadow-white/20" style={{ animationDelay: '1s' }}></div>

      <style jsx>{`
        .mask-gradient {
          mask-image: linear-gradient(to right, transparent 0%, black 12.5%, black 87.5%, transparent 100%);
        }
        
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 15s linear infinite;
        }
        
        @media (min-width: 1024px) {
          .group:hover .absolute.-inset-1 {
            transform: scale(1.02);
          }
        }
      `}</style>
    </div>
  );
};

export default SaaSDashboardSection;