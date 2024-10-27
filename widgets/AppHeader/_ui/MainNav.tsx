import React from 'react'

export const MainNav = () => {
  return (
    <nav>
      <ul className='flex gap-[35px] max-xl:gap-4 text-white/30 text-sm max-lg:flex-col'>
        <li ><a href='#main' className='active:text-primary focus:text-primary hover:text-primary'>Главная</a></li>
        <li><a href='#how' className='active:text-primary focus:text-primary hover:text-primary'>Как это работает</a></li>
        <li><a href='#advantages' className='active:text-primary focus:text-primary hover:text-primary'>Преимущества</a></li>
        <li><a href='#cost' className='active:text-primary focus:text-primary hover:text-primary'>Стоимость услуг</a></li>
        <li><a href='#faq' className='active:text-primary focus:text-primary hover:text-primary'>FAQ</a></li>
      </ul>
    </nav>
  )
}
