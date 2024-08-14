import React, { useState } from 'react';

import Searchbar from './Searchbar';
const Hero = () => {
  

    return (
        <div className='m-2 lg:m-0'>
            <div className="text-center mt-[25vh]">
                <h1 className="text-white text-4xl font-semibold mb-5">Réservez en beauté</h1>
                <p className="text-white mb-5">Simple • Immédiat • 24h/24</p>
            </div>
            <section className='p-3 max-w-4xl mx-auto'>

            <Searchbar />
            </section>
        </div>
    );
};

export default Hero;