'use client';

import { useEffect, useState } from 'react';
import Image from "next/image";
import {NextUIProvider} from "@nextui-org/react";
import {Header} from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HomePage } from "@/components/Home";
import Loading from '@/components/Loading';

export default function Home() {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 500);
  }, []);

  return loader ? ( 
    <Loading />
 
  ) : (
    <NextUIProvider>
      <main className="h-full w-full bg-white">
        <Header />
        <HomePage />
        <Footer />
      </main>
    </NextUIProvider>
  );
}
