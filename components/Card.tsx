"use client";

import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";
import Link from "next/link";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { IconAppWindow } from "@tabler/icons-react";
import Image from "next/image";

interface item {
    img: string;
    name: string;
    description: string;
    link: string;
    cardWidth?: string;
}

export function Card(item: item) {
  return (
    <div className="h-[25rem] relative flex items-center justify-center">
    <Link href={item.link}>
      <DirectionAwareHover cardWidth={item.cardWidth} imageUrl={item.img}>
        <p className="font-bold text-xl">{item.name}</p>
        <p className="font-normal text-sm">{item.description}</p>
        <p className="font-normal text-sm decoration-solid">En savoir plus →</p>
      </DirectionAwareHover>
    </Link>
    </div>
  );
}

export function BackgroundGradientCard(item: item) {
  return (
    <div>
      <BackgroundGradient className="rounded-[22px] max-w-sm sm:p-10 bg-white dark:bg-zinc-900"> 
        <Image
          src={item.img}
          alt="jordans"
          height="400"
          width="500"
          className="object-contain"
        />
        <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
          {item.name}
        </p>
 
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          {item.description}
        </p>
        <button className="rounded-full px-4 py-1 text-white flex items-center space-x-1 bg-sky-900 mt-4 text-xs font-bold dark:bg-zinc-800">
          <span>En savoir plus →</span>
          
        </button>
      </BackgroundGradient>
    </div>
  );
}