import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { CheckSquare2 } from 'lucide-react';

export default function MentorFirstStep() {
  return (
    <section className='max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-2 gap-10 items-center'>
      <div className='space-y-6'>
        <h2 className='text-3xl md:text-4xl font-semibold tracking-tight text-primary'>
          Take the First Step <br /> Toward Your Mentor <br /> Business
        </h2>
        <p className='text-foreground max-w-md'>
          Turn your experience into income with our proven mentorship system.
        </p>

        <ul className='space-y-4 text-foreground'>
          {[
            'Sales-driving email sequences',
            'High-converting website templates',
            'Pre-written lead generators',
          ].map((item) => (
            <li key={item} className='flex items-start gap-3'>
              <CheckSquare2 className='text-blue-600 w-5 h-5 mt-1' />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <Button className='mt-4 bg-accent text-accent-foreground rounded-full hover:bg-accent/90'>
          Join Mentor Academy
        </Button>
      </div>

      <div className='rounded-xl overflow-hidden shadow-md'>
        <Image
          src='/images/mentor-business-step.png'
          alt='Mentor business couple'
          width={540}
          height={640}
          className='object-cover'
        />
      </div>
    </section>
  );
}
