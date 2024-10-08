import React, { useState, useEffect, useRef } from 'react';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { Link, useNavigate } from 'react-router-dom';
import { NavbarSearchBar } from './Searchbar';

export default function Header({ isnothome, needAnimation, needSearchBar = false }) {
    const navigate = useNavigate();
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);
    const searchBarRef = useRef(null);

    const handleClick = () => {
        setIsExpanded(true);
    };

    // Close search bar on Escape key press and click outside
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                setIsExpanded(false);
            }
        };

        const handleClickOutside = (event) => {
            if (searchBarRef.current && !searchBarRef.current.contains(event.target)) {
                setIsExpanded(false);
            }
        };

        // Add event listeners
        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('mousedown', handleClickOutside);

        // Cleanup the event listeners on component unmount
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleScroll = () => {
        setScrolled(window.scrollY > 35); // Adjust scroll threshold as needed
    };

    useEffect(() => {
        // Add scroll event listener only if isn't home
        if (needAnimation) {
            window.addEventListener('scroll', handleScroll);
        }

        // Cleanup the event listener on component unmount
        return () => {
            if (needAnimation) {
                window.removeEventListener('scroll', handleScroll);
            }
        };
    }, [needAnimation]);

    const toggleDrawer = (open) => () => {
        setIsDrawerOpen(open);
    };
    const drawerContent = (
        <div className="p-4 space-y-4">
            <Link onClick={() => setIsDrawerOpen(false)} to={'/category/Coiffeur'} className='block text-black'>Coiffeur</Link>
            <Link onClick={() => setIsDrawerOpen(false)} to={'/category/Barbier'} className='block text-black'>Barbier</Link>
            <Link onClick={() => setIsDrawerOpen(false)} to={'/category/Manucure'} className='block text-black'>Manucure</Link>
            <Link onClick={() => setIsDrawerOpen(false)} to={'/category/Institutdebeauté'} className='block text-black'>Institut de beauté</Link>

           
          
            <button className="w-full bg-gray-50 text-gray-700 border border-gray-300 px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-200">
                Ajoutez votre établissement
            </button>
            <Link to={'/login'}>
                <button className="w-full bg-black text-white px-4 py-2 mt-2 rounded-md text-sm font-medium hover:bg-gray-900">
                    Se connecter
                </button>
            </Link>
        </div>
    );

    return (
        <div className={`flex justify-between lg:justify-around items-center p-4 transition-colors duration-300 ${scrolled || !needAnimation ? 'bg-white shadow-md text-black' : 'bg-transparent text-white'} sticky top-0 z-[1000]`}>
            {/* Menu Button for Small and Medium Screens */}
            <div className='block lg:hidden'>

                <IconButton
                    edge="start"
                    sx={{ color: (scrolled || isnothome) ? 'black' : 'white' }}
                    aria-label="menu"
                    onClick={toggleDrawer(true)}
                    fontSize="large"
                >
                    <MenuIcon />
                </IconButton>
            </div>
            <Link to={'/'}>
                <svg id="nav-item-planity-logo" className={`${(scrolled || isnothome) ? 'text-black' : 'text-white'}`} width="140px" viewBox="0 0 140 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M8.8421 0.631592H0V15.3684H2.94737V12.4211H8.8421C12.0973 12.4211 14.7368 9.78153 14.7368 6.52633C14.7368 3.27112 12.0973 0.631592 8.8421 0.631592ZM8.8421 9.4737H2.94737V3.57896H8.8421C10.4697 3.57896 11.7895 4.89873 11.7895 6.52633C11.7895 8.15393 10.4697 9.4737 8.8421 9.4737ZM50.1053 0.631592L42.7368 15.3684H45.6842L47.1579 12.4211H56L57.4737 15.3684H60.421L53.0526 0.631592H50.1053ZM23.5789 0.631592H26.5263V12.4211H35.3684V15.3684H23.5789V0.631592ZM94.3158 0.631592H91.3684V15.3684H94.3158V0.631592ZM103.158 3.57896V0.631592H117.895V3.57896H112V15.3684H109.053V3.57896H103.158ZM137.053 0.631592L132.632 7.26317L128.211 0.631592H125.263L131.158 9.4737V15.3684H134.105V9.4737L140 0.631592H137.053ZM48.6316 9.4737L51.5789 3.57896L54.5263 9.4737H48.6316ZM70.7369 0.631592L79.579 10.9474V0.631592H82.5263V15.3684H79.579L70.7369 5.05264V15.3684H67.7895V0.631592H70.7369Z" fill="currentColor"></path>
                </svg>
            </Link>

            {/* Links and Buttons for Larger Screens */}
            {!needSearchBar && <div className={`hidden lg:block font-semibold space-x-6 ${(scrolled || isnothome) ? 'text-black' : 'text-white'} text-sm`}>
                <Link to='/category/Coiffeur' className='relative group'>Coiffeur
                    <div className='absolute left-0 bottom-0 h-0.5 w-full bg-current transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300'></div>
                </Link>
                <Link to='/category/Barbier' className='relative group'>Barbier
                    <div className='absolute left-0 bottom-0 h-0.5 w-full bg-current transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300'></div>
                </Link>
                <Link to='/category/Manucure' className='relative group'>Manucure
                    <div className='absolute left-0 bottom-0 h-0.5 w-full bg-current transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300'></div>
                </Link>
                <Link to='/category/Institutdebeauté' className='relative group'>Institut de beauté
                    <div className='absolute left-0 bottom-0 h-0.5 w-full bg-current transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300'></div>
                </Link>
            </div>}

            {needSearchBar &&
                <div
                    ref={searchBarRef}
                    className={`shadow rounded-lg transition-all duration-300 ${isExpanded ? 'w-[55%] mt-5' : 'overflow-hidden w-[38%]'}`}
                    onClick={handleClick}
                >
                    <NavbarSearchBar />
                </div>

            }

            <div className="hidden lg:block">
                <button className="bg-gray-50 mr-2 text-gray-700 border border-gray-300 px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-200">
                    Ajoutez votre établissement
                </button>
                <Link to='/login'>
                    <button className="bg-black ml-2 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-900">
                        Se connecter
                    </button>
                </Link>
            </div>

            <div className='block lg:hidden'>
                <Link to={'/login'}>
                    <button className="bg-black ml-2 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-900">
                        <PersonOutlineOutlinedIcon fontSize='medium' />
                    </button>
                </Link>
            </div>

            {/* Drawer for Small and Medium Screens */}
            <Drawer className='block lg:hidden' anchor="left" open={isDrawerOpen} onClose={toggleDrawer(false)}>
                <div className='p-4 space-y-4'>
                    <IconButton
                        edge="start"
                        sx={{ color: 'black' }}
                        aria-label="menu"
                        onClick={toggleDrawer(false)}
                        fontSize="large"
                    >
                        <MenuIcon />
                    </IconButton>
                </div>
                {drawerContent}
            </Drawer>
        </div>
    );
}
