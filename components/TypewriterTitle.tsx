"use client";
import { TypewriterEffectSmooth, TypewriterLittleEffectSmooth } from "@/components/ui/typewriter-effect";
import { IconPhone } from "@tabler/icons-react";

export function TypewriterStatic() {
  
  return (
    <div className="flex flex-col items-center justify-center h-[10rem]">
    <h1 className="text-base sm:text-xl md:text-3xl lg:text-5xl font-bold text-center">Les actus Mastore</h1>
    </div>
  );
}

export function TypewriterPhone() {
  const words = [
    {
      text: "Besoin",
    },
    {
      text: "d'assistance ?",
      className: "text-sky-500 dark:text-sky-500",
    },

  ];
  return (
    <div className="flex flex-col items-center justify-center h-[10rem]">
      <TypewriterEffectSmooth words={words as { text: string; className?: string | undefined; }[]} />
    </div>
  );
}

export function TypewriterPartenaire() {
  const words = [
    {
      text: "Nos",
    },
    {
      text: "Partenaires.",
      className: "text-sky-500 dark:text-sky-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[10rem]">
      <TypewriterEffectSmooth words={words} />
    </div>
  );
}

export function TypewriterPrestation() {
  const words = [
    {
      text: "Nos",
    },
    {
      text: "Prestations.",
      className: "text-sky-500 dark:text-sky-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[10rem]">
      <TypewriterEffectSmooth words={words} />
    </div>
  );
}

export function TypewriterEffectContact() {
  const words = [
    {
      text: "Contactez",
    },
    {
      text: "Mastore !",
      className: "text-sky-500 dark:text-sky-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[10rem] pt-5">
      <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base  ">
        Prêt à améliorer vos espaces ?
      </p>
      <TypewriterEffectSmooth words={words} />
    </div>
  );
}

export function TypewriterAbout() {
  const words = [
    {
      text: "À propos",
    },
    {
      text: "de nous.",
      className: "text-sky-500 dark:text-sky-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[10rem]">
      <TypewriterEffectSmooth words={words} />
    </div>
  );
}

export function TypewriterAboutPeople() {
  const words = [
    {
      text: "+ de 100",
      className: "text-sky-500 dark:text-sky-500",
    },
    {
      text: "collaborateurs",
    },
    
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[2rem]">
      <TypewriterLittleEffectSmooth words={words} />
    </div>
  );
}

export function TypewriterAboutMoney() {
  const words = [
    {
      text: "100 M€ ",
      className: "text-sky-500 dark:text-sky-500",
    },
    {
      text: "de chiffres d'affaires",
    },
    
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[2rem]">
      <TypewriterLittleEffectSmooth words={words} />
    </div>
  );
}

export function TypewriterAboutPlace() {
  const words = [
    {
      text: "+ de 9",
      className: "text-sky-500 dark:text-sky-500",
    },
    {
      text: "régions couvertes",
    },
    
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[2rem]">
      <TypewriterLittleEffectSmooth words={words} />
    </div>
  );
}
