import { section1 } from '@/app/constants/sections-data';

const Section1 = () => {
  return (
    <div
      id='about'
      className='custom-container text-display-lg text-weight-500 text-center text-neutral-950'
    >
      {section1.text[0]} <br /> {section1.text[1]}
      <span className='text-primary-300'> {section1.text[2]}</span>{' '}
      {section1.text[3]} <br /> {section1.text[4]}
    </div>
  );
};

export default Section1;
