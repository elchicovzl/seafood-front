"use client"
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/free-mode'

import { FreeMode, Pagination } from "swiper/modules";
import { getStrapiMedia } from '../utils/api-helpers';

export default function Carousel({
    images
}:{
    images: Array<Object>
}) {

    let imgUrls = [];

    images.forEach((img:any, index) => {
        let urlImg = getStrapiMedia(img.attributes.url);
        imgUrls.push(urlImg);
    });

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
                    {
                        imgUrls.map( (url, index) => {
                            return <SwiperSlide key={index}>
                                        <div className="flex flex-col-reverse mx-auto mb-20 gap-5 px-5 group relative shadow-lg text-white  h-[180px] w-[60%] lg:h-[200px] lg:w-[100%] overflow-hidden cursor-pointer">
                                            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${url})` }} />
                                            <div className="absolute inset-0 bg-black opacity-20 group-hover:opacity-50" />
                                            <div className="relative flex flex-col gap-3 pb-3">
                                                {/* <p className="lg:text-[18px] text-center ">Rose Tuna</p> */}
                                            </div>
                                        </div>
                                    </SwiperSlide>
                        })
                    }
                </Swiper>
           </div>
        </>
    )
}