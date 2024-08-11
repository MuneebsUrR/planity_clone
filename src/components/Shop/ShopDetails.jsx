import React from 'react'
import ImageGallery from './ImageGallery'
import Header from '../Home/Header'
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import { useLocation } from 'react-router-dom';

export default function ShopDetails() {
  const location = useLocation();
  const { name, address, rating, reviews, price } = location.state || {};
  return (
    <div>
      <Header isnothome={true} />
      <div className="max-w-6xl mx-auto p-4 mt-5">
        <div className='flex justify-between items-center mb-5'>
          <div>
            <h1 className="text-2xl font-semibold">{name}</h1>
            <p className="text-gray-500 underline"> <FmdGoodOutlinedIcon fontSize='small' /> {address}</p>
            <p className='text-gray-500'> <StarBorderOutlinedIcon fontSize='small' /> {rating} ({reviews} avis)   {price} </p>
          </div>
          <div>
            <button className="px-4 py-2 bg-black text-white rounded-lg">Prendre RDV</button>
          </div>

        </div>


        <ImageGallery mainImage={mainImage} smallImages={smallImages} />
        <section>
          <h2 className='font-semibold text-lg'> Réserver en ligne pour un RDV chez Iris Adonia</h2>

          <p className='text-gray-500' > 24h/24 - Paiement sur place - Confirmation immédiate</p>

        </section>
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
