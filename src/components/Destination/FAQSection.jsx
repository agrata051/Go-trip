import React from 'react';

const FAQSection = () => {
  const faqList = [
    "What do I need to hire a car?",
    "How old do I have to be to rent a car?",
    "Can I book a hire car for someone else?",
    "How do I find the cheapest car hire deal?",
    "What should I look for when I’m choosing a car?"
  ];

  return (
    <div className="bg-white py-20 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10 items-start">
        {/* Left column - Title */}
        <div className="md:col-span-1">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0d1b3f] leading-tight">
            FAQs about <br /> London
          </h2>
        </div>

        {/* Right column - FAQs */}
        <div className="md:col-span-2 space-y-5">
          {faqList.map((question, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-5 border border-gray-200 rounded-xl hover:shadow-md transition"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-xl text-[#0d1b3f] font-bold">
                  +
                </div>
                <p className="text-[#0d1b3f] font-medium text-base">{question}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
