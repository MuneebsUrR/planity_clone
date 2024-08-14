import React, { useState } from 'react';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import { Autocomplete, TextField } from '@mui/material';
import { data } from '../../lib/data';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
export default function Searchbar() {
    const [searchQuery, setSearchQuery] = useState('');
    const [locationQuery, setLocationQuery] = useState('');
    const navigate = useNavigate(); // Initialize useNavigate hook

    // Flatten the data to make it easier to work with Autocomplete
    const allResults = [
        ...data.Barbier,
        ...data.Coiffeur,
        ...data.Manucure,
        ...data.Institutdebeauté,
    ];

    const ShopOptions = [
        'Barbier',
        'Coiffeur',
        'Manucure',
        'Institutdebeauté'
    ];

    // Extract unique addresses and limit to 5 options for the location autocomplete
    const locationOptions = [
        ...new Set(
            allResults.map(item => item.address).filter(address => address) // Remove empty addresses
        )
    ].slice(0, 5);

    // Slice results to only show 5 options for the search autocomplete
    const filteredResults = (query) => {
        return ShopOptions.filter(item =>
            item.toLowerCase().includes(query.toLowerCase())
        ).slice(0, 5);
    };

    // Function to handle navigation
    const handleSearch = () => {
        console.log(searchQuery, locationQuery);
        if (searchQuery.length > 0 && locationQuery.length > 0) {
            // If both searchQuery and locationQuery are filled
            navigate(`/category/${searchQuery}/${locationQuery}`);

        } else {
            navigate(`/category/${searchQuery}`);
        }

    };

    return (
        <div>
            <div className="flex items-center bg-white rounded-lg shadow p-2">
                <div className="flex-1 mx-2 relative">
                    <Autocomplete
                        freeSolo
                        options={filteredResults(searchQuery)}
                        getOptionLabel={(option) => option || ''}
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
                                setSearchQuery(newValue);
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
                        onChange={(event, newValue) => {
                            if (newValue) {
                                setLocationQuery(newValue);
                            }
                        }}
                    />
                </div>
                <button
                    className="bg-black text-white py-2 px-4 rounded hover:bg-gray-800"
                    onClick={handleSearch} // Attach handleSearch function
                >
                    <p className='hidden lg:block'>Rechercher</p>
                    <div className='block lg:hidden'>
                        <SearchOutlinedIcon fontSize='medium' />
                    </div>
                </button>
            </div>
        </div>
    );
}


export const NavbarSearchBar = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [locationQuery, setLocationQuery] = useState('');

    const navigate = useNavigate(); // Initialize useNavigate hook

    // Flatten the data to make it easier to work with Autocomplete
    const allResults = [
        ...data.Barbier,
        ...data.Coiffeur,
        ...data.Manucure,
        ...data.Institutdebeauté,
    ];

    const ShopOptions = [
        'Barbier',
        'Coiffeur',
        'Manucure',
        'Institutdebeauté'
    ];

    // Extract unique addresses and limit to 5 options for the location autocomplete
    const locationOptions = [
        ...new Set(
            allResults.map(item => item.address).filter(address => address) // Remove empty addresses
        )
    ].slice(0, 5);

    // Slice results to only show 5 options for the search autocomplete
    const filteredResults = (query) => {
        return ShopOptions.filter(item =>
            item.toLowerCase().includes(query.toLowerCase())
        ).slice(0, 5);
    };

    // Function to handle navigation
    // Function to handle navigation
    const handleSearch = () => {

        if (searchQuery.length > 0 && locationQuery.length > 0) {
            // If both searchQuery and locationQuery are filled
            navigate(`/category/${searchQuery}/${locationQuery}`);

        } else {
            navigate(`/category/${searchQuery}`);
        }

    };

    return (

        <div>
            <div className="hidden lg:flex items-center bg-white rounded-lg p-2" >
                <div className="flex-1 mx-2 relative">
                    <Autocomplete
                        freeSolo

                        options={filteredResults(searchQuery)}
                        getOptionLabel={(option) => option || ''}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                size='small'
                                label="Que cherchez-vous ?"

                                variant="outlined"
                                fullWidth
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        )}
                        onChange={(event, newValue) => {
                            if (newValue) {
                                setSearchQuery(newValue);
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
                                size='small'
                                label="Où"
                                variant="outlined"
                                fullWidth
                                value={locationQuery}
                                onChange={(e) => setLocationQuery(e.target.value)}
                            />
                        )}
                        onChange={(event, newValue) => {
                            if (newValue) {
                                setLocationQuery(newValue);
                            }
                        }}
                    />
                </div>
                <div className="flex-1 mx-2 relative">
                    <input type="date" className='bg-gray-50 p-1' style={{ border: 'none', outline: 'none' }} name="" id="" />
                </div>
                <button
                    className="bg-black text-white py-1 px-1  rounded-md hover:bg-gray-800"
                    onClick={handleSearch} // Attach handleSearch function
                >
                    <SearchOutlinedIcon />
                </button>
            </div>
        </div>

    );
}

import SearchIcon from '@mui/icons-material/Search';
import EditIcon from '@mui/icons-material/Edit';

import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CloseIcon from '@mui/icons-material/Close';



export const MobileSearchBar = () => {
    const { type, location } = useParams();
    const [expand, setExpand] = useState(false);

    return (
        <div className='p-2'>
            {expand === false ? (
                <div
                    className="cursor-pointer flex items-center bg-white rounded-md shadow p-2"
                    onClick={() => setExpand(true)}  // Set expand to true on click
                >
                    {/* Search Icon */}
                    <SearchIcon className="text-blue-500 mx-2" />

                    {/* Text Content */}
                    <div className="flex-1">
                        <p className="text-black font-medium">{type} • {location}</p>
                        <p className="text-gray-500 text-sm">À tout moment</p>
                    </div>

                    {/* Edit Icon */}
                    <EditIcon className="text-gray-500 mx-2" />
                </div>
            ) : (
                <div>
                    {/* Close Icon */}
                    <div className="flex justify-start mb-4">
                        <CloseIcon
                            onClick={() => setExpand(false)}  // Set expand to false on click
                            className="text-gray-500 cursor-pointer"
                        />
                    </div>

                    {/* Search Field */}
                    <div className="flex items-center bg-white rounded-md p-2 mb-2">
                        <SearchIcon className="text-gray-400 mr-2" />
                        <input
                            type="text"
                            placeholder="Barbiers"
                            className="flex-1 border-none outline-none bg-transparent text-gray-700"
                        />
                    </div>

                    {/* Location Field */}
                    <div className="flex items-center bg-white rounded-md p-2 mb-2">
                        <LocationOnIcon className="text-gray-400 mr-2" />
                        <input
                            type="text"
                            placeholder="Paris"
                            className="flex-1 border-none outline-none bg-transparent text-gray-700"
                        />
                    </div>

                    {/* Time Field */}
                    <div className="flex items-center bg-white rounded-md p-2">
                        <AccessTimeIcon className="text-gray-400 mr-2" />
                        <input
                            type="date"
                            placeholder="À tout moment"
                            className="flex-1 border-none outline-none bg-transparent text-gray-700"
                        />
                    </div>
                </div>
            )}
        </div>
    );
};
