import React from 'react';

function Locations() {
    const categories = [
        {
            title: 'Coiffeur',
            description: 'Nos salons de coiffure populaires en France',
            cities: [
                'Bordeaux', 'Lille', 'Lyon', 'Marseille', 'Montpellier',
                'Nantes', 'Nice', 'Paris', 'Strasbourg', 'Toulouse'
            ]
        },
        {
            title: 'Barbier',
            description: 'Nos barbiers populaires en France',
            cities: [
                'Bordeaux', 'Lille', 'Lyon', 'Marseille', 'Montpellier',
                'Nantes', 'Nice', 'Paris', 'Strasbourg', 'Toulouse'
            ]
        },
        {
            title: 'Manucure',
            description: 'Nos salons de manucure populaires en France',
            cities: [
                'Bordeaux', 'Lille', 'Lyon', 'Marseille', 'Montpellier',
                'Nantes', 'Nice', 'Paris', 'Strasbourg', 'Toulouse'
            ]
        },
        {
            title: 'Institut',
            description: 'Nos instituts de beauté populaires en France',
            cities: [
                'Bordeaux', 'Lille', 'Lyon', 'Marseille', 'Montpellier',
                'Nantes', 'Nice', 'Paris', 'Strasbourg', 'Toulouse'
            ]
        }
    ];

    return (
        <div className="w-full p-10 md:p-24">

            <p className='text-gray-600 text-sm font-semibold underline text-center md:text-left ' style={{ textDecorationColor: '#625DF5', textDecorationThickness: '2px', textUnderlineOffset: '10px' }}>
                Partout en France
            </p>
            <h1 className="text-3xl font-semibold text-gray-900 mt-5 text-center md:text-left">
                Trouvez votre établissement beauté
            </h1>
            <h1 className="text-3xl font-semibold text-gray-900 mb-12 text-center md:text-left">
                partout en France
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
                {categories.map((category, index) => (
                    <div key={index}>
                        <h3 className="text-md font-semibold text-gray-900 ">{category.title}</h3>
                        <p className="text-sm text-gray-500 mb-4 ">{category.description}</p>
                        <ul className="text-gray-800 space-y-1 text-sm grid grid-cols-2 gap-4 md:gap-0 md:grid-cols-1">
                            {category.cities.map((city, cityIndex) => (
                                <li key={cityIndex}>{city}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Locations;
