import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

function ServiceChoice({ allServices }) {
  const [expanded, setExpanded] = useState(false);
  const { shopname } = useParams();

  const visibleServices = expanded ? allServices : allServices.slice(0, 5);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow">
      <ul className="space-y-3 text-sm text-gray-600">
        {visibleServices.map((service, index) => (
          <li
            key={index}
            className='border-b'
          >
            <Link className="flex flex-col sm:flex-row items-start sm:items-center justify-between py-2 border-b border-gray-200 last:border-b-0" to={`/shop/${shopname}/reserve`}>
              <div>
                <p className="font-medium">{service.name}</p>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-3 mt-2 sm:mt-0">
                <p className="text-sm text-gray-500">{service.duration}</p>
                <span className="font-medium">{service.price}</span>
                <button className="px-3 py-1 font-semibold bg-black text-white text-sm rounded hover:bg-gray-800 transition-colors mt-2 sm:mt-0">
                  Choisir
                </button>
              </div>
            </Link>
          </li>
        ))}
      </ul>
      {allServices.length > 5 && (
        <button
          onClick={toggleExpand}
          className="text-blue-600 hover:underline text-sm mt-4 inline-block focus:outline-none"
        >
          {expanded ? 'See fewer services' : `See ${allServices.length - 5} other services`}
        </button>
      )}
    </div>
  );
}

export default ServiceChoice;
