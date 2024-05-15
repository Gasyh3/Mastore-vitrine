"use client";

import Image from "next/image";
import React from 'react'
import Logo from "@/assets/logo_mastore.jpg"

import { Progress } from "@nextui-org/react";

function Loading() {
  return (
    <div className="bg-white w-[100vw] h-[100vh] flex justify-center items-center content-center">
        <div className="h-[50vh]">
        <Image
            src={Logo}
            height="1000"
            width="1000"
            className="h-60 w-60 object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        <Progress
      size="sm"
      isIndeterminate
      aria-label="Loading..."
      classNames={{
        base: "max-w-md",
        indicator: "bg-gradient-to-r from-sky-900 to-blue-900",
        label: "tracking-wider font-medium text-default-600",
        value: "text-foreground/60",
      }}
    />
        </div>
    </div>
  )
}

export default Loading