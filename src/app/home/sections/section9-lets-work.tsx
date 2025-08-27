import { section9 } from '@/app/const/sections';

const Section9 = () => {
  return (
    <div id='contact' className='custom-container w-full'>
      <div className='w-full text-center'>
        <h2 className='text-display-xl mb-4 font-bold'>{section9.title}</h2>
        <p className='text-md'>{section9.description}</p>
      </div>
    </div>
  );
};

export default Section9;
