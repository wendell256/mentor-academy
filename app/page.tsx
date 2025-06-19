import Hero from '@/components/hero';
import MentorIntro from '@/components/mentor-intro';
import ReviewCard from '@/components/review-card';
import Stats from '@/components/stats';

export default function Home() {
  return (
    <main>
      <Hero />
      <div className='relative h-0 flex items-center justify-center md:items-center md:justify-end'>
        <ReviewCard />
      </div>
      <Stats />
      <MentorIntro />
    </main>
  );
}
