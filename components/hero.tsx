import Image from 'next/image';
import { FaPlay } from 'react-icons/fa6';
import { Button } from '@/components/ui/button';
import { dmSans } from '@/fonts/fonts';

export default function Hero() {
  return (
    <section className='relative overflow-hidden bg-chart-5 hero-grid py-16 md:py-24'>
      <div className='relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 md:grid-cols-2 md:gap-12'>
        <div className='flex flex-col justify-center gap-6 text-white'>
          <div className='whitespace-pre-line'>
            <div className='text-3xl font-light leading-tight sm:text-4xl lg:text-5xl'>
              Launch Your
            </div>
            <div className='text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl'>
              Mentoring
            </div>
            <div className='text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl'>
              Business
            </div>
            <div className='text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl text-secondary/70'>
              in 60 days
            </div>
          </div>
          <div className={`${dmSans.variable} text-background text-base`}>
            Proven system to turn your expertise into a thriving mentorship
            practice–fast. No guesswork, no overwhelm.
          </div>
          <Button className='w-fit bg-accent text-accent-foreground rounded-full hover:bg-accent/90 py-6'>
            Join Mentor Academy
          </Button>
        </div>
        <div className='relative flex items-center justify-center'>
          <Image
            src='/images/hero_video_preview.png'
            alt='Video preview'
            width={640}
            height={360}
            className='rounded-xs object-cover'
          />
          <div className='absolute inset-0 rounded-lg bg-gradient-to-t from-chart-5/80 to-transparent' />
          <div className='absolute flex items-center justify-center size-24 rounded-full bg-white/10 backdrop-blur-md'>
            <button className='flex size-16 items-center justify-center rounded-full bg-white/20 backdrop-blur text-white'>
              <FaPlay className='h-8 w-8' />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
