'use client';

import React, {useState} from 'react';
import DashboardMonitorIcon from '@/shared/icons/dashboard-monitor.svg';
import SiteIcon from '@/shared/icons/site.svg';
import TimeTwentyFourIcon from '@/shared/icons/time-24.svg';
import {Heading} from '@/components/ui/Heading';
import Image from 'next/image';
import {cn} from '@/lib/utils';

export const Section02 = () => {
  const [activeTab, setActiveTab] = useState(1);
  return (
    <section id="how" className="container mx-auto mt-[75px] ">
      <Heading data-aos="fade-up-right">Как это работает</Heading>
      <div className="flex gap-[50px] items-center mt-[25px] max-md:flex-col">

        <div  data-aos="flip-left" className="grid grid-cols-2 max-lg:grid-cols-1 shrink-0 grow gap-5 min-w-[50%] max-lg:min-w-[35%]">
          <div
            className={cn(
              'rounded-[20px]  flex items-center justify-center py-8 px-9 transition-all duration-500 relative overflow-hidden h-[300px] max-lg:h-auto max-lg:aspect-square',
              activeTab === 0 ? 'bg-primary' : 'bg-[#F5F7F9] max-lg:hidden'
            )}>
            <Image
            onMouseEnter={() => setActiveTab(0)}
              src="/image/sec2_1.webp"
              fill
              alt="how-it-works"
              quality={100}
              className="object-contain shadow-md rounded-[10px]"
            />
          </div>
          <div
            className={cn(
              'rounded-[20px] bg-[#F5F7F9] flex items-center justify-center py-8 transition-all duration-500 px-9 relative overflow-hidden h-[300px] max-lg:h-auto max-lg:aspect-square',
              activeTab === 1 ? 'bg-primary' : 'bg-[#F5F7F9] max-lg:hidden'
            )}>
            <Image
            onMouseEnter={() => setActiveTab(1)}
              src="/image/sec2_2.webp"
              fill
              alt="how-it-works"
              quality={100}
              className="object-contain shadow-md rounded-[10px]"
            />
          </div>
          <div
            className={cn(
              'col-span-2 rounded-[20px] bg-[#F5F7F9] flex items-center justify-center py-8 transition-all duration-500 px-9 relative overflow-hidden h-[283px] max-lg:h-auto max-lg:aspect-square',
              activeTab === 2 ? 'bg-primary' : 'bg-[#F5F7F9] max-lg:hidden'
            )}>
            <Image
            onMouseEnter={() => setActiveTab(2)}
              src="/image/sec2_3.webp"
              fill
              alt="how-it-works"
              quality={100}
              className="object-contain shadow-md rounded-[10px]"
            />
          </div>
        </div>

        <ul data-aos="fade-up-left" className="space-y-4">
          <li className={cn("group flex gap-5 py-[15px] pl-[23px] relative before:absolute before:inset-y-0 before:left-0 before:w-[3px] before:h-full before:bg-primary/10 before:rounded-2xl [&.active-tab]:before:bg-primary ", activeTab === 0 && 'active-tab')} onMouseEnter={() => setActiveTab(0)} onTouchStart={() => setActiveTab(0)}>
            <div className="shrink-0 group-[.active-tab]:text-primary">
              <SiteIcon width="25" height="25" />
            </div>
            <div className="space-y-2.5">
              <h4 className="text-[22px] font-medium text-black group-[.active-tab]:text-primary max-lg:text-lg">
                Пользователь посещает интересующий вас ресурс
              </h4>
              <p className="text-sm text-black/80">
                Когда пользователь переходит на ваш сайт или другие онлайн-площадки, связанные с вашей нишей, мы
                фиксируем это взаимодействие.
              </p>
            </div>
          </li>
          <li className={cn("group flex gap-5 py-[15px] pl-[23px] relative before:absolute before:inset-y-0 before:left-0 before:w-[3px] before:h-full before:bg-primary/10 before:rounded-2xl [&.active-tab]:before:bg-primary  overflow-hidden", activeTab === 1 && 'active-tab' )} onMouseEnter={() => setActiveTab(1)} onTouchStart={() => setActiveTab(1)}>
            <div className="shrink-0 group-[.active-tab]:text-primary">
              <TimeTwentyFourIcon />
            </div>
            <div className="space-y-2.5">
              <h4 className="text-[22px] font-medium text-black group-[.active-tab]:text-primary max-lg:text-lg">
                Обработка данных в течение 24 часов
              </h4>
              <p className="text-sm text-black/80">
                В течение суток после посещения пользователем выбранных ресурсов наши системы обрабатывают данные и
                готовят информацию для вас.
              </p>
            </div>
          </li>
          <li className={cn("group flex gap-5 py-[15px] pl-[23px] relative before:absolute before:inset-y-0 before:left-0 before:w-[3px] before:h-full before:bg-primary/10 before:rounded-2xl [&.active-tab]:before:bg-primary overflow-hidden", activeTab === 2 && 'active-tab')}  onMouseEnter={() => setActiveTab(2)} onTouchStart={() => setActiveTab(2)}>
            <div className="shrink-0 group-[.active-tab]:text-primary">
              <DashboardMonitorIcon />
            </div>
            <div className="space-y-2.5">
              <h4 className="text-[22px] font-medium text-black group-[.active-tab]:text-primary max-lg:text-lg">
                Доступ к контактным данным через личный кабинет
              </h4>
              <p className="text-sm text-black/80">
                Вы получаете доступ к контактам потенциальных клиентов в вашем личном кабинете, где можете:
              </p>
              <ul className="[&_span]:font-medium *:text-black/80 text-sm mt-3">
                <li>
                  <span>Добавлять источники</span> для отслеживания.
                </li>
                <li>
                  <span>Выгружать данные</span> в удобном формате.
                </li>
                <li>
                  <span>Анализировать полученные контакты</span> с помощью встроенных инструментов.
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
