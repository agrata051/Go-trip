import React from 'react';

const InfoAndMap= () => {
  return (
    <div className="px-5 md:px-12 lg:px-20 pt-16">
      <div className="flex flex-col md:flex-row gap-10">
        {/* Left Column */}
        <div className="md:w-2/3">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What to know before visiting London
          </h2>
          <p className="mb-4">
            London is a shining example of a metropolis at the highest peak of modernity and boasts an economy
            and cultural diversity that’s the envy of other global superpowers.
          </p>
          <p className="mb-4">
            Take the opportunity to acquaint yourself with its fascinating history chronicled by institutions
            like the British Museum as well as see how far it has come by simply riding the Tube and passing
            by celebrated landmarks like Buckingham Palace, Westminster Abbey, and marvels like Big Ben,
            the London Eye, and the Tower Bridge.
          </p>
          <p className="mb-4">
            You can also immerse yourself in its ever-evolving and impactful culture by visiting places
            like the National Gallery, the Tate Modern, West End, Abbey Road, the Royal Albert Hall,
            Oxford Street and the Westfield Shopping Centers, and areas referenced and seen in literature and film.
          </p>
          <a href="#" className="text-blue-600 font-semibold underline">Show More</a>
        </div>

        {/* Right Column (Map) */}
        <div className="md:w-1/3">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/New_York_City_Midtown_Map.png/640px-New_York_City_Midtown_Map.png"
            alt="Map"
            className="rounded-lg shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default InfoAndMap;
