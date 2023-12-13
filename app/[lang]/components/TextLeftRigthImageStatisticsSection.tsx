import React from 'react'
import FishTitle from './FishTitle'
import Button from './Button'
import Image from 'next/image'

export default function TextLeftRigthImageStatisticsSection() {
  return (
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
  )
}
