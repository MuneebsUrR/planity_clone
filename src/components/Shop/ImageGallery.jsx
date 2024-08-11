import React, { useState } from 'react';
import { Drawer, IconButton } from '@mui/material';
import { Close } from '@mui/icons-material';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


function ImageGallery({ mainImage, smallImages }) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };



  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
  
      <>
      <div className="hidden md:grid grid-cols-4 gap-4">
        <div className="col-span-4 md:col-span-2 row-span-2">
          <img src={mainImage} alt="Main" className="w-full h-[96%] object-cover rounded-lg" />
        </div>
        {smallImages.slice(0, 3).map((img, index) => (
          <div key={index} className="col-span-2 md:col-span-1">
            <img src={img} alt={`Small ${index + 1}`} className="w-full h-48 object-cover rounded-lg" />
          </div>
        ))}
        <div className="col-span-2 md:col-span-1 relative">
          <img src={smallImages[3]} alt="Small 4" className="w-full h-48 object-cover rounded-lg blur-sm" />
          <button
            onClick={toggleDrawer}
            className="absolute inset-0 h-48  bg-black bg-opacity-50 text-white flex items-center justify-center rounded-lg"
          >
            See more
          </button>
        </div>
      </div>

      {/* Carousel for small screens */}
      <div className="md:hidden">
        <Slider {...settings}>
          {smallImages.map((img, index) => (
            <div key={index} className="px-2">
              <img src={img} alt={`Small ${index + 1}`} className="w-full h-60 object-cover rounded-lg" />
            </div>
          ))}
        </Slider>
      </div>

      <Drawer
        anchor="bottom"
        open={drawerOpen}
        onClose={toggleDrawer}
        PaperProps={{
          sx: { width: "100%", maxWidth: "100%", backgroundColor: 'black' },
        }}
      >
        <div className="p-6 h-full overflow-y-auto">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold text-white">All Images</h2>
            <IconButton onClick={toggleDrawer} sx={{ color: 'white' }} aria-label="close">
              <Close />
            </IconButton>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {smallImages.map((img, index) => (
              <img key={index} src={img} alt={`Gallery ${index + 1}`} className="w-full h-80 object-cover rounded-lg" />
            ))}
          </div>
        </div>
      </Drawer>
      </>
    
  );
}

export default ImageGallery;
