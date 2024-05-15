"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export function InfiniteLogo() {
  return (
    <div className="h-[15rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden py-5">
      <h4 className="text-2xl font-bold py-5">Ils nous font confiance</h4>
      <InfiniteMovingCards
        items={logos}
        direction="right"
        speed="fast"
      />
    </div>
  );
}

const logos = [
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
  },
  {
    name: "Pokawa",
    img: "https://www.polygone-riviera.fr/wp-content/uploads/2023/10/nouveau-logo-pokawa-2022-logo-bleu-boutique-du-moi-1.png"
  },
  {
    name: "Naturalia",
    img: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Naturalia_logo.png"
  },
  {
    name: "Brico Dépôt",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Bricodepot.svg/2560px-Bricodepot.svg.png"
  },
  {
    name: "Pitaya",
    img: "https://static.takeaway.com/images/restaurants/be/RP5O53QN/logo_465x320.png",
  },
  {
    name: "Vib's",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh43qN1Vj8AWG3XZIslDGolf20cFO8sdBM11xDaYQOfA&s"
  },
  {
    name: "Italian Trattoria",
    img: "https://api.iqcmanager.com/files/stores/1639561549804-it%20trattoria.png"
  },
  {
    name: "Mango",
    img: "https://www.centre-commercial.fr/bay2/wp-content/uploads/sites/37/2023/07/Mango-logo-300x169.png"
  },
  {
    name: "Bizbee",
    img: "https://www.charmeil-cg.com/wp-content/uploads/2018/10/bizzbee-1.png"
  }
];
