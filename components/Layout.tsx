"use client";
import React, { useState, useRef, useEffect } from "react";
import { LayoutGrid } from "@/components/ui/layout-grid";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, RadioGroup, Radio } from "@nextui-org/react";

export function LayoutWork() {

  return (
    <div className="h-screen w-full flex justify-center">
      <LayoutGrid cards={cards} />
    </div>
  );
}

const SkeletonOne = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div onClick={onOpen}>
      <p className="font-bold text-4xl text-white">Travaux</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Qu’elle concerne des travaux neufs ou une rénovation, la maîtrise d’œuvre est un métier d’expérience, de savoir-faire et de savoir-être. Chez Mastore, une équipe dédiée développe des solutions sur-mesure qui s’inscrivent au sein d’une offre globale à haute valeur ajoutée.
      </p>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        scrollBehavior={"inside"}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Travaux à neufs
              </ModalHeader>
              <ModalBody>
                <p className="text-justify">Vous préparez une nouvelle implantation ?
                  De la conception jusqu’à l’exécution des travaux,
                  Mastore conseille et accompagne ses clients dans toutes les phases du projet :
                  relevé de plans, réalisation des avant-projets (APS / APD), démarches administratives,
                  planification, coordination et suivi des travaux… Jusqu’à la livraison du chantier.
                </p>

              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Fermer
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

const SkeletonTwo = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div onClick={onOpen}>
      <p className="font-bold text-4xl text-white">Rénovation</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Du simple rafraîchissement au lifting complet, l’exécution des travaux de rénovation nécessite plus que jamais l’intervention d’une équipe de professionnels expérimentés.
      </p>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        scrollBehavior={"inside"}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Rénovation
              </ModalHeader>
              <ModalBody>
                <p>
                  Du simple rafraîchissement au lifting complet, l’exécution des travaux de rénovation
                  nécessite plus que jamais l’intervention d’une équipe de professionnels expérimentés.
                  Fidèle à son engagement, Mastore développe une approche transdisciplinaire et des facultés
                  d’anticipations qui s’avèrent essentielles pour ne jamais perdre de vue le plus important :
                  livrer un chantier de qualité dans le respect des délais impartis, tout en tenant compte des enjeux
                  liés à l’activité du commerce.
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Fermer
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

const SkeletonThree = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [scrollBehavior, setScrollBehavior] = useState("inside");

  return (
    <div onClick={onOpen}>
      <p className="font-bold text-4xl text-white">Conseils & expertise</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        L’expertise et la qualité de service sont les piliers de notre engagement. Les prestations de travaux spécifiques de Mastore sont ainsi reconnues pour leur haut niveau d’exigence. Présente dans toute la France, notre société collabore uniquement avec des artisans référencés et sélectionnés avec le plus grand soin pour leurs compétences et leur professionnalisme.
      </p>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        scrollBehavior={"inside"}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Conseil & expertise
              </ModalHeader>
              <ModalBody>
                <p>L’expertise et la qualité de service sont les piliers de notre engagement.
                  Les prestations de travaux spécifiques de Mastore sont ainsi reconnues pour leur haut niveau d’exigence.
                  Présente dans toute la France, notre société collabore uniquement avec des artisans référencés
                  et sélectionnés avec le plus grand soin pour leurs compétences et leur professionnalisme.
                </p>

              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Fermer
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

const SkeletonFour = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div onClick={onOpen}>
      <p className="font-bold text-4xl text-white">Maintenance</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">Dégât des eaux, incendie, acte de vandalisme ?
        Tout sinistre est susceptible de perturber gravement une activité commerciale, de compromettre une trésorerie, voire de menacer l’existence même d’un établissement. Conscients de ces enjeux, nous intervenons aussitôt après le passage de l’expert et nous engageons à vous fournir un devis complet sous 72 heures.
      </p>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        scrollBehavior={"inside"}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Maintenance
              </ModalHeader>
              <ModalBody>
                <p>
                  La maintenance est au service de la fiabilité et de la performance de vos installations.
                  L’expertise Mastore dans le domaine de la maintenance multi-service repose sur 10 ans d’expérience
                  et des méthodes de travail qui nous permettent de répondre efficacement aux besoin de chacun de nos
                  clients.
                </p>
                <h4 className="font-bold text-blue-500">Intervention d’urgence</h4>
                <p>
                  Face à une urgence, la réactivité prime.
                  En cas de panne, quelle qu’elle soit, Mastore tient à disposition de ses clients des techniciens spécialisés
                  prêts à intervenir partout en France dans un délai de 24 à 48 heures maximum.
                </p>
                <h4 className="font-bold text-blue-500">Maintenance réglementaire</h4>
                <p>
                  Votre installation électrique est-elle en conformité ?
                  Votre établissement respecte-t-il les normes d’accessibilité en vigueur ?
                  Au fait des obligations légales qui sont les vôtres,
                  les experts Mastore vous accompagnent dans toutes vos démarches de mise en conformité,
                  du diagnostic jusqu’à la réalisation des travaux correctifs.</p>
                <h4 className="font-bold text-blue-500">Maintenance programmée</h4>
                <p>
                  L’anticipation est la clé d’une maintenance de qualité. Entretien de vos rideaux métalliques, relamping, climatisation… :
                  toutes les interventions sont prévues à intervalles réguliers selon une liste de critères adaptés.
                  L’organisation et les procédés mis en place par Mastore permettent un maintien en état régulier de votre espace
                  tout en réduisant significativement la perte de temps engendrée par les aléas.
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Fermer
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail:
      "https://images.unsplash.com/photo-1541888894402-f3b1af908be4?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail:
      "https://images.unsplash.com/photo-1625577817040-a74f7ad0b520?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail:
      "https://images.unsplash.com/photo-1629904853716-f0bc54eea481?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnail:
      "https://images.unsplash.com/photo-1562259929-b4e1fd3aef09?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
