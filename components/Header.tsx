import React, { useState } from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button } from "@nextui-org/react";
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleAboutClick = () => {
    scrollTo('accueil');
    setIsMenuOpen(false);
  };

  const handleSpecialtyClick = () => {
    scrollTo('specialite');
    setIsMenuOpen(false);
  };

  const handleNewsClick = () => {
    scrollTo('actualite');
    setIsMenuOpen(false);
  };

  const handleContactClick = () => {
    scrollTo('contact');
    setIsMenuOpen(false);
  };

  const scrollTo = (elementName: string) => {
    scroller.scrollTo(elementName, {
      duration: 1500,
      delay: 100,
      smooth: true,
      offset: -50, // ajuster l'offset si nécessaire
    });
  };

  const menuItems = [
    { text: "À propos", onClick: handleAboutClick },
    { text: "Spécialité", onClick: handleSpecialtyClick },
    { text: "Actualités", onClick: handleNewsClick },
    { text: "Contact", onClick: handleContactClick }
  ];


  return (
    <Navbar 
      className={raleway.className} 
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen} 
      height="5rem">
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Fermer menu' : 'Ouvrir menu'}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Image src={Logo} alt="Mastore" width={120} />
        </NavbarBrand>
      </NavbarContent>
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
        <NavbarItem className="sm:pr-5">
          <Button as={Link} color="primary" isExternal href="https://evictum.fr/login" variant="flat">
            Espace Client
          </Button>
        </NavbarItem>
      </NavbarContent> 
      <NavbarMenu className="bg-white w-full z-50 flex flex-col justify-center items-center">
  {menuItems.map((menuItem, index) => (
    <NavbarMenuItem className="w-full flex flex-col justify-center content-center text-center" key={`${menuItem.text}-${index}`}>
      <Link
        color="primary"
        className="w-full text-2xl p-3"
        onPress={menuItem.onClick}
        size="lg"
      >
        {menuItem.text}
      </Link>
    </NavbarMenuItem>
  ))}
</NavbarMenu>

    </Navbar>
  );
}
