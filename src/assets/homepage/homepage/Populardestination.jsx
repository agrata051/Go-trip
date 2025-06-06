// // import React, { useState } from "react";

// // const Populardestination = () => {
// //   const destinations = [
// //     {
// //       city: "New York",
// //       image: "https://creativelayers.net/themes/gotrip-html/img/destinations/1/1.webp",
// //       details: "14 Hotel · 22 Cars · 18 Tours · 95 Activity",
// //     },
// //     {
// //       city: "London",
// //       image: "https://creativelayers.net/themes/gotrip-html/img/destinations/1/2.webp",
// //       details: "Historic Sites · Museums · Royal Attractions",
// //     },
// //     {
// //       city: "Barcelona",
// //       image: "https://creativelayers.net/themes/gotrip-html/img/destinations/1/3.webp",
// //       details: "Architecture · Culture · Nightlife",
// //     },
// //     {
// //       city: "Sydney",
// //       image: "https://creativelayers.net/themes/gotrip-html/img/destinations/1/4.webp",
// //       details: "Harbour Bridge · Beaches · Opera House",
// //     },
// //     {
// //       city: "Tokyo",
// //       image: "https://creativelayers.net/themes/gotrip-html/img/destinations/1/5.webp",
// //       details: "Temples · Sushi · Tech Wonders",
// //     },
// //   ];

// //   const [startIndex, setStartIndex] = useState(0);

// //   const handleNext = () => {
// //     if (startIndex < destinations.length - 4) {
// //       setStartIndex(startIndex + 1);
// //     }
// //   };

// //   const handlePrev = () => {
// //     if (startIndex > 0) {
// //       setStartIndex(startIndex - 1);
// //     }
// //   };

// //   return (
// //     <section className="bg-gray-50 py-16 px-6 flex-grow relative">
// //       <div className="max-w-7xl mx-auto">
// //         <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center mb-12 gap-4">
// //           <div>
// //             <h2 className="text-4xl font-extrabold text-gray-900 mb-2">Popular Destinations</h2>
// //             <p className="text-lg text-gray-600">These popular destinations have a lot to offer</p>
// //           </div>
// //           <button className="text-blue-600 font-semibold hover:underline text-base">
// //             View All Destinations →
// //           </button>
// //         </div>

// //         <div className="relative">
// //           <button
// //             onClick={handlePrev}
// //             className="absolute left-[-30px] top-1/2 transform -translate-y-1/2 text-2xl z-10 bg-white rounded-full shadow-md px-2"
// //           >
// //             ‹
// //           </button>
// //           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 overflow-hidden">
// //             {destinations.slice(startIndex, startIndex + 4).map((destination, index) => (
// //               <div
// //                 key={index}
// //                 className="relative rounded-1xl group transition-transform duration-100"
// //               >
// //                 <img
// //                   src={destination.image}
// //                   alt={destination.city}
// //                   className="w-65 h-90 object-cover group-hover:brightness-75 group-hover:blur-[0.5px]"
// //                 />
// //                 <div className="absolute inset-0 p-4 flex flex-col justify-between">
// //                   <div className="text-sm text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
// //                     {destination.details}
// //                   </div>
// //                   <div className="text-center">
// //                     <h3 className="text-2xl font-semibold text-white mb-2">{destination.city}</h3>
// //                     <button className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white text-black font-medium px-4 py-2 rounded-xl hover:bg-gray-100">
// //                       Discover
// //                     </button>
// //                   </div>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //           <button
// //             onClick={handleNext}
// //             className="absolute right-[-30px] top-1/2 transform -translate-y-1/2 text-2xl z-10 bg-white shadow-md px-2"
// //           >
// //             ›
// //           </button>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default Populardestination;
// import React, { useState } from "react";

// const Populardestination = () => {
//   const destinations = [
//     {
//       city: "New York",
//       image:
//         "https://creativelayers.net/themes/gotrip-html/img/destinations/1/1.webp",
//     },
//     {
//       city: "London",
//       image:
//         "https://creativelayers.net/themes/gotrip-html/img/destinations/1/2.webp",
//     },
//     {
//       city: "Barcelona",
//       image:
//         "https://creativelayers.net/themes/gotrip-html/img/destinations/1/3.webp",
//     },
//     {
//       city: "Sydney",
//       image:
//         "https://creativelayers.net/themes/gotrip-html/img/destinations/1/4.webp",
//     },
//     {
//       city: "Tokyo",
//       image:
//         "https://creativelayers.net/themes/gotrip-html/img/destinations/1/5.webp",
//     },
//   ];

//   const [startIndex, setStartIndex] = useState(0);

//   const handleNext = () => {
//     if (startIndex < destinations.length - 4) {
//       setStartIndex(startIndex + 1);
//     }
//   };

//   const handlePrev = () => {
//     if (startIndex > 0) {
//       setStartIndex(startIndex - 1);
//     }
//   };

//   return (
//     <section className="py-16 px-4 sm:px-6 lg:px-20 bg-white">
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10">
//           <div>
//             <h2 className="text-4xl font-bold text-gray-900">Popular Destinations</h2>
//             <p className="text-lg text-gray-500 mt-2">
//               These popular destinations have a lot to offer
//             </p>
//           </div>
//           <button className="mt-4 sm:mt-0 px-6 py-3 bg-gray-100 text-blue-600 font-semibold rounded-lg hover:bg-gray-200 transition">
//             View All Destinations →
//           </button>
//         </div>

//         {/* Carousel */}
//         <div className="relative">
//           {/* Left Arrow */}
//           <button
//             onClick={handlePrev}
//             className="absolute left-[-1.5rem] top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-md w-10 h-10 flex items-center justify-center rounded-full"
//           >
//             <span className="text-xl">‹</span>
//           </button>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 overflow-hidden">
//             {destinations.slice(startIndex, startIndex + 4).map((destination, index) => (
//               <div
//                 key={index}
//                 className="relative rounded-xl overflow-hidden shadow-sm group"
//               >
//                 <img
//                   src={destination.image}
//                   alt={destination.city}
//                   className="w-full h-80 object-cover"
//                 />
//                 <div className="absolute bottom-4 left-4 text-white text-xl font-bold">
//                   {destination.city}
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Right Arrow */}
//           <button
//             onClick={handleNext}
//             className="absolute right-[-1.5rem] top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-md w-10 h-10 flex items-center justify-center rounded-full"
//           >
//             <span className="text-xl">›</span>
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Populardestination;
import React, { useState } from "react";

const Populardestination = () => {
  const destinations = [
    {
      city: "New York",
      image: "https://creativelayers.net/themes/gotrip-html/img/destinations/1/1.webp",
      details: "14 Hotel · 22 Cars · 18 Tours · 95 Activity",
    },
    {
      city: "London",
      image: "https://creativelayers.net/themes/gotrip-html/img/destinations/1/2.webp",
      details: "14 Hotel · 22 Cars · 18 Tours · 95 Activity",
    },
    {
      city: "Barcelona",
      image: "https://creativelayers.net/themes/gotrip-html/img/destinations/1/3.webp",
      details: "14 Hotel · 22 Cars · 18 Tours · 95 Activity",
    },
    {
      city: "Sydney",
      image: "https://creativelayers.net/themes/gotrip-html/img/destinations/1/4.webp",
      details: "14 Hotel · 22 Cars · 18 Tours · 95 Activity",
    },
    {
      city: "Rome",
      image: "https://creativelayers.net/themes/gotrip-html/img/destinations/1/5.webp",
      details: "14 Hotel · 22 Cars · 18 Tours · 95 Activity",
    },
    
  ];

  const [startIndex, setStartIndex] = useState(0);

  const handleNext = () => {
    if (startIndex < destinations.length - 4) {
      setStartIndex(startIndex + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-20 bg-white">
      <div className="max-w-7xl mx-auto">
       
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Popular Destinations</h2>
          <p className="text-l text-gray-500 mt-4 ">
              These popular destinations have a lot to offer</p>
          </div>
          <button className="mt-4 sm:mt-0 px-6 py-3 bg-gray-100 text-blue-600 font-semibold rounded-lg hover:bg-gray-200 transition">
            View All Destinations ↑
          </button>
        </div>

      
        <div className="relative">
        
          <button
            onClick={handlePrev}
            className="absolute left-[-1.5rem] top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-md w-10 h-10 flex items-center justify-center rounded-full"
          >
            <span className="text-xl">‹</span>
          </button>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 overflow-hidden">
            {destinations.slice(startIndex, startIndex + 4).map((destination, index) => (
              <div
                key={index}
                className="relative rounded:5xl overflow-hidden shadow-sm group cursor-pointer"
              >
                <img
                  src={destination.image}
                  alt={destination.city}
                  className="w-65 h-90  group-hover:brightness-75 transition duration-300"
                />
                <div className="absolute inset-0 flex flex-col justify-between p-4">
                  <div className="text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {destination.details}
                  </div>
                  <div className="text-center">
                    <h3 className="text-2xl font-semibold text-white mb-2">{destination.city}</h3>
                    <button className="opacity-0 group-hover:opacity-200 transition-opacity duration-300 align-middle bg-white text-black font-medium px-20 py-2  hover:bg-gray-100 ">
                      Discover
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={handleNext}
            className="absolute right-[-1.5rem] top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-md w-10 h-10 flex items-center justify-center rounded-full"
          >
            <span className="text-xl">›</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Populardestination;

