import CoachBuilder from '@/components/coach-builder';
import CoachResults from '@/components/coach-results';
import Hero from '@/components/hero';
import MentorBanner from '@/components/mentor-banner';
import MentorFirstStep from '@/components/mentor-first-step';
import MentorIntro from '@/components/mentor-intro';
import ReviewCard from '@/components/review-card';
import Stats from '@/components/stats';
import GrowthFeatures from '../components/growth-features';
import RoadmapSection from '@/components/roadmap-fold';
import FaqAccordion from '@/components/faq-accordion';
import JoinForm from '@/components/join-form';

export default function Home() {
  return (
    <main>
      <Hero />
      <div className='relative h-0 flex items-center justify-center md:items-center md:justify-end'>
        <ReviewCard />
      </div>
      <Stats />
      <MentorIntro />
      <MentorBanner />
      <MentorFirstStep />
      <CoachBuilder />
      <CoachResults />
      <GrowthFeatures />
      <RoadmapSection />
      <FaqAccordion />
      <JoinForm />
    </main>
  );
}
