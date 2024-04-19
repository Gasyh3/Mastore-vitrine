"use client"

import React, { useState } from 'react'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import axios from 'axios'

export default function Actualite() {
  const [posts, setPosts] = useState([])
  React.useEffect(() => {
    axios.get('https://www.linkedin.com/search/results/content/?fromOrganization=%5B%2226818369%22,%226977829%22%5D&keywords=mastore&origin=FACETED_SEARCH&sid=l9a&sortBy=%22date_posted%22')
      .then(res => {
        setPosts(res.data)
        console.log(posts) // Add this line
      })
      .catch(err => console.error(err))
      
  }, [])

  return (
    <div className="w-full h-full">
        <Header />
        <Footer />
    </div>
  )
}

