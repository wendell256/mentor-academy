import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

export function Header({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <div className='bg-chart-5'>
      <header className={cn(' py-5', className)} {...props}>
        <div className='mx-auto flex h-14 max-w-7xl items-center justify-between px-4'>
          <Link href='/' className='flex items-center'>
            <Image
              src='/images/logos/ma_main/dark_backgrounds.png'
              alt='Mentor Academy Logo'
              width={120}
              height={100}
              priority
            />
          </Link>
          <nav className='flex items-center text-muted gap-4'>
            <Link href='#' className='text-sm font-medium hover:underline'>
              Home
            </Link>
            <Link href='#' className='text-sm font-medium hover:underline'>
              About Us
            </Link>
            <Link href='#' className='text-sm font-medium hover:underline'>
              Courses
            </Link>
            <Link href='#' className='text-sm font-medium hover:underline'>
              Page
            </Link>
            <Link href='#' className='text-sm font-medium hover:underline'>
              Contact Us
            </Link>
          </nav>
          <div className='flex gap-2'>
            <Button
              variant='outline'
              className='rounded-full border-accent text-accent bg-transparent hover:bg-accent hover:text-primary'
              asChild
            >
              <Link href='#'>Login</Link>
            </Button>
            <Button
              variant={'outline'}
              className='rounded-full border-accent bg-accent text-accent-foreground hover:bg-transparent hover:text-accent hover:border-accent'
              asChild
            >
              <Link href='#'>Sign up</Link>
            </Button>
          </div>
        </div>
      </header>
    </div>
  );
}
