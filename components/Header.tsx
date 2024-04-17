import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu } from "@nextui-org/react";

import Logo from "@/assets/logo_mastore.png"
import Image from "next/image";

export function Header() {
  return (
    <Navbar height="5rem">
      <NavbarBrand
      >
        <Image src={Logo} alt="Mastore" width={120} />
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#" className="hover:text-blue-500">
            Accueil
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#about" className="hover:text-blue-500">
            À propos
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#specialite" className="hover:text-blue-500">
            Spécialités
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/actualite" className="hover:text-blue-500">
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
