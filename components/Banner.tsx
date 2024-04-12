"use client";
import React from "react";
import { cn } from "@/utils/cn";
import Image from "next/image";
import { IconPhone } from "@tabler/icons-react";

export function BannerContact() {
  return (
    <div className="h-80 relative w-full overflow-hidden bg-helpdesk flex flex-col items-center justify-center">
         <h1 className={cn("md:text-4xl text-xl text-white mb-10 relative z-20 flex gap-5")}>
             <IconPhone width="40" height="40" /> Besoin d'assistance ?
          </h1>
      <div className="flex gap-10">
        <div className="flex flex-col mr-10">
        <p className="text-center mt-2 text-neutral-300 relative z-20">
            Mastore Lyon
          </p>
          <h1 className={cn("md:text-4xl text-xl text-white relative z-20")}>
             +33 6 49 60 97 57
          </h1>
        </div>
        <div className="flex flex-col ml-10">
        <p className="text-center mt-2 text-neutral-300 relative z-20">
            Mastore Ouest
          </p>
          <h1 className={cn("md:text-4xl text-xl text-white relative z-20")}>
             +33 4 78 41 61 49
          </h1>
          
        </div>
      </div>
    </div>
  );
}

