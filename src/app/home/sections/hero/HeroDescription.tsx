import Image from 'next/image';
import { PiMicrophoneFill } from 'react-icons/pi';

import { heroDescription } from '@/app/const/hero';
import { heroTechStack } from '@/app/const/hero';

const HeroDescription = () => {
  return (
    <div className='absolute top-1/2 left-30 z-50 flex -translate-y-1/2 flex-col items-start justify-between gap-20'>
      <div className='border-primary-300 flex flex-col gap-5 rounded-full border-2 px-4 py-4'>
        {heroTechStack.items.map((item) => (
          <span
            key={item.name}
            className='border-primary-300 flex h-[70px] w-[70px] items-center justify-center rounded-full border-2'
          >
            <Image
              src={item.icon}
              alt={`${item.name} Icon`}
              width={40}
              height={40}
              className='object-contain'
            />
          </span>
        ))}
      </div>

      <div className={`items-left text-primary-100 flex flex-col gap-4`}>
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
    </div>
  );
};

export default HeroDescription;
