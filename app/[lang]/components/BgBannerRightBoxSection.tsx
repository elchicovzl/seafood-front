import React from 'react'
import Image from 'next/image'

export default function BgBannerRightBoxSection() {
  return (
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
                purus diam.
            </p>
        </div>
    </section>
  )
}
