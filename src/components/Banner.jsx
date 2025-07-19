import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

import { Navigation, Pagination, EffectFade } from 'swiper/modules';

function Banner() {
    return (
        <>
            <Swiper
                effect='fade'
                fadeEffect={{ crossFade: true }}
                navigation={true}
                loop={true}
                modules={[Navigation, Pagination, EffectFade]}>
                {Array.from({ length: 3 }).map((_, i) => (
                    <SwiperSlide key={i}>
                        <div className='aspect-video md:h-[calc(100vh-52px)]
                         bg-cover bg-center w-full' style={{ backgroundImage: `url('/images/slider-${i + 1}.jpg')` }}>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    )
}

export default Banner