
import React from 'react';

const DestinationWeather = () => {
  const weatherData = [
    { label: 'DEC - FEB', high: '7°', low: '3°' },
    { label: 'MAR - MAY', high: '17°', low: '3°' },
    { label: 'JUN - AUG', high: '27°', low: '3°' },
    { label: 'SEP - NOV', high: '7°', low: '3°' },
  ];

  return (
    <div className="bg-white py-16 px-6 md:px-16">
      {/* Local Weather */}
      <div className="mb-16 border-t border-gray-200 pt-10">
        <h2 className="text-xl font-semibold text-gray-900 mb-8">Local weather</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-base">
          {weatherData.map((item, idx) => (
            <div key={idx} className="text-left">
              <div className="text-gray-900 font-medium mb-3">{item.label}</div>
              <div className="flex items-baseline gap-5">
                <span className="text-2xl font-semibold text-gray-900">{item.high}</span>
                <span className="text-base text-gray-500">{item.low}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* General Info */}
      <div className="border-t border-gray-200 pt-10 pb-10">
        <h2 className="text-xl font-semibold text-gray-900 mb-8">General info</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-base">
          <div className="text-left">
            <div className="text-gray-900 font-medium mb-2">Time Zone</div>
            <div className="text-gray-900 font-semibold text-lg">GMT +00:00</div>
            <div className="text-gray-500 mt-3">3 hours behind</div>
          </div>
          <div className="text-left">
            <div className="text-gray-900 font-medium mb-2">Currency</div>
            <div className="text-gray-900 font-semibold text-lg">British Pound</div>
            <div className="text-gray-500 mt-3">1USD = 0.76GBP</div>
          </div>
          <div className="text-left">
            <div className="text-gray-900 font-medium mb-2">Best time to visit</div>
            <div className="text-gray-900 font-semibold text-lg">JUN</div>
            <div className="text-gray-500 mt-3">The Queen’s Birthday</div>
          </div>
        </div>
        <div className="border-t border-gray-200 mt-10"></div>
      </div>
    </div>
  );
};

export default DestinationWeather;