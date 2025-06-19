'use client';

import { Phone } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from 'react-icons/fa6';

const socialLinks = [
  {
    name: 'facebook',
    href: '#',
    icon: <FaFacebookF />,
  },
  {
    name: 'twitter',
    href: '#',
    icon: <FaTwitter />,
  },
  {
    name: 'linkedin',
    href: '#',
    icon: <FaLinkedinIn />,
  },
  {
    name: 'instagram',
    href: '#',
    icon: <FaInstagram />,
  },
];

export default function Footer() {
  return (
    <footer className='bg-chart-5 text-foreground pt-16'>
      <div className='max-w-6xl mx-auto px-6 pb-10 flex flex-col md:flex-row justify-between items-center gap-6 border-b border-white/10'>
        <p className='text-sm text-center md:text-left'>
          Aliquet dignissim erat habitasse aliquet tincidunt phasellus ultrices.
        </p>
        <form className='flex w-full md:w-auto max-w-md'>
          <input
            type='email'
            placeholder='Enter your email'
            className='bg-white w-full rounded-l-full px-5 py-3 outline-none text-primary'
          />
          <button
            type='submit'
            className='bg-accent text-accent-foreground px-5 py-3 rounded-r-full font-semibold'
          >
            Subscribe
          </button>
        </form>
      </div>

      <div className='max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-6 gap-10'>
        <div className='space-y-4 md:col-span-4 justify-self-center md:justify-self-start'>
          <div className='flex items-center justify-center md:justify-start gap-2'>
            <Image
              src='/images/logos/ma_main/dark-backgrounds.png'
              alt='Mentor Academy'
              width={250}
              height={220}
            />
          </div>
          <p className='text-sm leading-relaxed max-w-xs text-center md:text-left'>
            Feel free to call us in working hours Mon - Fri
            <br />
            (8:00 - 16:00). Our team will be happy to
            <br />
            help answer your queries
          </p>
          <div className='flex items-center gap-2 text-sm mt-2 justify-self-center md:justify-self-start'>
            <Phone className='w-4 h-4' />
            +1 (333) 000-0000
          </div>

          <div className='flex gap-3 mt-4 justify-self-center md:justify-self-start'>
            {socialLinks.map(({ name, href, icon }) => (
              <a
                key={name}
                href={href}
                className='p-2 rounded-full text-white bg-secondary'
                aria-label={name}
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        <div className='md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm text-foreground justify-self-center md:justify-self-start'>
          <div className='space-y-2 md:self-center'>
            <ul className='space-y-2 text-center md:text-left'>
              <li>
                <Link href='#'>Home</Link>
              </li>
              <li>
                <Link href='#'>About us</Link>
              </li>
              <li>
                <Link href='#'>Courses</Link>
              </li>
              <li>
                <Link href='#'>Instructors</Link>
              </li>
              <li>
                <Link href='#'>Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className='space-y-2 md:self-center'>
            <ul className='space-y-2 text-center md:text-left'>
              <li>
                <Link href='#'>Community</Link>
              </li>
              <li>
                <Link href='#'>Video Guides</Link>
              </li>
              <li>
                <Link href='#'>Documentation</Link>
              </li>
              <li>
                <Link href='#'>Certification</Link>
              </li>
              <li>
                <Link href='#'>Scholarships</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className='border-t border-white/10 text-sm py-6 px-6 flex flex-col md:flex-row justify-between max-w-6xl mx-auto text-foreground text-center md:text-left gap-4'>
        <span>Copyright © 2025 Robokido</span>
        <span>Design by Wendell Enamorado</span>
        <div className='flex gap-4 justify-center md:justify-start'>
          <Link href='#'>Terms of Use</Link>
          <Link href='#'>Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
}
