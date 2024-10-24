'use client';

import {Heading} from '@/components/ui/Heading';
import Image from 'next/image';
import {Swiper, SwiperSlide} from 'swiper/react';
import {ModelSection11} from '../model';

export const Section11 = () => {
  return (
    <section className="container mx-auto mt-[75px]">
      <div className="flex gap-[100px] items-center">
        <div>
          <Heading>Встроенная удобная CRM система</Heading>
          <p className="text-black/80 mt-[15px]">
            Вы можете внедрить процесс работы с идентифицированными лидами даже если у вас нет CRM или вы пока не хотите
            настраивать интеграцию.
          </p>
          <ul className='[&>li]:before:content-[url("/icons/check.svg")] [&>li]:before:absolute [&>li]:before:text-[20px] [&>li]:before:top-1/2 [&>li]:before:-translate-y-1/2 [&>li]:pl-[30px] [&>li]:relative [&>li]:before:left-0 [&>li]:before:size-5 mt-[15px] text-black [&>li]:text-sm [&>li]:leading-[20px] space-y-[10px]'>
            <li>Простой интерфейс</li>
            <li>Настройка стадий сделок под ваши процессы</li>
          </ul>
        </div>
        <div className="grow px-[37px] pt-[30px] bg-[#F5F7F9] rounded-[20px] w-[644px] shrink-0">
          <Image
            src="/image/sec11.png"
            width={570}
            height={227}
            alt="crm"
            quality={100}
            className="object-contain rounded-[10px]"
          />
        </div>
      </div>
      <div className="mt-11">
        <p className="text-[22px] font-medium">Интеграция с другими инструментами</p>
        <div className="mt-[25px]">
          <Swiper autoHeight={false} slidesPerView={'auto'} className="!items-stretch">
            {ModelSection11.map((item) => (
              <SwiperSlide key={item.title} className="!self-stretch !w-[calc((100%/6)-16px)] mr-[16px] !h-[135px]">
                <div className="border border-black/10 rounded-[15px] h-[113px] relative flex items-center justify-center">
                  <img src={item.img} height={25} />
                  <div className="absolute bottom-0 bg-[#F5F7F9] rounded-[10px] shadow translate-y-1/2 left-1/2 
                  -translate-x-1/2 text-sm text-black font-medium py-2.5 px-[15px]">
                    Скоро
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};
