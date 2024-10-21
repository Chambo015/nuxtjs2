import { Button } from '@/components/ui/button';
import { Heading } from '@/components/ui/Heading';
import { AnimationBackground } from '@/features/AnimationBackground/ui/AnimationBackground';
import { СollectingСontacts } from '@/features/СollectingСontacts/СollectingСontacts';
import { IdentificationCalculator } from '@/features/Calculator/IdentificationCalculator';
import DashboardMonitorIcon from '@/shared/icons/dashboard-monitor.svg';
import SiteIcon from '@/shared/icons/site.svg';
import TimeTwentyFourIcon from '@/shared/icons/time-24.svg';
import AppHeader from '@/widgets/AppHeader/AppHeader';
import Image from 'next/image';
import { BannerGift } from '@/features/BannerGift/BannerGift';

export default function Page() {
  return (
    <div className="font-euclid-circular w-full">
      <AnimationBackground>
        <div className="min-h-[785px] hero-section pt-7 flex flex-col z-10 relative w-full">
          <div className="shrink-0">
            <AppHeader />
          </div>
          <section className="relative container mx-auto mt-auto grow flex items-center">
            <div>
              <h1 className="max-w-[760px] text-[57px] leading-[1.15] font-medium text-white">
                Увеличьте продажи <span className="text-primary">до 200%</span> с нашим сервисом идентификаций
              </h1>
              <div className="max-w-[700px] px-[14px] py-2 bg-[#252525] rounded-[15px] mt-2.5">
                <p className="text-white/80">
                  Забудьте о расходах на рекламу — платите только за контакты тех, кто уже заинтересован в вашем
                  продукте!
                </p>
              </div>
              <div className="flex gap-[15px] items-center mt-[60px]">
                <Button className="w-[283px]">Получить контакты</Button>
                <div className="flex flex-col items-start">
                  <span className="text-white pb-0.5 border-b border-b-white">30 идентификаций</span>
                  <span className="text-white/60">для теста бесплатно </span>
                </div>
              </div>
            </div>
            <Image
              src="/image/hero.png"
              width={920}
              height={920}
              alt="cubs"
              quality={100}
              className="absolute right-0 bottom-0 pointer-events-none "
            />
            {/* <div className='absolute right-0 bottom-0 size-[900px]'>
          <iframe src='https://my.spline.design/animatedmockupiphone14pro-bc3fe682fc15790c761400e3fd6497c9/' frameborder='0' width='100%' height='100%'></iframe>
          </div> */}
          </section>
        </div>
      </AnimationBackground>
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
      <section className="container mx-auto mt-[75px] ">
        <Heading>Как это работает</Heading>
        <div className='flex gap-[50px] items-center mt-[25px]'>
          <div className="shrink-0">
            <Image src="/image/how-it-works.png" width={700} height={607} alt="how-it-works" quality={100} />
          </div>
          <ul className="space-y-4">
            <li className=" group flex gap-5 py-[15px] pl-[23px] relative before:absolute before:inset-y-0 before:left-0 before:w-[3px] before:h-full before:bg-primary/10 before:rounded-2xl [&.active-tab]:before:bg-primary ">
              <div className="shrink-0 group-[.active-tab]:text-primary">
                <SiteIcon width="25" height="25" />
              </div>
              <div className="space-y-2.5">
                <h4 className="text-[22px] font-medium text-black group-[.active-tab]:text-primary">
                  Пользователь посещает интересующий вас ресурс
                </h4>
                <p className="text-sm text-black/80">
                  Когда пользователь переходит на ваш сайт или другие онлайн-площадки, связанные с вашей нишей, мы
                  фиксируем это взаимодействие.
                </p>
              </div>
            </li>
            <li className="active-tab group flex gap-5 py-[15px] pl-[23px] relative before:absolute before:inset-y-0 before:left-0 before:w-[3px] before:h-full before:bg-primary/10 before:rounded-2xl [&.active-tab]:before:bg-primary ">
              <div className="shrink-0 group-[.active-tab]:text-primary">
                <TimeTwentyFourIcon />
              </div>
              <div className="space-y-2.5">
                <h4 className="text-[22px] font-medium text-black group-[.active-tab]:text-primary">
                  Обработка данных в течение 24 часов
                </h4>
                <p className="text-sm text-black/80">
                  В течение суток после посещения пользователем выбранных ресурсов наши системы обрабатывают данные и
                  готовят информацию для вас.
                </p>
              </div>
            </li>
            <li className=" group flex gap-5 py-[15px] pl-[23px] relative before:absolute before:inset-y-0 before:left-0 before:w-[3px] before:h-full before:bg-primary/10 before:rounded-2xl [&.active-tab]:before:bg-primary ">
              <div className="shrink-0 group-[.active-tab]:text-primary">
                <DashboardMonitorIcon />
              </div>
              <div className="space-y-2.5">
                <h4 className="text-[22px] font-medium text-black group-[.active-tab]:text-primary">
                  Доступ к контактным данным через личный кабинет
                </h4>
                <p className="text-sm text-black/80">
                  Вы получаете доступ к контактам потенциальных клиентов в вашем личном кабинете, где можете:
                </p>
                <ul className="[&_span]:font-medium *:text-black/80 text-sm mt-3">
                  <li>
                    <span>Добавлять источники</span> для отслеживания.
                  </li>
                  <li>
                    <span>Выгружать данные</span> в удобном формате.
                  </li>
                  <li>
                    <span>Анализировать полученные контакты</span> с помощью встроенных инструментов.
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <СollectingСontacts />
      <BannerGift />
      <div className="container mx-auto mt-[75px]">
        <IdentificationCalculator />
      </div>
    </div>
  );
}
