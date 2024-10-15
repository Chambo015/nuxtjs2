'use client';

import {Button} from '@/components/ui/button';
import {Slider} from '@/components/ui/slider';
import Chip from './_ui/Chip';
import {useMemo, useState} from 'react';

export const IdentificationCalculator = () => {
  const [slider, setSlider] = useState(50);
  const identificationCount = useMemo(() => {
    const minCount = 1000;
    const maxCount = 5000;

    return minCount + (slider / 100) * (maxCount - minCount);
  }, [slider]);

  const pricePerIdentification = useMemo(() => {
    // Определяем цену на основе значения slider
    if (slider <= 20) {
      return 50;
    } else if (slider >= 21 && slider <= 40) {
      return 45;
    } else if (slider >= 41 && slider <= 60) {
      return 40;
    } else if (slider >= 61 && slider <= 80) {
      return 35;
    } else if (slider >= 81) {
      return 30;
    } else {
      return 1
    }
  }, [slider]);

  const totalCost = useMemo(() => {
    // Общая сумма
    return identificationCount * pricePerIdentification;
  }, [identificationCount, pricePerIdentification]);

  const discount = useMemo(() => {
    const basePrice = 50;
    // Вычисляем размер скидки относительно базовой цены
    const discountAmount = basePrice - pricePerIdentification;
    const discountPercentage = (discountAmount / basePrice) * 100;
    
    return discountPercentage;
  }, [pricePerIdentification]);

  return (
    <section className="max-w-screen-xl mx-auto bg-black rounded-[20px] overflow-hidden px-9 relative font-euclid-circular">
      <div className="py-[65px] flex items-center gap-[46px] relative z-10">
        {/* Left */}
        <div className="flex grow items-center justify-center border border-white/20 rounded-[30px] py-[85px]">
          <div className="bg-[#F5F7F9] p-[10px] rounded-[20px]">
            <div className="p-[10px]">
              <p className="text-[#161616] font-medium text-lg">{identificationCount} идентификации</p>
              <ul className='[&>li]:before:content-[url("/icons/check.svg")] [&>li]:before:absolute [&>li]:before:text-[20px] [&>li]:before:top-1/2 [&>li]:before:-translate-y-1/2 [&>li]:pl-[30px] [&>li]:relative [&>li]:before:left-0 [&>li]:before:size-5 mt-[15px] text-black [&>li]:text-sm [&>li]:leading-[20px] space-y-[15px]'>
                <li>Управление источниками</li>
                <li>Удобная выгрузка данных</li>
                <li>Аналитика и отчеты</li>
              </ul>
            </div>
            <div className="bg-[#E4ECF9] flex items-center h-[62px] px-5 rounded-[20px] justify-end gap-2.5 text-[#4280EF] min-w-[300px]">
              <span className="mr-auto text-sm">Всего</span>
              <span className="font-medium text-[22px] leading-tight">{totalCost} ₽</span>
              <Chip className="bg-white text-xs font-medium">-{discount}%</Chip>
            </div>
          </div>
        </div>
        {/* Right */}
        <div className="grow">
          <h3 className="w-min text-white text-[45px] leading-tight font-medium">Калькулятор идентификации</h3>
          <div className="flex gap-2.5 items-center mt-2.5">
            <span className="text-white/80 text-sm">Цена за 1 идентификацию</span>
            <Chip>RUB ₽</Chip>
          </div>
          <div className="w-full relative pt-8">
            <Slider
              defaultValue={[slider]}
              max={100}
              step={1}
              className="w-full"
              onValueChange={(v) => setSlider(v[0])}
            />
            <ul className="grid grid-cols-5 mt-[calc(-25px/2)]">
              <li>
                <div className="h-[25px] w-0.5 rounded-2xl bg-[#E6E6E6] mb-6"></div>
                <div className="h-[27px] text-sm flex gap-2.5 items-center">
                  <span className="text-white/50">50 ₽</span>
                </div>
              </li>
              <li>
                <div className="h-[25px] w-0.5 rounded-2xl bg-[#E6E6E6] mb-6"></div>
                <div className="h-[27px] text-sm flex gap-2.5 items-center">
                  <span className="text-white/50">45 ₽</span>
                  <Chip className="text-xs font-medium">-11%</Chip>
                </div>
              </li>
              <li>
                <div className="h-[25px] w-0.5 rounded-2xl bg-[#E6E6E6] mb-6"></div>
                <div className="h-[27px] text-sm flex gap-2.5 items-center">
                  <span className="text-white/50">40 ₽</span>
                  <Chip className="text-xs font-medium">-25%</Chip>
                </div>
              </li>
              <li>
                <div className="h-[25px] w-0.5 rounded-2xl bg-[#E6E6E6] mb-6"></div>
                <div className="h-[27px] text-sm flex gap-2.5 items-center">
                  <span className="text-white/50">35 ₽</span>
                  <Chip className="text-xs font-medium">-42%</Chip>
                </div>
              </li>
              <li>
                <div className="h-[25px] w-0.5 rounded-2xl bg-[#E6E6E6] mb-6"></div>
                <div className="h-[27px] text-sm flex gap-2.5 items-center">
                  <span className="text-white/50">30 ₽</span>
                  <Chip className="text-xs font-medium">-66%</Chip>
                </div>
              </li>
            </ul>
          </div>

          <div className="flex gap-4 items-center mt-4">
            <Button className="font-medium text-sm">Попробовать бесплатно</Button>
            <div className="flex flex-col text-sm">
              <span className="text-white">Сразу после регистрации начислим</span>
              <span className="text-[#4280EF]">30 идентификаций бесплатно.</span>
            </div>
          </div>
        </div>
      </div>

      {/* Mask */}
      <svg
        width="1280"
        height="536"
        viewBox="0 0 1280 536"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0">
        <mask id="mask0_2007_14" maskUnits="userSpaceOnUse" x="0" y="0" width="1280" height="536">
          <path
            d="M0 20C0 8.95432 8.95431 0 20 0H1260C1271.05 0 1280 8.9543 1280 20V516C1280 527.046 1271.05 536 1260 536H20C8.95431 536 0 527.046 0 516V20Z"
            fill="white"
          />
        </mask>
        <g mask="url(#mask0_2007_14)">
          <g filter="url(#filter0_f_2007_14)">
            <path
              d="M95.9344 -110.467C156.934 -133.3 119.189 -59.3623 175.934 28.5329C287.374 201.146 96.7246 315.315 -96.5112 399.675C-107.681 486.677 -112.431 561.555 -107.262 609.366C-106.759 614.017 -106.035 618.507 -105.093 622.843C280.26 609.265 976.863 498.297 1239.07 360.874C742.143 75.7019 358.772 -79.6792 212.825 -133.569C131.074 -163.755 123.817 -162.097 212.825 -133.569C322.804 -98.3196 579.752 -22.047 1024.74 85.8664C1396.94 176.129 1405.18 273.811 1239.07 360.874C1241.19 362.091 1243.31 363.311 1245.43 364.532C1928.98 757.566 1658.43 919.532 862.238 790.866C372.905 711.79 -64.8171 808.258 -105.093 622.843C-214.14 626.685 -298.263 622.729 -340.566 609.366C-528.198 550.097 -310.765 493.209 -96.5112 399.675C-60.1404 116.372 44.2933 -295.485 95.9344 -319.967C149.934 -345.567 86.4344 -121.133 95.9344 -110.467Z"
              fill="#4280EF"
            />
          </g>
        </g>
        <defs>
          <filter
            id="filter0_f_2007_14"
            x="-764"
            y="-674"
            width="2751.27"
            height="1860.26"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="176" result="effect1_foregroundBlur_2007_14" />
          </filter>
        </defs>
      </svg>
    </section>
  );
};
