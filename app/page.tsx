'use client';

import Image from "next/image";
import {NextUIProvider} from "@nextui-org/react";
import {Header} from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HomePage } from "@/components/Home";

export default function Home() {
  return (
    <NextUIProvider>
      <main className="h-full w-full bg-white">
        <Header />
        <HomePage />
        <Footer />
      </main>
    </NextUIProvider>
  );
}
