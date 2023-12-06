"use client"
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/free-mode'

import { FreeMode } from "swiper/modules";

export default function MansorySection() {
    return (
        <section className=" mt-10 sm:mt-24 w-full">
            <Swiper
                breakpoints={{
                340: {
                    slidesPerView: 2,
                    spaceBetween: 5,
                },
                700: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                },
                }}
                centeredSlides={true}
                loop={true}
                freeMode={true}
                modules={[FreeMode]}
                className=""
            >
                <SwiperSlide key="1">
                    <div className="flex flex-col-reverse gap-5 mb-5 px-5 group relative shadow-lg text-white  h-[180px] w-[100%] lg:h-[300px] lg:w-[100%] overflow-hidden cursor-pointer">
                        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('/images/ma1.jpg')` }} />
                    </div>
                    <div className="flex flex-col-reverse mb-20 gap-5 px-5 group relative shadow-lg text-white  h-[180px] w-[100%] lg:h-[200px] lg:w-[100%] overflow-hidden cursor-pointer">
                        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('/images/ma2.jpg')` }} />
                    </div>
                </SwiperSlide>

                <SwiperSlide key="2">
                    <div className="flex flex-col-reverse mx-auto gap-5 mb-5 px-5 group relative shadow-lg text-white  h-[380px] w-[100%] lg:h-[520px] lg:w-[100%] overflow-hidden cursor-pointer">
                        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('/images/ma3.jpg')` }} />
                    </div>
                </SwiperSlide>

                <SwiperSlide key="3">
                    <div className="flex flex-col-reverse mx-auto gap-5 mb-5 px-5 group relative shadow-lg text-white  h-[180px] w-[100%] lg:h-[250px] lg:w-[100%] overflow-hidden cursor-pointer">
                        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('/images/ma4.jpg')` }} />
                    </div>
                    <div className="flex flex-col-reverse mx-auto gap-5 mb-5 px-5 group relative shadow-lg text-white  h-[180px] w-[100%] lg:h-[250px] lg:w-[100%] overflow-hidden cursor-pointer">
                        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('/images/ma7.jpg')` }} />
                    </div>
                </SwiperSlide>

                <SwiperSlide key="4">
                    <div className="flex flex-col-reverse gap-5 mb-5 px-5 group relative shadow-lg text-white  h-[380px] w-[100%] lg:h-[520px] lg:w-[100%] overflow-hidden cursor-pointer">
                        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('/images/ma5.jpg')` }} />
                    </div>
                </SwiperSlide>

                <SwiperSlide key="5">
                    <div className="flex flex-col-reverse gap-5 mb-5 px-5 group relative shadow-lg text-white  h-[380px] w-[100%] lg:h-[520px] lg:w-[100%] overflow-hidden cursor-pointer">
                        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('/images/ma6.jpg')` }} />
                    </div>
                </SwiperSlide>

                </Swiper>
        </section>
    )
}