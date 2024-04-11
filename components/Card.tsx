"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/utils/cn";
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";

interface item {
    img: string;
    name: string;
    description: string;
}

export function Card(item: item) {
  return (
    <div className="h-[25rem] relative flex items-center justify-center">
      <DirectionAwareHover imageUrl={item.img}>
        <p className="font-bold text-xl">{item.name}</p>
        <p className="font-normal text-sm">{item.description}</p>
      </DirectionAwareHover>
    </div>
  );
}
