import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Home/Header';
import Searchbar from '../components/Home/Searchbar';
import Cards from '../components/Category/Cards';
import { data } from '../lib/data';

import Footer from '../components/Home/Footer';
export default function Category() {
  const { type } = useParams();
  const PageData = {
    Barbier: {
      description: "L’entretien de la barbe est une affaire sérieuse qui ne doit pas être prise à la légère. On ne procède pas n’importe comment voilà pourquoi il peut se révéler très judicieux de laisser un professionnel le faire. Les modèles de barbe tendance sont nombreux qu’il peut se révéler difficile de choisir. Pour vous aider, laissez votre barbier professionnel choisir pour vous.",
    },
    Coiffeur: {
      description: " Vous désirez une nouvelle coupe de cheveux pour sublimer votre visage ou une coiffure tendance pour sortir ? Que ce soit pour des cheveux longs, courts ou mi-longs, l’art du coiffage doit être laissé aux professionnels. Pour chaque objectif relooking, il y a une méthode précise que seuls les coiffeurs aguerris peuvent mettre en œuvre. Nous avons sélectionné pour vous des coiffeurs à Paris, à Bordeaux, à Toulouse ou encore à Lyon.0",
    },
    Manucure: {
      description: " fleurissent en ville comme dans les petites communes françaises dynamiques. C’est le signe que le métier de manucure  ont encore le vent en poupe. Prendre soin des ongles n’est plus une option pour les Français et les Françaises. Homme et femme, soucieux de leur apparence, sont maintenant devenus très attentifs à la santé de leurs ",
    },
    Institutdebeauté: {
      description: " Comme son nom l’indique, l’institut de beauté est l’endroit idéal pour recevoir différents types de soins : soin du visage soin corporel beauté des pieds  et beauté des mains ou encore  l’épilation . Pour ceux qui aspirent à la détente et au bien-être, c’est le paradis du massage  en tout genre.",
    },
  }
  return (
    <div className='bg-gray-100'>

      <Header isnothome={true} />
      <div className='py-16 px-2'>
        <h1 className='text-4xl font-semibold text-center mb-10'>
          Réserver en ligne un RDV avec un coiffeur {type}
        </h1>
        <section className='p-4'>

          <Searchbar />
        </section>
      </div>

      <div className='text-center pt-16 text-gray-600 text-sm font-semibold bg-white'>{type}</div>
      <section className=' bg-white'>

        <Cards data={data[type]} />
      </section>
      <div className='bg-white font-semibold px-5 md:px-20 lg:px-64 py-20 text-lg text-gray-800 flex items-center justify-center'>
        {PageData[type].description}
      </div>
      <Footer />

    </div>
  );
}
