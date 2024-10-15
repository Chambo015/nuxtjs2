import React, { ReactNode } from 'react'

interface LayoutAppHeaderProps {
  logo?: ReactNode
  nav?: ReactNode
  contacts?: ReactNode
  profile?: ReactNode
}

export const LayoutAppHeader = ({ logo, nav, contacts, profile } : LayoutAppHeaderProps) => {
  return (
    <header className='h-10 flex items-center container mx-auto gap-7'>
      {logo}
      <div className='mx-auto'>{nav}</div>
      {contacts}
      {profile}
    </header>
  )
}
