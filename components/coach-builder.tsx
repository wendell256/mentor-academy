import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export default function CoachBuilder() {
  return (
    <section className='max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 items-center gap-10'>
      <div className='rounded-xl overflow-hidden shadow-md'>
        <Image
          src='/images/coach-videocall.png'
          alt='Coach on a video call'
          width={600}
          height={450}
          className='object-cover w-full h-full'
        />
      </div>

      <div className='space-y-6'>
        <Badge className='bg-muted text-primary px-3 py-1 rounded-full text-sm w-fit'>
          Knowledge for Everyone
        </Badge>

        <h2 className='text-3xl md:text-4xl font-semibold tracking-tight text-primary'>
          Land more clients
        </h2>

        <p className='text-foreground text-base max-w-md'>
          If you're not confident in your product and pricing, your clients
          won't be either. Coach Builder helps you create a clear, valuable
          offer and price it so you charge what you're truly worth.
        </p>

        <p className='text-foreground text-base max-w-md'>
          With a recognized certification, clients will instantly perceive your
          added value, making sales conversations easier and more successful.
        </p>

        <p className='text-foreground text-base max-w-md'>
          We'll also help you define your niche so the right clients know you're
          the perfect fit.
        </p>

        <Button className='bg-accent hover:bg-accent/90 text-primary rounded-full px-6 py-2 w-fit'>
          Join Mentor Academy
        </Button>
      </div>
    </section>
  );
}
