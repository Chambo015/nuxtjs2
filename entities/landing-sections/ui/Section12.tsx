'use client';

import { Heading } from '@/components/ui/Heading';
import { useEffect, useRef } from 'react';

import Lottie from 'react-lottie';
// Замените на ваш JSON-файл с анимацией
import graphicAnimation from '../../../public/graphic-animation.json';

export const Section12 = () => {
  const parrent = useRef(null);
  const lottieRef = useRef<Lottie>();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // @ts-ignore
            lottieRef.current?.play(); // Start playing when visible
          } else {
            // @ts-ignore
            lottieRef.current?.stop(); // Stop playing when out of view
          }
        });
      },
      {threshold: 0.5} // 10% видимости
    );

    if (parrent.current) {
      observer.observe(parrent.current);
    }

    return () => {
      if (parrent.current) {
        observer.unobserve(parrent.current);
      }
    };
  }, []);

  const defaultOptions = {
    loop: false, // Устанавливает, зациклена ли анимация
    autoplay: false, // Автозапуск отключен, чтобы анимация начиналась только при видимости
    animationData: graphicAnimation,
  };

  return (
    <section className="container mx-auto mt-[75px] max-md:overflow-hidden">
      <div className="flex gap-[50px] items-center">
        <div
          ref={parrent}
          className="size-[500px] p-[35px] bg-[#F5F7F9] rounded-[20px] shrink-0 max-xl:hidden overflow-hidden">
          {/* @ts-ignore */}
          <Lottie options={defaultOptions} height={400} width={400} ref={lottieRef} />
        </div>
        <div className="max-md:overflow-x-hidden">
          <Heading>Сравнение с традиционными методами рекламы</Heading>
          <div className="overflow-x-scroll">
            <div className="flex mt-5  min-w-[720px]">
              <ul className="text-black font-medium [&>li]:py-[14px] divide-y divide-[#E6E6E6] [&>li:first-child]:text-base [&>li]:text-sm grow [&>li]:pr-5">
                <li>Параметр</li>
                <li>Конкуренция за аудиторию</li>
                <li>Стоимость привлечения клиента</li>
                <li>Точность таргетинга</li>
                <li>Скорость получения результатов</li>
                <li>Самостоятельное управление</li>
              </ul>
              <ul className="bg-[#F5F7F9] rounded-[15px] text-black/50 font-medium [&>li]:py-[14px] [&>li]:px-[18px] divide-y divide-[#E6E6E6] [&>li:first-child]:text-base [&>li]:text-sm">
                <li>Традиционная реклама</li>
                <li>Высокая</li>
                <li>Высокая</li>
                <li>Зависит от настроек</li>
                <li>Требует времени</li>
                <li>Ограничено</li>
              </ul>
              <ul className="bg-primary rounded-[15px] text-white/80 font-medium [&>li]:py-[14px] [&>li]:px-[18px] divide-y divide-[#E6E6E6]/20 [&>li:first-child]:text-base [&>li]:text-sm [&>li:first-child]:text-white">
                <li>Наш сервис</li>
                <li>Низкая</li>
                <li>Низкая</li>
                <li>Высокая</li>
                <li>Данные доступны через 24 ч</li>
                <li>Полный контроль</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
