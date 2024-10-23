import React from 'react';
import Image from 'next/image';
import {ModelSection05} from '../model/index';
import { Heading } from '@/components/ui/Heading';

export const Section05 = () => {
  return (
    <section className="container mx-auto mt-[65px]">
      <Heading>Почему это эффективно</Heading>
      <p className="text-sm text-black mt-[15px]">
        До 70% посетителей сайтов не оставляют контактных данных. Мы помогаем вам связаться с ними
      </p>
      <ul className="grid grid-cols-3 gap-[15px] max-md:grid-cols-1 mt-[25px]">
        {ModelSection05.map((item) => (
          <li key={item.title} className="rounded-[15px] bg-[#F5F7F9] px-[35px] py-[30px] max-md:p-[25px] flex flex-col items-center">
            <Image
              src={item.img}
              width={345}
              height={209}
              alt="sec1"
              quality={100}
              className="object-contain w-[345px] h-[209px] shrink-0"
            />
            <div>
              <h4 className="text-[22px] leading-tight font-medium text-black mt-[25px]">
                {item.title}
              </h4>
              <p className="text-sm text-black mt-2.5">
                {item.note}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};
