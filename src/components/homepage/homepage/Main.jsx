
import React from 'react';

const Main = () => {
  const destinations = [
    {
      city: "New York",
      image: "https://creativelayers.net/themes/gotrip-html/img/destinations/1/1.webp",
      details: "14 Hotels · 22 Cars · 18 Tours · 95 Activities",
    },
    {
      city: "London",
      image: "https://creativelayers.net/themes/gotrip-html/img/destinations/1/2.webp",
      details: "Historic Sites · Museums · Royal Attractions",
    },
    {
      city: "Barcelona",
      image: "https://creativelayers.net/themes/gotrip-html/img/destinations/1/3.webp",
      details: "Architecture · Culture · Nightlife",
    },
    {
      city: "Sydney",
      image: "https://creativelayers.net/themes/gotrip-html/img/destinations/1/4.webp",
      details: "Harbour Bridge · Beaches · Opera House",
    },
  ];

  return (
    <div className="home1_bg">
      {/* Hero Section */}
      <div className="relative z-20 bg-cover bg-center h-[150vh] flex items-center justify-center text-white">
        <div className="text-center">
          <h1 className="text-6xl font-bold mb-10">Find Next Place To Visit</h1>
          <p>Discover amazing places at exclusive deals</p>

          {/* Category Filter Bar */}
          <div className="mt-6 mb-6 flex justify-center gap-6 text-white font-medium text-lg">
            {["Hotel", "Tour", "Activity", "Hotel", "Car", "Flight", "Cruise"].map((item, index) => (
              <button key={index} className="hover:text-blue-400">
                {item}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="bg-white text-black mt-10 p-4 rounded-full shadow-lg flex flex-wrap justify-center items-center gap-4 max-w-4xl mx-auto">
            <div>
              <label className="font-bold">Location</label>
              <p className="text-gray-600">Where are you going</p>
            </div>
            <div>
              <label className="font-bold">Check in - Check out</label>
              <p className="text-gray-600">Wed 2 Mar - Fri 11 Apr</p>
            </div>
            <div>
              <label className="font-bold">Guest</label>
              <p className="text-gray-600">2 adults · 1 child · 1 room</p>
            </div>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-full">Search</button>
          </div>
        </div>
      </div>

      {/* Destinations Section */}
      
         
          </div>
    
 
  );
};

export default Main;
