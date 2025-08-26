import { Button } from '@/components/ui/button';

const Section5 = () => {
  return (
    <div id='projects' className='custom-container w-full'>
      <div className='flex-between mb-4 flex-row gap-6'>
        <div className=''>
          <h2 className='text-display-xl mb-4 font-bold'>
            Design to <span className='text-primary-300'>Code Accuracy</span>
          </h2>
          <p className='text-md max-w-160'>
            We translated design mockups into pixel-perfect, responsive
            components, ensuring a smooth user experience across all devices.
          </p>
        </div>
        <Button variant='textArrow2'>See All</Button>
      </div>

      <div className='flex-center h-100 w-full bg-red-100'>
        Portfolio Container
      </div>
    </div>
  );
};

export default Section5;
