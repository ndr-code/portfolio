import Image from 'next/image';
import { BsMouse } from 'react-icons/bs';

import { heroTitle } from '@/app/constants/hero-data';

const HeroTitle = () => {
  return (
    <div className={`absolute inset-0`}>
      {/* Badge */}

      <div className='text-neutral-25 text-md-semibold border-primary-300 bg-primary-500 flex-center absolute top-1/2 left-1/2 z-5 -translate-x-1/2 -translate-y-[calc(50%+250px)] gap-2 rounded-full border-2 px-4 py-2 text-center'>
        <div className='bg-primary-200 h-4 w-4 animate-pulse rounded-full'></div>
        <p>Available for Hire</p>
      </div>

      {/* Junior */}

      <div className='text-neutral-25 font-bonheur center-position absolute z-25 -translate-x-[calc(50%+303px)] -translate-y-[calc(50%+215px)] -rotate-[12.34deg] text-[120px]'>
        Junior
      </div>

      {/* Profile Picture */}

      <Image
        src={heroTitle.profile.src}
        alt={heroTitle.profile.alt}
        fill
        className='z-20 object-contain object-bottom'
        priority
      />

      {/* Background text with fill */}

      <div className='absolute top-1/2 left-1/2 z-10 flex h-full w-full -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center text-center'>
        <h1 className='font-anton text-secondary-100 text-[180px] leading-20'>
          {heroTitle.main}
        </h1>
        <h1 className='font-anton text-secondary-100 text-[165px]'>
          {heroTitle.sub}
        </h1>
      </div>

      {/* Overlay text with stroke */}

      <div className='absolute top-1/2 left-1/2 z-30 flex h-full w-full -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center text-center'>
        <h1 className='font-anton text-stroke-0 text-[180px] leading-20 text-transparent'>
          {heroTitle.main}
        </h1>
        <h1 className='font-anton text-stroke-2 text-[165px] text-transparent'>
          {heroTitle.sub}
        </h1>
      </div>

      {/* Star Icons */}

      <div className=''>
        <Image
          src='/star.svg'
          alt='Star Icon'
          className='center-position absolute z-5 -translate-x-[calc(50%+340px)] -translate-y-[calc(50%+35px)] animate-pulse'
          width={160}
          height={160}
        />
        <Image
          src='/star.svg'
          alt='Star Icon'
          className='center-position absolute z-5 -translate-x-[calc(50%-250px)] -translate-y-[calc(50%-260px)] rotate-60 animate-pulse'
          width={160}
          height={160}
        />
      </div>

      {/* Background Art */}

      <div>
        <Image
          src='/hero-bg-art.png'
          alt='Background Art'
          className='absolute inset-0 z-0 animate-pulse'
          fill
          priority
        />
      </div>

      {/* Scroll Down */}

      <div className='flex-center text-primary-100 text-md-semibold absolute bottom-10 left-1/2 z-50 -translate-x-1/2 gap-2 text-sm font-medium'>
        Scroll Down <BsMouse className='h-6 w-6 animate-bounce' />
      </div>
    </div>
  );
};

export default HeroTitle;
