import Image from 'next/image';
import { Heading } from '@/components/ui/Heading';

export const Section01 = () => {
  return (
    <section className="container mx-auto mt-[75px] flex gap-[50px] items-center max-md:flex-col">
        <div className="shrink-0 max-lg:bg-[#F5F7F9] max-lg:p-4 rounded-[20px]">
          <Image
            src="/image/lead-generation.png"
            width={500}
            height={293}
            alt="lead-generation"
            quality={100}
            className="max-lg:hidden"
          />
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
