import React from 'react';

const Destinations = () => {
  return (
    <div className="font-sans text-gray-800 bg-white">
    
      <div className="px-5 md:px-12 lg:px-20 mt-8">
        <div
          className="h-[400px] w-full bg-cover bg-center rounded-xl flex flex-col justify-center px-10 destination_bg"
          
        >
          <h1 className="text-white text-5xl font-bold">Explore London</h1>
          <p className="text-white text-lg mt-2">
            Explore deals, travel guides and things to do in London
          </p>
        </div>
      </div>

   
      <div className="px-5 pt-12 md:px-12 lg:px-20">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {[
            'Hotel',
            'Tour',
            'Activity',
            'Holiday Rentals',
            'Car',
            'Cruise',
            'Flights',
          ].map((label) => (
            <div
              key={label}
              className="bg-amber-50 flex items-center justify-center p-4 border rounded hover:shadow-lg transition text-sm font-medium text-center"
            >
              {label}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Destinations;




