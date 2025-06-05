import React from 'react';

const DestinationsSection = () => {
  const destinations = [
    { name: "London, UK", image: "https://creativelayers.net/themes/gotrip-html/img/locations/1.png" },
    { name: "Edinburgh, UK", image: "https://creativelayers.net/themes/gotrip-html/img/locations/2.png" },
    { name: "Manchester, UK", image: "https://creativelayers.net/themes/gotrip-html/img/locations/3.png" },
    { name: "Liverpool, UK", image: "https://creativelayers.net/themes/gotrip-html/img/locations/4.png" },
    { name: "Birmingham, UK", image: "https://creativelayers.net/themes/gotrip-html/img/locations/5.png" },
    { name: "Glasgow, UK", image: "https://creativelayers.net/themes/gotrip-html/img/locations/6.png" },
  ];

  return (
    <div className="bg-white py-16 px-6 md:px-20">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-[#0d1b3f]">Destinations near London</h2>
        <p className="text-gray-500 mt-2">These popular destinations have a lot to offer</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
        {destinations.map((location, index) => (
          <div key={index} className="rounded-xl overflow-hidden shadow-sm border border-gray-200 hover:shadow-md transition">
            <img src={location.image} alt={location.name} className="w-40 h-40 object-cover" />
            <div className="p-3">
              <h3 className="text-base font-semibold text-[#0d1b3f]">{location.name}</h3>
              <p className="text-sm text-gray-500">4,090 properties</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DestinationsSection;
