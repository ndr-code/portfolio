'use client';
import Image from 'next/image';
import { PiMicrophoneFill } from 'react-icons/pi';

import { Button } from '@/components/ui/button';

const HeroTitle = () => {
  return (
    <div className={`absolute inset-0`}>
      <Image
        src='/profile-hero-purple-4.png'
        alt='Hero Image'
        fill
        className='z-20 object-contain object-bottom'
        priority
      />
      <div className='absolute top-1/2 left-1/2 z-10 flex h-full w-full -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center text-center'>
        <h1 className='font-anton text-secondary-100 text-[180px] leading-20'>
          FRONTEND
        </h1>
        <h1 className='font-anton text-secondary-100 text-[165px]'>
          DEVELOPER
        </h1>
      </div>
      <div className='absolute top-1/2 left-1/2 z-30 flex h-full w-full -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center text-center'>
        <h1 className='font-anton text-[180px] leading-20 text-transparent'>
          FRONTEND
        </h1>
        <h1 className='font-anton text-stroke-2 text-[165px] text-transparent'>
          DEVELOPER
        </h1>
      </div>
    </div>
  );
};

const Description = () => {
  return (
    <div
      className={`items-left text-primary-100 absolute bottom-20 left-30 z-50 flex flex-col gap-4`}
    >
      <div className='border-primary-300 flex-center inline-flex h-16 w-16 rounded-full border-2'>
        <PiMicrophoneFill className='h-7 w-7' />
      </div>
      <div className='text-xl-bold text-primary-100'>Hi, I&apos;m Tri Aji</div>
      <div className='text-primary-100 max-w-110 text-lg'>
        a frontend developer passionate about creating seamless digital
        experiences that are fast, responsive, and user-friendly.
      </div>
    </div>
  );
};

const TechStack = () => {
  const data = {
    title: 'Tech Stack',
    items: [
      { name: 'JavaScript', icon: '/icons/js2.svg' },
      { name: 'React', icon: '/icons/react.svg' },
      { name: 'Next.js', icon: '/icons/nextjs.svg' },
      { name: 'Tailwind CSS', icon: '/icons/tailwind.svg' },
    ],
  };

  return (
    <div className='absolute top-20 left-30 z-50'>
      <div className='border-primary-300 flex flex-col gap-5 rounded-full border-2 px-5 py-5'>
        {data.items.map((item) => (
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

const Stats = () => {
  const stats = [
    { title: 'Years Experience', value: '2+' },
    { title: 'Client Satisfaction', value: '99%' },
    { title: 'Project Delivered', value: '3+' },
    { title: 'Clients Worldwide', value: '50' },
  ];

  return (
    <div className='font-montserrat text-primary-100 absolute right-30 bottom-20 z-50'>
      <div className='flex flex-col gap-8 py-5'>
        {stats.map((stat) => (
          <div
            key={stat.title}
            className='border-primary-300 flex flex-col border-b-2 pb-4 last:border-b-0'
          >
            <h1 className='text-display-2xl font-bold'>{stat.value}</h1>
            <p className='text-primary-100/80 text-md-semibold'>{stat.title}</p>
          </div>
        ))}
      </div>
      <Button
        variant='textArrow1'
        className='min-w-55 cursor-pointer'
        onClick={() => {
          const contactSection = document.getElementById('contact');
          contactSection?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        Contact Me
      </Button>
    </div>
  );
};

const Hero = () => {
  return (
    <div
      id='home'
      className='bg-primary-400 relative h-screen w-screen overflow-hidden'
    >
      <HeroTitle />
      <TechStack />
      <Description />
      <Stats />
    </div>
  );
};

export default Hero;
