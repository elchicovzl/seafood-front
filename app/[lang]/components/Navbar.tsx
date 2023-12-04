'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Nav from "./Nav";

interface NavLink {
    id: number;
    url: string;
    newTab: boolean;
    text: string;
}

interface MobileNavLink extends NavLink {
    closeMenu: () => void;
}

function NavLink({ url, text }: NavLink) {
    const path = usePathname();
  
    return (
      <li className="flex">
        <Link
          href={url}
          className={`flex items-center mx-4 -mb-1 border-b-2 dark:border-transparent ${
            path === url && "dark:text-violet-400 dark:border-violet-400"
          }}`}
        >
          {text}
        </Link>
      </li>
    );
}

function MobileNavLink({ url, text, closeMenu }: MobileNavLink ) {
    const path = usePathname();
    const handleClick = () => {
      closeMenu();
    }
    return (
      <a className="flex">
        <Link
          href={url}
          onClick={handleClick}
          className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-100 hover:bg-gray-900 ${
            path === url && "dark:text-violet-400 dark:border-violet-400"
          }}`}
        >
          {text}
        </Link>
      </a>
    );
}

export default function Navbar({
    links,
    logoUrl,
    logoText,
  }: {
    links: Array<NavLink>;
    logoUrl: string | null;
    logoText: string | null;
  }) {
    const [isActive, setIsActive] = useState(false)
    const pathname = usePathname()

    useEffect( () => {
        if(isActive) setIsActive(false)
    }, [pathname])


    return (
        <>
            <div className="">
                <div className="p-8 fixed right-0 z-20">
                    <div 
                        onClick={() => {setIsActive(!isActive)}} 
                        className="w-12 h-12 rounded-full border-white border-2 bg-transparent cursor-pointer flex items-center justify-center z-20"
                    >
                        <div className={`burger ${isActive ? "burgerActive" : ""}`}></div>
                    </div>
                </div>
            </div>
            <AnimatePresence mode="wait">
                {isActive && <Nav />}
            </AnimatePresence>
        </>
      
    );
}