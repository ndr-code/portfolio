import Image from 'next/image';

import { heroTechStack } from '@/app/const/hero';

const HeroTechStack = () => {
  return (
    <div className='absolute top-20 left-30 z-50'>
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
    </div>
  );
};

export default HeroTechStack;
