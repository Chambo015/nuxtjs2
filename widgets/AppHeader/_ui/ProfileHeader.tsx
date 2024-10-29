import { Button } from '@/components/ui/button'
import React from 'react'

export const ProfileHeader = () => {
  return (
    <div className='flex items-center gap-2.5'>
      <a href="https://ai-up.ru/app/sign-up">
        <Button size='sm' className='w-[165px] hover:bg-purple-800'>
          Создать аккаунт
        </Button>
      </a>
      <a href="https://ai-up.ru/app/sign-in">
        <Button size='sm' variant="ghost" className='w-[100px]'>
          Войти
        </Button>
      </a>
    </div>
  )
}
