"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";
import Logo from "@/assets/logo_mastore.jpg"

export function CardContact(items: any) {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-sky-900 w-full text-center dark:text-white"
        >
        {items.title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 w-full text-center text-md mt-2 dark:text-neutral-300"
        >
          {items.adresse}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={Logo}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-center items-center mt-10">
          <CardItem
            translateZ={20}
            className="px-4 py-2 rounded-xl bg-sky-900 dark:bg-white dark:text-black text-white text-xl font-bold"
          >
            {items.num}
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
