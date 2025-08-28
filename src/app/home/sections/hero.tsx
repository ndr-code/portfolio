'use client';

import HeroDescription from './hero/HeroDescription';
import HeroStats from './hero/HeroStats';
import HeroTitle from './hero/HeroTitle';

const Hero = () => {
  return (
    <div
      id='home'
      className='bg-primary-400 relative h-screen w-full overflow-hidden'
    >
      <HeroTitle />
      <HeroDescription />
      <HeroStats />
    </div>
  );
};

export default Hero;
