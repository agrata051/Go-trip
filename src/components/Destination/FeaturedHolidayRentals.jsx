// import React from 'react';

// const FeaturedHolidayRentals = () => {
//   const rentals = [
//     {
//       image: 'https://creativelayers.net/themes/gotrip-html/img/rentals/1.png',
//       location: 'Westminster Borough, London',
//       title: 'Luxury New Apartment With Private Garden',
//     },
//     {
//       image: 'https://creativelayers.net/themes/gotrip-html/img/rentals/2.png',
//       location: 'Ciutat Vella, Barcelona',
//       title: 'Premium One Bedroom Luxury Living in the Heart of Mayfair',
//     },
//     {
//       image: 'https://creativelayers.net/themes/gotrip-html/img/rentals/3.png',
//       location: 'Manhattan, New York',
//       title: 'Style, Charm & Comfort in Camberwell',
//       badge: 'BEST SELLER',
//     },
//     {
//       image: 'https://creativelayers.net/themes/gotrip-html/img/rentals/4.png',
//       location: 'Vaticano Prati, Rome',
//       title: 'Marylebone - Oxford Street 1 bed apt with WiFi',
//       badge: 'TOP RATED',
//     },
//   ];

//   return (
//     <div className="px-5 md:px-12 lg:px-20 py-10 bg-white">
//       <div className="flex justify-between items-center mb-6">
//         <div>
//           <h2 className="text-2xl md:text-3xl font-bold">Featured Holiday Rentals</h2>
//           <p className="text-gray-500 text-sm">Interdum et malesuada fames ac ante ipsum</p>
//         </div>
//         <a href="#" className="text-sm text-blue-600 font-semibold flex items-center gap-1">
//           More <span>→</span>
//         </a>
//       </div>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {rentals.map((rental, index) => (
//           <div key={index} className="border rounded-lg overflow-hidden shadow-sm group hover:shadow-lg transition">
//             <div className="relative">
//               {rental.badge && (
//                 <span className="absolute top-3 left-3 bg-yellow-400 text-xs font-bold px-2 py-1 rounded shadow">
//                   {rental.badge}
//                 </span>
//               )}
//               <img
//                 src={rental.image}
//                 alt={rental.title}
//                 className="w-full h-60 object-cover transform transition-transform duration-300 group-hover:scale-105"
//               />
//             </div>
//             <div className="p-4">
//               <p className="text-sm text-gray-500">{rental.location}</p>
//               <h4 className="font-semibold mt-1 group-hover:underline">{rental.title}</h4>
//               <p className="text-sm text-gray-500 mt-1">2 guests • 1 bedroom • 1 bed</p>
//               <div className="flex items-center gap-1 mt-2 text-blue-600 text-sm">
//                 <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded font-semibold">4.8</span>
//                 <span className="text-gray-700 font-medium">Exceptional</span>
//                 <span className="text-gray-500">3,014 reviews</span>
//               </div>
//               <p className="text-sm mt-1">
//                 <span className="text-gray-600">US$</span>
//                 <span className="text-blue-600 font-semibold ml-1">72</span>
//                 <span className="text-gray-500"> / per night</span>
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default FeaturedHolidayRentals;

import React from 'react';

const FeaturedHolidayRentals = () => {
  const rentals = [
    {
      image: 'https://creativelayers.net/themes/gotrip-html/img/rentals/1.png',
      location: 'Westminster Borough, London',
      title: 'Luxury New Apartment With Private Garden',
    },
    {
      image: 'https://creativelayers.net/themes/gotrip-html/img/rentals/2.png',
      location: 'Ciutat Vella, Barcelona',
      title: 'Premium One Bedroom Luxury Living in the Heart of Mayfair',
    },
    {
      image: 'https://creativelayers.net/themes/gotrip-html/img/rentals/3.png',
      location: 'Manhattan, New York',
      title: 'Style, Charm & Comfort in Camberwell',
      badge: 'BEST SELLER',
    },
    {
      image: 'https://creativelayers.net/themes/gotrip-html/img/rentals/4.png',
      location: 'Vaticano Prati, Rome',
      title: 'Marylebone - Oxford Street 1 bed apt with WiFi',
      badge: 'TOP RATED',
    },
  ];

  return (
    <div className="px-5 md:px-12 lg:px-20 py-10 bg-white">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold">Featured Holiday Rentals</h2>
          <p className="text-gray-500 text-sm">Interdum et malesuada fames ac ante ipsum</p>
        </div>
        <a href="#" className="text-sm text-blue-600 font-semibold flex items-center gap-1">
          More <span>→</span>
        </a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {rentals.map((rental, index) => (
          <div key={index} className="rounded-lg overflow-hidden shadow-sm bg-white transition">
            <div className="relative group overflow-hidden">
              {rental.badge && (
                <span className="absolute top-3 left-3 bg-yellow-400 text-xs font-bold px-2 py-1 rounded shadow z-10">
                  {rental.badge}
                </span>
              )}
              <img
                src={rental.image}
                alt={rental.title}
                className="w-full h-60 object-cover rounded-md transform transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            <div className="p-4">
              <p className="text-sm text-gray-500">{rental.location}</p>
              <h4 className="font-semibold mt-1 transition">
                <span className="group-hover:underline inline-block">{rental.title}</span>
              </h4>
              <p className="text-sm text-gray-500 mt-1">2 guests • 1 bedroom • 1 bed</p>

              <div className="flex items-center gap-2 mt-2 text-sm">
                <span className="bg-blue-700 text-white px-2 py-0.5 rounded font-semibold text-xs">4.8</span>
                <span className="text-gray-700 font-medium">Exceptional</span>
                <span className="text-gray-500">3,014 reviews</span>
              </div>

              <div className="mt-1 text-sm">
                <span className="text-gray-600 font-medium">US$</span>
                <span className="text-blue-600 font-semibold ml-1">72</span>
                <span className="text-gray-500"> / per night</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedHolidayRentals;
