import React from 'react'
import { FaInstagram, FaFacebook  } from "react-icons/fa"
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-cover bg-no-repeat w-[100%] h-full sm:h-[400px] bg-my_bg_image mt-20 relative">
        <div className="sm:absolute top-0 right-0 bottom-0 left-0 h-full w-full sm:overflow-hidden bg-fixed bg-[hsla(0,0%,0%,0.50)] backdrop-blur-sm">
            <div className="container mx-auto w-3/5 sm:absolute sm:top-[20%] sm:left-[20%]">
                <div className="flex flex-col sm:flex-row justify-between gap-5 sm:gap-10 items-center">
                    <div className="flex flex-col text-white text-center py-10">
                        <h3 className="text-lg text-white mb-4">MAIL US</h3>
                        <p className="text-sm">info@seafood.com</p>
                        <p className="text-sm mt-1">reservation@seafood.com</p>
                    </div>
                    <div className="flex flex-col text-white text-center items-center">
                        <Image className="sm:pt-10 z-20" src="/images/logo.png" width="200" height="52" alt="logofooter" />
                        <p className="w-2/3 py-5 text-sm">
                            Lorem ipsum dolor sit amet, consectetur ad
                            ipiscing Integer pulvinar
                        </p>
                        <div className="flex flex-row gap-3">
                            <FaInstagram />
                            <FaFacebook />
                        </div>
                    </div>
                    <div className="flex flex-col text-white text-center py-10  items-center">
                        <h3 className="text-lg text-white mb-4">RESTAURANT</h3>
                        <p className="w-[70%] text-sm">
                            Main Street San Francisco
                            +1 274 457 375
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}
