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
import Spline from '@splinetool/react-spline/next';
import { useEffect } from "react";

export default function Home() {

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 700, // values from 0 to 3000, with step 50ms
      mirror: false
    });
  },[])
  return (
    <div className="font-euclid-circular w-full">
      <AnimationBackground>
        <div className="min-h-[785px] max-xl:min-h-[700px] max-lg:min-h-[700px] hero-section pt-7 flex flex-col z-10 relative w-full max-md:pt-4 overflow-hidden">
          <div className="shrink-0">
            <AppHeader />
          </div>
          <section className="relative container mx-auto mt-auto grow flex items-center max-xl:items-start max-xl:pt-[50px]">
            <div>
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
                <Button className="w-[283px]">Получить контакты</Button>
                <div className="flex flex-col items-start">
                  <span className="text-white pb-0.5 border-b border-b-white">30 идентификаций</span>
                  <span className="text-white/60">для теста бесплатно </span>
                </div>
              </div>
            </div>
            {/* <Image
              src="/image/hero.png"
              width={920}
              height={920}
              alt="cubs"
              quality={100}
              className="absolute right-0 bottom-0 pointer-events-none "
            /> */}
            <div className="absolute right-0 bottom-0 size-[900px] translate-x-[20%] max-xl:translate-y-[20%] max-xl:translate-x-[45%] max-lg:translate-x-0 max-lg:h-[700px]  max-lg:w-full max-sm:translate-y-[30%] pointer-events-none max-[480px]:translate-x-[27%]">
              <Spline
                style={{background: 'none'}}
                scene="https://prod.spline.design/UKqVR2cGwPCOgft2/scene.splinecode"
              />
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
