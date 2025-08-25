import React, { useState } from 'react';

const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  
  const faqs = [
    {
      id: 1,
      question: "How does the pay-per-lead pricing work?",
      answer: "You only pay for leads that meet your qualification criteria. No monthly fees, no setup costs. We charge a fixed rate per qualified lead delivered to your sales team, typically ranging from $15-50 depending on your industry and requirements."
    },
    {
      id: 2,
      question: "What counts as a 'qualified lead'?",
      answer: "A qualified lead is a prospect who has been contacted by Vaani, confirmed their interest in your product/service, meets your specific criteria (budget, timeline, authority), and has agreed to speak with your sales team. We customize qualification criteria for each client."
    },
    {
      id: 3,
      question: "How quickly can I get started?",
      answer: "Most clients are live within 48 hours. Our process includes: Day 1 - CRM integration and AI training, Day 2 - Testing and go-live. We handle all technical setup, so you don't need any technical expertise on your team."
    },
    {
      id: 4,
      question: "Is my data secure and private?",
      answer: "Absolutely. We're SOC 2 compliant and follow enterprise-grade security protocols. Your data is encrypted in transit and at rest. We never share your leads with other companies and maintain strict confidentiality agreements."
    },
    {
      id: 5,
      question: "Can I cancel anytime?",
      answer: "Yes, there are no long-term contracts. You can pause or cancel your campaigns at any time. Since you only pay for delivered leads, there are no ongoing commitments or cancellation fees."
    },
    {
      id: 6,
      question: "What languages does Vaani support?",
      answer: "Vaani currently supports 50+ languages with native-speaker quality. We can handle multilingual campaigns and automatically detect the best language for each prospect based on their preferences and location."
    }
  ];

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <section className="bg-black text-white py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
          {/* Left Column - Header */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full border-2 border-gray-400 flex items-center justify-center">
                <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
              </div>
              <span className="text-gray-400 text-sm font-medium">
                Your Questions Answered
              </span>
            </div>

            {/* Title */}
            <div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                FAQs & Support
              </h2>
              <p className="text-gray-400 text-lg mb-8">
                not finding what you're looking for ?
              </p>
            </div>

            {/* CTA Button */}
            <button className="bg-white text-black px-8 py-4 rounded-lg font-semibold text-base hover:bg-gray-100 transition-colors duration-300">
              Get Started Now
            </button>
          </div>

          {/* Right Column - FAQ Items */}
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.id} className="border-b border-gray-800 pb-6">
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full flex items-center justify-between text-left group"
                >
                  <h3 className="text-lg sm:text-xl font-medium text-white pr-4 group-hover:text-gray-300 transition-colors">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    <svg
                      className={`w-6 h-6 text-gray-400 transition-transform duration-300 ${
                        openFAQ === faq.id ? 'rotate-45' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </div>
                </button>
                
                {openFAQ === faq.id && (
                  <div className="mt-4 pr-10 animate-fadeIn">
                    <p className="text-gray-400 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Button */}
        
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </section>
  );
};

export default FAQ;