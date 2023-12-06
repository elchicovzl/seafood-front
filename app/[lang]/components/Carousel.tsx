"use client"
import Image from 'next/image';
import Navbar from "./Navbar";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/free-mode'

import { FreeMode, Pagination } from "swiper/modules";

export default function Carousel() {
    return (
        <>
           <div className="flex items-center justify-center flex-col container mx-auto sm:mx-0 sm:mt-10 sm:absolute sm:-bottom-8">
                <Swiper
                    breakpoints={{
                    340: {
                        slidesPerView: 1,
                        spaceBetween: 5,
                    },
                    700: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                    },
                    }}
                    freeMode={false}
                    pagination={{
                    clickable: true,
                    }}
                    modules={[FreeMode, Pagination]}
                    className="max-w-[90%] lg:max-w-[60%] text-left"
                >
                    <SwiperSlide key="1">
                        <div className="flex flex-col-reverse mx-auto mb-20 gap-5 px-5 group relative shadow-lg text-white  h-[180px] w-[60%] lg:h-[200px] lg:w-[100%] overflow-hidden cursor-pointer">
                            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('/images/fish.jpg')` }} />
                            <div className="absolute inset-0 bg-black opacity-20 group-hover:opacity-50" />
                            <div className="relative flex flex-col gap-3 pb-3">
                                <p className="lg:text-[18px] text-center ">Rose Tuna</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide key="2">
                        <div className="flex flex-col-reverse mx-auto mb-20 gap-5 px-5 group relative shadow-lg text-white  h-[180px] w-[60%] lg:h-[200px] lg:w-[100%] overflow-hidden cursor-pointer">
                            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('/images/fish.jpg')` }} />
                            <div className="absolute inset-0 bg-black opacity-20 group-hover:opacity-50" />
                            <div className="relative flex flex-col gap-3 pb-3">
                                <p className="lg:text-[18px] text-center ">Rose Tuna</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide key="3">
                        <div className="flex flex-col-reverse mx-auto mb-20 gap-5 px-5 group relative shadow-lg text-white  h-[180px] w-[60%] lg:h-[200px] lg:w-[100%] overflow-hidden cursor-pointer">
                            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('/images/fish.jpg')` }} />
                            <div className="absolute inset-0 bg-black opacity-20 group-hover:opacity-50" />
                            <div className="relative flex flex-col gap-3 pb-3">
                                <p className="lg:text-[18px] text-center ">Rose Tuna</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide key="4">
                        <div className="flex flex-col-reverse mx-auto mb-20 gap-5 px-5 group relative shadow-lg text-white  h-[180px] w-[60%] lg:h-[200px] lg:w-[100%] overflow-hidden cursor-pointer">
                            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('/images/fish.jpg')` }} />
                            <div className="absolute inset-0 bg-black opacity-20 group-hover:opacity-50" />
                            <div className="relative flex flex-col gap-3 pb-3">
                                <p className="lg:text-[18px] text-center ">Rose Tuna</p>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
           </div>
        </>
    )
}