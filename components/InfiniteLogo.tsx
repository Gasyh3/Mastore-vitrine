"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export function InfiniteLogo() {
  return (
    <div className="h-[15rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="fast"
      />
    </div>
  );
}

const testimonials = [
  {
    name: "Tamaris",
    img: "https://www.centre-commercial.fr/barentin/wp-content/uploads/sites/159/2021/11/Tamaris-logo.png",
  },
  {
    name: "Kiko",
    img: "https://www.centre-commercial.fr/salanca/wp-content/uploads/sites/47/2015/02/Logo-KIKO-MILANO.png",
  },
  {
    name: "Celio",
    img: "https://www.centre-commercial.fr/salanca/wp-content/uploads/sites/47/2024/02/xlogo-carrefour-celio.jpg.pagespeed.ic.Jp_au7wL-h.webp",
  },
  {
    name: "Desigual",
    img: "https://1000logos.net/wp-content/uploads/2020/04/Desigual-Logo-2004.png",
  },
  {
    name: "Yves Rocher",
    img: "https://1000logos.net/wp-content/uploads/2021/04/Yves-Rocher-logo-768x432.png",
  }
];
