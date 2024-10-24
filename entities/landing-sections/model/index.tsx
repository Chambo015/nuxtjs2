import IconLinkAlt from "@/shared/icons/link-alt.svg"
import IconFileExport from "@/shared/icons/file-export.svg"
import IconAnalyse from "@/shared/icons/analyse.svg"
import IconLightbulb from "@/shared/icons/lightbulb.svg"
import IconBalance from "@/shared/icons/balance.svg"
import IconHandshake from "@/shared/icons/handshake.svg"
import IconPhone from "@/shared/icons/phone.svg"
import IconTimer from "@/shared/icons/timer.svg"
import IconQuestion from "@/shared/icons/question.svg"
import IconBag from "@/shared/icons/bag.svg"
import IconLock from "@/shared/icons/lock.svg"
import IconWallet from "@/shared/icons/wallet.svg"

export const ModelSection05 = [
  {
    img: "/image/sec1_1.png",
    title: "Доступ к заинтересованной аудитории",
    note: "Вы получаете контакты пользователей, которые уже проявили интерес к вашей нише, что повышает вероятность конверсии."
  },
  {
    img: "/image/sec1_2.png",
    title: "Снижение стоимости привлечения клиента в 2-5 раз",
    note: "Вы получаете контакты пользователей, которые уже проявили интерес к вашей нише, что повышает вероятность конверсии."
  },
  {
    img: "/image/sec1_3.png",
    title: "Обход рекламной конкуренции",
    note: "Вы взаимодействуете с клиентами напрямую, минуя этап дорогой и конкурентной рекламы."
  } 
]

export const ModelSection07 = [
  {
    icon: <IconLinkAlt />,
    title: "Самостоятельное добавление источников",
    note: "Вы сами выбираете сайты и ресурсы для отслеживания, адаптируя сервис под ваши бизнес-цели."
  },
  {
    icon: <IconFileExport />,
    title: "Удобная выгрузка данных",
    note: "Получайте контактные данные в удобном для вас формате для дальнейшей работы."
  },
  {
    icon: <IconAnalyse />,
    title: "Аналитика и отчеты",
    note: "Используйте встроенные инструменты для анализа эффективности и оптимизации ваших маркетинговых стратегий."
  },
]

export const ModelSection08 = [
  {
    icon: <IconLightbulb />,
    title: "Инновационный метод лидогенерации",
    note: "Используем передовые технологии и большие данные для эффективного привлечения клиентов."
  },
  {
    icon: <IconBalance />,
    title: <span>Этичность<br/> и законность</span>,
    note: "Все данные собираются только с согласия пользователей, в соответствии с законодательством о персональных данных."
  },
  {
    icon: <IconHandshake />,
    title: "Прозрачное ценообразование",
    note: "Вы платите только за успешные идентификации номеров телефонов."
  },
]

export const ModelSection10 = [
  {
    title: "Персональный менеджер",
    note: "Наш специалист поможет вам настроить сервис и даст рекомендации для достижения наилучших результатов."
  },
  {
    title: "Обучающие материалы",
    note: "Доступ к руководствам и инструкциям по использованию сервиса."
  },
  {
    title: "Техническая поддержка",
    note: "Быстрая помощь по любым техническим вопросам."
  },
]

export const ModelSection11 = [
  {
    title: "amoCrm",
    link: null,
    img: "/image/amoCrm.png"
  },
  {
    title: "bitrix",
    link: null,
    img: "/image/bitrix.png"
  },
  {
    title: "retail",
    link: null,
    img: "/image/retail.png"
  },
  {
    title: "roistat",
    link: null,
    img: "/image/roistat.png"
  },
  {
    title: "albato",
    link: null,
    img: "/image/albato.png"
  },
  {
    title: "telegram",
    link: null,
    img: "/image/telegram.png"
  },
]

export interface ModelFAQType {
  id: number;
  icon: JSX.Element;
  title: string;
  note: string;
}
export const ModelFAQ: ModelFAQType[] = [
  {
    id: 1,
    icon: <IconPhone />,
    title: "Как вы собираете номера телефонов посетителей сайтов?",
    note: "Используем передовые технологии и большие данные для эффективного привлечения клиентов."
  },
  {
    id: 2,
    icon: <IconBalance />,
    title: "Законно ли получение таких данных?",
    note: "Все данные собираются только с согласия пользователей, в соответствии с законодательством о персональных данных."
  },
  {
    id: 3,
    icon: <IconTimer />,
    title: "Как быстро я получу контактные данные после добавления источника?",
    note: "Вы платите только за успешные идентификации номеров телефонов."
  },
  {
    id: 4,
    icon: <IconQuestion />,
    title: "Как я могу использовать полученные контакты?",
    note: "Вы платите только за успешные идентификации номеров телефонов."
  },
  {
    id: 5,
    icon: <IconLock />,
    title: "Каким образом обеспечивается безопасность и конфиденциальность данных?",
    note: "Вы платите только за успешные идентификации номеров телефонов."
  },
  {
    id: 6,
    icon: <IconBag />,
    title: "Какие ниши подходят для вашего сервиса?",
    note: "Вы платите только за успешные идентификации номеров телефонов."
  },
  {
    id: 7,
    icon: <IconWallet />,
    title: "Есть ли пробный период после запуска сервиса?",
    note: "Вы платите только за успешные идентификации номеров телефонов."
  },
  {
    id: 8,
    icon: <IconWallet />,
    title: "Требуются ли технические навыки для работы с вашим сервисом?",
    note: "Вы платите только за успешные идентификации номеров телефонов."
  },
  {
    id: 9,
    icon: <IconWallet />,
    title: "Могу ли я интегрировать ваш сервис с моей CRM-системой?",
    note: "Вы платите только за успешные идентификации номеров телефонов."
  },
  {
    id: 10,
    icon: <IconWallet />,
    title: "Каковы условия оплаты и есть ли скрытые комиссии?",
    note: "Вы платите только за успешные идентификации номеров телефонов."
  },
]