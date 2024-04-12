"use client"

import React from 'react'
import { Hero } from "@/components/Hero";
import { InfiniteLogo } from '@/components/InfiniteLogo';
import { TypewriterPartenaire, TypewriterPrestation, TypewriterAbout, TypewriterEffectContact } from '@/components/TypewriterTitle';
import Prestation from '@/components/Prestation';
import { BannerContact } from './Banner';
import About from '@/components/About';
import { FormContact } from '@/components/FormContact';
import { LayoutWork } from './Layout';

export function HomePage() {
  return (
    <div className='w-full h-full bg-white flex flex-col items-center'>
        <Hero />
        <div className="w-full flex flex-col items-center bg-white py-20">
            <TypewriterAbout />
            <About />
        </div>
        <div className="w-full flex flex-col items-center bg-white py-20">
            <TypewriterPrestation />      
            <LayoutWork />    
        </div>
        <div className="w-full flex flex-col items-center bg-white py-20">
            <TypewriterPrestation />      
            <Prestation />    
        </div>
        <BannerContact />
        
        <div className="w-full flex flex-col bg-white justify-center py-20">
            <TypewriterPartenaire />      
            <InfiniteLogo />
        </div>
        <div className="w-full flex flex-col items-center bg-white py-20">
            <TypewriterEffectContact />      
            <FormContact />    
        </div>
    </div>
  )
}

