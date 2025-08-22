import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <div className='bg-primary-400 flex-center relative flex h-screen w-screen flex-col gap-4'>
      <Button variant='textArrow1'>Contact Me</Button>
      <Button variant='textArrow2'>See All</Button>
      <Button variant='arrow'></Button>
      <Button variant='default'>Let&apos;s Talk</Button>
    </div>
  );
};

export default Hero;
