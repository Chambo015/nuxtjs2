import { Heading } from '@/components/ui/Heading'
import Image from 'next/image'
import React from 'react'

export const Section12 = () => {
  return (
    <section className="container mx-auto mt-[75px]">
      <div className='flex gap-[50px] items-center'>
        <div className='size-[500px] p-[35px] bg-[#F5F7F9] rounded-[20px] shrink-0'>
          <Image 
            width={430}
            height={430}
            src="/image/sec12.png"
            alt='charts'
          />
        </div>
        <div>
          <Heading>Сравнение с традиционными методами рекламы</Heading>
          <div className='flex mt-5'>
            <ul className='text-black font-medium [&>li]:py-[14px] divide-y divide-[#E6E6E6] [&>li:first-child]:text-base [&>li]:text-sm grow [&>li]:pr-5'>
              <li>Параметр</li>
              <li>Конкуренция за аудиторию</li>
              <li>Стоимость привлечения клиента</li>
              <li>Точность таргетинга</li>
              <li>Скорость получения результатов</li>
              <li>Самостоятельное управление</li>
            </ul>
            <ul className='bg-[#F5F7F9] rounded-[15px] text-black/50 font-medium [&>li]:py-[14px] [&>li]:px-[18px] divide-y divide-[#E6E6E6] [&>li:first-child]:text-base [&>li]:text-sm'>
              <li>Традиционная реклама</li>
              <li>Высокая</li>
              <li>Высокая</li>
              <li>Зависит от настроек</li>
              <li>Требует времени</li>
              <li>Ограничено</li>
            </ul>
            <ul className='bg-primary rounded-[15px] text-white/80 font-medium [&>li]:py-[14px] [&>li]:px-[18px] divide-y divide-[#E6E6E6]/20 [&>li:first-child]:text-base [&>li]:text-sm [&>li:first-child]:text-white'>
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
    </section>
  )
}
