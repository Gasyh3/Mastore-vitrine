"use client";

import { BannerHelpdesk, DirectionAwareHover } from "@/components/ui/direction-aware-hover";
import Link from "next/link";
import Helpdesk from "@/assets/helpdesk.jpg";
import { IconPhone } from "@tabler/icons-react";
import { cn } from "@/utils/cn";
interface item {
    img: string;
    name: string;
    description: string;
    link: string;
    cardWidth: string;
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


export function BannerContact() {
  return (
    <div className="h-[25rem] relative flex items-center justify-center">
   
      <BannerHelpdesk>
      <div className="w-full h-full bg-slate-900 flex flex-col content-center">
        <h1 className={cn("md:text-4xl text-xl text-white mb-10 relative z-20 flex gap-5")}>
             <IconPhone width="40" height="40" /> Besoin d'assistance ?
          </h1>
      <div className="flex flex-col gap-10">
        <div className="w-1/2 flex flex-col border">
        <p className="text-center mt-2 text-neutral-300 relative z-20">
            Mastore Lyon
          </p>
          <h1 className={cn("md:text-4xl text-xl text-white relative z-20")}>
             +33 6 49 60 97 57
          </h1>
        </div>
        <div className="w-1/2 flex flex-col">
        <p className="text-center mt-2 text-neutral-300 relative z-20">
            Mastore Ouest
          </p>
          <h1 className={cn("md:text-4xl text-xl text-white relative z-20")}>
             +33 4 78 41 61 49
          </h1>
          
        </div>
      </div>
      </div>
      </BannerHelpdesk>

    </div>
  );

}