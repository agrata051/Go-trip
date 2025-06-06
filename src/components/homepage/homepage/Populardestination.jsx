
import React, { useState } from "react";

const Populardestination = () => {
  const destinations = [
    {
      city: "New York",
      image: "https://creativelayers.net/themes/gotrip-html/img/destinations/1/1.webp",
      details: "14 Hotel · 22 Cars · 18 Tours · 95 Activity",
    },
    {
      city: "London",
      image: "https://creativelayers.net/themes/gotrip-html/img/destinations/1/2.webp",
      details: "14 Hotel · 22 Cars · 18 Tours · 95 Activity",
    },
    {
      city: "Barcelona",
      image: "https://creativelayers.net/themes/gotrip-html/img/destinations/1/3.webp",
      details: "14 Hotel · 22 Cars · 18 Tours · 95 Activity",
    },
    {
      city: "Sydney",
      image: "https://creativelayers.net/themes/gotrip-html/img/destinations/1/4.webp",
      details: "14 Hotel · 22 Cars · 18 Tours · 95 Activity",
    },
    {
      city: "Rome",
      image: "https://creativelayers.net/themes/gotrip-html/img/destinations/1/5.webp",
      details: "14 Hotel · 22 Cars · 18 Tours · 95 Activity",
    },
    
  ];

  const [startIndex, setStartIndex] = useState(0);

  const handleNext = () => {
    if (startIndex < destinations.length - 4) {
      setStartIndex(startIndex + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-20 bg-white">
      <div className="max-w-7xl mx-auto">
       
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Popular Destinations</h2>
          <p className="text-l text-gray-500 mt-4 ">
              These popular destinations have a lot to offer</p>
          </div>
          <button className="mt-4 sm:mt-0 px-6 py-3 bg-gray-100 text-blue-600 font-semibold rounded-lg hover:bg-gray-200 transition">
            View All Destinations ↑
          </button>
        </div>

      
        <div className="relative">
        
          <button
            onClick={handlePrev}
            className="absolute left-[-1.5rem] top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-md w-10 h-10 flex items-center justify-center rounded-full"
          >
            <span className="text-xl">‹</span>
          </button>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 overflow-hidden">
            {destinations.slice(startIndex, startIndex + 4).map((destination, index) => (
              <div
                key={index}
                className="relative rounded:5xl overflow-hidden shadow-sm group cursor-pointer"
              >
                <img
                  src={destination.image}
                  alt={destination.city}
                  className="w-65 h-90  group-hover:brightness-75 transition duration-300"
                />
                <div className="absolute inset-0 flex flex-col justify-between p-4">
                  <div className="text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {destination.details}
                  </div>
                  <div className="text-center">
                    <h3 className="text-2xl font-semibold text-white mb-2">{destination.city}</h3>
                    <button className="opacity-0 group-hover:opacity-200 transition-opacity duration-300 align-middle bg-white text-black font-medium px-20 py-2  hover:bg-gray-100 ">
                      Discover
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={handleNext}
            className="absolute right-[-1.5rem] top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-md w-10 h-10 flex items-center justify-center rounded-full"
          >
            <span className="text-xl">›</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Populardestination;

