import * as React from 'react';
import Link from 'next/link';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

export function Header({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <header className={cn('bg-background border-b', className)} {...props}>
      <div className='mx-auto flex h-14 max-w-7xl items-center justify-between px-4'>
        <Link href='/' className='font-semibold'>
          Mentor Academy
        </Link>
        <nav className='flex items-center gap-4'>
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
        <div>
          <Button variant='outline' asChild>
            <Link href='#'>Login</Link>
          </Button>
          <Button variant='outline' asChild>
            <Link href='#'>Sign up</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
