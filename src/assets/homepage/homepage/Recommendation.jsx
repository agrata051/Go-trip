import React from 'react';
const Recommendation = () => {
  const recommendations = [
    {
      image: 'https://creativelayers.net/themes/gotrip-html/img/hotels/1.png',
      badge: 'BREAKFAST INCLUDED',
      title: 'The Montcalm At Brewery London City',
      location: 'Westminster Borough, London',
    },
    {
      image: 'https://creativelayers.net/themes/gotrip-html/img/hotels/2.png',
      title: 'Staycity Aparthotels Deptford Bridge Station',
      location: 'Ciutat Vella, Barcelona',
    },
    {
      image: 'https://creativelayers.net/themes/gotrip-html/img/hotels/3.png',
      badge: 'BEST SELLER',
      title: 'The Westin New York at Times Square',
      location: 'Manhattan, New York',
    },
    {
      image: 'https://creativelayers.net/themes/gotrip-html/img/hotels/4.png',
      badge: 'TOP RATED',
      title: 'DoubleTree by Hilton Hotel New York Times Square West',
      location: 'Vaticano Prati, Rome',
    },
  ];

  return (
    <div className="px-5 md:px-12 lg:px-20 pt-16 pb-12">
      <h2 className="text-3xl font-bold mb-8">Recommended</h2>
      <p className="text-l text-gray-500 mt-4 mb-8 ">
              Interdum et malesuada fames ac ante ipsum
            </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {recommendations.map((hotel, idx) => (
          <div key={idx} className="group">
            <div className="relative overflow-hidden rounded-2xl">
              <div className="absolute top-3 right-3 bg-white p-1 rounded-full shadow z-20 hover:bg-gray-100 cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4 text-black-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.752 6.984a6.002 6.002 0 00-11.2-2.352A6.002 6.002 0 002.25 6.984c0 4.28 5.57 7.41 8.966 10.425a.75.75 0 001.068 0c3.395-3.015 8.966-6.144 8.966-10.425z"
                  />
                </svg>
              </div>
              {hotel.badge && (
                <span className="absolute top-3 left-3 bg-blue-600 text-white text-xs px-2 py-1 rounded shadow z-10">
                  {hotel.badge}
                </span>
              )}
              <img
                src={hotel.image}
                alt={hotel.title}
                className="w-full h-60 object-cover rounded-2xl transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-4">
              <h4 className="font-semibold text-lg group-hover:underline transition duration-200">
                {hotel.title}
              </h4>
              <p className="text-sm text-gray-600 mt-1">{hotel.location}</p>
              <div className="flex items-center gap-2 mt-2">
                <span className="bg-blue-900 text-blue-200 text-xs font-bold px-2 py-0.5 rounded">4.8</span>
                <span className="text-sm text-gray-800 font-medium">Exceptional</span>
                <span className="text-sm text-gray-500">(3,014 reviews)</span>
              </div>
              <p className="text-sm mt-2">
                Starting from <span className="text-blue-600 font-semibold">US$72</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recommendation;
