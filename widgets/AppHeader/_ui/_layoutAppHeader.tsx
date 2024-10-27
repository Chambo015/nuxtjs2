import React, { ReactNode } from 'react'

interface LayoutAppHeaderProps {
  logo?: ReactNode
  nav?: ReactNode
  contacts?: ReactNode
  profile?: ReactNode
  mobileMenu?: ReactNode
}

export const LayoutAppHeader = ({ logo, nav, contacts, profile, mobileMenu } : LayoutAppHeaderProps) => {
  return (
    <header className='h-10 flex items-center container mx-auto gap-7'>
      {logo}
      <div className='mx-auto max-lg:hidden'>{nav}</div>
      <div className='max-xl:hidden'>{contacts}</div>
      <div className='max-lg:hidden'>{profile}</div>
      <div className='lg:hidden ml-auto'>
        {mobileMenu}
      </div>
    </header>
  )
}
