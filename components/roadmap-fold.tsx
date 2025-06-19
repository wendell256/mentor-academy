import { User, Clock, BarChart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const roadmap = [
  {
    tag: 'First 30 Days',
    title: 'First 30 Days',
    instructor: 'John Doe, Senior Data Scientist',
    duration: '12 Weeks',
    level: 'Beginner to Advanced',
    color: 'bg-orange-400',
  },
  {
    tag: 'Month 3',
    title: 'First 30 Days',
    instructor: 'John Doe, Senior Data Scientist',
    duration: '12 Weeks',
    level: 'Beginner to Advanced',
    color: 'bg-emerald-500',
  },
  {
    tag: 'Month 6',
    title: 'First 30 Days',
    instructor: 'John Doe, Senior Data Scientist',
    duration: '12 Weeks',
    level: 'Beginner to Advanced',
    color: 'bg-sky-500',
  },
  {
    tag: 'Month 12',
    title: 'First 30 Days',
    instructor: 'John Doe, Senior Data Scientist',
    duration: '12 Weeks',
    level: 'Beginner to Advanced',
    color: 'bg-green-500',
  },
];

export default function RoadmapSection() {
  return (
    <section className='bg-gradient-to-t from-black/90 to-[#0567FE] text-white py-20 px-6 rounded-3xl max-w-6xl mx-auto'>
      <div className='text-center mb-10 space-y-3'>
        <div className='flex justify-center'>
          <div className='text-4xl bg-[#170032]/50 py-2 px-6 rounded'>
            12-Month Roadmap
          </div>
        </div>
        <p className='max-w-xl mx-auto text-white/80 text-sm'>
          Mentor Academy is unlike any other course or program out there. <br />{' '}
          This is a hands-on complete business launch system with a clear,{' '}
          <br />
          high-impact path to revenue and long-term success.
        </p>
      </div>

      <div className='relative flex flex-col items-center gap-16'>
        {roadmap.map((item, i) => (
          <div key={i} className='relative w-full max-w-md'>
            <div className='absolute top-[-48px] left-1/2 transform -translate-x-1/2 h-12 border-l-2 border-dashed border-white/50'></div>

            <div
              className={`px-6 py-2 rounded-full text-white text-sm font-semibold w-fit mx-auto mb-4 ${item.color}`}
            >
              {item.tag}
            </div>

            <div className='bg-white text-black rounded-xl shadow-md p-6 space-y-4'>
              <h3 className='text-lg font-semibold'>{item.title}</h3>

              <div className='space-y-3 text-sm'>
                <div className='flex items-center gap-2'>
                  <User className='w-4 h-4 text-primary' />
                  <span>
                    <strong>Instructor:</strong> {item.instructor}
                  </span>
                </div>
                <div className='flex items-center gap-2'>
                  <Clock className='w-4 h-4 text-primary' />
                  <span>
                    <strong>Duration:</strong> {item.duration}
                  </span>
                </div>
                <div className='flex items-center gap-2'>
                  <BarChart className='w-4 h-4 text-primary' />
                  <span>
                    <strong>Level:</strong> {item.level}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className='flex justify-center mt-16'>
        <Button className='bg-accent text-primary hover:bg-accent/90 rounded-full px-8 py-5'>
          Join Mentor Academy
        </Button>
      </div>
    </section>
  );
}
