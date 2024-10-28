'use client';

import {Heading} from '@/components/ui/Heading';
import {useCallback, useEffect, useRef, useState} from 'react';
import {ModelSection07} from '../model';
import Image from 'next/image';
import {cn} from '@/lib/utils';

const DELAY = 5000;

export const Section07 = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="container mx-auto mt-[75px] ">
      <Heading className="max-w-[496px] md:hidden mb-4">Простое управление через личный кабинет</Heading>
      <div className="flex gap-[50px] max-md:flex-col-reverse max-md:gap-6">
        <div data-aos="fade-up-right">
          <Heading className="max-w-[496px] max-md:hidden">Простое управление через личный кабинет</Heading>
          <ul className="space-y-4 mt-[25px]">
            {ModelSection07.map((item, idx) => (
              <li
                key={item.title}
                className={cn(
                  'group cursor-pointer flex gap-5 py-[15px] pl-[23px] relative before:absolute before:inset-y-0 before:left-0 before:w-[3px] before:h-full before:bg-primary/10 before:rounded-2xl [&.active-tab]:before:bg-primary before:transition-all',
                  activeTab === idx && 'active-tab'
                )}
                onMouseEnter={() => setActiveTab(idx)}
                onTouchStart={() => setActiveTab(idx)}>
                <div className="shrink-0 group-[.active-tab]:text-primary text-black transition-all">{item.icon}</div>
                <div className="space-y-2.5">
                  <h4 className="text-[22px] font-medium text-black group-[.active-tab]:text-primary transition-all">
                    {item.title}
                  </h4>
                  <p className="text-sm text-black/80">{item.note}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div data-aos="flip-right" className="grid grid-cols-2 grow gap-5 min-w-[50%] max-lg:min-w-[35%] max-lg:grid-cols-1">
          <div
            className={cn(
              'rounded-[20px]  flex items-center justify-center py-8 px-9 transition-all duration-500 max-lg:h-auto max-lg:aspect-square max-lg:p-4 max-md:aspect-auto max-md:h-[225px]',
              activeTab === 0 ? 'bg-primary' : 'bg-[#F5F7F9] max-lg:hidden'
            )}>
            <Image
              src="/image/sec7_1.png"
              width={221}
              height={150}
              alt="how-it-works"
              quality={100}
              className="object-contain shadow-md rounded-[10px]"
            />
          </div>
          <div
            className={cn(
              'rounded-[20px] bg-[#F5F7F9] flex items-center justify-center py-8 transition-all duration-500 px-9 max-lg:h-auto max-lg:aspect-square max-lg:p-4 max-md:aspect-auto max-md:h-[225px]',
              activeTab === 1 ? 'bg-primary' : 'bg-[#F5F7F9] max-lg:hidden'
            )}>
            <Image
              src="/image/sec7_2.png"
              width={270}
              height={242}
              alt="how-it-works"
              quality={100}
              className="object-contain shadow-md rounded-[10px] max-md:h-[200px]"
            />
          </div>
          <div
            className={cn(
              'col-span-2 rounded-[20px] bg-[#F5F7F9] flex items-center justify-center py-8 transition-all duration-500 px-9 max-lg:p-4 max-lg:h-auto max-lg:aspect-square max-md:aspect-auto max-md:h-[225px]',
              activeTab === 2 ? 'bg-primary' : 'bg-[#F5F7F9] max-lg:hidden'
            )}>
            <Image
              src="/image/sec7_3.png"
              width={630}
              height={210}
              alt="how-it-works"
              quality={100}
              className="object-contain shadow-md rounded-[10px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
