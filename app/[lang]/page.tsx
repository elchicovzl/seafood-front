import LangRedirect from './components/LangRedirect';
import {sectionRenderer} from './utils/section-renderer';
import {getPageBySlug} from "./utils/get-page-by-slug";
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import HeroSection from './components/HeroSection';
import WelcomeSection from './components/WelcomeSection';
import MansorySection from './components/MansorySection';
import BoxIconTitleP from './components/BoxIconTitleP';
import FishTitle from './components/FishTitle';
import Button from './components/Button';

export default async function RootRoute({params}: { params: { lang: string } }) {
    try {
     
      //const page = await getPageBySlug('home', params.lang)
      
      /* if (page.error && page.error.status == 401)
        throw new Error(
          'Missing or invalid credentials. Have you created an access token using the Strapi admin panel? http://localhost:1337/admin/'
        )

      if (page.data.length == 0 && params.lang !== 'en') return <LangRedirect />
      if (page.data.length === 0) return null
      const contentSections = page.data[0].attributes.contentSections */
      /* return contentSections.map((section: any, index: number) =>
        sectionRenderer(section, index)
      ) */
      return <>
        <HeroSection />
        <WelcomeSection />
        <MansorySection />
        
        <section className="relative bg-cover bg-no-repeat bg-[100%] bg-my_bg_section py-5 sm:py-20">
          <div className="container mx-auto w-3/5">
            <div className="flex flex-col sm:gap-36 sm:flex-row">
              <BoxIconTitleP />
              <BoxIconTitleP />
            </div>
            <div className="flex flex-col sm:gap-36 sm:flex-row mt-10">
              <BoxIconTitleP />
              <BoxIconTitleP />
            </div>
          </div>
        </section>

        <section className="bg-[100%] flex flex-col sm:flex-row py-10">
          <Image className="bg-contain bg-center bg-no-repeat h-[380px] sm:h-[520px] w-[100%]" src="/images/bgsection.jpg" width={1200} height={528} alt="sectionbg" />
          <div className='bg-[#2D2D2D] bg-my_bg2_section h-[380px] sm:h-[520px] w-[100%] sm:w-[50%] py-20 px-14'>
              <div className="flex items-center mb-5 justify-center sm:justify-normal">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="9" viewBox="0 0 20 9" fill="none">
                  <g clip-path="url(#clip0_2_163)">
                  <g opacity="0.92">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M1.30298 0.700684V1.22034L6.16568 3.87354L1.30298 6.47083V6.98853L6.64518 4.13464L12.0783 7.09814L18.1736 3.86194L12.0783 0.714844L6.64874 3.61597L1.30298 0.700684ZM12.0819 1.2301L17.1905 3.86743L12.0819 6.57935L7.12824 3.8772L12.0819 1.2301Z" fill="#4C4C4C" stroke="white" stroke-width="0.468628"/>
                  </g>
                  </g>
                  <defs>
                  <clipPath id="clip0_2_163">
                  <rect width="19" height="8" fill="white" transform="translate(0.189941 0.330078)"/>
                  </clipPath>
                  </defs>
                </svg>
                <span className="text-white mx-5 text-xs">FISH SPECIALISTS</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="9" viewBox="0 0 20 9" fill="none">
                  <g clip-path="url(#clip0_2_167)">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M18.2844 0.700684V1.22034L13.4217 3.87354L18.2844 6.47083V6.98853L12.9422 4.13464L7.50907 7.09814L1.41376 3.86194L7.50907 0.714844L12.9386 3.61597L18.2844 0.700684ZM7.50551 1.2301L2.39682 3.86743L7.50551 6.57935L12.4591 3.8772L7.50551 1.2301Z" stroke="white" stroke-width="0.468628"/>
                  </g>
                  <defs>
                  <clipPath id="clip0_2_167">
                  <rect width="19" height="8" fill="white" transform="translate(0.0299072 0.330078)"/>
                  </clipPath>
                  </defs>
                </svg>
              </div>
              <h2 className="text-white text-3xl text-left sm:text-left mx-auto sm:mx-0 w-2/3">The origin of our Restaurant</h2>
              <p className="text-white text-[15px] mt-8">Donec id blandit ante. Duis maximus, est quis ultricies euismod,
                nunc ante vulputate ex, nec volutpat risus risus in ipsum. Sed at
                purus diam.</p>
          </div>
        </section>

        <section className="relative bg-cover bg-no-repeat bg-[100%] bg-my_bg_section my-20">
          <div className="container mx-auto w-3/5">
            <div className="flex flex-col sm:flex-row">
              <div className="text-center sm:text-left w-full sm:w-[40%]">
                <FishTitle />
                <h2 className="text-black text-3xl text-center sm:text-left mx-auto">Daily fresh organic and natural dishes</h2>
                <div className="flex flex-col sm:flex-row container w-11/12 mb-5">
                  <p className="text-[#4C4C4C] mt-5 text-[15px] text-center sm:text-left">
                      Quisque eu euismod arcu. Morbi et dapibus diam, sed
                      interdum velit. Proin tempor nunc vel nisl
                      condimentum, nec tempor risus lacinia.
                  </p>
                </div>
                <Button />
              </div>

              <div className="relative">
                <Image className="my-10 sm:my-0 sm:w-[750px] sm:h-[320px]" src="/images/sushi3.jpg" width={750} height={320} alt="sushi3"/>
                <div className="flex flex-col sm:flex-row gap-5 justify-between items-center bg-[#2D2D2D] p-10 w-[85%] sm:absolute -bottom-14 left-[7%] mx-auto sm:mx-0">
                  <div className="flex flex-col text-white text-center">
                    <span className="text-4xl">4+</span>
                    <span className="text-sm font-light">COOKS</span>
                  </div>
                  <div className="flex flex-col text-white text-center">
                    <span className="text-4xl">*13</span>
                    <span className="text-sm font-light">MAIN COURSE</span>
                  </div>
                  <div className="flex flex-col text-white text-center">
                    <span className="text-4xl">15 k</span>
                    <span className="text-sm font-light">FISH DISHES</span>
                  </div>
                  <div className="flex flex-col text-white text-center">
                    <span className="text-4xl">[26 ]</span>
                    <span className="text-sm font-light">SEAFOOD</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="relative overflow-hidden bg-cover bg-no-repeat bg-[100%] h-full sm:h-[260px] bg-my_bg_banner">
            <div className="container mx-auto w-3/5 flex justify-center h-full">
              <div className="flex flex-col sm:flex-row justify-between gap-5 sm:gap-0 py-10 sm:py-0">
                <div className="flex flex-col sm:flex-row text-white items-center justify-between gap-5">
                  <span className="text-6xl">13</span>
                  <div className="flex flex-col text-center">
                    <span className="text-[18px]">TYPES OF FISH</span>
                    <span className="text-[15px]">Dolor Sit Amet</span>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row text-white items-center justify-between gap-5">
                  <span className="text-6xl">13</span>
                  <div className="flex flex-col text-center">
                    <span className="text-[18px]">TYPES OF FISH</span>
                    <span className="text-[15px]">Dolor Sit Amet</span>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row text-white items-center justify-between gap-5">
                  <span className="text-6xl">13</span>
                  <div className="flex flex-col text-center">
                    <span className="text-[18px]">TYPES OF FISH</span>
                    <span className="text-[15px]">Dolor Sit Amet</span>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row text-white items-center justify-between gap-5">
                  <span className="text-6xl">13</span>
                  <div className="flex flex-col text-center">
                    <span className="text-[18px]">TYPES OF FISH</span>
                    <span className="text-[15px]">Dolor Sit Amet</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative bg-cover bg-no-repeat bg-[100%] bg-my_bg_section my-5">
          <div className="container mx-auto w-3/5">
              <div className="flex items-center mb-5 justify-center">
                <svg className="text-[#4C4C4C]" xmlns="http://www.w3.org/2000/svg" width="19" height="9" viewBox="0 0 19 9" fill="none">
                    <g clip-path="url(#clip0_2_27)">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M1.11304 0.420654V0.940308L5.97574 3.59351L1.11304 6.1908V6.7085L6.45524 3.85461L11.8883 6.81812L17.9837 3.58191L11.8883 0.434814L6.4588 3.33594L1.11304 0.420654ZM11.8919 0.950073L17.0006 3.5874L11.8919 6.29932L6.9383 3.59717L11.8919 0.950073Z" fill="#4C4C4C" stroke="#4C4C4C" stroke-width="0.468628"/>
                    </g>
                    <defs>
                      <clipPath id="clip0_2_27">
                        <rect width="19" height="8" fill="white" transform="translate(0 0.0500488)"/>
                      </clipPath>
                    </defs>
                </svg>
                <span className="text-[#4C4C4C] mx-5 text-xs">FISH SPECIALISTS</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="9" viewBox="0 0 20 9" fill="none">
                    <g clip-path="url(#clip0_2_31)">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M18.4745 0.420654V0.940308L13.6118 3.59351L18.4745 6.1908V6.7085L13.1323 3.85461L7.69916 6.81812L1.60385 3.58191L7.69916 0.434814L13.1287 3.33594L18.4745 0.420654ZM7.6956 0.950073L2.58691 3.5874L7.6956 6.29932L12.6492 3.59717L7.6956 0.950073Z" fill="#4C4C4C" stroke="#4C4C4C" stroke-width="0.468628"/>
                    </g>
                    <defs>
                      <clipPath id="clip0_2_31">
                        <rect width="19" height="8" fill="white" transform="translate(0.220001 0.0500488)"/>
                      </clipPath>
                    </defs>
                </svg>
              </div>
              <h2 className="text-4xl text-center mb-10">Our Products</h2>
              <div className="flex flex-col sm:flex-row gap-10 my-10">
                <div className="flex flex-col sm:flex-row sm:justify-between text-center gap-3">
                  <Image className="h-[150px] w-[200px] bg-cover mx-auto sm:mx-0" src="/images/ma1.jpg" width="200" height="150" alt="maa1" />
                  <div className="px-5">
                    <h3 className="text-2xl">Grilled Salmon</h3>
                    <p className="text-sm text-[#4C4C4C]">Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Ut elit tellus, luctus nec
                    </p>
                  </div>
                  <div>
                    <span>26$</span>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between text-center gap-3">
                  <Image className="h-[150px] w-[200px] bg-cover mx-auto sm:mx-0" src="/images/ma1.jpg" width="200" height="150" alt="maa1" />
                  <div className="px-5">
                    <h3 className="text-2xl">Grilled Salmon</h3>
                    <p className="text-sm text-[#4C4C4C]">Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Ut elit tellus, luctus nec
                    </p>
                  </div>
                  <div>
                    <span>26$</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-10 my-10">
                <div className="flex flex-col sm:flex-row sm:justify-between text-center gap-3">
                  <Image className="h-[150px] w-[200px] bg-cover mx-auto sm:mx-0" src="/images/ma1.jpg" width="200" height="150" alt="maa1" />
                  <div className="px-5">
                    <h3 className="text-2xl">Grilled Salmon</h3>
                    <p className="text-sm text-[#4C4C4C]">Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Ut elit tellus, luctus nec
                    </p>
                  </div>
                  <div>
                    <span>26$</span>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between text-center gap-3">
                  <Image className="h-[150px] w-[200px] bg-cover mx-auto sm:mx-0" src="/images/ma1.jpg" width="200" height="150" alt="maa1" />
                  <div className="px-5">
                    <h3 className="text-2xl">Grilled Salmon</h3>
                    <p className="text-sm text-[#4C4C4C]">Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Ut elit tellus, luctus nec
                    </p>
                  </div>
                  <div>
                    <span>26$</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-10 my-10">
                <div className="flex flex-col sm:flex-row sm:justify-between text-center gap-3">
                  <Image className="h-[150px] w-[200px] bg-cover mx-auto sm:mx-0" src="/images/ma1.jpg" width="200" height="150" alt="maa1" />
                  <div className="px-5">
                    <h3 className="text-2xl">Grilled Salmon</h3>
                    <p className="text-sm text-[#4C4C4C]">Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Ut elit tellus, luctus nec
                    </p>
                  </div>
                  <div>
                    <span>26$</span>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between text-center gap-3">
                  <Image className="h-[150px] w-[200px] bg-cover mx-auto sm:mx-0" src="/images/ma1.jpg" width="200" height="150" alt="maa1" />
                  <div className="px-5">
                    <h3 className="text-2xl">Grilled Salmon</h3>
                    <p className="text-sm text-[#4C4C4C]">Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Ut elit tellus, luctus nec
                    </p>
                  </div>
                  <div>
                    <span>26$</span>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <Button />
              </div>
          </div>
        </section>
      </>
    } catch (error: any) {
      window.alert('Missing or invalid credentials')
    }
}
