import React, { useRef } from 'react';
import ImageGallery from './ImageGallery';
import Header from '../Home/Header';
import Footer from '../Home/Footer';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import { useLocation } from 'react-router-dom';

import ServiceChoice from './ServiceChoice';
import RatingCard from './RatingCard';
import OpeningHours from './OpeningHours';
import Collaborators from './Collaborators';
import MapView from '../Results/MapView';
import AboutUs from './AboutUs';

export default function ShopDetails() {
  const location = useLocation();
  const { name, address, rating, reviews, price, lat, lng } = location.state || {};

  const serviceSectionRef = useRef(null);

  const handleScrollToSection = () => {
    serviceSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className='bg-gray-100'>
      <Header isnothome={true} needAnimation={false} />
      <div className="container mx-auto p-5 mt-5">
        <div className='flex justify-between items-center mb-5'>
          <div>
            <h1 className="text-3xl font-semibold mb-2">{name}</h1>
            <p className="text-gray-500 text-lg underline">
              <FmdGoodOutlinedIcon fontSize='small' /> {address}
            </p>
            <p className='text-gray-500 text-lg'>
              <StarBorderOutlinedIcon fontSize='small' /> {rating} ({reviews} avis) · {price}
            </p>
          </div>
          <div>
            <button
              onClick={handleScrollToSection}
              className="px-4 py-2 bg-black text-white text-sm rounded-lg"
            >
              Prendre RDV
            </button>
          </div>
        </div>

        <ImageGallery mainImage={mainImage} smallImages={smallImages} />

        <section ref={serviceSectionRef}>
          <h2 className='font-semibold text-2xl mt-8'>Réserver en ligne pour un RDV chez Iris Adonia</h2>
          <p className='text-gray-500'>24h/24 - Paiement sur place - Confirmation immédiate</p>
          <h2 className='text-2xl font-semibold mt-6'>Choix de la prestation</h2>
        </section>

        <div className='flex-wrap flex justify-center lg:justify-between'>
          <div className='w-full max-w-lg xl:max-w-3xl 2xl:max-w-5xl mt-5'>
            <h3 className='text-xl text-center md:text-left mb-5 font-semibold text-gray-700'>
              Balayages et Décolorations
            </h3>
            <ServiceChoice allServices={allServices} />

            <div className='w-full h-72 mt-12 mb-40'>
              <h2 className='text-xl text-center md:text-left mt-6 mb-5 font-semibold text-gray-700'>Où se situe le salon ?</h2>
              <p className="text-gray-500 text-md underline mb-5">
                <FmdGoodOutlinedIcon fontSize='small' /> {address}
              </p>
              <MapView DefaultLongitude={lng} DefaultLatitude={lat} zoomValue={17} />
            </div>
            <div>
              <h2 className='text-xl text-center md:text-left font-semibold text-gray-700'>Collaborateurs</h2>
              <Collaborators collaborators={collaboratorsData} />
            </div>
            <div className='mt-10 mb-5'>
              <h2 className='mb-5 text-xl text-center md:text-left font-semibold text-gray-700'>À-propos</h2>
              <AboutUs />
            </div>
          </div>
          <div className='w-full max-w-sm mt-4'>
            <RatingCard />
            <div className='mt-5'>
              <h2 className='text-xl font-semibold mb-5 text-center md:text-left'>Horaires d'ouverture</h2>
              <OpeningHours />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
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

const collaboratorsData = [
  { name: 'Pierre', image: " https://picsum.photos/200" },
  { name: 'Mehdi', image: null },
  { name: 'SALON', image: null },
];

const allServices = [
  { name: 'Highlights or Balayage - Short Hair', duration: '1h 5min', price: '64 €' },
  { name: 'Highlights or Balayage - Mid-length Hair', duration: '1h 5min', price: '79 €' },
  { name: 'Highlights or Balayage - Long Hair', duration: '1h 5min', price: '110 €' },
  { name: 'Highlights or Balayage - Very Long Hair', duration: '1h 5min', price: 'Sur Devis' },
  { name: 'Bleaching - Short Hair', duration: '1h 5min', price: '100 €' },
  { name: 'Bleaching - Mid-length Hair', duration: '1h 5min', price: '120 €' },
  { name: 'Bleaching - Long Hair', duration: '1h 5min', price: '140 €' },
];
