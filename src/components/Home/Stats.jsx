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
        <div className='mt-24 px-4 sm:px-16 md:px-32 lg:px-64 w-full'>
            <p className='text-gray-600 font-semibold underline' style={{ textDecorationColor: '#625DF5', textDecorationThickness: '2px', textUnderlineOffset: '10px' }}> Une forte croissance</p>
            <h1 className='font-semibold text-3xl mt-5 text-left'>
                Vous êtes un professionnel de la beauté ?
            </h1>
            <h1 className='font-semibold text-3xl text-left'>
                Découvrez la prise de RDV en ligne !
            </h1>
            <div className='block sm:hidden overflow-x-auto whitespace-nowrap mt-10 space-x-4' style={{scrollbarWidth:'none'}}>
                {stats.map((stat, index) => (
                    <div
                        key={index}
                        className='inline-block py-16 px-5 border border-gray-300 text-left relative'
                        style={{ width: '200px' }} // Adjust the width as needed
                    >
                        <h2 className='text-2xl font-semibold'>{stat.number}</h2>
                        <p className='text-lg'>{stat.description}</p>
                        <div className='absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-full'>
                            <div className='h-1 bg-blue-700 absolute top-0 left-1/2 transform -translate-x-1/2 w-[80%]'></div>
                        </div>
                    </div>
                ))}
            </div>
            <div className='hidden sm:grid sm:grid-cols-3 sm:gap-3 sm:mt-10'>
                {stats.map((stat, index) => (
                    <div
                        key={index}
                        className='relative rounded py-16 px-5 border border-gray-300 text-left transition-transform transform hover:scale-105 hover:shadow-lg group'
                    >
                        <h2 className='text-2xl font-semibold'>{stat.number}</h2>
                        <p className='text-lg'>{stat.description}</p>
                        <div className='absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-full'>
                            <div className='h-1 bg-blue-700 absolute top-0 left-1/2 transform -translate-x-1/2 w-0 group-hover:w-[80%] transition-all duration-300'></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
