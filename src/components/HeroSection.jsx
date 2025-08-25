import React, { useState, useEffect, useRef } from 'react';
import vapiService from '../services/vapiService';

const HeroSection = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVapiCallActive, setIsVapiCallActive] = useState(false);
  const [isVapiLoading, setIsVapiLoading] = useState(false);
  const [isVapiInitializing, setIsVapiInitializing] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('english');
  const [volumeLevel, setVolumeLevel] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [vapiError, setVapiError] = useState(null);
  const [transcription, setTranscription] = useState([]);
  const [isListening, setIsListening] = useState(false);
  const [showTranscription, setShowTranscription] = useState(false);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const transcriptionRef = useRef(null);
  const videoSrc = "https://ik.imagekit.io/c2meo2qln/hero-video.mp4?updatedAt=1751059353105";
  const videoFinal = "https://ik.imagekit.io/uqb0qqldro/VAANI-FINAL-VIDEO.mp4?updatedAt=1751489730506";

  useEffect(() => {
    const publicKey = import.meta.env.VITE_VAPI_PUBLIC_KEY;
    if (publicKey) {
      vapiService.initialize(publicKey);

      vapiService.onMessage((message) => {
        if (message.type === 'transcript' || message.type === 'conversation-update') {
          const newTranscript = {
            id: Date.now(),
            speaker: message.role === 'assistant' ? 'Vaani' : 'You',
            text: message.transcript || message.content,
            timestamp: new Date().toLocaleTimeString(),
            isAssistant: message.role === 'assistant',
          };
          setTranscription((prev) => [...prev, newTranscript]);
        }
      });

      vapiService.onSpeechStart(() => {
        setIsListening(true);
      });

      vapiService.onSpeechEnd(() => {
        setIsListening(false);
      });
    } else {
      console.error('Vapi public key not found in environment variables');
    }
  }, []);

  useEffect(() => {
    if (transcriptionRef.current) {
      transcriptionRef.current.scrollTop = transcriptionRef.current.scrollHeight;
    }
  }, [transcription]);

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    vapiService.setLanguage(language);
  };

  const handleTalkToVaani = async () => {
    try {
      if (isVapiCallActive) {
        setIsVapiLoading(true);
        vapiService.stopCall();
        setIsVapiCallActive(false);
        setTranscription([]);
        setIsListening(false);
        setShowTranscription(false);
        setTimeout(() => setIsVapiLoading(false), 500);
      } else {
        setIsVapiLoading(true);
        setIsVapiInitializing(true);
        setVapiError(null);
        setTranscription([]);

        setTranscription([
          {
            id: Date.now(),
            speaker: 'System',
            text:
              selectedLanguage === 'hindi'
                ? 'वाणी से कनेक्ट हो रहे हैं...'
                : 'Connecting to Vaani...',
            timestamp: new Date().toLocaleTimeString(),
            isSystem: true,
          },
        ]);

        await vapiService.startCall(null, selectedLanguage);

        setTimeout(() => {
          setIsVapiCallActive(true);
          setIsVapiInitializing(false);
          setIsVapiLoading(false);

          setTranscription((prev) => [
            ...prev,
            {
              id: Date.now() + 1,
              speaker: 'Vaani',
              text:
                selectedLanguage === 'hindi'
                  ? 'नमस्ते! मैं वाणी हूं। मैं आपकी कैसे सहायता कर सकती हूं?'
                  : "Hi! I'm Vaani. How can I help you today?",
              timestamp: new Date().toLocaleTimeString(),
              isAssistant: true,
            },
          ]);
        }, 2000);
      }
    } catch (error) {
      console.error('Error with Vapi call:', error);
      setVapiError(
        selectedLanguage === 'hindi'
          ? 'कनेक्शन में समस्या है। कृपया पुनः प्रयास करें।'
          : 'Connection failed. Please try again.'
      );
      setIsVapiLoading(false);
      setIsVapiInitializing(false);
    }
  };

  const handleToggleMute = () => {
    const newMuteState = vapiService.toggleMute();
    setIsMuted(newMuteState);
  };

  const handleToggleTranscription = () => {
    setShowTranscription(!showTranscription);
  };

  useEffect(() => {
    const checkCallStatus = setInterval(() => {
      const callActive = vapiService.getCallStatus();
      if (!isVapiInitializing) {
        setIsVapiCallActive(callActive);
      }
    }, 1000);

    return () => clearInterval(checkCallStatus);
  }, [isVapiInitializing]);

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

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      return () => container.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    const canvas = canvasRef.current;

    if (!video || !canvas) return;

    const handleLoadStart = () => {
      setLoadingProgress(10);
    };

    const handleProgress = () => {
      if (video.buffered.length > 0) {
        const bufferedEnd = video.buffered.end(video.buffered.length - 1);
        const duration = video.duration;
        if (duration > 0) {
          const progress = (bufferedEnd / duration) * 100;
          setLoadingProgress(Math.min(progress, 90));
        }
      }
    };

    const handleCanPlayThrough = () => {
      setLoadingProgress(100);
      setTimeout(() => {
        setIsVideoLoaded(true);
        video.play();
      }, 500);
    };

    const ctx = canvas.getContext('2d', { willReadFrequently: true });

    // const animateCanvas = () => {
    //   if (video.readyState >= 2) {
    //     canvas.width = video.videoWidth;
    //     canvas.height = video.videoHeight;

    //     ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

    //     // const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    //     // const data = imageData.data;

    //     // for (let i = 0; i < data.length; i += 4) {
    //     //   const gray = data[i] * 0.299 + data[i + 1] * 0.587 + data[i + 2] * 0.114;
    //     //   const enhanced = gray > 128 ? Math.min(255, gray * 1.2) : Math.max(0, gray * 0.8);
    //     //   data[i] = enhanced;
    //     //   data[i + 1] = enhanced;
    //     //   data[i + 2] = enhanced;
    //     // }

    //     // ctx.putImageData(imageData, 0, 0);
    //   }
    //   requestAnimationFrame(animateCanvas);
    // };

    const animateCanvas = () => {
      const contrastFactor = 1.2;    // 🔧 Increase/decrease to change contrast (1.0 = no change)
      const saturationFactor = 1.2;  // 🔧 Increase/decrease to make colors more or less vibrant
      const scale = 1;               // 🔧 Increase/decrease to upscale more or less
    
      if (video.readyState >= 2) {
        const videoWidth = video.videoWidth;
        const videoHeight = video.videoHeight;
    
        canvas.width = videoWidth * scale;
        canvas.height = videoHeight * scale;
    
        // Draw video to an offscreen canvas first
        const offscreenCanvas = document.createElement('canvas');
        offscreenCanvas.width = videoWidth;
        offscreenCanvas.height = videoHeight;
        const offCtx = offscreenCanvas.getContext('2d');
    
        // Step 1: Draw video frame
        offCtx.drawImage(video, 0, 0, videoWidth, videoHeight);
    
        // Step 2: Get image data to manipulate pixels
        const imageData = offCtx.getImageData(0, 0, videoWidth, videoHeight);
        const data = imageData.data;
    
        // Step 3: Enhance contrast and saturation
        for (let i = 0; i < data.length; i += 4) {
          // Extract original RGB
          let r = data[i];
          let g = data[i + 1];
          let b = data[i + 2];
    
          // ----- Contrast enhancement -----
          // Formula: newColor = ((color - 128) * contrast) + 128;
          r = (r - 128) * contrastFactor + 128;
          g = (g - 128) * contrastFactor + 128;
          b = (b - 128) * contrastFactor + 128;
    
          // ----- Saturation enhancement -----
          // Convert to HSL → Increase saturation → Back to RGB
          const rgbToHsl = (r, g, b) => {
            r /= 255; g /= 255; b /= 255;
            const max = Math.max(r, g, b), min = Math.min(r, g, b);
            let h, s, l = (max + min) / 2;
    
            if (max === min) {
              h = s = 0;
            } else {
              const d = max - min;
              s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
              switch (max) {
                case r: h = (g - b) / d + (g < b ? 6 : 0); break;
                case g: h = (b - r) / d + 2; break;
                case b: h = (r - g) / d + 4; break;
              }
              h /= 6;
            }
            return [h, s, l];
          };
    
          const hslToRgb = (h, s, l) => {
            let r, g, b;
            if (s === 0) {
              r = g = b = l;
            } else {
              const hue2rgb = (p, q, t) => {
                if (t < 0) t += 1;
                if (t > 1) t -= 1;
                if (t < 1 / 6) return p + (q - p) * 6 * t;
                if (t < 1 / 2) return q;
                if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
                return p;
              };
              const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
              const p = 2 * l - q;
              r = hue2rgb(p, q, h + 1 / 3);
              g = hue2rgb(p, q, h);
              b = hue2rgb(p, q, h - 1 / 3);
            }
            return [r * 255, g * 255, b * 255];
          };
    
          let [h, s, l] = rgbToHsl(r, g, b);
          s *= saturationFactor; // Enhance saturation
          s = Math.min(1, s);    // Clamp to valid range
    
          [r, g, b] = hslToRgb(h, s, l);
    
          // Write back adjusted values (clamped)
          data[i]     = Math.min(255, Math.max(0, r));
          data[i + 1] = Math.min(255, Math.max(0, g));
          data[i + 2] = Math.min(255, Math.max(0, b));
          // Alpha (data[i + 3]) remains unchanged
        }
    
        // Step 4: Put the adjusted image back
        offCtx.putImageData(imageData, 0, 0);
    
        // Step 5: Draw the enhanced image upscaled on the main canvas
        ctx.imageSmoothingEnabled = true; // Smooth scaling
        ctx.drawImage(offscreenCanvas, 0, 0, canvas.width, canvas.height);
      }
    
      requestAnimationFrame(animateCanvas);
    };
    

    video.addEventListener('loadstart', handleLoadStart);
    video.addEventListener('progress', handleProgress);
    video.addEventListener('canplaythrough', handleCanPlayThrough);
    video.addEventListener('loadeddata', animateCanvas);

    return () => {
      video.removeEventListener('loadstart', handleLoadStart);
      video.removeEventListener('progress', handleProgress);
      video.removeEventListener('canplaythrough', handleCanPlayThrough);
      video.removeEventListener('loadeddata', animateCanvas);
    };
  }, []);

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.code === 'Space' && !isVapiLoading) {
        e.preventDefault();
        handleTalkToVaani();
      }

      if (e.code === 'KeyH') {
        handleLanguageChange('hindi');
      }
      if (e.code === 'KeyE') {
        handleLanguageChange('english');
      }

      if (e.code === 'KeyT' && (isVapiCallActive || isVapiInitializing)) {
        handleToggleTranscription();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isVapiLoading, isVapiCallActive, isVapiInitializing]);

  return (
    <div
      ref={containerRef}
      className="relative w-full min-h-screen overflow-hidden bg-black"
      style={{ height: '100vh', minHeight: '600px' }}
    >
      {/* Language Toggle */}
      <div className="fixed top-4 left-4 z-50 flex bg-white/10 backdrop-blur-xl border border-white/20 rounded-full p-1">
        <button
          onClick={() => handleLanguageChange('hindi')}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
            selectedLanguage === 'hindi'
              ? 'bg-white text-black shadow-lg'
              : 'text-white hover:bg-white/10'
          }`}
        >
          हिंदी
        </button>
        <button
          onClick={() => handleLanguageChange('english')}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
            selectedLanguage === 'english'
              ? 'bg-white text-black shadow-lg'
              : 'text-white hover:bg-white/10'
          }`}
        >
          English
        </button>
      </div>

      {/* Call Status and Transcription Toggle */}
      {(isVapiCallActive || isVapiInitializing) && (
        <div className="fixed top-4 right-4 z-50 flex flex-col gap-2">
          <div className={`flex items-center space-x-3 bg-black/30 backdrop-blur-xl border border-white/20 rounded-full px-4 py-2 ${
            isListening ? 'border-green-400/40' : ''
          }`}>
            <div className={`w-2 h-2 rounded-full ${
              isVapiInitializing 
                ? 'bg-blue-400 animate-pulse' 
                : isListening 
                ? 'bg-green-400 animate-ping' 
                : 'bg-gray-400'
            }`}></div>
            <span className="text-white text-xs font-medium">
              {isVapiInitializing 
                ? (selectedLanguage === 'hindi' ? 'शुरुआत हो रही है...' : 'Initializing...')
                : isListening 
                ? (selectedLanguage === 'hindi' ? 'सुन रही है...' : 'Listening...')
                : (selectedLanguage === 'hindi' ? 'सक्रिय' : 'Active')
              }
            </span>
          </div>

          <button
            onClick={handleToggleTranscription}
            className="hidden lg:flex items-center space-x-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full px-4 py-2 text-white text-xs font-medium hover:bg-white/20 transition-all duration-300"
          >
            <svg 
              className={`w-3 h-3 transition-transform duration-300 ${showTranscription ? 'rotate-180' : ''}`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <span>
              {showTranscription 
                ? (selectedLanguage === 'hindi' ? 'छुपाएं' : 'Hide') 
                : (selectedLanguage === 'hindi' ? 'बातचीत देखें' : 'Show Chat')
              }
            </span>
          </button>
        </div>
      )}

      {/* Live Transcription Panel */}
      {(isVapiCallActive || isVapiInitializing) && showTranscription && (
        <div className="fixed right-4 top-24 bottom-20 w-80 z-40 hidden lg:block">
          <div className="h-full bg-black/30 backdrop-blur-xl border border-white/20 rounded-2xl p-6 flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-white font-medium text-sm">
                {selectedLanguage === 'hindi' ? 'बातचीत' : 'Conversation'}
              </h3>
              <button
                onClick={handleToggleTranscription}
                className="text-gray-400 hover:text-white transition-colors duration-200"
                title="Close transcription"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div
              ref={transcriptionRef}
              className="flex-1 overflow-y-auto space-y-3 scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent"
            >
              {transcription.map((message) => (
                <div
                  key={message.id}
                  className={`p-3 rounded-lg text-sm ${
                    message.isSystem
                      ? 'bg-blue-600/20 text-blue-300 border border-blue-400/20'
                      : message.isAssistant
                      ? 'bg-green-600/20 text-green-300 border border-green-400/20'
                      : 'bg-gray-600/20 text-gray-300 border border-gray-400/20'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-medium text-xs opacity-70">{message.speaker}</span>
                    <span className="text-xs opacity-50">{message.timestamp}</span>
                  </div>
                  <p className="leading-relaxed">{message.text}</p>
                </div>
              ))}

              {isVapiInitializing && (
                <div className="flex items-center justify-center py-4">
                  <div className="w-6 h-6 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
                </div>
              )}
            </div>

            <div className="mt-4 flex space-x-2">
              <button
                onClick={handleToggleMute}
                className={`flex-1 px-3 py-2 rounded-lg text-xs font-medium transition-all duration-300 ${
                  isMuted
                    ? 'bg-red-600/90 text-white'
                    : 'bg-gray-600/90 text-white'
                } hover:scale-105`}
              >
                {isMuted ? 'Unmute' : 'Mute'}
              </button>

              <button
                onClick={() => setTranscription([])}
                className="flex-1 px-3 py-2 rounded-lg text-xs font-medium bg-gray-600/90 text-white hover:bg-gray-500/90 transition-all duration-300"
              >
                {selectedLanguage === 'hindi' ? 'साफ़ करें' : 'Clear'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Error Display */}
      {vapiError && (
        <div className="fixed top-20 right-4 z-50 bg-red-600/90 backdrop-blur-xl border border-red-400/20 text-white px-4 py-2 rounded-lg text-sm max-w-xs">
          {vapiError}
          <button
            onClick={() => setVapiError(null)}
            className="ml-2 text-red-200 hover:text-white"
          >
            ×
          </button>
        </div>
      )}

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Video Element with ImageKit URL */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover opacity-0"
        src={videoFinal}
        muted
        loop
        playsInline
        preload="metadata"
        crossOrigin="anonymous"
      />

      {/* Canvas for Video Effects */}
      <canvas
        ref={canvasRef}
        className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ${
          isVideoLoaded ? 'opacity-70' : 'opacity-0'
        }`}
      />

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-transparent to-black/80 pointer-events-none"></div>
      <div
        className="absolute inset-0 pointer-events-none transition-all duration-300"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, rgba(255,255,255,0.1) 0%, transparent 50%)`,
        }}
      ></div>

      {/* Background Gradient Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-0 w-full h-96 bg-gradient-to-r from-transparent via-blue-400/10 to-transparent transform -skew-y-12 blur-3xl opacity-40 animate-pulse"></div>
        <div className="absolute bottom-32 right-0 w-3/4 h-64 bg-gradient-to-l from-transparent via-purple-400/10 to-transparent transform skew-y-6 blur-2xl opacity-30"></div>
      </div>

      {/* Loading Screen */}
      {!isVideoLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-black z-50">
          <div className="text-center">
            <div className="relative w-20 h-20 mx-auto mb-6">
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
            <div className="text-white text-sm font-light tracking-[0.2em] mb-2">
              {selectedLanguage === 'hindi' ? 'वाणी लोड हो रही है...' : 'VAANI LOADING...'}
            </div>
            <div className="text-gray-400 text-xs">{Math.round(loadingProgress)}%</div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div
        className={`absolute inset-0 z-10 transition-all duration-1000 ${
          isVideoLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        <div className="flex flex-col justify-end items-start h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div
            className={`max-w-7xl w-full transition-all duration-500 ${
              (isVapiCallActive || isVapiInitializing) && showTranscription ? 'lg:pr-96' : ''
            }`}
          >
            <div className="relative mb-6 sm:mb-8">
              <h1 className="text-white font-bold leading-[0.9] tracking-tight relative z-10">
                <span className="block text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl bg-gradient-to-r from-blue-800 via-orange-400  bg-clip-text text-transparent ">
                  VAANI
                </span>
                <span className="block text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mt-2 sm:mt-4 bg-gradient-to-r from-gray-300 via-gray-400 to-gray-300 bg-clip-text text-transparent">
                  {selectedLanguage === 'hindi' ? 'आपके बिज़नेस की' : 'Apke Business ki'}
                </span>
              </h1>
              <div className="absolute inset-0 text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-white/5 blur-3xl -z-10">
                Vaani
              </div>
            </div>

            <p className="text-gray-300 text-base sm:text-lg lg:text-xl xl:text-2xl leading-relaxed mb-8 sm:mb-12 max-w-3xl font-light">
              {selectedLanguage === 'hindi'
                ? 'अपने सभी डेटा और वर्कफ़्लो को एक स्थान पर प्रबंधित करें। प्रक्रियाओं को स्वचालित करें, अंतर्दृष्टि प्राप्त करें, और AI-संचालित बुद्धिमत्ता के साथ अपनी रणनीति को अनुकूलित करें।'
                : 'Manage all your data and workflows in one place. Automate processes, gain insights, and optimize your strategy with'}
              {selectedLanguage === 'english' && (
                <span className="text-white font-medium"> AI-powered intelligence</span>
              )}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-12 sm:mb-16 lg:mb-20">
              <button
                onClick={handleTalkToVaani}
                disabled={isVapiLoading || isVapiInitializing}
                className={`group px-8 py-4 rounded-full text-sm sm:text-base font-medium transition-all duration-300 flex items-center justify-center space-x-3 shadow-2xl hover:scale-105 transform ${
                  isVapiCallActive
                    ? 'bg-red-600 text-white hover:bg-red-700'
                    : isVapiInitializing
                    ? 'bg-blue-600 text-white animate-pulse'
                    : 'bg-white text-black hover:bg-gray-100 hover:shadow-white/20'
                } ${(isVapiLoading || isVapiInitializing) ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {isVapiInitializing ? (
                  <>
                    <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
                    <span>{selectedLanguage === 'hindi' ? 'शुरुआत हो रही है...' : 'Initializing...'}</span>
                  </>
                ) : isVapiLoading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
                    <span>{selectedLanguage === 'hindi' ? 'कनेक्ट हो रहा है...' : 'Connecting...'}</span>
                  </>
                ) : isVapiCallActive ? (
                  <>
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                    </svg>
                    <span>{selectedLanguage === 'hindi' ? 'कॉल समाप्त करें' : 'End Call'}</span>
                  </>
                ) : (
                  <>
                    <svg
                      className="w-4 h-4 group-hover:scale-110 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                      />
                    </svg>
                    <span>{selectedLanguage === 'hindi' ? 'वाणी से बात करें' : 'Talk to Vaani'}</span>
                  </>
                )}
              </button>

              <button className="group bg-white/5 backdrop-blur-xl border border-white/20 text-white px-8 py-4 rounded-full text-sm sm:text-base font-medium hover:bg-white/10 transition-all duration-300 flex items-center justify-center space-x-3 hover:border-white/40 hover:scale-105 transform">
                <svg
                  className="w-4 h-4 group-hover:rotate-180 transition-transform duration-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 10h16M4 14h16M4 18h16"
                  />
                </svg>
                <span>{selectedLanguage === 'hindi' ? 'सेवाएं देखें' : 'View Services'}</span>
              </button>
            </div>

            <div className="border-t border-white/10 pt-8 sm:pt-12">
              <div className="text-gray-500 text-xs sm:text-sm font-medium tracking-wider mb-6 uppercase">
                {selectedLanguage === 'hindi'
                  ? 'उद्योग के नेताओं द्वारा विश्वसनीय'
                  : 'Trusted by Industry Leaders'}
              </div>
              <div className="grid grid-cols-3 sm:flex sm:items-center gap-6 sm:gap-8 lg:gap-12 opacity-60 hover:opacity-80 transition-opacity duration-300">
                {['Slack', 'Cooks', 'Opal', 'Dune', 'Oasis', 'Asterisk'].map((company, index) => (
                  <div
                    key={company}
                    className="text-white text-sm sm:text-base font-medium tracking-wider hover:text-gray-300 transition-colors duration-300 cursor-pointer"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {company}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-10 w-2 h-2 bg-white/30 rounded-full animate-bounce hidden lg:block"></div>
      <div className="absolute bottom-32 left-20 w-1 h-1 bg-blue-400/50 rounded-full animate-ping hidden lg:block"></div>
      <div className="absolute top-1/2 right-32 w-1.5 h-1.5 bg-purple-400/40 rounded-full animate-pulse hidden xl:block"></div>
    </div>
  );
};

export default HeroSection;