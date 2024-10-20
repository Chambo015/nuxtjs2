import { cn } from '@/lib/utils'
import React, { ReactNode } from 'react'

interface HeadingProps {
  className?: string
  children: ReactNode
}

export const Heading = ({className, children}: HeadingProps) => {
  return (
    <h3 className={cn("text-[45px] leading-[57px] font-medium text-black", className)}>{children}</h3>
  )
}
