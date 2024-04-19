import React from 'react';
import { Hero } from "@/components/Hero";
import { InfiniteLogo } from '@/components/InfiniteLogo';
import { TypewriterPhone, TypewriterPartenaire, TypewriterPrestation, TypewriterAbout, TypewriterEffectContact } from '@/components/TypewriterTitle';
import About from '@/components/About';
import { FormContact } from '@/components/FormContact';
import { LayoutWork } from './Layout';
import ScrollToTopButton from './ScrollToTop';
import GroupButtonOnRight from './GroupButtonOnRight';
import { PhoneContact } from './BannerContact';
import { Element } from 'react-scroll';

export function HomePage() {
  return (
    <div className='w-full h-full bg-white flex flex-col items-center'>
      <Element name="accueil" className="w-full">
      <div className="w-full">
        <Hero />
      </div>
      </Element>
      <Element name="about" className="w-full">
        <div className="w-full flex flex-col items-center bg-white pt-5">
          <TypewriterAbout />
          <About />
        </div>
      </Element>
      <div className="w-full flex flex-col bg-white justify-center pb-5">
        <InfiniteLogo />
      </div>
      <Element name="specialite" className="w-full">
        <div className="w-full flex flex-col items-center bg-white py-5">
          <LayoutWork />
        </div>
      </Element>
      <div id="phone" className="w-full flex flex-col items-center py-5">
        <PhoneContact />
      </div>
      <Element name="contact" className="w-full">
        <div className="w-full flex flex-col items-center bg-white py-5">
          <TypewriterEffectContact />
          <FormContact />
        </div>
      </Element>
      <GroupButtonOnRight />
      <ScrollToTopButton />
    </div>
  );
}
