// import React from 'react';

// const RecommendedHotels = () => {
//   const hotels = [
//     {
//       image: 'https://creativelayers.net/themes/gotrip-html/img/hotels/1.png',
//       badge: 'BREAKFAST INCLUDED',
//       title: 'The Montcalm At Brewery London City',
//       location: 'Westminster Borough, London',
//     },
//     {
//       image: 'https://creativelayers.net/themes/gotrip-html/img/hotels/2.png',
//       title: 'Staycity Aparthotels Deptford Bridge Station',
//       location: 'Ciutat Vella, Barcelona',
//     },
//     {
//       image: 'https://creativelayers.net/themes/gotrip-html/img/hotels/3.png',
//       badge: 'BEST SELLER',
//       title: 'The Westin New York at Times Square',
//       location: 'Manhattan, New York',
//     },
//     {
//       image: 'https://creativelayers.net/themes/gotrip-html/img/hotels/4.png',
//       badge: 'TOP RATED',
//       title: 'DoubleTree by Hilton Hotel New York Times Square West',
//       location: 'Vaticano Prati, Rome',
//     },
//   ];

//   return (
//     <div className="px-5 md:px-12 lg:px-20 pt-16 pb-12">
//       <h2 className="text-3xl font-bold mb-8">Recommended Hotels</h2>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//         {hotels.map((hotel, idx) => (
//           <div key={idx} className="border rounded-lg overflow-hidden shadow-sm group transition hover:shadow-lg">
//             <div className="relative overflow-hidden">
//               {hotel.badge && (
//                 <span className="absolute top-3 left-3 bg-blue-600 text-white text-xs px-2 py-1 rounded shadow">
//                   {hotel.badge}
//                 </span>
//               )}
//               <img
//                 src={hotel.image}
//                 alt={hotel.title}
//                 className="w-full h-60 object-cover transform transition-transform duration-300 group-hover:scale-105"
//               />
//             </div>

//             <div className="p-4">
//               <h4 className="font-semibold text-lg group-hover:underline transition duration-200">
//                 {hotel.title}
//               </h4>
//               <p className="text-sm text-gray-600 mt-1">{hotel.location}</p>
//               <div className="flex items-center gap-2 mt-2">
//                 <span className="bg-blue-100 text-blue-700 text-xs font-bold px-2 py-0.5 rounded">4.8</span>
//                 <span className="text-sm text-gray-800 font-medium">Exceptional</span>
//                 <span className="text-sm text-gray-500">(3,014 reviews)</span>
//               </div>
//               <p className="text-sm mt-2">
//                 Starting from <span className="text-blue-600 font-semibold">US$72</span>
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default RecommendedHotels;


import React from 'react';

const RecommendedHotels = () => {
  const hotels = [
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
      <h2 className="text-3xl font-bold mb-8">Recommended Hotels</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {hotels.map((hotel, idx) => (
          <div key={idx} className="rounded-lg overflow-hidden shadow-sm transition">
            <div className="relative overflow-hidden">
              {hotel.badge && (
                <span className="absolute top-3 left-3 bg-blue-600 text-white text-xs px-2 py-1 rounded shadow">
                  {hotel.badge}
                </span>
              )}
              <img
                src={hotel.image}
                alt={hotel.title}
                className="w-full h-60 object-cover rounded-md transform transition-transform duration-300 hover:scale-105"
              />
            </div>

            <div className="p-4">
              <h4 className="font-semibold text-lg hover:underline transition duration-200">
                {hotel.title}
              </h4>
              <p className="text-sm text-gray-600 mt-1">{hotel.location}</p>

              <div className="flex items-center gap-2 mt-2">
                <span className="w-7 h-7 flex items-center justify-center bg-blue-700 text-white text-xs font-bold rounded">
                  4.8
                </span>
                <span className="text-sm text-gray-800 font-medium">Exceptional</span>
                <span className="text-sm text-gray-500">(3,014 reviews)</span>
              </div>

              <p className="text-sm mt-2 font-medium">
                Starting from <span className="text-blue-600 font-semibold">US$72</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendedHotels;
