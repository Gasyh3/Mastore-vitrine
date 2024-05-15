import React, { useState, useRef } from 'react';
import { Input, Textarea, Button } from '@nextui-org/react';
import { IconSend } from '@tabler/icons-react';
import { SnackbarProvider, useSnackbar } from 'notistack'; 
import { useForm } from "react-hook-form"
import { TypewriterEffectContact } from '@/components/TypewriterTitle';
import emailjs from "@emailjs/browser"

export function FormContact() {
    const form = useRef(null);
    const [nom, setNom] = useState('');
    const [email, setEmail] = useState('');
    const [objet, setObjet] = useState('');
    const [message, setMessage] = useState('');

    const { enqueueSnackbar } = useSnackbar(); // Utilise useSnackbar pour afficher les notifications
    const SERVICE = process.env.SERVICE_ID;
    const TEMPLATE = process.env.TEMPLATE_ID;
    const KEY = process.env.PUBLIC_ID;

const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (SERVICE && TEMPLATE && KEY) {
        emailjs.sendForm(SERVICE, TEMPLATE, form.current!, KEY)
            .then((result :any) => {
                console.log(result.text);
                window.alert('Votre message a été envoyé avec succès!');
                if (form.current) (form.current as HTMLFormElement).reset();
            })
            .catch((error :any) => {
                console.error(error.text);
                window.alert('Une erreur est survenue, veuillez réessayer.');
                if (form.current) (form.current as HTMLFormElement).reset();
            });
    } else {
        console.error('Missing required environment variables');
    }
}

    // const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    //     e.preventDefault();
        
    //     try {
    //         const response = await fetch('http://localhost:3000/api/send', {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify({ nom, email, objet, message }),
    //         });
    //         const data = await response.json();
    //         if (!response.ok) {
    //             throw data;
    //         }

    //         enqueueSnackbar('Votre message a bien été envoyé !', { variant: 'success' });
    //         console.log('Votre message a bien été envoyé !');
    //         console.log(data);

    //         return data;
    //         } catch (error) {
    //             console.error('Erreur lors de l\'envoi du message:', error);
    //         }

    //         // Affiche une notification de succès
            
    //         // Réinitialise le formulaire
         
    // };

    return (
        <div className="w-full h-full bg-[url('/filigrane.png')] bg-contain bg-center bg-no-repeat flex flex-col">
            <TypewriterEffectContact />
            <SnackbarProvider>
                <form ref={form as React.RefObject<HTMLFormElement>} id="formulaire" className="w-full h-full  flex flex-col items-center gap-5 px-3 md:px-0 pb-20" onSubmit={sendEmail}>
                    <Input
                        isRequired
                        name="nom"
                        labelPlacement='outside'
                        type="text"
                        label="Nom"
                        value={nom}
                        onChange={(e) => setNom(e.target.value)}
                        placeholder="Eric Damas"
                        description="Votre nom complet ou votre société."
                        className="max-w-xl"
                    />
                    <Input
                        isRequired
                        name="email"
                        labelPlacement='outside'
                        type="email"
                        label="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="contact@mastore.fr"
                        description="Nous ne partagerons jamais votre email avec quelqu'un d'autre."
                        className="max-w-xl"
                    />

                    <Input
                        isRequired
                        name="objet"
                        labelPlacement='outside'
                        type="text"
                        label="Objet"
                        value={objet}
                        onChange={(e) => setObjet(e.target.value)}
                        placeholder="Maintenance"
                        description="L'objet de votre message."
                        className="max-w-xl"
                    />
                    <Textarea
                        isRequired
                        name="message"
                        labelPlacement='outside'
                        variant="faded"
                        label="Message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Votre message"
                        description="Votre message."
                        className="max-w-xl"
                    />
                    <Button className="bg-sky-900 text-white" value="submit" type="submit" endContent={<IconSend />}>
                        Envoyer
                    </Button>
                </form>
            </SnackbarProvider>
        </div>
    );
}
