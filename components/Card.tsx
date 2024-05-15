"use client";

import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";
import Link from "next/link";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { IconAppWindow } from "@tabler/icons-react";
import Image from "next/image";
import { Button } from "@nextui-org/react";
import { useEffect } from "react";
import { useRouter } from 'next/navigation'

interface item {
    img: string;
    name: string;
    description: string;
    cardWidth?: string;
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
          className="object-contain p-2 md:p-0"
        />
        <p className="text-base sm:text-xl text-black mt-4 mb-2 px-4 md:p-0 dark:text-neutral-200">
          {item.name}
        </p>
 
        <p className="text-sm min-h-xl max-h-xl text-neutral-600 px-4 md:p-0 dark:text-neutral-400">
          {item.description}
        </p>
        <div className="py-2">
          <Button as={Link} href="/actus" className="rounded-full px-4 py-2 mx-2 text-white flex items-center space-x-1 bg-sky-900 mt-4 text-xs font-bold dark:bg-zinc-800">
            <span>En savoir plus →</span>
          </Button>
        </div>
      </BackgroundGradient>
    </div>
  );
}