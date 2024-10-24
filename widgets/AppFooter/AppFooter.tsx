import React from 'react'
import { LayoutAppFooter } from './ui/_layoutAppFooter'
import { Address } from './ui/Address'
import { Offer } from './ui/Offer'
import { Contacts } from '../AppHeader/_ui/Contacts'

export const AppFooter = () => {
  return (
    <LayoutAppFooter
      address={<Address />}
      offer={<Offer />}
      contacts={<Contacts />}
    /> 
  )
}
