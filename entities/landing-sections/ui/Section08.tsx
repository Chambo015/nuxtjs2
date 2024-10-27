'use client';

import {Heading} from '@/components/ui/Heading';
import {Swiper, SwiperSlide} from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import {ModelSection08} from '../model';

export const Section08 = () => {
  return (
    <section id="advantages" className="container mx-auto mt-[85px]">
      <Heading className="max-w-[370px]">Преимущества нашего сервиса</Heading>

      <div className="mt-[25px]">
        <Swiper
          spaceBetween={50}
          slidesPerView={1.2}
          breakpoints={{
            640: {
              slidesPerView: 1.5,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 1.8,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 16,
            },
          }}>
          {ModelSection08.map((item, idx) => (
            <SwiperSlide key={item.note} className='!h-auto !self-stretch'>
              <div data-aos="fade-up" data-aos-delay={50 * (idx + 1)} className="border border-black/10 rounded-[20px] p-2.5 h-full">
                <div className="bg-primary/10 rounded-[20px] h-[130px] flex items-center justify-center text-[45px]">
                  {item.icon}
                </div>
                <div className="py-[15px] px-[25px]">
                  <h4 className="text-[22px] leading-tight text-black font-medium max-w-[240px]">{item.title}</h4>
                  <p className="text-black/80 text-sm mt-2.5">{item.note}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
