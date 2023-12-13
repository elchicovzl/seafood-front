import Image from 'next/image'
import React from 'react'
import Button from './Button'

export default function OurProductsSection() {
  return (
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

         
            <div className="text-center">
                <Button />
            </div>
        </div>
    </section>
  )
}
