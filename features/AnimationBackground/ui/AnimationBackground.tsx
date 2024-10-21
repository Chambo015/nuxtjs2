'use client';

import {useMouse} from '@/shared/hooks/useMouse';
import React, {ReactNode} from 'react';

interface AnimationBackgroundProps {
  children?: ReactNode;
}

export const AnimationBackground = ({children}: AnimationBackgroundProps) => {
  const [mouse, ref] = useMouse<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className="bg-[#111111] flex items-center relative justify-center w-full"
      style={{
        ['--x-mouse' as string]: mouse.elementX + 'px',
        ['--y-mouse' as string]: mouse.elementY + 'px',
      }}>
      <div className="absolute inset-0 bg-[radial-gradient(150px_circle_at_var(--x-mouse)_var(--y-mouse),rgb(66,128,239,1)_0%,transparent_66%)] z-[9] contain-size"></div>
      {children}
    </div>
  );
};
