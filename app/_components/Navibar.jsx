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
import Link from "next/link.js";
import { Button } from "@nextui-org/button";
import DuctDaddy03 from "@/app/assets/ductdaddy-website.png"
import Image from "next/image.js";

export default function Navibar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const menuItems = [
		"About",
		"Services",
		"FAQ",
		"Contact",
	];

	return (
		<Navbar className="shadow-md bg-[#F5F5F7]" onMenuOpenChange={setIsMenuOpen}>
			<NavbarContent>
				<NavbarMenuToggle
					aria-label={isMenuOpen ? "Close menu" : "Open menu"}
					className="order-1 sm:order-none sm:hidden"
				/>
				<NavbarBrand>
					<Link href={'#about'}>
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

			<NavbarContent className="hidden sm:flex gap-4 text-[#333333]" justify="center">
				<NavbarItem>
					<Link className="hover:text-[#3A73BA]" href="#services" aria-current="page">
						Services
					</Link>
				</NavbarItem>
				<NavbarItem>
					<Link className="hover:text-[#3A73BA]" color="foreground" href="#faq">
						FAQ
					</Link>
				</NavbarItem>
				<NavbarItem>
					<Link className="hover:text-[#3A73BA]" color="foreground" href="#contact">
						Contact
					</Link>
				</NavbarItem>
			</NavbarContent>
			<NavbarContent className="hidden sm:flex" justify="end">
				<NavbarItem>
					<Button className="bg-[#3A73BA]" as={Link} color="primary" href="#footer">
						Call Now
					</Button>
				</NavbarItem>
			</NavbarContent>
			<NavbarMenu className="bg-[#F5F5F7] text-[#333333]">
				<NavbarMenuItem>
					<Link className="w-full" href="#services" size="lg">
						Services
					</Link>
				</NavbarMenuItem>
				<NavbarMenuItem>
					<Link className="w-full" href="#faq" size="lg">
						FAQ
					</Link>
				</NavbarMenuItem>
				<NavbarMenuItem>
					<Link className="w-full" href="#contact" size="lg">
						Contact
					</Link>
				</NavbarMenuItem>
				<NavbarItem>
					<Button className="sm:hidden mt-4 text-[#F5F5F7] bg-[#3A73BA]" color="primary" as={Link} href="#footer" fullWidth>
						Call Now
					</Button>
				</NavbarItem>
			</NavbarMenu>
		</Navbar>
	)
}
