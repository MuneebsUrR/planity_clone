import React, { useState } from 'react';

function ServiceChoice ()  {
  const [expanded, setExpanded] = useState(false);

  const allServices = [
    { name: 'Highlights or Balayage - Short Hair', duration: '1h 5min', price: '64 €' },
    { name: 'Highlights or Balayage - Mid-length Hair', duration: '1h 5min', price: '79 €' },
    { name: 'Highlights or Balayage - Long Hair', duration: '1h 5min', price: '110 €' },
    { name: 'Highlights or Balayage - Very Long Hair', duration: '1h 5min', price: 'Sur Devis' },
    { name: 'Bleaching - Short Hair', duration: '1h 5min', price: '100 €' },
    { name: 'Bleaching - Mid-length Hair', duration: '1h 5min', price: '120 €' },
    { name: 'Bleaching - Long Hair', duration: '1h 5min', price: '140 €' },
  ];

  const visibleServices = expanded ? allServices : allServices.slice(0, 5);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="max-w-3xl p-6 bg-white rounded-lg shadow">
      <ul className="space-y-3 text-sm text-gray-600">
        {visibleServices.map((service, index) => (
          <li key={index} className="flex items-center justify-between py-2 border-b border-gray-200 last:border-b-0">
            <div>
              <p className="font-medium">{service.name}</p>
              <p className="text-sm text-gray-500">{service.duration}</p>
            </div>
            <div className="flex items-center space-x-3">
              <span className="font-medium">{service.price}</span>
              <button className="px-3 py-1 font-semibold bg-black text-white text-sm rounded hover:bg-gray-800 transition-colors">
                Choisir
              </button>
            </div>
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
};

export default ServiceChoice;