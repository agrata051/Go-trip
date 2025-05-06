import React from 'react';

const CustomerTestimonials = () => {
  const testimonial = {
    customer: {
      name: 'Annette Black',
      jobTitle: 'UX / UI Designer',
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
      testimonial: 'The place is in a great location in Gumbet. The area is safe and beautiful. The apartment was comfortable and the host was kind and responsive to our requests.',
    },
    stats: {
      happyPeople: '13m+',
      rating: 4.88,
    },
  };

  return (
    <div className="bg-[#f4f6f9] py-24 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Left Column */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0d1b3f] mb-6">
            What our customers are saying us?
          </h2>
          <p className="text-gray-500 text-lg mb-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas varius tortor nibh, sit amet tempor nibh finibus et.
          </p>
          <p className="text-gray-500 text-lg mb-10">
            Aenean eu enim justo.
          </p>

          <div className="flex space-x-16">
            <div>
              <div className="text-3xl font-bold text-[#0d1b3f]">{testimonial.stats.happyPeople}</div>
              <p className="text-gray-500 text-base mt-1">Happy People</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#0d1b3f]">{testimonial.stats.rating}</div>
              <p className="text-gray-500 text-base mt-1">Overall rating</p>
              <div className="text-[#0d1b3f] mt-1 text-base">★★★★★</div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-8">
          <div className="flex items-center space-x-5">
            <img
              src={testimonial.customer.image}
              alt={testimonial.customer.name}
              className="w-20 h-20 rounded-full object-cover"
            />
            <div>
              <h4 className="font-semibold text-[#0d1b3f] text-lg">{testimonial.customer.name}</h4>
              <p className="text-gray-500 text-sm">{testimonial.customer.jobTitle}</p>
            </div>
          </div>

          <p className="text-[#0d1b3f] text-xl leading-relaxed font-medium">
            {testimonial.customer.testimonial}
          </p>

          {/* Progress bar */}
          <div className="flex items-center text-base text-[#0d1b3f]">
            <span className="font-semibold">01</span>
            <div className="flex-1 mx-5 h-1 bg-gray-300 relative rounded-full overflow-hidden">
              <div className="h-full w-1/5 bg-[#0d1b3f] absolute left-0 top-0"></div>
            </div>
            <span className="font-semibold">05</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerTestimonials;
