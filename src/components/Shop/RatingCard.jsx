import React, { useState } from 'react';

function RatingCard () {
  const [activeTab, setActiveTab] = useState('note');

  const ratings = [
    { name: 'Accueil', score: 4.5 },
    { name: 'Propreté', score: 4.4 },
    { name: 'Cadre & Ambiance', score: 4.0 },
    { name: 'Qualité de la prestation', score: 4.1 },
  ];

  return (
    <div className="w-full bg-white rounded-lg shadow p-6">
      <div className="flex border-b mb-4">
        <button 
          className={`pb-2 px-4 font-medium ${activeTab === 'note' ? 'border-b-2 border-black' : 'text-gray-500'}`}
          onClick={() => setActiveTab('note')}
        >
          Note globale
        </button>
        <button 
          className={`pb-2 px-4 font-medium ${activeTab === 'avis' ? 'border-b-2 border-black' : 'text-gray-500'}`}
          onClick={() => setActiveTab('avis')}
        >
          Avis
        </button>
      </div>
      {activeTab === 'note' && (
        <div>
          <div className="bg-black text-white text-4xl font-bold p-4 rounded mb-4 inline-block">
            4,3
          </div>
          <ul className="space-y-2">
            {ratings.map((rating, index) => (
              <li key={index} className="flex justify-between items-center">
                <span>{rating.name}</span>
                <span className="font-medium">{rating.score} ★</span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm text-gray-500">35 clients ont donné leur avis</p>
        </div>
      )}
      {activeTab === 'avis' && (
        <div>
          <p>Customer reviews will be displayed here.</p>
        </div>
      )}
    </div>
  );
};

export default RatingCard;