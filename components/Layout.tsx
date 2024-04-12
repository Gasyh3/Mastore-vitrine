"use client";
import React, { useState, useRef, useEffect } from "react";
import { LayoutGrid } from "@/components/ui/layout-grid";

export function LayoutWork() {
  return (
    <div className="h-screen w-full flex justify-center">
      <LayoutGrid cards={cards} />
    </div>
  );
}

const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Travaux</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      Qu’elle concerne des travaux neufs ou une rénovation, la maîtrise d’œuvre est un métier d’expérience, de savoir-faire et de savoir-être. Chez Mastore, une équipe dédiée développe des solutions sur-mesure qui s’inscrivent au sein d’une offre globale à haute valeur ajoutée.
      </p>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Rénovation</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Du simple rafraîchissement au lifting complet, l’exécution des travaux de rénovation nécessite plus que jamais l’intervention d’une équipe de professionnels expérimentés. 
      </p>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Conseils & expertise</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        L’expertise et la qualité de service sont les piliers de notre engagement. Les prestations de travaux spécifiques de Mastore sont ainsi reconnues pour leur haut niveau d’exigence. Présente dans toute la France, notre société collabore uniquement avec des artisans référencés et sélectionnés avec le plus grand soin pour leurs compétences et leur professionnalisme.
      </p>
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Maintenance</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">Dégât des eaux, incendie, acte de vandalisme ?
Tout sinistre est susceptible de perturber gravement une activité commerciale, de compromettre une trésorerie, voire de menacer l’existence même d’un établissement. Conscients de ces enjeux, nous intervenons aussitôt après le passage de l’expert et nous engageons à vous fournir un devis complet sous 72 heures.
      </p>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail:
      "https://images.unsplash.com/photo-1541888894402-f3b1af908be4?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail:
      "https://images.unsplash.com/photo-1625577817040-a74f7ad0b520?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail:
      "https://images.unsplash.com/photo-1629904853716-f0bc54eea481?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnail:
      "https://images.unsplash.com/photo-1562259929-b4e1fd3aef09?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
