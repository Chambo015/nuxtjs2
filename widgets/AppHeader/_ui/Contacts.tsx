import React from 'react'
import PhoneIcon from "@/shared/icons/phone.svg"
import WhatsappIcon from "@/shared/icons/whatsapp.svg"
import TelegramIcon from "@/shared/icons/telegram.svg"

export const Contacts = () => {
  return (
    <ul className='flex text-white items-center gap-[15px]'>
      <li className='flex items-center gap-2.5'>
        <PhoneIcon width="15" height="15" /><span>+7 (945) 487-44-59</span>
      </li>
      <li>
        <WhatsappIcon />
      </li>
      <li>
        <TelegramIcon />
      </li>
    </ul>
  )
}
