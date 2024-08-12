import React from 'react'
import Header from '../Home/Header'
import { useLocation } from 'react-router-dom'
import ServiceSelection from './ServiceSelection';

export default function ReserveServices() {
    const location = useLocation();
    const { name, address, rating, reviews, price, lat, lng } = location.state || {};
  return (
    <div>

        <Header isnothome={true} needAnimation={false} />
        {name}
        <ServiceSelection/>
    </div>
  )
}
