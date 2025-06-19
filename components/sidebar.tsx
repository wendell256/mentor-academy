'use client';

import * as React from 'react';
import Link from 'next/link';

import { Menu } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetDescription } from '@/components/ui/sheet';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';

export function SideBar() {
  return (
    <div className='md:hidden'>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant='ghost' size='icon' className='text-white'>
            <Menu className='h-10 w-10' />
            <span className='sr-only'>Open menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side='right' className='flex flex-col gap-6 pt-8 bg-chart-5'>
          <VisuallyHidden>
            <SheetHeader>
              <SheetTitle>Menu Hamburguesa</SheetTitle>
            </SheetHeader>
          </VisuallyHidden>
          <VisuallyHidden>
            <SheetDescription>Menu Lateral</SheetDescription>
          </VisuallyHidden>
          <nav className='grid gap-4 text-muted px-4'>
            <Link href='#' className='font-medium'>
              Home
            </Link>
            <Link href='#' className='font-medium'>
              About Us
            </Link>
            <Link href='#' className='font-medium'>
              Courses
            </Link>
            <Link href='#' className='font-medium'>
              Page
            </Link>
            <Link href='#' className='font-medium'>
              Contact Us
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}
