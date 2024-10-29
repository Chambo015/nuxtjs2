'use client';

import {Heading} from '@/components/ui/Heading';
import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components/ui/tabs';
import Chip from '@/features/Calculator/_ui/Chip';
import {cn} from '@/lib/utils';
import {motion} from 'framer-motion';
import {useEffect, useState, useRef} from 'react';
import {ModelSection06} from '../model';

import Lottie from 'react-lottie';
import graphicAnimation from '../../../public/block-5.json';

export const Section06 = () => {
  const [activeTab, setActiveTab] = useState<string>('construction');

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
    <div className="bg-black mt-[65px] py-[65px]">
      <section className="container mx-auto flex gap-[50px] max-md:overflow-hidden">
        {/* <Image data-aos="fade-up-right" src="/image/sec6.webp" width={500} height={489} alt="cases" quality={100} className="shrink-0 max-xl:hidden self-start" /> */}
        <div ref={parrent} className="shrink-0 max-xl:hidden self-start w-[500px] h-[489px]">
          {/* @ts-ignore */}
          <Lottie options={defaultOptions} ref={lottieRef} />
        </div>
        <div data-aos="fade-up-left" className="grow max-md:overflow-hidden">
          <Heading className="text-white max-w-[464px]">Какие результаты вы можете получить</Heading>
          <div className="mt-[15px]">
            <Tabs defaultValue="construction" className="w-full">
              <div className="max-md:overflow-x-auto">
                <TabsList className="bg-white/10 p-[5px] mb-[10px]">
                  <TabsTrigger
                    className="py-2.5 px-5 text-sm font-medium"
                    onClick={() => setActiveTab('construction')}
                    value="construction">
                    Строительство
                  </TabsTrigger>
                  <TabsTrigger
                    className="py-2.5 px-5 text-sm font-medium"
                    onClick={() => setActiveTab('realty')}
                    value="realty">
                    Недвижимость
                  </TabsTrigger>
                  <TabsTrigger
                    className="py-2.5 px-5 text-sm font-medium"
                    onClick={() => setActiveTab('glazing')}
                    value="glazing">
                    Остекление
                  </TabsTrigger>
                  <TabsTrigger
                    className="py-2.5 px-5 text-sm font-medium"
                    onClick={() => setActiveTab('finance')}
                    value="finance">
                    Финансы
                  </TabsTrigger>
                </TabsList>
              </div>
              {ModelSection06.map((item) => (
                <TabsContent key={item.value} className="w-full max-md:w-auto" value={item.value}>
                  <motion.div
                    key={item.value}
                    animate={activeTab === item.value ? 'active' : 'inactive'}
                    variants={{
                      active: {opacity: 1, y: '0'},
                      inactive: {opacity: 0, y: '50%'},
                    }}
                    exit={{opacity: 0, y: '-50%'}}
                    transition={{duration: 1, ease: [0.04, 0.62, 0.23, 0.98]}}
                    className="bg-[#252525] p-[25px] rounded-[20px] text-white">
                    <div className="flex items-center justify-center size-[45px] rounded-[10px] border-2 border-primary text-primary">
                      {item.icon}
                    </div>
                    <div className="flex mt-5 gap-5 [&>*]:grow [&_ul]:flex [&_ul]:justify-between [&_ul]:mt-[15px] max-md:flex-col [&_ul]:gap-4 max-[420px]:[&_ul]:flex-col">
                      <div>
                        <p className="text-[#F25959] bg-[#F25959]/10 rounded-[10px] px-[15px] text-sm leading-[32px]">
                          Было
                        </p>
                        <ul>
                          {item.before.map((b) => (
                            <li key={b.label} className="flex flex-col justify-between">
                              <p className="text-white/50 text-sm leading-tight">{b.label}</p>
                              <p className="text-white text-[22px] leading-tight font-medium mt-[5px] text-nowrap">
                                {b.value}
                              </p>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="text-primary bg-primary/10 rounded-[10px] px-[15px] text-sm leading-[32px]">
                          Стало
                        </p>
                        <ul>
                          {item.after.map((a) => (
                            <li key={a.label} className="flex flex-col justify-between">
                              <p className="text-primary text-sm leading-tight">{a.label}</p>
                              <p
                                className={cn(
                                  'text-primary text-[22px] leading-tight font-medium mt-[5px] text-nowrap',
                                  a.discount && 'flex items-start gap-[5px]'
                                )}>
                                {a.value} {a.discount && <Chip className="max-h-[25px]">{a.discount}</Chip>}
                              </p>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <p className="text-sm text-white/60 mt-5">
                      {item.desc}
                    </p>
                  </motion.div>
                </TabsContent>
              ))}
            </Tabs>
            
          </div>
        </div>
      </section>
    </div>
  );
};
