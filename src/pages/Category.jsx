import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Home/Header';
import Searchbar from '../components/Home/Searchbar';
import Cards from '../components/Category/Cards';
import { data } from '../lib/data';

export default function Category() {
  const { type } = useParams();

  return (
    <div>
      <Header isnothome={true} />
      <div className='bg-gray-100'>
        <div className='py-16'>
          <h1 className='text-4xl font-semibold text-center mb-10'>
            Réserver en ligne un RDV avec un coiffeur {type}
          </h1>
          <Searchbar />
        </div>
      </div>
      <div className='text-center mt-20 text-gray-600 text-sm font-semibold'>{type}</div>
      <section className='mb-10'>
        <Cards data={data[type]} />
      </section>
    </div>
  );
}
