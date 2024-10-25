import { Heading } from '@/components/ui/Heading'
import React from 'react'
import { ModelSection13 } from '../model'
import { Button } from '@/components/ui/button'

export const Section13 = () => {
  return (
    <section className="container mx-auto mt-[75px]">
      <div className='bg-black relative overflow-hidden rounded-[20px]'>
        <div className='absolute bg-[url("/image/sec13.svg")] bg-cover inset-0 blur-[150px]'></div>
        <div className='relative z-10 p-[35px]'>
          <Heading className='text-center text-white max-w-[830px] mx-auto'>Присоединяйтесь к списку ожидания и получите преимущество!</Heading>
          <p className='text-white/80 text-sm text-center mt-2.5'>Не упустите шанс быть среди первых, кто опробует наш инновационный сервис и увеличит продажи без дополнительных затрат на рекламу.</p>
          <div className='grid grid-cols-2 justify-center gap-5 max-w-[830px] mx-auto mt-5'>
              {ModelSection13.map(item => <div key={item.title} className='bg-[#F5F7F9]/40 backdrop-blur-sm rounded-[20px] pt-[18px] pb-[15px] px-[14px] max-w-[400px]'>
                <div className='size-[45px] rounded-full bg-white flex items-center justify-center'>
                    {item.icon}
                </div>
                <p className='text-white font-medium text-[22px] mt-2.5'>{item.title}</p>
                <p className='text-white/60 text-sm mt-1'>{item.note}</p>
              </div>)}
          </div>
          <div className='max-w-[320px] mx-auto mt-4'><Button className="text-primary bg-white hover:bg-white/80 w-full text-center inline-block">Присоединится сейчас </Button></div>
        </div>
      </div>

    </section>
  )
}
