import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import IconButton from '@mui/material/IconButton';

function SearchNavbar() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeField, setActiveField] = useState(null);
  const [salonName, setSalonName] = useState('');
  const [location, setLocation] = useState('');
  const [date, setDate] = useState('');
  const navbarRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setIsExpanded(false);
        setActiveField(null);
      }
    };

    const handleEscKey = (event) => {
      if (event.key === 'Escape') {
        setIsExpanded(false);
        setActiveField(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscKey);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscKey);
    };
  }, []);

  const handleFieldFocus = (field) => {
    setIsExpanded(true);
    setActiveField(field);
  };

  return (
    <nav className="bg-white shadow-md" ref={navbarRef}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold">PLANITY</div>
          <motion.div
            className="flex-grow mx-4 flex justify-center"
            initial={false}
            animate={{
              width: isExpanded ? '80%' : '50%',
              y: isExpanded ? 12 : 0,
            }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
          >
            <motion.div
              className="flex items-center bg-gray-100 rounded-full overflow-hidden border border-gray-300"
              initial={false}
              animate={{
                height: isExpanded ? '4rem' : '3rem',
              }}
              transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            >
              <TextField
                variant="standard"
                placeholder="Coiffeurs"
                value={salonName}
                onChange={(e) => setSalonName(e.target.value)}
                onFocus={() => handleFieldFocus('Coiffeurs')}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                  disableUnderline: true,
                }}
                className="py-2 px-4 bg-transparent outline-none transition-all duration-300 text-center"
                sx={{
                  flexGrow: isExpanded ? 1 : 0,
                  width: isExpanded ? 'auto' : '7rem',
                }}
              />
              <div className="h-6 w-px bg-gray-300" />
              <TextField
                variant="standard"
                placeholder="Lyon"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                onFocus={() => handleFieldFocus('Lyon')}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LocationOnIcon />
                    </InputAdornment>
                  ),
                  disableUnderline: true,
                }}
                className="py-2 px-4 bg-transparent outline-none transition-all duration-300 text-center"
                sx={{
                  flexGrow: isExpanded ? 1 : 0,
                  width: isExpanded ? 'auto' : '7rem',
                }}
              />
              <div className="h-6 w-px bg-gray-300" />
              <TextField
                variant="standard"
                placeholder="À tout moment"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                onFocus={() => handleFieldFocus('À tout moment')}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <CalendarTodayIcon />
                    </InputAdornment>
                  ),
                  disableUnderline: true,
                }}
                className="py-2 px-4 bg-transparent outline-none transition-all duration-300 text-center"
                sx={{
                  flexGrow: isExpanded ? 1 : 0,
                  width: isExpanded ? 'auto' : '7rem',
                }}
              />
              <IconButton
                className="p-2 bg-black text-white rounded-full hover:bg-gray-800 transition duration-300"
                sx={{ marginLeft: 2 }}
              >
                <SearchIcon />
              </IconButton>
            </motion.div>
          </motion.div>
          <div className="flex space-x-4">
            <button className="px-4 py-2 text-gray-600 hover:text-gray-800">
              Ajoutez votre établissement
            </button>
            <button className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition duration-300">
              Se connecter
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default SearchNavbar;
