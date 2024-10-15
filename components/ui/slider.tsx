'use client';

import * as React from 'react';
import * as SliderPrimitive from '@radix-ui/react-slider';

import {cn} from '@/lib/utils';

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({className, ...props}, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn('relative flex w-full touch-none select-none items-center', className)}
    {...props}>
    <SliderPrimitive.Track className="relative h-0.5 w-full grow overflow-hidden bg-[#E6E6E6] rounded-[11px]">
      <SliderPrimitive.Range className="absolute h-full bg-[#E6E6E6]" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className="block size-[45px] rounded-full border border-primary/50 bg-[#4280EF] focus-visible:outline-none   disabled:pointer-events-none disabled:opacity-50 cursor-pointer">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" fill="none" viewBox="0 0 20 19" className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 top-1/2'>
        <path
          fill="#fff"
          d="M1.066 10.3a1 1 0 0 1 0-1.6L5.9 5.072a1 1 0 0 1 1.6.8v7.256a1 1 0 0 1-1.6.8L1.066 10.3Zm17.868-1.6a1 1 0 0 1 0 1.6L14.1 13.928a1 1 0 0 1-1.6-.8V5.872a1 1 0 0 1 1.6-.8L18.934 8.7Z"
        />
        <rect width="2" height="19" x="9" fill="#fff" rx="1" />
      </svg>
    </SliderPrimitive.Thumb>
  </SliderPrimitive.Root>
));
Slider.displayName = SliderPrimitive.Root.displayName;

export {Slider};
