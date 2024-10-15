import { Inter } from 'next/font/google'
import localFont from 'next/font/local'

export const fontInter = Inter({
  subsets: ['latin'],
  variable: '--font-inter'
})


export const fontEuclidCircular = localFont({
  src: [
    {
      path: '../public/fonts/Euclid Circular A Regular.ttf',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../public/fonts/Euclid Circular A Medium.ttf',
      weight: '500',
      style: 'normal'
    },
    {
      path: '../public/fonts/Euclid Circular A SemiBold.ttf',
      weight: '600',
      style: 'normal'
    },
    {
      path: '../public/fonts/Euclid Circular A Bold.ttf',
      weight: '700',
      style: 'normal'
    }
  ],
  variable: '--font-euclid-circular'
})
