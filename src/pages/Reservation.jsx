import React from 'react'
import { useLocation } from 'react-router-dom';
import Header from '../components/Home/Header';
import Footer from '../components/Home/Footer';
import ServiceSelection from '../components/Reservation/ServiceSelection';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import Scheduler from '../components/Reservation/Scheduler';
export default function Reservation() {
  const location = useLocation();
  const { name, address, rating, reviews, price, lat, lng } = location.state || {};
  return (

    <div className='bg-gray-100'>
      <Header isnothome={true} needAnimation={false} />


      <div className='max-w-4xl mt-10 container mx-auto mb-5 p-3'>
        <div >
          <h1 className="text-3xl font-semibold mb-2">{name}</h1>
          <p className="text-gray-500 text-lg underline"> <FmdGoodOutlinedIcon fontSize='small' /> {address}</p>
          <p className='text-gray-500 text-lg'> <StarBorderOutlinedIcon fontSize='small' /> {rating} ({reviews} avis) · {price} </p>

        </div>
        <div>
          <h1 className="text-2xl font-semibold mb-4 mt-10"><span className='text-blue-500'>1.</span> Prestation sélectionnée</h1>
          <ServiceSelection />
        </div>
        <div>
          <h1 className="text-2xl font-semibold mb-4 mt-10"><span className='text-blue-500'>2.</span>  Choix de la date & heure</h1>
          <Scheduler />
        </div>

      </div>
      <Footer />
    </div>
  )
}
