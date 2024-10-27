import React from 'react'
import { LayoutAppHeader } from './_ui/_layoutAppHeader'
import { Contacts } from './_ui/Contacts'
import { Logo } from './_ui/Logo'
import { MainNav } from './_ui/MainNav'
import { ProfileHeader } from './_ui/ProfileHeader'
import { MobileMenu } from './_ui/MobileMenu'

export default function AppHeader() {
  return (
    <LayoutAppHeader 
      contacts={<Contacts />}
      logo={<Logo />}
      nav={<MainNav />}
      profile={<ProfileHeader />}
      mobileMenu={<MobileMenu contacts={<Contacts />} nav={<MainNav />} />}
    />
  )
}
