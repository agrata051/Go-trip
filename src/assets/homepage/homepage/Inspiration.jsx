import React, { useState } from "react";

const Inspiration = () => {
  const [activeTab, setActiveTab] = useState("Regions");

  const inspirations = [
    {
      img: "https://creativelayers.net/themes/gotrip-html/img/blog/1.png",
      title: "10 European ski destinations you should visit this winter",
      date: "April 06, 2022",
    },
    {
      img: "https://creativelayers.net/themes/gotrip-html/img/blog/2.png",
      title: "Booking travel during Corona: good advice in an uncertain time",
      date: "April 06, 2022",
    },
    {
      img: "https://creativelayers.net/themes/gotrip-html/img/blog/3.png",
      title: "Where can I go? 5 amazing countries that are open right now",
      date: "April 06, 2022",
    },
  ];

  const destinations = [
    "Hawai", "Istanbul", "San Diego", "Phuket", "Reykjavik",
    "Santorini", "Los Angeles", "Ibiza", "Boston", "Florence",
    "Mykonos", "London", "Paris", "Dubai", "Krakow",
    "Jersey", "Prag", "Amsterdam", "Rome", "Miami"
  ];

  return (
    <div className="py-16 px-6 lg:px-24"> {/* Left padding adjusted here */}
      {/* Inspiration Section */}
      <section className="max-w-7xl mb-24">
        <h2 className="text-4xl font-bold mb-2">Get inspiration for your next trip</h2>
        <p className="text-lg text-gray-500">Interdum et malesuada fames</p>
        <div className="grid md:grid-cols-3 gap-8 mt-8">
          {inspirations.map((item, i) => (
            <div key={i}>
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-60 object-cover rounded-xl mb-4"
              />
              <h3 className="text-xl font-semibold text-[#0A1128]">{item.title}</h3>
              <p className="text-gray-500 text-base mt-1">{item.date}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Destinations Section */}
      <section className="max-w-7xl">
        <h1 className="text-[32px] font-bold text-[#0A1128] mb-2">Destinations we love</h1>
        <p className="text-base text-gray-500 mb-10">Interdum et malesuada fames ac ante ipsum</p>

        {/* Tabs */}
        <div className="flex space-x-6 mb-10">
          {['Regions', 'Cities', 'Places of interest'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`text-base font-medium px-6 py-2 rounded-lg transition ${
                activeTab === tab
                  ? 'bg-[#F3F4F6] text-[#3B49DF]'
                  : 'text-black'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-8 gap-y-10">
          {destinations.map((place, index) => (
            <div key={index} className="text-left">
              <h3 className="text-base font-semibold text-[#0A1128] mb-1">{place}</h3>
              <p className="text-sm text-gray-500">12,683 properties</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Inspiration;


