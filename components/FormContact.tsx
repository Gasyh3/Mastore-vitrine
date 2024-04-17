"use client"

import React from 'react'
import { Input } from "@nextui-org/react"
import { Textarea } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { IconSend } from "@tabler/icons-react"

export function FormContact() {
    return (
        <div className="w-full h-full bg-white flex flex-col items-center gap-5 pb-20">
            <Input
                isRequired
                labelPlacement='outside'
                type="text"
                label="Nom"
                placeholder="Eric Damas"
                description="Votre nom complet ou votre société."
                className="max-w-xl"
            />
            <Input
                isRequired
                labelPlacement='outside'
                type="email"
                label="Email"
                placeholder="contact@mastore.fr"
                description="Nous ne partagerons jamais votre email avec quelqu'un d'autre."
                className="max-w-xl"
            />
            
            <Input
                isRequired
                labelPlacement='outside'
                type="text"
                label="Objet"
                placeholder="Maintenance"
                description="L'objet de votre message."
                className="max-w-xl"
            />
            <Textarea
                isRequired
                labelPlacement='outside'
                variant="faded"
                label="Message"
                placeholder="Votre message"
                description="Votre message."
                className="max-w-xl"
            />
            <Button className="bg-blue-500 text-white" endContent={<IconSend />}>
                Envoyer
            </Button>
        </div>
    )
}
