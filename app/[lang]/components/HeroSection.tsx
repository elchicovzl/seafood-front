import Image from 'next/image';
import Navbar from "./Navbar";

export default function HeroSection() {
    return (
        <>
            <section className="mb-20 overflow-hidden">
                <div className="relative overflow-hidden bg-cover bg-no-repeat bg-[50%] h-[650px] sm:h-[750px] bg-my_bg_image">
                    <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed bg-[hsla(0,0%,0%,0.60)]">
                        <Navbar
                        links={[]}
                        logoUrl="www.google.com"
                        logoText="mylogo"
                        />
                        <div className="flex mt-10 items-center justify-center container mx-auto">
                            <div className="px-6 text-center text-white md:px-12 mt-20 sm:mt-0 sm:pb-5">
                                <h1 className="mb-8 text-3xl font-light tracking-tight md:text-6xl xl:text-7xl">
                                    The Best Sushi Bar <br /><span>in your <span className="text-[#DB7137]">City</span></span>
                                </h1>
                                <p className="text-white tracking-tight mb-9 sm:w-1/2 mx-auto">Way too much fish. But if it weren't for the fish, I'd have no identifiable personality whatsoever.</p>
                                <a href="#_" className="mt-5 px-5 py-2.5 overflow-hidden group bg-[#DB7137] relative z-10  text-white">
                                    <span className="relative cursor-pointer ">OUR OFFER</span>
                                </a>
                                <Image className="mt-10  mx-auto sm:absolute z-20" src="/images/roll.png" width="170" height="227" alt="roll" />
                            </div>
                        </div>
                        <div className="absolute bottom-0 w-full">
                            <svg className="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" fill-opacity="1" d="M0,64L120,101.3C240,139,480,213,720,234.7C960,256,1200,224,1320,208L1440,192L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg>
                        </div>
                    </div>
                </div>
            </section>
      </>
    )
}