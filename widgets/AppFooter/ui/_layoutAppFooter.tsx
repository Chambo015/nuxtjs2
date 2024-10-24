import React, { ReactNode } from 'react'

interface LayoutAppFooterProps {
  address?: ReactNode
  offer?: ReactNode
  contacts?: ReactNode
}

export const LayoutAppFooter = ({ address, offer, contacts } : LayoutAppFooterProps) => {
  return (
    <footer className='bg-black mt-[75px]'>
      <div className='flex items-start container mx-auto gap-7 p-[30px]'>
        {address}
        <div className='mx-auto'>{offer}</div>
        {contacts}
      </div>
    </footer>
  )
}
