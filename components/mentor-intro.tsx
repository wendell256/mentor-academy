import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Book, UserCheck } from 'lucide-react';

export default function MentorIntro() {
  return (
    <section className='max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-2 gap-10 items-center'>
      <div className='rounded-xl overflow-hidden shadow-md'>
        <Image
          src='/images/mentor-intro.png'
          alt='Group mentorship discussion'
          width={600}
          height={500}
          className='object-cover w-full h-full shadow-2xl/80'
        />
      </div>

      <div className='space-y-6'>
        <Badge className='bg-secondary text-white px-3 py-1 rounded-full shadow-2xl/30'>
          About Mentor Academy
        </Badge>

        <h2 className='text-3xl md:text-4xl font-base tracking-tight text-primary'>
          You Have the Wisdom.
          <br />
          But Do You Have the
          <br />
          System and Blueprint?
        </h2>

        <p className='text-foreground max-w-md'>
          Most experienced professionals stall because they lack a clear system,
          roadmap, and way to reach the right clients.
        </p>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <div className='gap-4'>
            <div className='flex items-start gap-4'>
              <div className='bg-[#011432] text-white p-3 rounded-md'>
                <Book className='w-5 h-5' />
              </div>
              <div>
                <h4 className='font-semibold text-primary'>
                  A Roadmap That Grows With You
                </h4>
              </div>
            </div>
            <p className='text-sm text-foreground'>
              Follow a clear, structured plan to launch and grow your mentoring
              business with confidence.
            </p>
          </div>

          <div className='gap-4'>
            <div className='flex items-start gap-4'>
              <div className='bg-[#011432] text-white p-3 rounded-md'>
                <UserCheck className='w-5 h-5' />
              </div>
              <div>
                <h4 className='font-semibold text-primary'>
                  Personalized Guidance, Every Step
                </h4>
              </div>
            </div>
            <p className='text-sm text-foreground'>
              Start strong with your offer, master your message, and scale with
              confidence—never feel lost.
            </p>
          </div>
        </div>

        <Button className='bg-accent rounded-full hover:bg-accent/90 text-primary w-fit'>
          Join Mentor Academy
        </Button>
      </div>
    </section>
  );
}
