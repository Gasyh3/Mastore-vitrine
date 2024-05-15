"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { CardContact } from "./CardContact";
import { IconPhone } from "@tabler/icons-react";

export function PhoneContact() {
    return (
        <AuroraBackground>
            <div className="w-full flex flex-col gap-10 py-2 items-center">
                <div className="w-full flex flex-col items-center pt-10">
                    <h3 className="text-2xl md:text-4xl flex gap-2 font-bold text-white">
                        <IconPhone size={32} />
                        Besoin d'assistance ?</h3>
                    <p className="text-slate-300 text-md">Assistance 24/7 - 365 jours/an</p>
                </div>
                <div className="flex flex-col md:flex-row justify-center gap-2 md:gap-10 w-3/4">
                    <CardContact title="Mastore" num="+33 4 78 41 61 49" adresse="1 Rue du Colonel Chambonnet - 69500 Bron" />
                    <CardContact title="Mastore Ouest" num="+33 5 46 68 54 72" adresse="12 Rue Copernic - 17440 Aytré" />
                </div>
            </div>
        </AuroraBackground>
    );
}
