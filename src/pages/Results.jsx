import React from 'react';
import MapView from '../components/Results/MapView';
import ShopCard from '../components/Results/ShopCard';
import Header from '../components/Home/Header';
import Footer from '../components/Home/Footer';
import { data } from '../lib/data';
import { useParams } from 'react-router-dom';
import SearchNavbar from '../components/Results/SearchNavbar';

export default function Results() {
  const { type } = useParams();
  const shops = data[type];

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header isnothome={true} needAnimation={false} />
        {/* <SearchNavbar /> */}

        <div className="flex flex-grow">
          {/* Cards Section */}
          <div className="w-full lg:w-1/2 h-auto bg-gray-100">
            <div className='p-6'>
              <p className='font-semibold text-lg'>Sélectionnez un salon</p>
              <p className='font-semibold text-gray-500'>Les meilleurs salons et instituts aux alentours de Paris : Réservation en ligne</p>
            </div>
            {shops.map((shop, index) => (
              <ShopCard key={index} shop={shop} />
            ))}
          </div>

          {/* Map Section */}
          <div className="lg:w-1/2 h-screen sticky top-0">
            <MapView />
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}
