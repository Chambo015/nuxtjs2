import Image from 'next/image';
import { Heading } from '@/components/ui/Heading';

import graphicAnimation from '../../../public/cards-3.json';
import { useEffect, useRef } from "react";
import Lottie from "react-lottie";


export const Section01 = () => {
  const parrent = useRef(null);
  const lottieRef = useRef<Lottie>();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            lottieRef.current?.play(); // Start playing when visible
          } else {
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
    autoplay: true, // Автозапуск отключен, чтобы анимация начиналась только при видимости
    animationData: graphicAnimation,
  };
  return (
    <section className="container mx-auto mt-[75px] flex gap-[50px] items-center max-md:flex-col">
        <div ref={parrent} className="shrink-0 max-lg:bg-[#F5F7F9] max-lg:p-4 rounded-[20px]">
          {/* <Image
            src="/image/lead-generation.png"
            width={500}
            height={293}
            alt="lead-generation"
            quality={100}
            className="max-lg:hidden"
          /> */}
           <div  className="max-lg:hidden"><Lottie options={defaultOptions} height={400} width={500} ref={lottieRef} /></div>
          <Image
            src="/image/sec1.png"
            width={261}
            height={180}
            alt="lead-generation"
            quality={100}
            className="lg:hidden"
          />
        </div>
        <div>
          <Heading className="max-w-[562px]">
            У нас совершенно новый подход к лидогенерации
          </Heading>
          <p className="text-black text-sm mt-2.5 max-w-[700px]">
            В современном мире, где рекламодатели борются за каждый клик в контекстной и таргетированной рекламе, мы
            предлагаем инновационное решение, которое позволяет привлекать клиентов эффективнее и дешевле.
          </p>
        </div>
      </section>
  )
}
