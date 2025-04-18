"use client";

import { useState } from "react";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import Link from "next/link.js";
import { Button } from "@nextui-org/button";
import DuctDaddy03 from "@/app/assets/ductdaddy-website.png";
import Image from "next/image.js";
import { FaPhone } from "react-icons/fa6";

export default function Navibar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Navbar
      className={isMenuOpen ? "bg-[#F5F5F7]" : `shadow-md bg-[#F5F5F7]`}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="order-1 sm:order-none sm:hidden"
        />
        <NavbarBrand>
          <Link href={"/"}>
            <Image
              src={DuctDaddy03}
              alt="Duct Daddy Duct Cleaning logo"
              width={2827}
              height={1264}
              className="h-auto w-28"
            />
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex gap-4 text-[#333333]"
        justify="center"
      >
        <NavbarItem>
          <Link
            className="hover:text-[#3A73BA]"
            href="#services"
            aria-current="page"
          >
            Services
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className="hover:text-[#3A73BA]"
            href="#work"
            aria-current="page"
          >
            Work
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className="hover:text-[#3A73BA]"
            href="#specials"
            aria-current="page"
          >
            Specials
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="hover:text-[#3A73BA]" href="#faq">
            FAQ
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex" justify="end">
        <NavbarItem>
          <Button
            className="text-[#F5F5F7] bg-[#FF3B3F] font-bold"
            radius="lg"
            startContent={<FaPhone />}
            as={Link}
            href="tel:+18167082608"
          >
            Call Now
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu className="bg-[#F5F5F7] text-[#333333]">
        <NavbarMenuItem>
          <Link className="hover:text-[#3A73BA]" href="#services">
            Services
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            className="hover:text-[#3A73BA]"
            href="#work"
            aria-current="page"
          >
            Work
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            className="hover:text-[#3A73BA]"
            href="#specials"
            aria-current="page"
          >
            Specials
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link className="hover:text-[#3A73BA]" href="#faq">
            FAQ
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
