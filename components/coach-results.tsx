import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export default function CoachResults() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

      <div className="space-y-6">
        <Badge className="bg-muted text-primary px-3 py-1 rounded-full text-sm w-fit">
          Knowledge for Everyone
        </Badge>

        <h2 className="text-3xl md:text-4xl font-semibold text-primary">
          Consistently<br />deliver results
        </h2>

        <p className="text-foreground text-base max-w-md">
          The best coaches use a proven system. Coach Builder gives you access to industry-leading certifications that include repeatable frameworks, ready-made coaching materials, and step-by-step training.
        </p>

        <Button className="bg-accent hover:bg-accent/90 text-primary rounded-full px-6 py-2">
          Join Mentor Academy
        </Button>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
          <div className="rounded-xl bg-secondary text-white px-6 py-6 shadow-sm">
            <h3 className="text-2xl font-semibold drop-shadow-2xl">4 Steps</h3>
            <p className="text-sm pt-2 drop-shadow-2xl">
              Clear roadmap. Real results. No fluff.
            </p>
          </div>
          <div className="rounded-xl bg-[#FF7751] text-white px-6 py-6 shadow-sm">
            <h3 className="text-2xl font-semibold drop-shadow-2xl">60 Days</h3>
            <p className="text-sm pt-2 drop-shadow-2xl">
              To Launch Your Business<br />with a clear path
            </p>
          </div>
        </div>
      </div>

      <div className="rounded-xl overflow-hidden shadow-md">
        <Image
          src="/images/coach-speaking.png"
          alt="Coach speaking to group"
          width={600}
          height={500}
          className="object-cover w-full h-full"
        />
      </div>
    </section>
  );
}
