import React from 'react';

export default function Stats() {
  const stats = [
    { number: 1000, description: 'Professionnels' },
    { number: 5000, description: 'Clients satisfaits' },
    { number: 120, description: 'Projets réalisés' },
    { number: 200, description: 'Partenaires' },
    { number: 300, description: 'Avis' },
    { number: 450, description: 'Articles publiés' }
  ];

  return (
    <div className='mt-24 px-10'>
      <p className='font-semibold text-gray-700 text-sm'>Une forte croissance</p>
      <h1 className='font-semibold text-3xl'>Vous êtes un professionnel de la beauté ?</h1>
      <h1 className='font-semibold text-3xl'>Découvrez la prise de RDV en ligne !</h1>
      <div className='grid grid-cols-3 gap-0'>
        {stats.map((stat, index) => (
          <div
            key={index}
            className='w-full aspect-square border border-gray-500 flex flex-col justify-center items-center'
          >
            <h2>{stat.number}</h2>
            <p>{stat.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
