import { Resend } from 'resend';
import { MastoreEmail } from '@/emails/MastoreReceive';
import React from 'react';

/*
export async function POST(request: Request, res: Response) {
        // Récupérer les données du corps de la requête
        const { nom, email, objet, message } = await request.json();

        // Envoyer l'e-mail
        const { data, error } = await resend.emails.send({
            from: 'Contact Mastore <contact@mastore.fr>',
            to: 'kevrakt@gmail.com',
            subject: "Nouveau message de contact",
            react: MastoreEmail({ nom: nom, email: email, subject: objet, message: message }) as React.ReactElement,
        });
        
        // Préparer les headers de la réponse
        const headers = {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization',
            'Content-Type': 'application/json'
        };

        if (error) {
            // En cas d'erreur, retourner une réponse d'erreur
            return new Response(JSON.stringify({ error: error.message }), { status: 500, headers });
        }


        return Response.json({ message: "Email envoyé avec succès !"});
  
}
*/