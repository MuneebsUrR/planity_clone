import React, { useState } from 'react';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import { Button, Typography } from '@mui/material';
import { Link, useNavigation } from 'react-router-dom';


export default function ShopCard({ shop }) {
  const [expanded, setExpanded] = useState(false);



  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Link to={`/shop/${shop.name}`} className="bg-white shadow-none hover:shadow-custom p-4 flex flex-col lg:flex-row border-t-2 border-gray-100 transition duration-300 hover:z-50 relative">
      <img
        src={shop.thumbnail}
        alt={shop.name}
        className={`w-full lg:w-48 h-44 rounded-lg object-fit mb-4 lg:mb-0 lg:mr-4 `}
      />
      <div className="flex flex-col justify-between flex-grow">
        <div>
          <h2 className="text-xl font-semibold mb-2">{shop.name}</h2>
          <p className="text-gray-500 flex items-center mb-2">
            <FmdGoodOutlinedIcon fontSize="small" className="mr-1" />
            {shop.address}
          </p>
          <div className="flex items-center text-gray-500 mb-2">
            <StarBorderOutlinedIcon fontSize="small" className="mr-1" />
            <span>{shop.rating}</span> ({shop.reviews} avis) · {shop.price}
          </div>
          <div className="bg-gray-100 p-2 rounded-lg inline-block">
            <Typography variant="body2" color="textSecondary">
              <strong>PROCHAINE DISPONIBILITÉ</strong>
            </Typography>
            <Typography variant="body2" color="primary">
              Mardi 13 Août 2024
            </Typography>
          </div>
        </div>
        <div className="mt-4 lg:mt-0 flex items-center justify-between">
          <Typography
            variant="body2"
            className="underline cursor-pointer mr-4"
            style={{ color: 'black' }} // Ensure the color is black
            onClick={handleExpandClick}
          >
            {expanded ? 'Moins d\'informations' : 'Plus d\'informations'}
          </Typography>
          <Button
            variant="contained"
            style={{ backgroundColor: 'black', color: 'white', padding: '8px' }} // Ensure the color is white
            size='small'
          >
            Prendre RDV
          </Button>
        </div>
        <div className={`transition-all duration-500 overflow-hidden ${expanded ? 'max-h-screen' : 'max-h-0'}`}>
          {expanded && (
            <div className="mt-4">
              <Typography variant="body1" className="font-semibold">Avis clients</Typography>
              <div className="flex items-center mb-2">
                <StarBorderOutlinedIcon fontSize="small" className="mr-1" />
                <Typography variant="body2" className="text-black">
                  5 ★★★★★
                </Typography>
              </div>
              <hr className="my-2 border-gray-300" /> {/* Horizontal line */}
              <Typography variant="body2" className="mt-2 text-gray-700">
                Très bon service ! Les employés sont très professionnels et la qualité est excellente.
              </Typography>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}
