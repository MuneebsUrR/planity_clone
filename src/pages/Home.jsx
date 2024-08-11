import React from 'react'
import '../App.css'
import Header from '../components/Home/Header';
import Hero from '../components/Home/Hero';
import Carousal from '../components/Home/Carousal';

import Press from '../components/Home/Press';
import Stats from '../components/Home/Stats';
import FAQ from '../components/Home/FAQ';
import Locations from '../components/Home/Locations';
import Footer from '../components/Home/Footer';
export default function Home() {
    return (
        <div>
            <div className='image'>
                <Header />
                <Hero />
            </div>
            <Carousal />
            <Press />
            <Stats />
            <Locations />
            <FAQ />
            <Footer />
        </div>
    )
}
