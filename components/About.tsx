"use client"

import React from 'react'
import { IconUsers, IconCurrencyEuro, IconMapPin } from '@tabler/icons-react'
import { TypewriterAboutMoney, TypewriterAboutPeople, TypewriterAboutPlace } from './TypewriterTitle'

export default function About() {
  return (
    <div className='flex flex-col w-full items-center'>
      <div className="flex w-3/4 justify-between">
        <p className="w-3/5 text-justify content-center gap-8">
          L’expertise et la qualité de service sont les piliers de notre engagement. Les prestations de travaux spécifiques de Mastore sont ainsi reconnues pour leur haut niveau d’exigence. Présente dans toute la France, notre société collabore uniquement avec des artisans référencés et sélectionnés avec le plus grand soin pour leurs compétences et leur professionnalisme.
        </p>
        <div className='w-[350px] h-[350px]'>
          <img src="https://www.villes.fr/wp-content/uploads/2021/01/carte-de-france.jpg" alt="Carte" />
        </div>
      </div>
      <div className="flex w-3/4 justify-around h-[8rem]">
        <div className='flex flex-col justify-center items-center gap-5'>
          <IconUsers size={60} />
          <TypewriterAboutPeople />
        </div>
        <div className='flex flex-col justify-center items-center gap-5'>
          <IconCurrencyEuro size={60} />
          <TypewriterAboutMoney />
        </div>
        <div className='flex flex-col justify-center items-center gap-5'>
          <IconMapPin size={60} />
          <TypewriterAboutPlace />
        </div>
      </div>

    </div>
  )
}

