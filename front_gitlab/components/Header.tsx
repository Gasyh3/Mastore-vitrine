import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
import { Raleway } from "next/font/google";
import Logo from "@/assets/logo_mastore.png";
import Image from "next/image";
import { scroller } from 'react-scroll';

const raleway = Raleway({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export function Header() {
  const scrollTo = (elementName: string) => {
    scroller.scrollTo(elementName, {
      duration: 1500,
      delay: 100,
      smooth: true,
      offset: -50, // ajuster l'offset si nécessaire
    });
  };

  return (
    <Navbar className={raleway.className} height="5rem">
      <NavbarBrand>
        <Image src={Logo} alt="Mastore" width={120} />
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" onClick={() => scrollTo('accueil')} className="hover:text-blue-500">
            Accueil
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" onClick={() => scrollTo('about')} className="hover:text-blue-500">
            À propos
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" onClick={() => scrollTo('specialite')} className="hover:text-blue-500">
            Spécialités
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" onClick={() => scrollTo('actualite')} className="hover:text-blue-500">
            Actualités
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link onClick={() => scrollTo('contact')} className="hover:text-blue-500">Contact</Link>
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
