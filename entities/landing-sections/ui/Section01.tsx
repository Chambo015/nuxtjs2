import Image from 'next/image';
import { Heading } from '@/components/ui/Heading';

export const Section01 = () => {
  return (
    <section className="container mx-auto mt-[75px] flex gap-[50px] items-center">
        <div className="shrink-0">
          <Image
            src="/image/lead-generation.png"
            width={500}
            height={293}
            alt="lead-generation"
            quality={100}
            className=""
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
