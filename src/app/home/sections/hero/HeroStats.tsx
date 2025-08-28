import { Button } from '@/components/ui/button';

import { heroStats } from '@/app/constants/hero-data';

const HeroStats = () => {
  return (
    <div className='font-montserrat text-primary-100 absolute top-1/2 right-30 z-50 -translate-y-1/2'>
      <div className='flex flex-col gap-8 py-5'>
        {heroStats.map((stat) => (
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

export default HeroStats;
