// import React from 'react';

// const CarHire = () => {
//   const cars = [
//     {
//       id: 1,
//       name: 'Mercedes-Benz E-Class',
//       location: 'Heathrow Airport - LUXURY',
//       price: 72,
//       image: 'https://creativelayers.net/themes/gotrip-html/img/cars/2.png',
//       type: 'Automatic',
//       rating: 4.9,
//       reviews: 3104,
//       badge: null,
//     },
//     {
//       id: 2,
//       name: 'Jaguar F-Pace',
//       location: 'Heathrow Airport - SUV',
//       price: 72,
//       image: 'https://creativelayers.net/themes/gotrip-html/img/cars/2.png',
//       type: 'Automatic',
//       rating: 4.9,
//       reviews: 2014,
//       badge: null,
//     },
//     {
//       id: 3,
//       name: 'Volvo XC90',
//       location: 'Heathrow Airport - SUV',
//       price: 72,
//       image: 'https://creativelayers.net/themes/gotrip-html/img/cars/2.png',
//       type: 'Automatic',
//       rating: 4.9,
//       reviews: 2014,
//       badge: 'Best Seller',
//     },
//     {
//       id: 4,
//       name: 'BMW 5 Series',
//       location: 'Heathrow Airport - SUV',
//       price: 72,
//       image: 'https://creativelayers.net/themes/gotrip-html/img/cars/2.png',
//       type: 'Automatic',
//       rating: 4.8,
//       reviews: 3014,
//       badge: null,
//     },
//   ];

//   return (
//     <div className="px-5 md:px-12 lg:px-20 py-10 bg-white">
//       <div className="flex justify-between items-center mb-6">
//         <div>
//           <h2 className="text-2xl md:text-3xl font-bold">Car Hire</h2>
//           <p className="text-gray-500 text-sm">Explore London in comfort and style</p>
//         </div>
//         <a href="#" className="text-sm text-blue-600 font-semibold flex items-center gap-1">
//           More <span>→</span>
//         </a>
//       </div>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {cars.map((car) => (
//           <div
//             key={car.id}
//             className="border rounded-lg overflow-hidden shadow-sm group hover:shadow-lg transition"
//           >
//             <div className="relative">
//               {car.badge && (
//                 <span className="absolute top-3 left-3 bg-yellow-400 text-xs font-bold px-2 py-1 rounded shadow">
//                   {car.badge}
//                 </span>
//               )}
//               <img
//                 src={car.image}
//                 alt={car.name}
//                 className="w-full h-40 object-cover transform transition-transform duration-300 group-hover:scale-105"
//               />
//             </div>
//             <div className="p-4">
//               <h4 className="font-semibold group-hover:underline">{car.name}</h4>
//               <p className="text-sm text-gray-500 mt-1">{car.location}</p>
//               <p className="text-sm text-gray-500 mt-1">{car.type}</p>
//               <div className="flex items-center gap-1 mt-2 text-blue-600 text-sm">
//                 <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded font-semibold">
//                   {car.rating}
//                 </span>
//                 <span className="text-gray-700 font-medium">Excellent</span>
//                 <span className="text-gray-500">{car.reviews} reviews</span>
//               </div>
//               <p className="text-sm mt-1">
//                 <span className="text-gray-600">US$</span>
//                 <span className="text-blue-600 font-semibold">{car.price}</span> per day
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CarHire;

import React from 'react';

const CarHire = () => {
  const cars = [
    {
      id: 1,
      name: 'Mercedes-Benz E-Class',
      location: 'Heathrow Airport - LUXURY',
      price: 72,
      image: 'https://creativelayers.net/themes/gotrip-html/img/cars/2.png',
      type: 'Automatic',
      rating: 4.9,
      reviews: 3104,
      badge: null,
    },
    {
      id: 2,
      name: 'Jaguar F-Pace',
      location: 'Heathrow Airport - SUV',
      price: 72,
      image: 'https://creativelayers.net/themes/gotrip-html/img/cars/2.png',
      type: 'Automatic',
      rating: 4.9,
      reviews: 2014,
      badge: null,
    },
    {
      id: 3,
      name: 'Volvo XC90',
      location: 'Heathrow Airport - SUV',
      price: 72,
      image: 'https://creativelayers.net/themes/gotrip-html/img/cars/2.png',
      type: 'Automatic',
      rating: 4.9,
      reviews: 2014,
      badge: 'Best Seller',
    },
    {
      id: 4,
      name: 'BMW 5 Series',
      location: 'Heathrow Airport - SUV',
      price: 72,
      image: 'https://creativelayers.net/themes/gotrip-html/img/cars/2.png',
      type: 'Automatic',
      rating: 4.8,
      reviews: 3014,
      badge: null,
    },
  ];

  return (
    <div className="px-5 md:px-12 lg:px-20 py-10 bg-white">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold">Car Hire</h2>
          <p className="text-gray-500 text-sm">Explore London in comfort and style</p>
        </div>
        <a href="#" className="text-sm text-blue-600 font-semibold flex items-center gap-1">
          More <span>→</span>
        </a>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {cars.map((car) => (
          <div key={car.id} className="rounded-lg overflow-hidden shadow-sm bg-white transition">
            <div className="relative group overflow-hidden">
              {car.badge && (
                <span className="absolute top-3 left-3 bg-yellow-400 text-xs font-bold px-2 py-1 rounded shadow z-10">
                  {car.badge}
                </span>
              )}
              <img
                src={car.image}
                alt={car.name}
                className="w-full h-40 object-cover rounded-md transform transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-4">
              <h4 className="font-semibold mt-1 transition">
                <span className="group-hover:underline inline-block">{car.name}</span>
              </h4>
              <p className="text-sm text-gray-500 mt-1">{car.location}</p>
              <p className="text-sm text-gray-500 mt-1">{car.type}</p>
              <div className="flex items-center gap-1 mt-2 text-blue-600 text-sm">
                <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded font-semibold">
                  {car.rating}
                </span>
                <span className="text-gray-700 font-medium">Excellent</span>
                <span className="text-gray-500">{car.reviews} reviews</span>
              </div>
              <p className="text-sm mt-1">
                <span className="text-gray-600">US$</span>
                <span className="text-blue-600 font-semibold">{car.price}</span> per day
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarHire;

