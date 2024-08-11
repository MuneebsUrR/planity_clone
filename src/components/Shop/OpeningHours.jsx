import React from 'react';

function OpeningHours (){
  const hours = [
    { day: 'Lundi', time: 'Fermé' },
    { day: 'Mardi', time: '10:00 - 19:00' },
    { day: 'Mercredi', time: '10:00 - 19:00' },
    { day: 'Jeudi', time: '10:00 - 19:00' },
    { day: 'Vendredi', time: '10:00 - 19:00' },
    { day: 'Samedi', time: '10:00 - 19:00' },
    { day: 'Dimanche', time: 'Fermé' },
  ];

  return (
    <div className="bg-white shadow-md rounded-lg p-6 max-w-sm mx-auto">
      <h2 className="text-xl font-semibold mb-4">Horaires d'ouverture</h2>
      <ul className="space-y-2">
        {hours.map((item, index) => (
          <li key={index} className="flex justify-between items-center py-2 border-b last:border-b-0">
            <span className="font-medium">{item.day}</span>
            <span className={item.time === 'Fermé' ? 'text-gray-500' : ''}>{item.time}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OpeningHours;