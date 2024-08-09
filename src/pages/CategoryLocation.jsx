import React from 'react'
import Header from '../components/Home/Header'
import MapView from '../components/CategoryLocation/MapView'
export default function CategoryLocation() {
  return (
    <div>
      <Header isnothome={true} />
      <div>
        <MapView />
      </div>
    </div>
  )
}
