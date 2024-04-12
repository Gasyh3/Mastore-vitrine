import React from 'react';
import { Card } from '@/components/Card';

function Prestation() {
    return (
        <div className='w-[95vw] flex gap-4'>
        
                <Card 
                    name="Création" 
                    img="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2831&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                    description='Chez Mastore, une équipe dédiée développe des solutions sur-mesure qui s’inscrivent au sein d’une offre globale à haute valeur ajoutée'
                    link="/creation"
                    cardWidth="60" // Largeur de la première carte (80% de la largeur de la colonne)
                />
                <Card 
                    name="Suivi de travaux" 
                    img="https://images.unsplash.com/photo-1541888894402-f3b1af908be4?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                    description="Mastore, c’est un réseau dense et étendu de professionnels fidèles et qualifiés dans tous les métiers du bâtiment." 
                    link="/travaux"
                    cardWidth="60" // Largeur des cartes suivantes (20% de la largeur de la colonne)
                />
                           <Card 
                    name="Bureau d'études" 
                    img="https://images.unsplash.com/photo-1629904853716-f0bc54eea481?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                    description="Le bureau d'études Mastore propose des solutions techniques innovantes et durables, adaptées aux besoins spécifiques de chaque projet."
                    link="/bureau-etudes"
                    cardWidth="60" // Largeur des cartes suivantes (20% de la largeur de la colonne)
                />
        </div>
    );
}

export default Prestation;
