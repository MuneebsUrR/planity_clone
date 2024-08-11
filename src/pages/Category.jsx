import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Home/Header';
import Searchbar from '../components/Home/Searchbar';
import Cards from '../components/Category/Cards';
import { data } from '../lib/data';
import Carousal from '../components/Category/Carousal';

export default function Category() {
  const { type } = useParams();

  return (
    <div className='bg-gray-100'>

      <Header isnothome={true} />
      <div className='py-16'>
        <h1 className='text-4xl font-semibold text-center mb-10'>
          Réserver en ligne un RDV avec un coiffeur {type}
        </h1>
        <Searchbar />
      </div>

      <div className='text-center pt-16 text-gray-600 text-sm font-semibold bg-white'>{type}</div>
      <section className='mb-10 bg-white'>

        <Cards data={data[type]} />
      </section>
      <Carousal/>
    </div>
  );
}
