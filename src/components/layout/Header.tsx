"use client";

import { navItems } from "@/data/data";
import { cn } from "@/libs/utils/cn";
import { RiCloseFill, RiMenuFill } from "@remixicon/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export const Header = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const handleClick = () => setIsOpen(!isOpen);
    return (
        <header className="absolute top-0 left-0 bg-primaryClr w-full py-5 text-white z-40">
            <div className="container flex justify-between items-center">
                {/* Logo */}
                <Link href={"/"}>
                    <Image
                        src={"/images/logo.png"}
                        alt="logo"
                        width={95}
                        height={50}
                    />
                </Link>

                {/* Mobile Menu */}
                <nav
                    className={cn(
                        "fixed top-0 left-0 bg-white h-screen w-full text-black flex flex-col items-center justify-center -translate-y-full transition-transform",
                        "lg:hidden",
                        isOpen && "translate-y-0"
                    )}
                >
                    {/* List */}
                    <ul className="space-y-7 text-center">
                        {navItems.map((item) => (
                            <li key={item.id}>
                                <Link
                                    href={item.href}
                                    className={cn(
                                        "text-xl font-semibold",
                                        "link"
                                    )}
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* Btn */}
                    <Link
                        href={"/contact"}
                        className={cn("mt-10 text-lg", "primary-btn")}
                    >
                        Contact
                    </Link>
                </nav>

                {/* Desktop Menu */}
                <nav className={cn("hidden", "lg:flex lg:items-center gap-10")}>
                    {/* List */}
                    <ul className="flex gap-10">
                        {navItems.map((item) => (
                            <li key={item.id}>
                                <Link
                                    href={item.href}
                                    className={cn(
                                        "link font-semibold",
                                        "after:!bg-secondaryClr",
                                        "hover:text-secondaryClr"
                                    )}
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* Btn */}
                    <Link href={"/contact"} className="primary-btn">
                        Contact
                    </Link>
                </nav>
                {/* Menu btn */}
                <button
                    className={cn(
                        "w-12 h-12 p-1.5 bg-secondaryClr text-primaryClr flex items-center justify-center rounded-full relative top-0 right-0",
                        "lg:hidden",
                        "active:bg-secondaryClr/90"
                    )}
                    onClick={handleClick}
                >
                    {isOpen ? (
                        <RiCloseFill size={30} />
                    ) : (
                        <RiMenuFill size={30} />
                    )}
                </button>
            </div>
        </header>
    );
};

export default Header;
