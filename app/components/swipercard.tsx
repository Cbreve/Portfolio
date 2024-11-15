"use client";

import { Navigation, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { service } from '../constants/features-data';
import Card from './card';

export const SwiperCard = () => {
  return (
    <Swiper
    modules={[Navigation, Scrollbar, A11y, Autoplay]}
    spaceBetween={30}
    slidesPerView={3}
    navigation={true}
    autoplay={{ delay: 2000, disableOnInteraction: false }}
    loop={true}
    onSwiper={(swiper) => console.log(swiper)}
    onSlideChange={() => console.log('slide change')}
    className='md:mx-10 mx-5'
    breakpoints={{
        240: {
        slidesPerView: 1,
        spaceBetween: 15,
        },
        640: {
        slidesPerView: 2,
        spaceBetween: 20,
        },
        1024: {
        slidesPerView: 3,
        spaceBetween: 30,
        },
    }}
    >
    {
        service.map((item, id) => {
        return (
            <SwiperSlide key={id}>
                <Card 
                    image={item.image} 
                    title={item.title} 
                    description={item.description} 
                />
            </SwiperSlide>
        )
        })
    }
    </Swiper>
  );
};
