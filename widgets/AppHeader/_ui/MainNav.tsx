import React from 'react'

export const MainNav = () => {
  return (
    <nav>
      <ul className='flex gap-[35px] max-xl:gap-4 text-white/30 text-sm max-lg:flex-col'>
        <li className='text-primary'>Главная</li>
        <li>Как это работает</li>
        <li>Преимущества</li>
        <li>Стоимость услуг</li>
        <li>FAQ</li>
      </ul>
    </nav>
  )
}
