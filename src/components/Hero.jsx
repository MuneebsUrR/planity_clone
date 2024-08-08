import React, { useState } from 'react';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
const Hero = () => {
    const [searchQuery, setSearchQuery] = useState('Nom du salon, prestations (coupe...)');
    const [location, setLocation] = useState('Adresse, ville...');

    return (
        <div className='m-2 lg:m-0'>
            <div className="text-center mt-[25vh]">
                <h1 className="text-white text-4xl font-semibold mb-5">Réservez en beauté</h1>
                <p className="text-white mb-5">Simple • Immédiat • 24h/24</p>
            </div>
            <div className="flex items-center bg-white rounded-lg shadow p-3 max-w-4xl mx-auto">
                <div className="flex-1 mx-2 relative">
                    <label className="absolute top-1 pl-3 text-xs text-gray-400">Que cherchez-vous ?</label>
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pt-5 p-3 rounded-md outline-none focus:border focus:border-black hover:bg-gray-100"
                    />
                </div>
                <div className="hidden md:block flex-1 mx-2 relative">
                    <label className="absolute top-1 pl-3 text-xs text-gray-400">Où</label>
                    <input
                        type="text"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        className="w-full pt-5 p-3 rounded-md outline-none focus:border focus:border-black hover:bg-gray-100"
                    />
                </div>
                <button className="bg-black text-white py-2 px-4 rounded hover:bg-gray-800">
                    <p className='hidden lg:block'>Rechercher</p>
                    <div className='block lg:hidden'>
                        <SearchOutlinedIcon fontSize='medium' />
                    </div>
                </button>
            </div>
        </div>
    );
};

export default Hero;