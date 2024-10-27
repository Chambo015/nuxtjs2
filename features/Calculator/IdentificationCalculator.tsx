'use client';

import {Button} from '@/components/ui/button';
import {Slider} from '@/components/ui/slider';
import Chip from './_ui/Chip';
import {useMemo, useState} from 'react';
import {Heading} from '@/components/ui/Heading';

const interpolate = (
	number: number,
	currentScaleMin: number,
	currentScaleMax: number,
	newScaleMin = 0,
	newScaleMax = 1
) => {
	// First, normalize the value between 0 and 1
	const standardNormalization = 
		(number - currentScaleMin) / (currentScaleMax - currentScaleMin);
	
	// Next, transpose that value to our desired scale	
	return (
		(newScaleMax - newScaleMin) * standardNormalization + newScaleMin
	);
};

export const IdentificationCalculator = () => {
  const [slider, setSlider] = useState(50);
  const identificationCount = useMemo(() => {
    const minCount = 200;
    const maxCount = 30000;

    if (slider <= 20) {
      return Math.round(interpolate(slider, 0, 20, 200, 500));
    } else if (slider >= 20 && slider <= 40) {
      return Math.round(interpolate(slider, 20, 40, 500, 2000));
    } else if (slider >= 40 && slider <= 60) {
      return Math.round(interpolate(slider, 40, 60, 2000, 5000));
    } else if (slider >= 60 && slider <= 80) {
      return Math.round(interpolate(slider, 60, 80, 5000, 10000));
    } else if (slider >= 80) {
      return Math.round(interpolate(slider, 80, 100, 10000, 30000));;
    } else {
      return 1;
    }

    return Math.round(minCount + (slider / 100) * (maxCount - minCount));
  }, [slider]);

  const pricePerIdentification = useMemo(() => {
    // Определяем цену на основе значения slider
    if (slider <= 20) {
      return 45;
    } else if (slider >= 20 && slider <= 40) {
      return 40;
    } else if (slider >= 40 && slider <= 60) {
      return 35;
    } else if (slider >= 60 && slider <= 80) {
      return 30;
    } else if (slider >= 80) {
      return 25;
    } else {
      return 1;
    }
  }, [slider]);

  const totalCost = useMemo(() => {
    // Общая сумма
    return Math.round(identificationCount * pricePerIdentification);
  }, [identificationCount, pricePerIdentification]);

  const discount = useMemo(() => {
    const basePrice = 45;
    // Вычисляем размер скидки относительно базовой цены
    const discountAmount = basePrice - pricePerIdentification;
    const discountPercentage = (discountAmount / basePrice) * 100;

    return Math.round(discountPercentage);
  }, [pricePerIdentification]);

  const points = [
    {
      value: '45 ₽',
      identifications: '100 идент.'
    },
    {
      value: '40 ₽',
      discount: '-11%',
      identifications: '500 идент.'
    },
    {
      value: '35 ₽',
      discount: '-22%',
      identifications: '2500 идент.'
    },
    {
      value: '30 ₽',
      discount: '-33%',
      identifications: '3500 идент.'
    },
    {
      value: '25 ₽',
      discount: '-44%',
      identifications: '5000 идент.'
    },
  ];

  return (
    <section id="cost" className="max-w-screen-xl mx-auto bg-black rounded-[20px] overflow-hidden px-9 relative font-euclid-circular max-lg:px-4">
      <div className="py-[65px] flex items-center gap-[46px] relative z-10 max-lg:py-6 max-lg:gap-5 max-md:flex-col max-lg:items-stretch">
        {/* Left */}
        <div data-aos="fade-up-right" className="flex grow items-center justify-center border border-white/20 rounded-[30px] py-[85px] max-lg:py-8 max-lg:px-3 max-lg:grow-0">
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
        <div data-aos="fade-up-left" className="grow">
          <Heading className="w-min text-white font-medium">Калькулятор идентификации</Heading>
          <div className="flex gap-2.5 items-center mt-2.5">
            <span className="text-white/80 text-sm">Цена за 1 идентификацию</span>
            <Chip>RUB ₽</Chip>
          </div>
          <div className="w-full relative pt-9">
            <Slider
              defaultValue={[slider]}
              max={100}
              step={1}
              className="w-full"
              onValueChange={(v) => setSlider(v[0])}
            />
            <ul className="grid grid-cols-5 mt-[calc(-25px/2)]">
              {points.map((p) => (
                <li key={p.value}>
                  <div className="h-[25px] w-0.5 rounded-2xl bg-[#E6E6E6] mb-6 max-lg:mb-3"></div>
                  <div className="h-[27px] text-sm flex gap-2.5 items-center max-lg:flex-col max-lg:items-start max-lg:gap-1">
                    <span className="text-white/50">{p.value}</span>
                    {p.discount && <Chip className="text-xs font-medium">{p.discount}</Chip>}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex gap-4 items-center mt-4 max-lg:flex-col max-lg:items-start max-lg:gap-3 max-lg:mt-9">
            <Button className="font-medium text-sm max-md:w-full">Попробовать бесплатно</Button>
            <div className="flex flex-col text-sm">
              <span className="text-white">Сразу после регистрации начислим</span>
              <span className="text-[#4280EF]">30 идентификаций бесплатно.</span>
            </div>
          </div>
        </div>
      </div>

      {/* Mask */}
      <div className='absolute bg-[url("/image/sec9.svg")] bg-cover inset-0 blur-[100px]'></div>
    </section>
  );
};
