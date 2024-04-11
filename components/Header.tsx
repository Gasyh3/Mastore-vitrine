import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu } from "@nextui-org/react";
import { IconChevronDown, IconPencilUp, IconTool, IconTools, IconPencilSearch } from "@tabler/icons-react"

export function Header() {
  return (
    <Navbar>
      <NavbarBrand
      >
        <p className="font-bold text-inherit">MASTORE</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Button
                disableRipple
                className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                endContent={<IconChevronDown />}
                radius="sm"
                variant="light"
              >
                Prestations
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label="MASTORE prestation"
            className="w-[340px]"
            itemClasses={{
              base: "gap-4",
            }}
          >
            <DropdownItem
              key="maitrise_oeuvre"
              description="Chez Mastore, une équipe dédiée développe des solutions sur-mesure qui s’inscrivent au sein d’une offre globale à haute valeur ajoutée."
              startContent={<IconPencilUp />}
              href="/creation"
            >
              Création
            </DropdownItem>
            <DropdownItem
              key="bureau_etudes"
              description="Le bureau d'études Mastore propose des solutions techniques innovantes et durables, adaptées aux besoins spécifiques de chaque projet."
              startContent={<IconPencilSearch />}
              href="/bureau-etudes"
            >
              Bureau d'études
            </DropdownItem>
            <DropdownItem
              key="travaux_specifiques"
              description="Mastore, c’est un réseau dense et étendu de professionnels fidèles et qualifiés dans tous les métiers du bâtiment."
              startContent={<IconTools />}
              href="/travaux"
            >
              Suivi de travaux
            </DropdownItem>
            <DropdownItem
              key="maintenance"
              description="L’expertise Mastore dans le domaine de la maintenance multi-service repose sur 10 ans d’expérience et des méthodes de travail qui nous permettent de répondre efficacement aux besoins de chacun de nos clients."
              startContent={<IconTool />}
              href="/maintenance"
            >
              Maintenance
            </DropdownItem>
    
          </DropdownMenu>
        </Dropdown>
        <NavbarItem isActive>
          <Link href="/actualite" aria-current="page">
            Actualités
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="/contact">Contact</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" isExternal href="https://evictum.fr/login" variant="flat">
            Espace Client
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
