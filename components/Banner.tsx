"use client";
import React from "react";
import { cn } from "@/utils/cn";
import { IconPhone } from "@tabler/icons-react";
import { motion } from "framer-motion";
import {Image} from "@nextui-org/react";
import { CardContact } from "./CardContact";

const Banner = () => {
  return (
    <motion.div
      className={cn(
        "w-full bg-sky-900 bg-opacity-95 p-8 flex flex-col content-center items-center gap-10",
        "bg-cover bg-center",
        "relative"
      )}
      whileHover={{ opacity: 0.8 }}
    >
      
      <div className="flex gap-10 w-3/4">
      
        <CardContact title="Mastore" num="+33 6 49 60 97 57" adresse="1 Rue du Colonnel Chambonnet - 69500 Bron" />
        <CardContact title="Mastore Ouest" num="+33 4 78 41 61 49" adresse="12 Rue Copernic - 17440 Aytré" />
      </div>
    </motion.div>
  );
};

export default Banner;
