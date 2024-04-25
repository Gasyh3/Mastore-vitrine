"use client";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const maintenance = `La maintenance est au service de la fiabilité et de la performance de vos installations. L’expertise Mastore dans le domaine de la maintenance multi-service repose sur 10 ans d’expérience et des méthodes de travail qui nous permettent de répondre efficacement aux besoin de chacun de nos clients.`;

const maitrise = `Qu’elle concerne des travaux neufs ou une rénovation, la maîtrise d’œuvre est un métier d’expérience, de savoir-faire et de savoir-être. Chez Mastore, une équipe dédiée développe des solutions sur-mesure qui s’inscrivent au sein d’une offre globale à haute valeur ajoutée.`;

const travaux = `Mastore, c’est un réseau dense et étendu de professionnels fidèles et qualifiés dans tous les métiers du bâtiment. Notre société centralise ainsi l’ensemble des compétences dont votre entreprise peut avoir besoin ponctuellement.`;

const home = `Mastore, c’est 10 années d’expérience et un savoir-faire d’excellence au service de votre entreprise, partout en France.`;

export function TextGenerateHome() {
    return <TextGenerateEffect words={home} />;
}
