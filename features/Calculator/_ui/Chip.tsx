import { cn } from '@/lib/utils'
import React, { ReactNode } from 'react'
interface ChipProps {
  className?: string
  children: ReactNode
}
function Chip({className, children}: ChipProps) {
  return (
    <div className={cn('py-1.5 px-2.5 flex items-center text-sm font-normal justify-center rounded-[10px] bg-[#4280EF]/10 text-[#4280EF]', className)}>
      {children}
    </div>
  )
}

export default Chip