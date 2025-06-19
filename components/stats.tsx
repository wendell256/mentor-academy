import React from 'react';

export default function Stats() {
  return (
    <section className='bg-[#A5D0AA]/20 pb-6 pt-20'>
      <div className='mx-auto max-w-7xl flex items-start px-4 gap-x-8 text-primary'>
        <div className='relative flex items-start justify-center gap-4 py-8'>
          <span className='absolute right-[-15px] top-1/2 -translate-y-1/2 h-[56px] w-px bg-gray-300'></span>
          <span className='text-2xl md:text-5xl font-bold text-[#FF7751] leading-none'>
            12 Month
          </span>
          <span className='text-gray-500 text-sm md:text-base leading-tight mt-1'>
            Mentorship
            <br />
            Journey
          </span>
        </div>
        <div className='flex items-start justify-center gap-4 py-8'>
          <span className='text-2xl md:text-5xl font-bold text-[#FF7751] leading-none'>
            100%
          </span>
          <span className='text-gray-500 text-sm md:text-base leading-tight mt-1'>
            Systemized
            <br />
            Setup
          </span>
        </div>
      </div>
    </section>
  );
}
