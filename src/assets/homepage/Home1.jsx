import React, { useEffect, useState } from "react";
import Main from "../components/homepage/main";
import Populardestination from "../components/homepage/Populardestination";
import Recommendation from "../components/homepage/Recommendation";
import Feature from "../components/homepage/Feature";
import Inspiration from "../components/homepage/Inspiration";
import Testomonial from "../components/homepage/Testomonial";
const Home = () => {
  return (
    <div>
<Main />
<Populardestination />
<section className="py-16 px-4 sm:px-6 lg:px-20 bg-white">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
    {/* Experiences */}
    <div className="relative rounded-1xl overflow-hidden group h-[470px]">
      <img
        src="https://creativelayers.net/themes/gotrip-html/img/backgrounds/1.png" 
        alt="Things to do"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0  bg-opacity-30" />
      <div className="relative z-10 h-full flex flex-col justify-start items-start text-left px-20 pt-20">
        <h2 className="text-white text-4xl font-bold leading-snug mb-6">
          Things to do on<br />your trip
        </h2>
        <button className="bg-white text-gray-900 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition">
          Experiences
        </button>
      </div>
    </div>
    {/* Summer Deals */}
    <div className="relative rounded-1xl overflow-hidden group h-[470px]">
      <img
        src="https://creativelayers.net/themes/gotrip-html/img/backgrounds/2.png" 
        alt="Summer Deals"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0  bg-opacity-30" />
      <div className="relative z-10 h-full flex flex-col justify-start items-start text-left px-20 pt-20">
        <p className="text-white text-base font-medium mb-2">Enjoy Summer Deals</p>
        <h2 className="text-white text-4xl font-bold leading-snug mb-6">
          Up to 70% Discount!
        </h2>
        <button className="bg-white text-gray-900 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition">
          Learn More
        </button>
      </div>
    </div>
  </div>
</section>

<Recommendation/>
<Feature/>
<Testomonial/>
<Inspiration/>
</div> 
  );
};
export default Home;
