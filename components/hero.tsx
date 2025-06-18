import Image from 'next/image'
import { Play } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-chart-5 hero-grid py-16 md:py-24">
      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 md:grid-cols-2 md:gap-12">
        <div className="flex flex-col justify-center gap-6">
          <div className="whitespace-pre-line text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            {`Launch Your\nMentoring\nBusiness\nin 60 days`}
          </div>
          <p className="text-muted-foreground text-base">
            proven system to turn your expertise into a thriving mentorship practice–fast. No guesswork, no overwhelm.
          </p>
          <Button className="w-fit bg-accent text-accent-foreground hover:bg-accent/90">
            Join Mentor Academy
          </Button>
        </div>
        <div className="relative flex items-center justify-center">
          <Image
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80"
            alt="Video preview"
            width={640}
            height={360}
            className="rounded-lg object-cover"
            unoptimized
          />
          <div className="absolute inset-0 rounded-lg bg-background/60" />
          <button className="absolute flex size-16 items-center justify-center rounded-full bg-accent text-accent-foreground">
            <Play className="h-8 w-8" />
          </button>
        </div>
      </div>
    </section>
  )
}