import { Button } from '@/components/ui/button';

import { section5 } from '@/app/constants/sections-data';

const Section5 = () => {
  return (
    <div id='projects' className='custom-container w-full'>
      <div className='flex-between mb-4 flex-row gap-6'>
        <div className=''>
          <h2 className='text-display-xl mb-4 font-bold'>
            {section5.title[0]}{' '}
            <span className='text-primary-300'>{section5.title[1]}</span>
          </h2>
          <p className='text-md max-w-160'>{section5.description}</p>
        </div>
        <Button variant='textArrow2' className='min-w-50'>
          See All
        </Button>
      </div>

      <div className='flex-center h-100 w-full bg-red-500'>
        Portfolio Container
      </div>
    </div>
  );
};

export default Section5;
