// import React from 'react';

// const PopularTours = () => {
//   const tours = [
//     {
//       image: 'https://creativelayers.net/themes/gotrip-html/img/tours/1.png',
//       badge: 'LIKELY TO SELL OUT*',
//       title: 'Stonehenge, Windsor Castle and Bath with Pub Lunch in Lacock',
//       duration: '16+ hours',
//       type: 'Full-day Tours',
//       location: 'Westminster Borough, London',
//     },
//     {
//       image: 'https://creativelayers.net/themes/gotrip-html/img/tours/2.png',
//       title: 'Westminster Walking Tour & Westminster Abbey Entry',
//       duration: '9+ hours',
//       type: 'Attractions & Museums',
//       location: 'Ciutat Vella, Barcelona',
//     },
//     {
//       image: 'https://creativelayers.net/themes/gotrip-html/img/tours/3.png',
//       badge: 'BEST SELLER',
//       title: 'High-Speed Thames River RIB Cruise in London',
//       duration: '40–55 minutes',
//       type: 'Private and Luxury',
//       location: 'Manhattan, New York',
//     },
//     {
//       image: 'https://creativelayers.net/themes/gotrip-html/img/tours/4.png',
//       badge: 'TOP RATED',
//       title: 'Edinburgh Darkside Walking Tour: Mysteries, Murder and Legends',
//       duration: '9+ days',
//       type: 'Bus Tours',
//       location: 'Vaticano Prati, Rome',
//     },
//   ];

//   return (
//     <div className="px-5 md:px-12 lg:px-20 pt-10 pb-20">
//       <h2 className="text-3xl font-bold mb-2">Most Popular Tours</h2>
//       <p className="text-gray-500 mb-6">Interdum et malesuada fames ac ante ipsum</p>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//         {tours.map((tour, idx) => (
//           <div key={idx} className="border rounded-lg overflow-hidden shadow-sm group transition hover:shadow-lg">
//             <div className="relative">
//               {tour.badge && (
//                 <span className="absolute top-3 left-3 bg-yellow-400 text-xs font-bold px-2 py-1 rounded shadow">
//                   {tour.badge}
//                 </span>
//               )}
//               <img
//                 src={tour.image}
//                 alt={tour.title}
//                 className="w-full h-60 object-cover transform transition-transform duration-300 group-hover:scale-105"
//               />
//             </div>
//             <div className="p-4">
//               <div className="text-sm text-gray-600 mb-1">{tour.duration} • {tour.type}</div>
//               <h4 className="font-semibold text-base group-hover:underline">{tour.title}</h4>
//               <p className="text-sm text-gray-500 mt-1">{tour.location}</p>
//               <div className="flex items-center gap-1 mt-2 text-yellow-500 text-sm">
//                 ★★★★★ <span className="text-gray-700 ml-2">3,014 reviews</span>
//               </div>
//               <p className="text-sm mt-1">
//                 From <span className="text-blue-600 font-semibold">US$72</span>
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default PopularTours;


import React from 'react';

const PopularTours = () => {
  const tours = [
    {
      image: 'https://creativelayers.net/themes/gotrip-html/img/tours/1.png',
      badge: 'LIKELY TO SELL OUT*',
      title: 'Stonehenge, Windsor Castle and Bath with Pub Lunch in Lacock',
      duration: '16+ hours',
      type: 'Full-day Tours',
      location: 'Westminster Borough, London',
    },
    {
      image: 'https://creativelayers.net/themes/gotrip-html/img/tours/2.png',
      title: 'Westminster Walking Tour & Westminster Abbey Entry',
      duration: '9+ hours',
      type: 'Attractions & Museums',
      location: 'Ciutat Vella, Barcelona',
    },
    {
      image: 'https://creativelayers.net/themes/gotrip-html/img/tours/3.png',
      badge: 'BEST SELLER',
      title: 'High-Speed Thames River RIB Cruise in London',
      duration: '40–55 minutes',
      type: 'Private and Luxury',
      location: 'Manhattan, New York',
    },
    {
      image: 'https://creativelayers.net/themes/gotrip-html/img/tours/4.png',
      badge: 'TOP RATED',
      title: 'Edinburgh Darkside Walking Tour: Mysteries, Murder and Legends',
      duration: '9+ days',
      type: 'Bus Tours',
      location: 'Vaticano Prati, Rome',
    },
  ];

  return (
    <div className="px-5 md:px-12 lg:px-20 pt-10 pb-20">
      <h2 className="text-3xl font-bold mb-2">Most Popular Tours</h2>
      <p className="text-gray-500 mb-6">Interdum et malesuada fames ac ante ipsum</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {tours.map((tour, idx) => (
          <div key={idx} className="rounded-lg overflow-hidden shadow-sm bg-white transition">
            <div className="relative group overflow-hidden">
              {tour.badge && (
                <span className="absolute top-3 left-3 bg-yellow-400 text-xs font-bold px-2 py-1 rounded shadow z-10">
                  {tour.badge}
                </span>
              )}
              <img
                src={tour.image}
                alt={tour.title}
                className="w-full h-60 object-cover rounded-md transform transition-transform duration-300 group-hover:scale-105"
              />
              {/* This invisible overlay helps link image hover to title */}
              <div className="absolute inset-0 group-hover peer" />
            </div>
            <div className="p-4">
              <div className="text-sm text-gray-600 mb-1">
                {tour.duration} • {tour.type}
              </div>
              <h4 className="font-semibold text-base transition">
                <h4 className="font-semibold text-base group-hover:underline">{tour.title}</h4>
              </h4>
              <p className="text-sm text-gray-500 mt-1">{tour.location}</p>
              <div className="flex items-center justify-between mt-2">
                <div className="flex items-center gap-1 text-yellow-500 text-sm">
                  ★★★★★ <span className="text-gray-700 ml-2">3,014 reviews</span>
                </div>
                <p className="text-sm font-medium text-right whitespace-nowrap">
                  From <span className="text-blue-600 font-semibold">US$72</span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularTours;
