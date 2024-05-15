import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button} from "@nextui-org/react";
import { Raleway } from "next/font/google";
import Logo from "@/assets/logo_mastore.png";
import Image from "next/image";

export default function HeaderActus() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
       <NavbarBrand>
       <Link href="/">
          <Image src={Logo} alt="Mastore" width={120} />
          </Link>
        </NavbarBrand>
      </NavbarContent>

     
      <NavbarContent justify="end">
        
        <NavbarItem className="sm:pr-5">
          <Button as={Link} color="primary" isExternal href="https://evictum.fr/login" variant="flat">
            Espace Client
          </Button>
        </NavbarItem>
      </NavbarContent>
      
    </Navbar>
  );
}
