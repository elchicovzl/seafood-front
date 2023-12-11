import React, { useState } from 'react'
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import LinkComponent from './Link';
import { menuSlide } from "@/[lang]/utils/anim";
import Curve from './Curve';

const navItems = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Products",
      href: "/products",
    },
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Contact",
      href: "/contact",
    },
]

export default function Nav() {

    const pathname = usePathname();
    const [selectedIndicator, setSelectedIndicator] = useState(pathname);

    return (
        <motion.div variants={menuSlide} initial="initial" animate="enter" exit="exit" className="h-screen bg-[#DB7137] fixed text-[white] right-0 top-0 box-border  p-[50px]  flex flex-col z-20">
           <div className="box-border h-full flex flex-col justify-between p-[100px];">
                <div onMouseLeave={() => {setSelectedIndicator(pathname)}} className="flex flex-col text-[56px] gap-3 mt-20;">
                        <div className="text-[rgb(153,153,153)] uppercase text-[11px] mb-10 border-b-white border-b border-solid">
                            <p className="mt-10 text-white">Navigation</p>
                        </div>
                        {
                          navItems.map( (data, index) => {
                            return <LinkComponent key={index} data={{...data, index}} isActive={selectedIndicator == data.href} setSelectedIndicator={setSelectedIndicator}></LinkComponent>
                          })
                        }
                </div>
            </div>
            <Curve />
        </motion.div>
      )

}