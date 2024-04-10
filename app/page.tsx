'use client';

import Image from "next/image";
import {NextUIProvider} from "@nextui-org/react";
import {Header} from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <NextUIProvider>
      <main className="h-full w-full">
        <Header />
        <Footer />
      </main>
    </NextUIProvider>
  );
}
