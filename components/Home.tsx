"use client"

import React from 'react'
import { Hero } from "@/components/Hero";
import { LayoutWork } from '@/components/Layout';
import { InfiniteLogo } from '@/components/InfiniteLogo';
import { TypewriterPartenaire, TypewriterPrestation } from '@/components/TypewriterTitle';
import Prestation from '@/components/Prestation';

export function HomePage() {
  return (
    <div className='w-full h-full'>
        <Hero />
        <div className="w-full flex flex-col bg-white justify-center py-20">
            <TypewriterPrestation />      
            <Prestation />
            
        </div>
        <div className="w-full flex flex-col bg-white justify-center py-20">
            <TypewriterPartenaire />      
            <InfiniteLogo />
        </div>
    </div>
  )
}

