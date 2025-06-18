import React from 'react';

export default function Stats() {
  return (
    <section className='bg-[#A5D0AA]/20'>
      <div className='mx-auto grid max-w-7xl grid-cols-2 md:grid-cols-4 px-4 text-primary'>
        <div className='relative flex items-start justify-center gap-4 py-8'>
          <span className='absolute right-[-15px] top-1/2 -translate-y-1/2 h-[56px] w-px bg-gray-300'></span>
          <span className='text-[42px] font-bold text-[#FF7751] leading-none'>
            12 Month
          </span>
          <span className='text-gray-500 leading-tight'>
            Mentorship
            <br />
            Journey
          </span>
        </div>
        <div className='flex items-start justify-center gap-4 py-8'>
          <span className='text-[42px] font-bold text-[#FF7751] leading-none'>
            100%
          </span>
          <span className='text-gray-500 leading-tight'>
            Systemized
            <br />
            Setup
          </span>
        </div>
        <div className='hidden md:block'></div>
        <div className='hidden md:block'></div>
      </div>
    </section>
  );
}
