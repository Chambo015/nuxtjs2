"use client"

import AOS from "aos";

import { Button } from '@/components/ui/button';

import { AnimationBackground } from '@/features/AnimationBackground/ui/AnimationBackground';
import { IdentificationCalculator } from '@/features/Calculator/IdentificationCalculator';

import AppHeader from '@/widgets/AppHeader/AppHeader';

import {
  Section01,
  Section02,
  Section03,
  Section04,
  Section05,
  Section06,
  Section07,
  Section08,
  Section10,
  Section11,
  Section12,
  Section13,
  Section14
} from '@/entities/landing-sections';
import { AppFooter } from '@/widgets/AppFooter/AppFooter';
import { useEffect } from "react";
import Lottie from "react-lottie";

import phoneAnimation from "../public/phone-animatio.json";

export default function Home() {

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 700, // values from 0 to 3000, with step 50ms
      mirror: false
    });
  },[])

  const defaultOptions = {
    loop: true, // Устанавливает, зациклена ли анимация
    autoplay: true, // Автозапуск отключен, чтобы анимация начиналась только при видимости
    animationData: phoneAnimation,
  };

  
  return (
    <div className="font-euclid-circular w-full">
      <AnimationBackground>
        <div className="min-h-[785px]  max-md:min-h-[700px] hero-section pt-7 flex flex-col z-10 relative w-full max-md:pt-4 overflow-hidden max-[480px]:min-h-[800px] max-[380px]:min-h-[850px]">
          <div className="shrink-0">
            <AppHeader />
          </div>
          <section className="relative container mx-auto mt-auto grow flex items-center max-xl:items-start max-xl:pt-[50px] max-md:items-end">
            <div className="max-md:mb-[50px]">
              <h1 className="max-w-[760px] max-lg:max-w-[495px] text-[57px] max-lg:text-[38px] leading-[1.15] font-medium text-white">
                Увеличьте продажи <span className="text-primary">до 200%</span> с нашим сервисом идентификаций
              </h1>
              <div className="max-w-[700px] max-lg:max-w-[560px] px-[14px] max-lg:text-sm py-2 bg-[#252525] rounded-[15px] mt-2.5 max-sm:max-w-full">
                <p className="text-white/80">
                  Забудьте о расходах на рекламу — платите только за контакты тех, кто уже заинтересован в вашем
                  продукте!
                </p>
              </div>
              <div className="flex gap-[15px] items-center mt-[60px] max-lg:mt-4 max-[480px]:flex-col max-[480px]:items-start">
                <a href="https://ai-up.ru/app/sign-up"><Button className="w-[283px] hover:bg-purple-800">Получить контакты</Button></a>
                <div className="flex flex-col items-start">
                  <span className="text-white pb-0.5 border-b border-b-white">30 идентификаций</span>
                  <span className="text-white/60">для теста бесплатно </span>
                </div>
              </div>
            </div>
            <div className="absolute right-0 md:bottom-0 size-[900px] flex items-center justify-center translate-x-[20%] max-md:top-0 max-md:items-start
            max-xl:translate-y-[30%] max-xl:translate-x-[20%] 
            max-lg:translate-y-[20%] max-lg:translate-x-0 max-lg:h-[700px]  max-lg:w-full 
            max-md:translate-y-[0%] pointer-events-none ">
              {/* <Spline
                style={{background: 'none'}}
                scene="https://prod.spline.design/UKqVR2cGwPCOgft2/scene.splinecode"
              /> */}
              <div className="translate-x-[10%] max-md:size-[300px] size-[500px] md:translate-y-[20%]"><Lottie options={defaultOptions}   /></div>
            </div>
          </section>
        </div>
      </AnimationBackground>
      <Section01 />
      <Section02 />
      <Section03 />
      <Section04 />
      <Section05 />
      <Section06 />
      <Section07 />
      <Section08 />
      <div className="container mx-auto mt-[75px]">
        <IdentificationCalculator />
      </div>
     
      
      <Section10 />
      <Section11 />
      <Section12 />
      <Section13 />
      <Section14 />
      <AppFooter />
    </div>
  );
}
