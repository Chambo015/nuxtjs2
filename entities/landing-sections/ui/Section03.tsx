import { Heading } from "@/components/ui/Heading";

import AppsSvg from "@/shared/icons/apps.svg";
import BrowserSvg from "@/shared/icons/browser.svg";
import PhoneSvg from "@/shared/icons/phone.svg";
import SiteSvg from "@/shared/icons/site.svg";

import Lottie from "react-lottie";
import graphicAnimation from '../../../public/block-3.json';
import { useEffect, useRef } from "react";

export const Section03 = () => {
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
      {threshold: 0.5} // 50% видимости
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
    loop: false,
    autoplay: true, 
    animationData: graphicAnimation,
  };

  return (
    <section className="container mx-auto mt-[75px]">
      <Heading data-aos="fade-up-right">Способы сбора контактов</Heading>
      <p data-aos="fade-up-right" className="max-w-[550px] text-sm text-black mt-[15px]">
        Ai-UP предлагает четыре способа получения горячих лидов для увеличения
        продаж и привлечения целевой аудитории
      </p>
      <div className="flex gap-[50px] mt-[25px] max-lg:flex-col">
        <ul className="grid grid-cols-2 gap-[14px] max-md:grid-cols-1">
          <li data-aos="fade-up" className="p-[25px] pt-5 border border-black/10 rounded-[20px] space-y-3">
            <div className="border-[1.5px] border-primary size-[50px] rounded-full shrink-0 flex items-center justify-center">
              <BrowserSvg className="text-primary" width="20" height="20" />
            </div>
            <p className="text-black text-lg leading-tight font-medium max-w-[150px]">
              Сбор контактов с вашего сайта
            </p>
            <p className="text-black/80 text-sm leading-snug">
              Установите наш пиксель на ваш сайт и получайте до 70% контактов
              посетителей. Превратите текущую аудиторию в клиентов.
            </p>
          </li>
          <li data-aos="fade-up" className="p-[25px] pt-5 border border-black/10 rounded-[20px] space-y-3">
            <div className="border-[1.5px] border-primary size-[50px] rounded-full shrink-0 flex items-center justify-center">
              <SiteSvg className="text-primary" width="20" height="20" />
            </div>
            <p className="text-black text-lg leading-tight font-medium max-w-[150px]">
              Сбор контактов с других сайтов
            </p>
            <p className="text-black/80 text-sm leading-snug">
              Собирайте до 20% контактов пользователей, которые посещают похожие
              сайты в вашей нише. Привлекайте тех, кто уже интересуется вашими
              услугами.
            </p>
          </li>
          <li data-aos="fade-up" className="p-[25px] pt-5 border border-black/10 rounded-[20px] space-y-3">
            <div className="border-[1.5px] border-primary size-[50px] rounded-full shrink-0 flex items-center justify-center">
              <PhoneSvg className="text-primary" width="20" height="20" />
            </div>
            <p className="text-black text-lg leading-tight font-medium max-w-[210px]">
              Сбор контактов <br />с телефонных номеров
            </p>
            <p className="text-black/80 text-sm leading-snug">
              Получайте до 20% контактов, связанных со звонками на номера и с
              номеров, которые вас интересуют. Узнайте, кто звонит и кому звонят
              ваши конкуренты, чтобы привлечь тех, кто уже активно интересуется
              услугами в вашей нише.
            </p>
          </li>
          <li data-aos="fade-up" className="p-[25px] pt-5 border border-black/10 rounded-[20px] space-y-3">
            <div className="border-[1.5px] border-primary size-[50px] rounded-full shrink-0 flex items-center justify-center">
              <AppsSvg className="text-primary" width="20" height="20" />
            </div>
            <p className="text-black text-lg leading-tight font-medium max-w-[130px]">
              Готовые ниши и категории
            </p>
            <p className="text-black/80 text-sm leading-snug">
              Используйте готовые решения для популярных ниш. Работайте с
              аудиторией, которая уже проявила интерес, и быстро выходите на
              целевой рынок.
            </p>
          </li>
        </ul>
        <div data-aos="fade-left" className="min-w-[40%] max-lg:hidden bg-[#F5F7F9] rounded-[20px] overflow-hidden">
          <div ref={parrent} className="relative size-full">
            {/* @ts-ignore */}
             <Lottie options={defaultOptions} ref={lottieRef}  />
          </div>
        </div>
      </div>
    </section>
  );
};
