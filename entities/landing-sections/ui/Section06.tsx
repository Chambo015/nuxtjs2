import {Heading} from '@/components/ui/Heading';
import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components/ui/tabs';
import Image from 'next/image';
import React from 'react';

export const Section06 = () => {
  return (
    <div className="bg-black mt-[65px] py-[65px]">
      <section className="container mx-auto flex gap-[50px]">
        <Image src="/image/sec6.webp" width={500} height={489} alt="cases" quality={100} className="shrink-0" />
        <div className='grow'>
          <Heading className="text-white max-w-[464px]">Какие результаты вы можете получить</Heading>
          <div className='mt-[15px]'>
            <Tabs defaultValue="account" className="w-full">
              <TabsList className='bg-white/10 p-[5px] mb-[30px]'>
                <TabsTrigger className='py-2.5 px-5 text-sm font-medium' value="construction">Строительство</TabsTrigger>
                <TabsTrigger className='py-2.5 px-5 text-sm font-medium' value="realty">Недвижимость</TabsTrigger>
                <TabsTrigger className='py-2.5 px-5 text-sm font-medium' value="glazing">Остекление</TabsTrigger>
                <TabsTrigger className='py-2.5 px-5 text-sm font-medium' value="finance">Финансы</TabsTrigger>
              </TabsList>
              <TabsContent className='bg-[#252525] p-[25px] rounded-[20px] text-white w-full' value="construction">Make changes to your account here.</TabsContent>
              <TabsContent className='bg-[#252525] p-[25px] rounded-[20px] text-white w-full' value="realty">Change your password here.</TabsContent>
              <TabsContent className='bg-[#252525] p-[25px] rounded-[20px] text-white w-full' value="glazing">Change your password here.</TabsContent>
              <TabsContent className='bg-[#252525] p-[25px] rounded-[20px] text-white w-full' value="finance">Change your password here.</TabsContent>
            </Tabs>
          </div>
        </div>
      </section>
    </div>
  );
};
