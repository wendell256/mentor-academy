import { ImQuotesRight } from 'react-icons/im';

import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

export default function ReviewCard() {
  return (
    <div className='bg-white relative mt-10 md:mr-10 md:mt-36 lg:mt-0 lg:absolute lg:right-0 md:top-[-60px] rounded-lg shadow-md/30 flex flex-row items-center gap-4 py-2 px-6 max-w-[500px]'>
      <Avatar className='h-20 w-20 md:h-24 md:w-24 shadow-md/25'>
        <AvatarImage src='/images/michael.webp' alt='Michael T.' />
        <AvatarFallback>MT</AvatarFallback>
      </Avatar>
      <div className='flex-1'>
        <div className='flex justify-end'>
          <ImQuotesRight className='w-6 h-6 text-secondary mb-2' />
        </div>
        <p className='text-sm sm:text-base text-[#6A6A6A]'>
          &quot;Landed my first executive client in 8 weeks already making more
          impact than in my last career.&quot;
        </p>
        <p className='font-bold text-primary'>Michael T.</p>
        <p className='text-[#6A6A6A] text-xs'>
          Former CFO, Now Leadership Mentor
        </p>
      </div>
    </div>
  );
}
