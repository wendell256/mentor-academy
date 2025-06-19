import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function MentorBanner() {
  return (
    <div className='max-w-7xl mx-auto'>
      <div className='relative w-full rounded-2xl overflow-hidden my-12'>
        <Image
          src='/images/mentor-audience.png'
          alt='Mentor Audience'
          layout='fill'
          objectFit='cover'
          className='absolute inset-0 z-0'
          priority
        />
        <div className='relative z-10 flex flex-col items-center justify-center px-6 py-16 text-center bg-gradient-to-t from-chart-5'>
          <h2 className='text-2xl md:text-4xl font-semibold text-white max-w-3xl'>
            Transforms Experienced Professionals into{' '}
            <br className='hidden md:block' />
            <span className='text-accent'>Successful Mentorpreneurs</span>
          </h2>
          <Button className='mt-6 rounded-full bg-accent text-primary hover:bg-accent/90'>
            Join Mentor Academy
          </Button>
        </div>
      </div>
    </div>
  );
}
