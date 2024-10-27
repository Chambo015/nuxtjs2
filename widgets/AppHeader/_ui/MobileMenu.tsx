import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet';
import { ReactNode } from 'react';

interface MobileMenuProps {
  nav?: ReactNode
  contacts?: ReactNode
  profile?: ReactNode
}
export function MobileMenu({contacts, nav, profile}: MobileMenuProps) {
  return (
    <Sheet >
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className='bg-transparent hover:bg-transparent'>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20">
            <path
              fill="#fff"
              d="M18.75 8.75H1.25a1.25 1.25 0 0 0 0 2.5h17.5a1.25 1.25 0 1 0 0-2.5ZM1.25 5.417h17.5a1.25 1.25 0 1 0 0-2.5H1.25a1.25 1.25 0 0 0 0 2.5Zm17.5 9.167H1.25a1.25 1.25 0 1 0 0 2.5h17.5a1.25 1.25 0 0 0 0-2.5Z"
            />
          </svg>
        </Button>
      </SheetTrigger>
      <SheetContent className="xl:hidden">
        <SheetHeader>
          <SheetTitle>AI-UP</SheetTitle>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          {nav}
          {contacts}
          {profile}
        </div>
      </SheetContent>
    </Sheet>
  );
}
