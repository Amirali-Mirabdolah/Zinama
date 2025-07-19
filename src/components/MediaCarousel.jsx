import React from 'react'
import 'swiper/css';
import 'swiper/css/navigation';
import { MdOutlineChevronLeft } from "react-icons/md";
import { Swiper, SwiperSlide } from 'swiper/react';
import MediaCard from './MediaCard';
import { Navigation } from 'swiper/modules';

function MediaCarousel() {
    return (
        <div className='my-2 md:my-4'>
            <div className='text-white flex items-center mb-1'>
                <a className='bg-transparent text-dark dark:text-white hover:bg-main hover:text-white rounded-xl px-2 py-3 flex items-center transition-colors' href="#">
                    برترین‌ها
                    <MdOutlineChevronLeft />
                </a>
            </div>
            <Swiper
                slidesPerView={3}
                spaceBetween={25}
                modules={[Navigation]}
                loop={true}
                breakpoints={{
                    640:{
                        slidesPerView:3,
                        spaceBetween:35
                    },
                    768:{
                        slidesPerView:4,
                        spaceBetween:35
                    },
                    1024:{
                        slidesPerView:5,
                        spaceBetween:20
                    },
                    1280:{
                        slidesPerView:7,
                        spaceBetween:25
                    },
                }}
            >
                {Array.from({ length: 9 }).map((_, i) => (
                    <SwiperSlide key={i}>
                        <MediaCard img={i + 1} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default MediaCarousel