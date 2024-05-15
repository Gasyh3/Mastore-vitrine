"use client"

import React from 'react';
import { IconUsers, IconCurrencyEuro, IconMapPin } from '@tabler/icons-react';
import { TypewriterAboutMoney, TypewriterAboutPeople, TypewriterAboutPlace } from './TypewriterTitle';

export default function About() {
  return (
    <div className='flex flex-col items-center px-4 sm:px-8 md:px-12 lg:px-20 xl:px-24'>
      <div className="w-full mb-8">
        <p className="text-lg md:text-md px-5 text-justify">
          L’expertise et la qualité de service sont les piliers de notre engagement. Les prestations de travaux spécifiques de Mastore sont ainsi reconnues pour leur haut niveau d’exigence. Présente dans toute la France, notre société collabore uniquement avec des artisans référencés et sélectionnés avec le plus grand soin pour leurs compétences et leur professionnalisme.
        </p>
      </div>
      <div className="flex flex-col md:flex-row w-full justify-between mb-8">
        <img src="./carte-maintenance.png" alt="Carte" className="w-full md:w-1/2 mb-4 md:mb-0" />
        <div className="flex flex-col justify-around md:w-1/2 md:ml-4">
          <div className="flex flex-col justify-center items-center mb-4 gap-4 py-2">
            <IconUsers size={60} />
            <TypewriterAboutPeople />
          </div>
          <div className="flex flex-col justify-center items-center mb-4 gap-4 py-2">
            <IconCurrencyEuro size={60} />
            <TypewriterAboutMoney />
          </div>
          <div className="flex flex-col justify-center items-center gap-4 py-2">
            <IconMapPin size={60} />
            <TypewriterAboutPlace />
          </div>
        </div>
      </div>
    </div>
  );
}

