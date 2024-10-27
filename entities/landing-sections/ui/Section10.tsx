'use client';

import {Heading} from '@/components/ui/Heading';
import React from 'react';
import {ModelSection10} from '../model';
import {Swiper, SwiperSlide} from 'swiper/react';

export const Section10 = () => {
  return (
    <section className="container mx-auto mt-[75px]">
      <Heading>
        Поддержка
        <br /> и сопровождение
      </Heading>
      <div className="mt-[25px]">
        <Swiper autoHeight={false} slidesPerView={'auto'} className='!items-stretch'>
          {ModelSection10.map((item, idx) => (
            <SwiperSlide key={item.title} className="!self-stretch !w-[calc((100%-32px)/3)] mr-[16px] !h-auto max-lg:!w-[380px]">
              <div data-aos="fade-up" data-aos-delay={50 * (idx + 1)} className="border border-black/10 rounded-[20px] py-[25px] px-[35px]  !h-full overflow-hidden relative before:absolute before:left-0 before:w-[3px] before:bg-primary before:h-full before:inset-y-0">
                <h4 className="text-[22px] leading-tight text-black font-medium">{item.title}</h4>
                <p className="text-black/80 text-sm mt-2.5">{item.note}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
