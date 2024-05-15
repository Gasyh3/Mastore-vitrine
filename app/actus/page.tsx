"use client";

import React, { useEffect, useState } from 'react';
import { BackgroundGradientCard } from '@/components/Card';
import axios from 'axios';
import { PUBLIC_API_ROUTES } from '@/utils';
import HeaderActus from '@/components/HeaderActus';

export default function Actus() {
      const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get(PUBLIC_API_ROUTES.GET_POSTS)
            .then(response => {
                const allPosts = response.data;
                setPosts(allPosts);
            })
            .catch(error => {
                console.error('Error fetching posts:', error);
            });
    }, []);


  return (
    
    <div className='w-full h-full flex flex-col bg-white py-2'>
    <HeaderActus />
      <div className='w-full h-full flex flex-col items-center justify-center py-2'>
        <h1 className='text-2xl font-bold text-sky-900'>Actualités</h1>
        <p className='text-sm'>Découvrez les actualités de notre entreprise</p>
        <div className='w-[95vw] flex flex-wrap items-center justify-center px-3 py-10 gap-4'>
            {posts.map((post: any) => (
                <BackgroundGradientCard 
                    key={post.id}
                    name={post.title}
                    img={post.imgUrls[0]} // Assuming the first image URL is used as the card image
                    description={post.content}

                />
            ))}
        </div>
      </div>
    </div>
  )
}

