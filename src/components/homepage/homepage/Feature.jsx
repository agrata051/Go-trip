import React from 'react';


const Feature = () => {
  const features = [
    {
       icon: <img src="https://creativelayers.net/themes/gotrip-html/img/featureIcons/1/1.svg" alt="Customer Care" className="w-20 h-20" />,
      title: "Best Price Guarantee",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      icon: <img src="https://creativelayers.net/themes/gotrip-html/img/featureIcons/1/2.svg" alt="Customer Care" className="w-20 h-20" />,
      title: "Easy & Quick Booking",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      icon: <img src="https://creativelayers.net/themes/gotrip-html/img/featureIcons/1/3.svg" alt="Customer Care" className="w-20 h-20" />,
      title: "Customer Care 24/7",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];

  return (
    <div className="bg-white py-16 px-4 md:px-16 text-center">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center">
            {feature.icon}
            <h3 className="text-lg font-semibold mt-4">{feature.title}</h3>
            <p className="text-gray-500 mt-2">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feature;


