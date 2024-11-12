"use client";

import { useState } from "react";

import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenuToggle,
    NavbarMenu,
    NavbarMenuItem
} from "@nextui-org/navbar";
import { AcmeLogo } from "./AcmeLogo.jsx";
import Link from "next/link.js";
import { Button } from "@nextui-org/button";

export default function Navibar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuItems = [
        "About",
        "Services",
        "FAQ",
        "Contact",
    ];

    return (
        <Navbar onMenuOpenChange={setIsMenuOpen}>
            <NavbarContent>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden"
                />
                <NavbarBrand>
                    <AcmeLogo />
                    <p className="font-bold text-inherit">ACME</p>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-4 text-[#333333]" justify="center">
                <NavbarItem>
                    <Link className="hover:text-[#3A73BA]" color="foreground" href="#">
                        About
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link className="hover:text-[#3A73BA]" href="#" aria-current="page">
                        Services
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link className="hover:text-[#3A73BA]" color="foreground" href="#">
                        FAQ
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link className="hover:text-[#3A73BA]" color="foreground" href="#">
                        Contact
                    </Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem>
                    <Button as={Link} color="primary" href="#">
                        Call Now
                    </Button>
                </NavbarItem>
            </NavbarContent>
            <NavbarMenu>
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                        <Link
                            // color={
                            //     index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
                            // }
                            className="w-full"
                            href="#"
                            size="lg"
                        >
                            {item}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    )
}
