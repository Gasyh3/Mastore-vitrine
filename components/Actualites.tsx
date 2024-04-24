import React from 'react';
import { BackgroundGradientCard, Card } from '@/components/Card';

export function ActualiteHoverCards() {
    return (
        <div className='w-[95vw] flex items-center justify-center gap-4'>
        
                <Card 
                    name="Création" 
                    img="/actu-mastore-1.jpeg" 
                    description='Chez Mastore, une équipe dédiée développe des solutions sur-mesure qui s’inscrivent au sein d’une offre globale à haute valeur ajoutée'
                    link="/creation"
                    cardWidth="60" // Largeur de la première carte (80% de la largeur de la colonne)
                />
                <Card 
                    name="Suivi de travaux" 
                    img="/actu-mastore-2.jpeg" 
                    description="Mastore, c’est un réseau dense et étendu de professionnels fidèles et qualifiés dans tous les métiers du bâtiment." 
                    link="/travaux"
                    cardWidth="60" // Largeur des cartes suivantes (20% de la largeur de la colonne)
                />
                <Card 
                    name="Suivi de travaux" 
                    img="/actu-mastore-3.jpeg" 
                    description="Mastore, c’est un réseau dense et étendu de professionnels fidèles et qualifiés dans tous les métiers du bâtiment." 
                    link="/travaux"
                    cardWidth="60" // Largeur des cartes suivantes (20% de la largeur de la colonne)
                />
                
        </div>
    );
}

export function ActualiteBigCards() {
    return (
        <div className='w-[95vw] flex items-center justify-center gap-4'>
                <BackgroundGradientCard 
                    name="Bureau d'études" 
                    img="/actu-mastore-1.jpeg" 
                    description="Le bureau d'études Mastore propose des solutions techniques innovantes et durables, adaptées aux besoins spécifiques de chaque projet."
                    link="/bureau-etudes"
                />
                <BackgroundGradientCard 
                    name="Bureau d'études" 
                    img="/actu-mastore-2.jpeg" 
                    description="Le bureau d'études Mastore propose des solutions techniques innovantes et durables, adaptées aux besoins spécifiques de chaque projet."
                    link="/bureau-etudes"
                />
                <BackgroundGradientCard 
                    name="Bureau d'études" 
                    img="/actu-mastore-3.jpeg" 
                    description="Le bureau d'études Mastore propose des solutions techniques innovantes et durables, adaptées aux besoins spécifiques de chaque projet."
                    link="/bureau-etudes"
                />
        </div>
    );
}



