import React from 'react'
import genres from '../data/data'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Link } from 'react-router-dom';

function GenreList() {
    return (
        <>
            <div className='my-2 md:my-4'>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={5}
                    breakpoints={{
                        640: {
                            slidesPerView: 3,
                            spaceBetween: 35
                        },
                        768: {
                            slidesPerView: 6,
                            spaceBetween: 25
                        },
                        1024: {
                            slidesPerView: 8,
                            spaceBetween: 15
                        }
                    }}
                >
                    {genres.map(genre => (
                        <SwiperSlide className='mx-1'>
                            <a href="#" key={genre.id} >
                                <span className='filter-button'>{genre.title}</span>
                            </a>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    )
}

export default GenreList