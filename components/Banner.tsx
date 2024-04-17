"use client";
import React from "react";
import { cn } from "@/utils/cn";
import { IconPhone } from "@tabler/icons-react";
import { motion } from "framer-motion";
import Helpdesk from "@/assets/helpdesk.jpg";

const Banner = () => {
  return (
    <motion.div
      className={cn(
        "w-full bg-gray-800 bg-opacity-75 rounded-lg p-8 flex flex-col gap-10",
        "bg-cover bg-center",
        "relative"
      )}
      style={{ backgroundImage: `url(${Helpdesk})` }}
      whileHover={{ opacity: 0.8 }}
    >
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
    </motion.div>
  );
};

export default Banner;
