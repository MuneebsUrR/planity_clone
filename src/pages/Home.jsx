import React from 'react'
import '../App.css'
import Header from '../components/Home/Header';
import Hero from '../components/Home/Hero';
import Carousel from '../components/Home/Carousal';

import Press from '../components/Home/Press';
import Stats from '../components/Home/Stats';
import FAQ from '../components/Home/FAQ';
import Locations from '../components/Home/Locations';
import Footer from '../components/Home/Footer';
export default function Home() {
    return (
        <div>
            <div className='image'>
                <Header isnothome={false} needAnimation={true} />
                <Hero />
            </div>
            <Carousel />
            <Press />
            <Stats />
            <Locations />
            <FAQ />
            <Footer />
        </div>
    )
}
