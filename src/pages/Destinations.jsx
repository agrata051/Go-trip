import React from 'react';
import InfoAndMap from '../components/Destination/InfoAndMap';
import DestinationWeather from '../components/Destination/DestinationWeather';
import RecommendedHotels from '../components/Destination/RecommendedHotels';
import PopularTours from '../components/Destination/PopularTours';
import TrendingActivities from '../components/Destination/TrendingActivities';
import FeaturedHolidayRentals from '../components/Destination/FeaturedHolidayRentals';
import CarHire from '../components/Destination/CarHire';
import BlogInspiration from '../components/Destination/BlogInspiration';
import TopSightsLondon from '../components/Destination/TopSightsLondon';
import CustomerTestimonials from '../components/Destination/CustomerTestimonials';
import FAQSection from '../components/Destination/FAQSection';
import DestinationsSection from '../components/Destination/DestinationsSection';
import CategoryGrid from '../components/Destination/CategoryGrid';

const Destinations = () => {
  return (
    <div className="font-sans text-gray-800 bg-white">
      {/* Header */}
      <div className="px-5 md:px-12 lg:px-20 mt-8">
        <div className="h-[400px] w-full bg-cover bg-center rounded-xl flex flex-wrap flex-col justify-center px-10 destination_bg">
          <h1 className="text-white text-5xl font-bold">Explore London</h1>
          <p className="text-white text-lg mt-2">
            Explore deals, travel guides and things to do in London
          </p>
        </div>
      </div>

<CategoryGrid/>
<InfoAndMap/>
<DestinationWeather/>
<RecommendedHotels/>
<PopularTours/>
<TrendingActivities/>
<FeaturedHolidayRentals/>
<CarHire/>
<BlogInspiration/>
<TopSightsLondon/>
<CustomerTestimonials/>
<FAQSection/>
<DestinationsSection/>

      </div>
 );
};

export default Destinations;