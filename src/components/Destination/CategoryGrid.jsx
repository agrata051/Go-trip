import React from 'react';
import { GrAction } from 'react-icons/gr';

const categories = [
  { label: 'Tour', icon: <GrAction className="ml-1" /> },
  { label: 'Activity' },
  { label: 'Holiday Rentals' },
  { label: 'Car' },
  { label: 'Cruise' },
  { label: 'Flights' },
  { label: 'Hotel' },
];

const CategoryGrid = () => {
  return (
    <div className="px-5 pt-12 md:px-12 lg:px-20">
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
        {categories.map((item, index) => (
          <div
            key={index}
            className="bg-white flex items-center justify-center w-32 h-16 border rounded transition text-sm font-medium text-center"
          >
            <span className="flex items-center">
              {item.label}
              {item.icon && item.icon}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryGrid;
