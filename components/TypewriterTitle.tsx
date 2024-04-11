"use client";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";


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