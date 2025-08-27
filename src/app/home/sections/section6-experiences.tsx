import { section6 } from '@/app/const/sections';

const Section6 = () => {
  return (
    <div className='custom-container w-full gap-8 bg-neutral-950 text-white'>
      <div className='flex-between flex-row gap-6'>
        <h2 className='text-display-xl mb-4 max-w-100 font-bold'>
          {section6.title[0]}{' '}
          <span className='text-secondary-100'>{section6.title[1]}</span>{' '}
          {section6.title[2]}
        </h2>
        <p className='text-md max-w-80'>{section6.description}</p>
      </div>
      <div className='flex-center h-100 w-full bg-red-500'>
        Experience Container
      </div>
    </div>
  );
};

export default Section6;
