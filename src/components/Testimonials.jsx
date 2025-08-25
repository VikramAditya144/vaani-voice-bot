import React, { useState, useEffect } from 'react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const testimonials = [
    {
      id: 1,
      name: "John",
      handle: "@johnsmstrategy",
      quote: "Their AI solutions boosted our efficiency instantly! Handling complex data is now so simple.",
      role: "Founder of SM Strategy",
      tilt: "left"
    },
    {
      id: 2,
      name: "Robby",
      handle: "@robbygrow",
      quote: "The intelligent tools transformed our workflow! Managing projects feels effortless every day.",
      role: "Founder of Robby Grow",
      tilt: "none"
    },
    {
      id: 3,
      name: "Mike",
      handle: "@leadzpulses",
      quote: "AI-powered features saved us valuable time! Coordinating multiple tasks is smoother than ever.",
      role: "Founder of Leadz Pulse",
      tilt: "right"
    },
    {
      id: 4,
      name: "Sarah",
      handle: "@sarahtech",
      quote: "Revolutionary platform that streamlined our entire process! Results exceeded all expectations.",
      role: "Founder of TechFlow",
      tilt: "left"
    },
    {
      id: 5,
      name: "David",
      handle: "@davidinnovate",
      quote: "Game-changing technology that boosted our productivity! Implementation was seamless and effective.",
      role: "Founder of InnovateCorp",
      tilt: "right"
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 3 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const getVisibleCards = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % testimonials.length;
      visible.push(testimonials[index]);
    }
    return visible;
  };

  return (
    <section className="testimonials-section">
      <div className="container">
        {/* Header */}
        <div className="testimonials-header">
          <div className="feedback-badge">
            <svg className="feedback-icon" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zM4 18v-1c0-1.38 2.69-2.5 6-2.5.99 0 1.94.14 2.72.39L15 12.5c-.7-.56-1.96-1-3.5-1C7.96 11.5 4 13.07 4 16v2h8.5l-.5-.5V18H4z"/>
              <path d="M12.5 11.5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5-.5.22-.5.5.22.5.5.5z"/>
              <circle cx="10" cy="8" r="2"/>
              <circle cx="16" cy="8" r="2"/>
            </svg>
            Our Customers Feedback
          </div>
          <div className="testimonials-title-row">
            <h2 className="testimonials-title">
              Trusted by 10k+ businesses around the worldwide.
            </h2>
            <button className="cta-button">
              Get Started Now
            </button>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="testimonials-container">
          <div className="testimonials-grid">
            {getVisibleCards().map((testimonial, index) => (
              <div 
                key={`${testimonial.id}-${currentIndex}`} 
                className={`testimonial-card ${testimonial.tilt}`}
              >
                <div className="card-header">
                  <svg className="platform-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </div>
                
                <div className="testimonial-content">
                  <div className="user-info">
                    <div className="avatar">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 3.5C14.65 3.35 14.35 3.35 14 3.5L8 6.5C7.65 6.65 7.65 6.95 8 7.1L14 10.1V22H16V10.1L21 9Z"/>
                      </svg>
                    </div>
                    <div className="user-details">
                      <h4 className="user-name">{testimonial.name} <span className="user-handle">({testimonial.handle})</span></h4>
                    </div>
                  </div>
                  
                  <blockquote className="quote">
                    "{testimonial.quote}"
                  </blockquote>
                  
                  <p className="user-role">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Slide Indicators */}
          <div className="slide-indicators">
            {Array.from({ length: testimonials.length - 2 }).map((_, index) => (
              <button
                key={index}
                className={`indicator ${currentIndex === index ? 'active' : ''}`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .testimonials-section {
          background: #000000;
          color: white;
          padding: 100px 0;
          overflow: hidden;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          width: 100%;
        }

        .testimonials-header {
          margin-bottom: 80px;
          text-align: left;
        }

        .feedback-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(255, 255, 255, 0.1);
          padding: 8px 16px;
          border-radius: 24px;
          font-size: 14px;
          color: #999999;
          margin-bottom: 32px;
          font-weight: 500;
        }

        .feedback-icon {
          color: #999999;
        }

        .testimonials-title-row {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 40px;
        }

        .testimonials-title {
          font-size: 56px;
          font-weight: 700;
          line-height: 1.1;
          margin: 0;
          max-width: 650px;
          color: #ffffff;
          letter-spacing: -0.02em;
        }

        .cta-button {
          background: #ffffff;
          color: #000000;
          border: none;
          padding: 16px 32px;
          border-radius: 8px;
          font-weight: 600;
          font-size: 16px;
          cursor: pointer;
          transition: all 0.3s ease;
          white-space: nowrap;
          min-width: 180px;
        }

        .cta-button:hover {
          background: #f0f0f0;
          transform: translateY(-2px);
        }

        .testimonials-container {
          position: relative;
        }

        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
          align-items: flex-start;
          transition: all 0.8s ease;
        }

        .testimonial-card {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          padding: 32px;
          transition: all 0.8s ease;
          backdrop-filter: blur(10px);
          transform-origin: center;
          animation: slideIn 0.8s ease;
        }

        .testimonial-card.left {
          transform: rotate(-2deg);
        }

        .testimonial-card.right {
          transform: rotate(2deg);
        }

        .testimonial-card.none {
          transform: rotate(0deg);
        }

        .testimonial-card:hover {
          transform: rotate(0deg) translateY(-8px);
          border-color: rgba(255, 255, 255, 0.2);
          background: rgba(255, 255, 255, 0.08);
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .card-header {
          display: flex;
          justify-content: flex-end;
          margin-bottom: 24px;
        }

        .platform-icon {
          width: 24px;
          height: 24px;
          color: #ffffff;
          opacity: 0.8;
        }

        .testimonial-content {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .user-info {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .avatar {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          color: #ffffff;
        }

        .user-details {
          flex: 1;
        }

        .user-name {
          font-size: 18px;
          font-weight: 600;
          margin: 0;
          color: #ffffff;
          line-height: 1.4;
        }

        .user-handle {
          color: #666666;
          font-weight: 400;
          font-size: 16px;
        }

        .quote {
          font-size: 18px;
          line-height: 1.6;
          color: #cccccc;
          margin: 0;
          font-style: normal;
          font-weight: 400;
        }

        .user-role {
          font-size: 16px;
          color: #666666;
          margin: 0;
          font-weight: 500;
        }

        .slide-indicators {
          display: flex;
          justify-content: center;
          gap: 8px;
          margin-top: 48px;
        }

        .indicator {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          border: none;
          background: rgba(255, 255, 255, 0.3);
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .indicator.active {
          background: #ffffff;
        }

        .indicator:hover {
          background: rgba(255, 255, 255, 0.6);
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .testimonials-title {
            font-size: 48px;
          }
          
          .testimonials-title-row {
            gap: 24px;
          }

          .testimonials-grid {
            gap: 24px;
          }

          .testimonial-card {
            padding: 24px;
          }
        }

        @media (max-width: 768px) {
          .testimonials-section {
            padding: 80px 0;
          }

          .container {
            padding: 0 16px;
          }

          .testimonials-title-row {
            flex-direction: column;
            align-items: flex-start;
            gap: 24px;
          }

          .testimonials-title {
            font-size: 36px;
          }

          .cta-button {
            align-self: flex-start;
            padding: 12px 24px;
            font-size: 14px;
          }

          .testimonials-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .testimonials-header {
            margin-bottom: 60px;
          }

          .testimonial-card.left,
          .testimonial-card.right {
            transform: rotate(0deg);
          }
        }

        @media (max-width: 480px) {
          .testimonials-title {
            font-size: 28px;
          }

          .testimonial-card {
            padding: 20px;
          }

          .cta-button {
            padding: 10px 20px;
            font-size: 14px;
          }

          .feedback-badge {
            font-size: 12px;
            padding: 6px 12px;
          }

          .quote {
            font-size: 16px;
          }

          .user-name {
            font-size: 16px;
          }
        }

        @media (max-width: 320px) {
          .testimonial-card {
            padding: 16px;
          }
          
          .testimonials-title {
            font-size: 24px;
          }

          .avatar {
            width: 48px;
            height: 48px;
          }
        }
      `}</style>
    </section>
  );
};

export default Testimonials;