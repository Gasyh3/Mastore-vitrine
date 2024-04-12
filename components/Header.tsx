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
        <NavbarItem>
          <Link color="foreground" href="#">
            Accueil
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#about">
            À propos
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#specialite">
            Spécialités
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/actualite">
            Actualités
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#contact">Contact</Link>
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
