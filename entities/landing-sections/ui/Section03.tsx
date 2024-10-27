import { Heading } from "@/components/ui/Heading";

import BrowserSvg from "@/shared/icons/browser.svg";
import SiteSvg from "@/shared/icons/site.svg";
import PhoneSvg from "@/shared/icons/phone.svg";
import AppsSvg from "@/shared/icons/apps.svg";

export const Section03 = () => {
  return (
    <section className="container mx-auto mt-[75px]">
      <Heading>Способы сбора контактов</Heading>
      <p className="max-w-[550px] text-sm text-black mt-[15px]">
        Ai-UP предлагает четыре способа получения горячих лидов для увеличения
        продаж и привлечения целевой аудитории
      </p>
      <div className="flex gap-[50px] mt-[25px] max-lg:flex-col">
        <ul className="grid grid-cols-2 gap-[14px] max-md:grid-cols-1">
          <li data-aos="fade-up" className="p-[25px] pt-5 border border-black/10 rounded-[20px] space-y-3">
            <div className="border-[1.5px] border-primary size-[50px] rounded-full shrink-0 flex items-center justify-center">
              <BrowserSvg className="text-primary" width="20" height="20" />
            </div>
            <p className="text-black text-lg leading-tight font-medium max-w-[150px]">
              Сбор контактов с вашего сайта
            </p>
            <p className="text-black/80 text-sm leading-snug">
              Установите наш пиксель на ваш сайт и получайте до 70% контактов
              посетителей. Превратите текущую аудиторию в клиентов.
            </p>
          </li>
          <li data-aos="fade-up" className="p-[25px] pt-5 border border-black/10 rounded-[20px] space-y-3">
            <div className="border-[1.5px] border-primary size-[50px] rounded-full shrink-0 flex items-center justify-center">
              <SiteSvg className="text-primary" width="20" height="20" />
            </div>
            <p className="text-black text-lg leading-tight font-medium max-w-[150px]">
              Сбор контактов с других сайтов
            </p>
            <p className="text-black/80 text-sm leading-snug">
              Собирайте до 20% контактов пользователей, которые посещают похожие
              сайты в вашей нише. Привлекайте тех, кто уже интересуется вашими
              услугами.
            </p>
          </li>
          <li data-aos="fade-up" className="p-[25px] pt-5 border border-black/10 rounded-[20px] space-y-3">
            <div className="border-[1.5px] border-primary size-[50px] rounded-full shrink-0 flex items-center justify-center">
              <PhoneSvg className="text-primary" width="20" height="20" />
            </div>
            <p className="text-black text-lg leading-tight font-medium max-w-[210px]">
              Сбор контактов <br />с телефонных номеров
            </p>
            <p className="text-black/80 text-sm leading-snug">
              Получайте до 20% контактов, связанных со звонками на номера и с
              номеров, которые вас интересуют. Узнайте, кто звонит и кому звонят
              ваши конкуренты, чтобы привлечь тех, кто уже активно интересуется
              услугами в вашей нише.
            </p>
          </li>
          <li data-aos="fade-up" className="p-[25px] pt-5 border border-black/10 rounded-[20px] space-y-3">
            <div className="border-[1.5px] border-primary size-[50px] rounded-full shrink-0 flex items-center justify-center">
              <AppsSvg className="text-primary" width="20" height="20" />
            </div>
            <p className="text-black text-lg leading-tight font-medium max-w-[130px]">
              Готовые ниши и категории
            </p>
            <p className="text-black/80 text-sm leading-snug">
              Используйте готовые решения для популярных ниш. Работайте с
              аудиторией, которая уже проявила интерес, и быстро выходите на
              целевой рынок.
            </p>
          </li>
        </ul>
        <div data-aos="fade-left" className="min-w-[40%] max-lg:hidden bg-[#F5F7F9] rounded-[20px] overflow-hidden">
          <div className="relative size-full">
            <svg
              className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2"
              xmlns="http://www.w3.org/2000/svg"
              width="614"
              height="672"
              fill="none"
              viewBox="0 0 614 672"
            >
              <mask
                id="a"
                width="614"
                height="672"
                x="0"
                y="0"
                maskUnits="userSpaceOnUse"
                style={{ maskType: "alpha" }}
              >
                <rect width="614" height="672" fill="#F5F7F9" rx="20" />
              </mask>
              <g mask="url(#a)">
                <circle
                  cx="302.5"
                  cy="335.5"
                  r="290"
                  stroke="#DBDBDB"
                  strokeDasharray="11 11"
                />
              </g>
              <circle
                cx="307"
                cy="336"
                r="174.5"
                stroke="#DBDBDB"
                strokeDasharray="11 11"
              />
              <circle cx="477" cy="333" r="50" fill="#fff" />
              <g clipPath="url(#b)">
                <path
                  fill="#4280EF"
                  d="M489.39 337.76s-9.098-4.135-9.131-4.145a2.07 2.07 0 0 0-2.148.499c-.566.566-.757 1.389-.46 2.24l4.108 9.037c.166.365.527.603.93.61h.019c.394 0 .756-.223.933-.576l1.928-3.856 3.856-1.928a1.044 1.044 0 0 0-.034-1.881h-.001Zm-5.064 2.1a1.045 1.045 0 0 0-.466.466l-1.108 2.217-3.171-6.954 6.96 3.164-2.214 1.106-.001.001Zm-5.876 4.015a10.65 10.65 0 0 1-.542.034c-.696-.688-2.51-2.623-3.775-5.2h.763a1.04 1.04 0 1 0 0-2.083h-1.594a10.698 10.698 0 0 1-.49-3.125c0-1.083.188-2.132.492-3.125h8.393c.123.403.227.816.307 1.236a1.04 1.04 0 1 0 2.046-.389 12.865 12.865 0 0 0-.191-.847h3.576a10.363 10.363 0 0 1 .437 4.074 1.042 1.042 0 0 0 2.075.187 12.9 12.9 0 0 0 .051-1.135C490 326.607 484.393 321 477.5 321c-6.893 0-12.5 5.607-12.5 12.5s5.607 12.5 12.499 12.5c.382 0 .76-.018 1.133-.051a1.042 1.042 0 0 0-.183-2.075l.001.001Zm-7.313-7.249h-3.575a10.385 10.385 0 0 1-.479-3.126c0-1.089.168-2.139.479-3.126h3.575a12.57 12.57 0 0 0-.408 3.125c0 1.084.152 2.13.408 3.125v.002Zm3.002-8.333c1.063-2.164 2.515-3.879 3.363-4.779.849.898 2.301 2.611 3.365 4.779h-6.728Zm12.38 0h-3.363c-.824-1.965-1.966-3.634-2.95-4.851a10.467 10.467 0 0 1 6.313 4.851Zm-11.727-4.851c-.984 1.217-2.127 2.886-2.95 4.85h-3.361a10.451 10.451 0 0 1 6.311-4.85Zm-6.311 15.266h3.361c.823 1.965 1.966 3.633 2.95 4.85a10.468 10.468 0 0 1-6.311-4.85Z"
                />
              </g>
              <circle cx="137" cy="336" r="50" fill="#fff" />
              <g clipPath="url(#c)">
                <path
                  fill="#4280EF"
                  d="m125.906 324.896 1.094-.948a3.225 3.225 0 0 1 4.563 0c.031.031 1.958 2.542 1.958 2.542a3.236 3.236 0 0 1 0 4.458l-1.208 1.521c1.52 3.448 3.885 5.823 7.218 7.239l1.521-1.218a3.214 3.214 0 0 1 4.458 0s2.511 1.927 2.542 1.958c1.261 1.26 1.261 3.302.052 4.51l-1.041 1.198c-1.198 1.198-2.813 1.854-4.563 1.854-7.958 0-18.5-10.552-18.5-18.5 0-1.739.656-3.364 1.906-4.604v-.01Zm16.594 21.021c1.188 0 2.281-.438 3.031-1.198l1.042-1.198a1.147 1.147 0 0 0 .042-1.573s-2.49-1.917-2.521-1.948c-.427-.427-1.177-.427-1.615 0-.031.031-2.125 1.708-2.125 1.708a1.036 1.036 0 0 1-1.021.157c-4.312-1.646-7.406-4.73-9.187-9.178a1.05 1.05 0 0 1 .156-1.041s1.677-2.104 1.698-2.125a1.138 1.138 0 0 0 0-1.615 606.773 606.773 0 0 1-1.948-2.521c-.448-.406-1.146-.395-1.625.084l-1.094.948c-.802.802-1.25 1.895-1.25 3.083 0 7.25 10.177 16.417 16.417 16.417Z"
                />
              </g>
              <circle cx="307" cy="507" r="50" fill="#fff" />
              <g clipPath="url(#d)">
                <path
                  fill="#4280EF"
                  d="M301.292 494h-3.125a4.17 4.17 0 0 0-2.947 1.22 4.17 4.17 0 0 0-1.22 2.947v3.125a4.167 4.167 0 0 0 4.167 4.166h3.125a4.167 4.167 0 0 0 4.166-4.166v-3.125a4.167 4.167 0 0 0-4.166-4.167Zm2.083 7.292a2.083 2.083 0 0 1-2.083 2.083h-3.125a2.084 2.084 0 0 1-2.084-2.083v-3.125c0-.553.22-1.083.611-1.473a2.08 2.08 0 0 1 1.473-.611h3.125a2.084 2.084 0 0 1 2.083 2.084v3.125ZM314.833 494h-3.125a4.167 4.167 0 0 0-4.166 4.167v3.125a4.167 4.167 0 0 0 4.166 4.166h3.125a4.167 4.167 0 0 0 4.167-4.166v-3.125a4.17 4.17 0 0 0-1.22-2.947 4.17 4.17 0 0 0-2.947-1.22Zm2.084 7.292a2.084 2.084 0 0 1-2.084 2.083h-3.125a2.083 2.083 0 0 1-2.083-2.083v-3.125a2.084 2.084 0 0 1 2.083-2.084h3.125c.553 0 1.083.22 1.473.611.391.39.611.92.611 1.473v3.125Zm-15.625 6.25h-3.125a4.167 4.167 0 0 0-4.167 4.166v3.125a4.17 4.17 0 0 0 1.22 2.947 4.17 4.17 0 0 0 2.947 1.22h3.125a4.167 4.167 0 0 0 4.166-4.167v-3.125a4.167 4.167 0 0 0-4.166-4.166Zm2.083 7.291a2.084 2.084 0 0 1-2.083 2.084h-3.125a2.08 2.08 0 0 1-1.473-.611 2.08 2.08 0 0 1-.611-1.473v-3.125a2.084 2.084 0 0 1 2.084-2.083h3.125a2.083 2.083 0 0 1 2.083 2.083v3.125Zm11.458-7.291h-3.125a4.167 4.167 0 0 0-4.166 4.166v3.125a4.167 4.167 0 0 0 4.166 4.167h3.125a4.17 4.17 0 0 0 2.947-1.22 4.17 4.17 0 0 0 1.22-2.947v-3.125a4.167 4.167 0 0 0-4.167-4.166Zm2.084 7.291a2.08 2.08 0 0 1-.611 1.473 2.08 2.08 0 0 1-1.473.611h-3.125a2.084 2.084 0 0 1-2.083-2.084v-3.125a2.083 2.083 0 0 1 2.083-2.083h3.125a2.084 2.084 0 0 1 2.084 2.083v3.125Z"
                />
              </g>
              <circle cx="307" cy="165" r="50" fill="#fff" />
              <path
                fill="#4280EF"
                d="M314.792 154.042h-14.584A5.216 5.216 0 0 0 295 159.25v12.5a5.216 5.216 0 0 0 5.208 5.208h14.584A5.216 5.216 0 0 0 320 171.75v-12.5a5.216 5.216 0 0 0-5.208-5.208Zm-14.584 2.083h14.584a3.125 3.125 0 0 1 3.125 3.125v1.042h-20.834v-1.042a3.126 3.126 0 0 1 3.125-3.125Zm14.584 18.75h-14.584a3.125 3.125 0 0 1-3.125-3.125v-9.375h20.834v9.375a3.126 3.126 0 0 1-3.125 3.125Zm0-8.333a1.042 1.042 0 0 1-1.042 1.041h-12.5a1.041 1.041 0 1 1 0-2.083h12.5a1.042 1.042 0 0 1 1.042 1.042Zm-4.167 4.166a1.042 1.042 0 0 1-1.042 1.042h-8.333a1.042 1.042 0 0 1 0-2.083h8.333a1.038 1.038 0 0 1 1.042 1.041Zm-12.5-12.5c0-.206.061-.407.176-.578a1.037 1.037 0 0 1 1.069-.443 1.034 1.034 0 0 1 .818.818 1.034 1.034 0 0 1-.443 1.069 1.042 1.042 0 0 1-1.62-.866Zm3.125 0c0-.206.061-.407.176-.578a1.037 1.037 0 0 1 1.069-.443 1.034 1.034 0 0 1 .818.818 1.034 1.034 0 0 1-.443 1.069 1.042 1.042 0 0 1-1.62-.866Zm3.125 0c0-.206.061-.407.176-.578a1.037 1.037 0 0 1 1.069-.443 1.034 1.034 0 0 1 .818.818 1.034 1.034 0 0 1-.443 1.069 1.042 1.042 0 0 1-1.62-.866Z"
              />
              <defs>
                <clipPath id="b">
                  <path fill="#fff" d="M465 321h25v25h-25z" />
                </clipPath>
                <clipPath id="c">
                  <path fill="#fff" d="M149 323h-25v25h25z" />
                </clipPath>
                <clipPath id="d">
                  <path fill="#fff" d="M294 494h25v25h-25z" />
                </clipPath>
              </defs>
            </svg>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 py-[60px] px-[25px] bg-primary rounded-[25px] text-white font-medium">
              Сбор контактов
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
