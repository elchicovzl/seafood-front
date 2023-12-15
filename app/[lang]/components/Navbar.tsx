'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Nav from "./Nav";
import Image from "next/image";

interface NavLink {
    id: number;
    url: string;
    newTab: boolean;
    text: string;
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
        <div className="max-w-screen-xl flex flex-wrap justify-between mx-auto">
            <Image className="p-10 z-20" src={logoUrl} width="200" height="52" alt="logo" />
            <div className="p-10 z-20 hidden sm:block">
                <nav className="flex flex-row gap-4">
                {
                    links.map( (data, indexx) => {
                        const { text, url} = data;
                        return <Link className="no-underline text-[white] font-light text-lg" href={url}>{text}</Link>
                    })
                }
                </nav>
            </div>
            <div className="sm:hidden">
                <div className="p-8 absolute right-0 z-30">
                    <div 
                        onClick={() => {setIsActive(!isActive)}} 
                        className="w-12 h-12 rounded-full border-white border-2 bg-transparent cursor-pointer flex items-center justify-center z-20"
                    >
                        <div className={`burger ${isActive ? "burgerActive" : ""}`}></div>
                    </div>
                </div>
            </div>
            <AnimatePresence mode="wait">
                {isActive && <Nav links={links} logoUrl={logoUrl}  />}
            </AnimatePresence>
        </div>
      
    );
}