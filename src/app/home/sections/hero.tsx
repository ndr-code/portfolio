'use client';

import HeroDescription from './hero/HeroDescription';
import HeroStats from './hero/HeroStats';
import HeroTechStack from './hero/HeroTechStack';
import HeroTitle from './hero/HeroTitle';

const Hero = () => {
  return (
    <div
      id='home'
      className='bg-primary-400 relative h-screen w-screen overflow-hidden'
    >
      <HeroTitle />
      <HeroTechStack />
      <HeroDescription />
      <HeroStats />
    </div>
  );
};

export default Hero;
