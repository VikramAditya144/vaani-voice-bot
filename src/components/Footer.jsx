import React, { useState, useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, ArrowUp, Github, Twitter, Linkedin, Instagram, Youtube, Send, Calendar, ArrowRight, MessageCircle } from 'lucide-react';

const Footer = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [emailValue, setEmailValue] = useState('');
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  // Use the ImageKit URL as the primary source
  const videoSrc = "https://ik.imagekit.io/c2meo2qln/hero-video.mp4?updatedAt=1751059353105";

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

  // Enhanced video and Canvas setup
  useEffect(() => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    
    if (!video || !canvas) return;

    const handleLoadStart = () => {
      console.log('Footer video load started');
      setLoadingProgress(10);
    };

    const handleProgress = () => {
      if (video.buffered.length > 0) {
        const bufferedEnd = video.buffered.end(video.buffered.length - 1);
        const duration = video.duration;
        if (duration > 0) {
          const progress = (bufferedEnd / duration) * 100;
          setLoadingProgress(Math.min(progress, 90));
          console.log('Footer video loading progress:', progress);
        }
      }
    };

    const handleCanPlay = () => {
      console.log('Footer video can play');
      setLoadingProgress(95);
    };

    const handleCanPlayThrough = () => {
      console.log('Footer video can play through');
      setLoadingProgress(100);
      setTimeout(() => {
        setIsVideoLoaded(true);
        video.play().catch(error => {
          console.error('Footer video play failed:', error);
        });
      }, 500);
    };

    const handleLoadedData = () => {
      console.log('Footer video data loaded');
      // Start canvas animation when video data is loaded
      animateCanvas();
    };

    const handleError = (e) => {
      console.error('Footer video loading error:', e);
    };

    // Enhanced Canvas animation function with black and white effect
    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    
    const animateCanvas = () => {
      if (video.readyState >= 2 && video.videoWidth > 0 && video.videoHeight > 0) {
        // Set canvas dimensions to match video
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        
        // Draw video frame to canvas
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        
        // Apply black and white filter with enhanced contrast
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = imageData.data;
        
        // Convert to grayscale with enhanced contrast
        for (let i = 0; i < data.length; i += 4) {
          // Convert to grayscale using luminance formula
          const gray = data[i] * 0.299 + data[i + 1] * 0.587 + data[i + 2] * 0.114;
          
          // Enhance contrast - make bright areas brighter, dark areas darker
          const enhanced = gray > 128 ? Math.min(255, gray * 1.2) : Math.max(0, gray * 0.8);
          
          // Apply the enhanced grayscale value to RGB channels
          data[i] = enhanced;     // Red
          data[i + 1] = enhanced; // Green
          data[i + 2] = enhanced; // Blue
          // Alpha channel (data[i + 3]) remains unchanged
        }
        
        // Put the modified image data back to canvas
        ctx.putImageData(imageData, 0, 0);
      }
      
      // Continue animation loop
      requestAnimationFrame(animateCanvas);
    };

    // Add event listeners
    video.addEventListener('loadstart', handleLoadStart);
    video.addEventListener('progress', handleProgress);
    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('canplaythrough', handleCanPlayThrough);
    video.addEventListener('loadeddata', handleLoadedData);
    video.addEventListener('error', handleError);

    // Cleanup
    return () => {
      video.removeEventListener('loadstart', handleLoadStart);
      video.removeEventListener('progress', handleProgress);
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('canplaythrough', handleCanPlayThrough);
      video.removeEventListener('loadeddata', handleLoadedData);
      video.removeEventListener('error', handleError);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    console.log('Newsletter subscription:', emailValue);
    setEmailValue('');
  };

  const footerLinks = {
    Company: [
      { name: 'About Us', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Press Kit', href: '#' },
      { name: 'Contact', href: '#' },
      { name: 'Partners', href: '#' }
    ],
    Product: [
      { name: 'Features', href: '#' },
      { name: 'Pricing', href: '#' },
      { name: 'API Docs', href: '#' },
      { name: 'Integrations', href: '#' },
      { name: 'Changelog', href: '#' }
    ],
    Resources: [
      { name: 'Blog', href: '#' },
      { name: 'Help Center', href: '#' },
      { name: 'Community', href: '#' },
      { name: 'Tutorials', href: '#' },
      { name: 'Webinars', href: '#' }
    ],
    Legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Cookie Policy', href: '#' },
      { name: 'GDPR', href: '#' },
      { name: 'Security', href: '#' }
    ]
  };

  const socialLinks = [
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'LinkedIn', icon: Linkedin, href: '#' },
    { name: 'Github', icon: Github, href: '#' },
    { name: 'Instagram', icon: Instagram, href: '#' },
    { name: 'YouTube', icon: Youtube, href: '#' }
  ];

  return (
    <footer 
      ref={containerRef}
      className="relative bg-gradient-to-br from-black via-gray-950 to-black overflow-hidden"
    >
      {/* Enhanced Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(150)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white/10 rounded-full animate-pulse"
            style={{
              width: `${1 + Math.random() * 2}px`,
              height: `${1 + Math.random() * 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${2 + Math.random() * 4}s`,
              transform: `translateY(${scrollY * 0.05 * (Math.random() - 0.5)}px)`,
            }}
          />
        ))}
      </div>

      {/* Floating Orbs - Only grayscale */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute w-96 h-96 bg-gradient-to-br from-white/5 via-gray-500/5 to-gray-300/5 rounded-full blur-3xl animate-pulse"
          style={{
            top: '20%',
            left: '10%',
            transform: `translate(${mousePosition.x * 30}px, ${mousePosition.y * 20}px)`,
            animationDuration: '6s'
          }}
        />
        <div 
          className="absolute w-80 h-80 bg-gradient-to-br from-gray-400/5 via-white/5 to-gray-600/5 rounded-full blur-3xl animate-pulse"
          style={{
            bottom: '10%',
            right: '20%',
            transform: `translate(${-mousePosition.x * 25}px, ${-mousePosition.y * 15}px)`,
            animationDuration: '7s',
            animationDelay: '2s'
          }}
        />
      </div>

      {/* Dynamic mouse-following gradient */}
      <div 
        className="absolute inset-0 pointer-events-none transition-all duration-700"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 30%, transparent 60%)`,
        }}
      />

      {/* Newsletter Section */}
      <div className="relative z-10 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="bg-gradient-to-br from-white/10 via-gray-900/40 to-black/90 backdrop-blur-2xl border border-white/20 rounded-3xl p-8 lg:p-16 relative overflow-hidden group hover:border-white/30 transition-all duration-700">
            
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 rounded-3xl"></div>

            {/* <div className="text-center mt-16 lg:mt-24">
          <div className="bg-gradient-to-r from-white/10 via-white/5 to-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-8 lg:p-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Ready to Transform Your Lead Generation?
            </h3>
            <p className="text-white/60 max-w-2xl mx-auto mb-8">
              Join hundreds of businesses generating qualified leads with Vaani's AI-powered approach
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group bg-white text-black px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 hover:bg-white/90 flex items-center gap-3 justify-center">
                <Calendar className="w-5 h-5" />
                <span>Book Free Demo</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              
              <button className="group bg-white/10 text-white border border-white/20 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:bg-white/20 flex items-center gap-3 justify-center">
                <MessageCircle className="w-5 h-5" />
                <span>Get Custom Quote</span>
              </button>
            </div>
            
            <p className="text-white/50 text-sm mt-6">
              No risk • No setup fees • 48-hour implementation • 30-day guarantee
            </p>
          </div>


        </div> */}
            
            <div className="relative z-10 text-center">
              
              <h3 className="text-3xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent mb-6 lg:mb-8">
                Stay Updated with Vaani
              </h3>
              <p className="text-gray-300 text-lg lg:text-xl mb-8 lg:mb-12 max-w-2xl mx-auto">
              Join hundreds of businesses generating qualified leads with Vaani's AI-powered approach
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group bg-white text-black px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 hover:bg-white/90 flex items-center gap-3 justify-center">
                <Calendar className="w-5 h-5" />
                <span>Book Free Demo</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              
              <button className="group bg-white/10 text-white border border-white/20 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:bg-white/20 flex items-center gap-3 justify-center">
                <MessageCircle className="w-5 h-5" />
                <span>Get Custom Quote</span>
              </button>
            </div>
            
            <p className="text-white/50 text-sm mt-6">
              No risk • No setup fees • 48-hour implementation • 30-day guarantee
            </p>
              
              {/* <form onSubmit={handleEmailSubmit} className="max-w-md mx-auto">
                <div className="relative group">
                  <input
                    type="email"
                    value={emailValue}
                    onChange={(e) => setEmailValue(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full bg-black/60 backdrop-blur-xl border border-white/20 rounded-full px-6 py-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent transition-all duration-300 pr-16"
                    required
                  />
                  <button
                    type="submit"
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white text-black rounded-full p-3 hover:bg-gray-100 transition-all duration-300 hover:scale-105"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </form> */}
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12 lg:gap-16">
          
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-8">
            {/* Logo and Description */}
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-white via-gray-200 to-gray-300 rounded-full flex items-center justify-center shadow-xl">
                    <span className="text-black font-bold text-xl">V</span>
                  </div>
                  <div className="absolute -inset-1 bg-gradient-to-br from-white/20 to-transparent rounded-full blur-sm -z-10"></div>
                </div>
                <span className="text-white text-2xl font-bold tracking-tight">Vaani</span>
              </div>
              <p className="text-gray-400 text-base leading-relaxed">
                The Voice of Sales - Empowering businesses with AI-driven automation and intelligent workflows. Transform your operations with cutting-edge technology.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors duration-300 group">
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-sm">hello@vaani.ai</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors duration-300 group">
                <Phone className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors duration-300 group">
                <MapPin className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-sm">San Francisco, CA</span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          <div className="lg:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4 className="text-white font-semibold text-lg mb-6">{category}</h4>
                <ul className="space-y-4">
                  {links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-gray-400 hover:text-white transition-all duration-300 text-sm hover:translate-x-1 transform block"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Large VAANI Section with Video Background */}
      <div className="relative z-10 border-t border-white/10 overflow-hidden">
        {/* Video Element with ImageKit URL */}
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover opacity-0"
          src={videoSrc}
          muted
          loop
          playsInline
          preload="metadata"
          crossOrigin="anonymous"
        />

        {/* Canvas for Black & White Effect */}
        <canvas
          ref={canvasRef}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ${
            isVideoLoaded ? 'opacity-30' : 'opacity-0'
          }`}
        />

        {/* Video Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/80"></div>
        
        {/* Enhanced Light Effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-transparent via-white/2 to-transparent blur-3xl opacity-30"></div>
          <div className="absolute bottom-0 right-0 w-3/4 h-64 bg-gradient-to-t from-transparent via-gray-300/2 to-transparent blur-2xl opacity-30"></div>
        </div>

        {/* Enhanced Video Loader */}
        {!isVideoLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/50 z-30">
            <div className="text-center">
              <div className="relative w-12 h-12 mx-auto mb-4">
                <div className="absolute inset-0 border-2 border-gray-800 rounded-full"></div>
                <div 
                  className="absolute inset-0 border-2 border-white rounded-full transition-all duration-300 ease-out"
                  style={{
                    background: `conic-gradient(from 0deg, white 0deg, white ${loadingProgress * 3.6}deg, transparent ${loadingProgress * 3.6}deg)`,
                    mask: 'radial-gradient(circle, transparent 60%, black 62%)',
                    WebkitMask: 'radial-gradient(circle, transparent 60%, black 62%)',
                  }}
                ></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                </div>
              </div>
              <div className="text-white text-xs font-light tracking-wider opacity-60">
                Loading Footer Video...
              </div>
            </div>
          </div>
        )}

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center relative">
            {/* Giant VAANI Text */}
            <div className="relative mb-16">
              <h2 className="text-8xl sm:text-9xl lg:text-[12rem] xl:text-[16rem] 2xl:text-[20rem] font-black leading-none">
                <span className="bg-gradient-to-r from-white/30 via-white/60 to-white/30 bg-clip-text text-transparent select-none">
                  VAANI
                </span>
              </h2>
              {/* Enhanced Glow effect behind text */}
              <div className="absolute inset-0 text-8xl sm:text-9xl lg:text-[12rem] xl:text-[16rem] 2xl:text-[20rem] font-black text-white/10 blur-3xl -z-10 select-none">
                VAANI
              </div>
              {/* Additional glow layers */}
              <div className="absolute inset-0 text-8xl sm:text-9xl lg:text-[12rem] xl:text-[16rem] 2xl:text-[20rem] font-black text-white/5 blur-[4rem] -z-20 select-none">
                VAANI
              </div>
              
              {/* Enhanced Animated particles around text */}
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(30)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-2 h-2 bg-white/30 rounded-full animate-pulse"
                    style={{
                      left: `${10 + Math.random() * 80}%`,
                      top: `${20 + Math.random() * 60}%`,
                      animationDelay: `${Math.random() * 3}s`,
                      animationDuration: `${2 + Math.random() * 2}s`,
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Enhanced Tagline */}
            <p className="text-2xl lg:text-4xl xl:text-6xl font-light italic text-gray-200 mb-16 lg:mb-20">
              Apke Business ki !
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 border-t border-white/10 bg-black/50 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            
            {/* Copyright */}
            <div className="text-gray-500 text-sm">
              © 2024 Vaani. All rights reserved. Built with ❤️ for the future.
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-6">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-110 transform"
                    aria-label={social.name}
                  >
                    <IconComponent className="w-6 h-6" />
                  </a>
                );
              })}
            </div>

            {/* Scroll to Top */}
            <button
              onClick={scrollToTop}
              className="bg-white/10 backdrop-blur-xl border border-white/20 text-white p-3 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110 group"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>

      {/* Enhanced Floating Elements */}
      <div className="absolute top-20 right-10 w-3 h-3 bg-gradient-to-r from-white/30 to-gray-300/30 rounded-full animate-bounce hidden lg:block"></div>
      <div className="absolute bottom-32 left-20 w-2 h-2 bg-gradient-to-r from-gray-400/30 to-white/30 rounded-full animate-ping hidden lg:block"></div>
      <div className="absolute top-1/2 right-32 w-2.5 h-2.5 bg-gradient-to-r from-white/40 to-gray-200/40 rounded-full animate-pulse hidden xl:block"></div>

      <style jsx>{`
        @media (max-width: 768px) {
          .text-8xl { font-size: 4rem; }
        }
        
        @media (max-width: 480px) {
          .text-8xl { font-size: 3rem; }
        }
      `}</style>
    </footer>
  );
};

export default Footer;