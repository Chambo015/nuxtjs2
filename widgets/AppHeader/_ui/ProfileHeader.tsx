import { Button } from '@/components/ui/button'
import React from 'react'

export const ProfileHeader = () => {
  return (
    <div className='flex items-center gap-2.5'>
      <Button size='sm' className='w-[165px]'>
        Создать аккаунт
      </Button>
      <Button size='sm' variant="ghost" className='w-[100px]'>
        Войти
      </Button>
    </div>
  )
}
