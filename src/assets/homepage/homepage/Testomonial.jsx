import React from "react";

const Testomonial = () => {
  const testimonials = {
    name: "Annette Black",
    role: "UX / UI Designer",
    avatar: "https://creativelayers.net/themes/gotrip-html/img/avatars/1.png", 
    quote:
      "The place is in a great location in Gumbet. The area is safe and beautiful. The apartment was comfortable and the host was kind and responsive to our requests.",
    stats: {
      happyPeople: "13m+",
      rating: "4.88",
    },
  };

  return (
    <div className="bg-blue-50 py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">What our customers are saying?</h2>
          <p className="text-gray-600 mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <div className="mt-10 flex space-x-10">
            <div>
              <h3 className="text-2xl font-bold">{testimonials.stats.happyPeople}</h3>
              <p className="text-gray-500">Happy People</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold">{testimonials.stats.rating}</h3>
              <p className="text-gray-500">Overall rating</p>
            </div>
          </div>
        </div>

        <div>
          <div className="flex items-center space-x-4 mb-4">
            <img
              src={testimonials.avatar}
              alt={testimonials.name}
              className="w-16 h-16 rounded-full"
            />
            <div>
              <h4 className="font-semibold">{testimonials.name}</h4>
              <p className="text-sm text-gray-500">{testimonials.role}</p>
            </div>
          </div>
          <p className="text-lg text-gray-800 font-medium">
            {testimonials.quote}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testomonial;
