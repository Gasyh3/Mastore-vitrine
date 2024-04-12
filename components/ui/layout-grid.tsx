import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";
import Image from "next/image";
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover"; // Import du composant DirectionAwareHover

type Card = {
  id: number;
  content: JSX.Element | React.ReactNode | string;
  className: string;
  thumbnail: string;
};

export const LayoutGrid = ({ cards }: { cards: Card[] }) => {

  return (
    <div className="w-full h-full p-10 grid grid-cols-1 md:grid-cols-3  max-w-7xl mx-auto gap-4 ">
      {cards.map((card, i) => (
        <div key={i} className={cn(card.className, "")}>
          <DirectionAwareHover // Remplacement du onClick par l'effet hover de DirectionAwareHover
            imageUrl={card.thumbnail}
            cardWidth="full" // Ajout de la largeur de la carte comme prop
          >
            {card.content}
          </DirectionAwareHover>
        </div>
      ))}
    </div>
  );
};
