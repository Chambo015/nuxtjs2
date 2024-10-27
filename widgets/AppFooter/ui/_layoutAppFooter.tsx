import React, { ReactNode } from 'react'

interface LayoutAppFooterProps {
  address?: ReactNode
  offer?: ReactNode
  contacts?: ReactNode
}

export const LayoutAppFooter = ({ address, offer, contacts } : LayoutAppFooterProps) => {
  return (
    <footer className='bg-black mt-[75px]'>
      <div className='flex items-start container mx-auto gap-7 p-[30px] max-md:flex-col'>
        {address}
        <div className='mx-auto max-lg:hidden'>{offer}</div>
        <div className='max-lg:flex max-lg:flex-col max-lg:justify-between max-lg:self-stretch max-md:flex-col-reverse max-md:gap-3'><div>{contacts}</div>
        <div className='lg:hidden'>{offer}</div></div>
      </div>
    </footer>
  )
}
