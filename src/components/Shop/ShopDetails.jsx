import React from 'react'
import ImageGallery from './ImageGallery'
import Header from '../Home/Header'
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import { useLocation } from 'react-router-dom';
import SearchNavbar from '../Results/SearchNavbar'
import ServiceChoice from './ServiceChoice';
import RatingCard from './RatingCard';
export default function ShopDetails() {
  const location = useLocation();
  const { name, address, rating, reviews, price } = location.state || {};
  return (
    <div className='bg-gray-100'>
      <SearchNavbar />
      <div className="container mx-auto p-5 mt-5">
        <div className='flex justify-between items-center mb-5'>
          <div>
            <h1 className="text-2xl font-semibold">{name}</h1>
            <p className="text-gray-500 underline"> <FmdGoodOutlinedIcon fontSize='small' /> {address}</p>
            <p className='text-gray-500'> <StarBorderOutlinedIcon fontSize='small' /> {rating} ({reviews} avis) · {price} </p>
          </div>
          <div>
            <button className="px-4 py-2 bg-black text-white rounded-lg">Prendre RDV</button>
          </div>

        </div>


        <ImageGallery mainImage={mainImage} smallImages={smallImages} />
        <section>
          <h2 className='font-semibold text-2xl mt-8'> Réserver en ligne pour un RDV chez Iris Adonia</h2>

          <p className='text-gray-500' > 24h/24 - Paiement sur place - Confirmation immédiate</p>
          <h2 className='text-2xl font-semibold mt-6' >

            Choix de la prestation
          </h2>
          <h3 className='text-xl font-semibold text-gray-700'>

            Balayages et Décolorations
          </h3>

        </section>
        <div className='flex-wrap flex justify-center lg:justify-between items-center'>
          <div className='w-full max-w-lg xl:max-w-2xl mt-5'>

            <ServiceChoice />
          </div>
          <div className='w-full max-w-sm mt-4' >

            <RatingCard />
          </div>
        </div>
      </div>
    </div>
  )
}
const mainImage = "https://picsum.photos/1000/800";
const smallImages = [
  "https://picsum.photos/300/400?random=1",
  "https://picsum.photos/300/400?random=2",
  "https://picsum.photos/300/400?random=3",
  "https://picsum.photos/300/400?random=4",
  "https://picsum.photos/300/400?random=5",
  "https://picsum.photos/300/400?random=6",
  "https://picsum.photos/300/400?random=7",
  "https://picsum.photos/300/400?random=8",
];
