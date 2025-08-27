import { PiMicrophoneFill } from 'react-icons/pi';

import { heroDescription } from '@/app/const/hero';

const HeroDescription = () => {
  return (
    <div
      className={`items-left text-primary-100 absolute bottom-20 left-30 z-50 flex flex-col gap-4`}
    >
      <div className='border-primary-300 flex-center inline-flex h-16 w-16 rounded-full border-2'>
        <PiMicrophoneFill className='h-7 w-7' />
      </div>
      <div className='text-xl-bold text-primary-100'>
        {heroDescription.title}
      </div>
      <div className='text-primary-100 max-w-110 text-lg'>
        {heroDescription.content}
      </div>
    </div>
  );
};

export default HeroDescription;
