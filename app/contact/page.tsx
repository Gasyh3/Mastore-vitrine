import { Footer } from '@/components/Footer'
import { FormContact } from '@/components/FormContact'
import { Header } from '@/components/Header'
import { TypewriterEffectContact } from '@/components/TypewriterTitle'

import React from 'react'

export default function Contact() {
  return (
    <div className="w-full h-full">
        <Header />
        <div className="w-full h-full bg-white">
          <TypewriterEffectContact />
          <FormContact />
        </div>
        <Footer />
    </div>
  )
}

