import React, { useState } from 'react';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import { Autocomplete, TextField } from '@mui/material';
import { data } from '../../lib/data';

export default function Searchbar() {
    const [searchQuery, setSearchQuery] = useState('');
    const [locationQuery, setLocationQuery] = useState('');

    // Flatten the data to make it easier to work with Autocomplete
    const allResults = [
        ...data.Barbier,
        ...data.Coiffeur,
        ...data.Manucure,
        ...data.Institutdebeauté,
    ];

    // Extract unique addresses and limit to 5 options for the location autocomplete
    const locationOptions = [
        ...new Set(
            allResults.map(item => item.address).filter(address => address) // Remove empty addresses
        )
    ].slice(0, 5);

    // Slice results to only show 5 options for the search autocomplete
    const filteredResults = (query) => {
        return allResults.filter(item =>
            item.name.toLowerCase().includes(query.toLowerCase())
        ).slice(0, 5);
    };

    return (
        <div>
            <div className="flex items-center bg-white rounded-lg shadow p-3 max-w-4xl mx-auto">
                <div className="flex-1 mx-2 relative">
                    <Autocomplete
                        freeSolo
                        options={filteredResults(searchQuery)}
                        getOptionLabel={(option) => option.name || ''}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                label="Que cherchez-vous ?"
                                variant="outlined"
                                fullWidth
                                placeholder="Nom du salon, prestations (coupe...)"
                                InputProps={{
                                    ...params.InputProps,
                                    startAdornment: (
                                        <SearchOutlinedIcon style={{ marginRight: 8 }} />
                                    ),
                                }}
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        )}
                        onChange={(event, newValue) => {
                            if (newValue) {
                                setSearchQuery(newValue.name);
                            }
                        }}
                    />
                </div>
                <div className="hidden md:block flex-1 mx-2 relative">
                    <Autocomplete
                        freeSolo
                        options={locationOptions}
                        getOptionLabel={(option) => option || ''}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                label="Où"
                                variant="outlined"
                                fullWidth
                                placeholder="Adresse, ville..."
                                InputProps={{
                                    ...params.InputProps,
                                    startAdornment: (
                                       <LocationOnOutlinedIcon style={{ marginRight: 8 }} />
                                    ),
                                }}
                                value={locationQuery}
                                onChange={(e) => setLocationQuery(e.target.value)}
                            />
                        )}
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
}
