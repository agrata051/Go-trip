// import React from 'react';

// const TrendingActivities = () => {
//   const activities = [
//     {
//       tag: 'LIKELY TO SELL OUT*',
//       image: 'https://creativelayers.net/themes/gotrip-html/img/activities/1.png',
//       title: 'Golden Circle, Kerid Volcanic Crater, and Blue Lagoon Day Trip',
//       location: 'Westminster Borough, London',
//     },
//     {
//       image: 'https://creativelayers.net/themes/gotrip-html/img/activities/2.png',
//       title: 'Edinburgh Sky to Sea Bike Tour by Manual or E-Bike',
//       location: 'Ciutat Vella, Barcelona',
//     },
//     {
//       tag: 'BEST SELLER',
//       image: 'https://creativelayers.net/themes/gotrip-html/img/activities/3.png',
//       title: 'Natural Crystal Blue Ice Cave Tour of Vatnajökull Glacier',
//       location: 'Manhattan, New York',
//     },
//     {
//       tag: 'TOP RATED',
//       image: 'https://creativelayers.net/themes/gotrip-html/img/activities/4.png',
//       title: 'South Coast Full Day Tour by Minibus from Reykjavik',
//       location: 'Vaticano Prati, Rome',
//     },
//   ];

//   return (
//     <div className="px-5 md:px-12 lg:px-20 py-10 bg-white">
//       <div className="flex flex-wrap justify-between items-center mb-6">
//         <div>
//           <h2 className="text-2xl md:text-3xl font-bold">Trending Activity</h2>
//           <p className="text-gray-500 text-sm">Interdum et malesuada fames ac ante ipsum</p>
//         </div>
//         <a href="#" className="text-sm text-blue-600 font-semibold flex items-center gap-1">
//           More <span>→</span>
//         </a>
//       </div>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {activities.map((activity, index) => (
//           <div key={index} className="border rounded-lg overflow-hidden shadow-sm group transition hover:shadow-lg">
//             <div className="relative">
//               {activity.tag && (
//                 <span className="absolute top-3 left-3 bg-yellow-400 text-xs font-bold px-2 py-1 rounded shadow">
//                   {activity.tag}
//                 </span>
//               )}
//               <img
//                 src={activity.image}
//                 alt={activity.title}
//                 className="w-full h-60 object-cover transform transition-transform duration-300 group-hover:scale-105"
//               />
//             </div>
//             <div className="p-4">
//               <h4 className="font-semibold text-base group-hover:underline">{activity.title}</h4>
//               <p className="text-sm text-gray-500 mt-1">{activity.location}</p>
//               <div className="flex items-center gap-1 mt-2 text-yellow-500 text-sm">
//                 ★ 4.82 <span className="text-gray-700 ml-2">94 reviews</span>
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

// export default TrendingActivities;

import React from 'react';

const TrendingActivities = () => {
  const activities = [
    {
      tag: 'LIKELY TO SELL OUT*',
      image: 'https://creativelayers.net/themes/gotrip-html/img/activities/1.png',
      title: 'Golden Circle, Kerid Volcanic Crater, and Blue Lagoon Day Trip',
      location: 'Westminster Borough, London',
    },
    {
      image: 'https://creativelayers.net/themes/gotrip-html/img/activities/2.png',
      title: 'Edinburgh Sky to Sea Bike Tour by Manual or E-Bike',
      location: 'Ciutat Vella, Barcelona',
    },
    {
      tag: 'BEST SELLER',
      image: 'https://creativelayers.net/themes/gotrip-html/img/activities/3.png',
      title: 'Natural Crystal Blue Ice Cave Tour of Vatnajökull Glacier',
      location: 'Manhattan, New York',
    },
    {
      tag: 'TOP RATED',
      image: 'https://creativelayers.net/themes/gotrip-html/img/activities/4.png',
      title: 'South Coast Full Day Tour by Minibus from Reykjavik',
      location: 'Vaticano Prati, Rome',
    },
  ];

  return (
    <div className="px-5 md:px-12 lg:px-20 py-10 bg-white">
      <div className="flex flex-wrap justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold">Trending Activity</h2>
          <p className="text-gray-500 text-sm">Interdum et malesuada fames ac ante ipsum</p>
        </div>
        <a href="#" className="text-sm text-blue-600 font-semibold flex items-center gap-1">
          More <span>→</span>
        </a>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {activities.map((activity, index) => (
          <div
            key={index}
            className="rounded-lg overflow-hidden shadow-sm bg-white transition"
          >
            <div className="relative group overflow-hidden">
              {activity.tag && (
                <span className="absolute top-3 left-3 bg-yellow-400 text-xs font-bold px-2 py-1 rounded shadow z-10">
                  {activity.tag}
                </span>
              )}
              <img
                src={activity.image}
                alt={activity.title}
                className="w-full h-60 object-cover rounded-md transform transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-4">
              <h4 className="font-semibold text-base transition">
                <span className="group-hover:underline inline-block">{activity.title}</span>
              </h4>
              <p className="text-sm text-gray-500 mt-1">{activity.location}</p>
              <div className="flex items-center justify-between mt-2">
                <div className="flex items-center gap-1 text-yellow-500 text-sm">
                  ★ 4.82 <span className="text-gray-700 ml-2">94 reviews</span>
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

export default TrendingActivities;

