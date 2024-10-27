import { cn } from '@/lib/utils'
import React, { ReactNode } from 'react'

interface HeadingProps {
  className?: string
  children: ReactNode
  'data-aos'?: string
}

export const Heading = ({className, children, "data-aos": dataAos }: HeadingProps) => {
  return (
    <h3 data-aos={dataAos}  className={cn("text-[45px] leading-[57px] font-medium text-black max-xl:text-2xl max-sm:text-[22px] max-sm:leading-tight", className)}>{children}</h3>
  )
}
