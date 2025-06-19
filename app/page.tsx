import Hero from '@/components/hero';
import MentorIntro from '@/components/mentor-intro';
import Stats from '@/components/stats';

export default function Home() {
  return (
    <main>
      <Hero />
      <Stats />
      <MentorIntro />
    </main>
  );
}
