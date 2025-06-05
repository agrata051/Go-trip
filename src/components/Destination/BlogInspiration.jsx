import React from 'react';

const BlogInspiration = () => {
  const blogs = [
    {
      id: 1,
      title: '10 European ski destinations you should visit this winter',
      date: 'April 06, 2022',
      image: 'https://creativelayers.net/themes/gotrip-html/img/blog/1.png',
      link: '#',
    },
    {
      id: 2,
      title: 'Booking travel during Corona: good advice in an uncertain time',
      date: 'April 06, 2022',
      image: 'https://creativelayers.net/themes/gotrip-html/img/blog/2.png',
      link: '#',
    },
    {
      id: 3,
      title: 'Where can I go? 5 amazing countries that are open right now',
      date: 'April 06, 2022',
      image: 'https://creativelayers.net/themes/gotrip-html/img/blog/3.png',
      link: '#',
    },
  ];

  return (
    <div className="bg-white py-12 px-4 md:px-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900">
          Get inspiration for your next trip
        </h2>
        <p className="text-gray-500 mt-2">Interdum et malesuada fames</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="rounded-xl overflow-hidden shadow-sm border border-gray-200 hover:shadow-lg transition"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800 hover:text-blue-600 cursor-pointer">
                <a href={blog.link}>{blog.title}</a>
              </h3>
              <p className="text-sm text-gray-500 mt-2">{blog.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogInspiration;
