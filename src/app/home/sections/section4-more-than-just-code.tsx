import { Check } from 'lucide-react';
import { X } from 'lucide-react';
import Image from 'next/image';
import { FaUser } from 'react-icons/fa6';

import { section4 } from '@/app/const/sections';

const Section4 = () => {
  return (
    <div className='custom-container w-full'>
      <div className='w-full text-center'>
        <h2 className='text-display-xl mb-4 font-bold'>{section4.title}</h2>
        <p className='text-md mb-12'>{section4.description}</p>
      </div>
      <div className='mt-10 grid w-full grid-cols-1 gap-6 md:grid-cols-2'>
        <div className='flex-center bg-secondary-100 flex flex-col rounded-2xl p-8 text-center shadow-sm'>
          <h3 className='text-lg-bold mb-4'>{section4.cards[0].title}</h3>
          <div className='flex-center bg-primary-300 mb-8 h-25 w-25 rounded-full'>
            <Image
              src='/profile-hero-purple-6.png'
              alt='Avatar'
              width={55}
              height={55}
              className='scale-150 rounded-full'
            />
          </div>

          <ul className='text-lg-semibold flex-center mb-4 flex flex-col gap-6 text-neutral-600'>
            {section4.cards[0].points.map((point) => (
              <li key={point} className='flex items-center gap-2'>
                <Check />
                {point}
              </li>
            ))}
          </ul>
        </div>
        <div className='flex-center bg-neutral-25 flex flex-col rounded-2xl border-2 border-neutral-300 p-8 text-center shadow-sm'>
          <h3 className='text-lg-bold mb-4'>{section4.cards[1].title}</h3>
          <div className='flex-center mb-8 h-25 w-25 rounded-full bg-neutral-300'>
            <FaUser className='h-12 w-12 text-neutral-100' />
          </div>

          <ul className='text-lg-semibold flex-center mb-4 flex flex-col gap-6 text-neutral-600'>
            {section4.cards[1].points.map((point) => (
              <li key={point} className='flex items-center gap-2'>
                <X className='text-red-600' />
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Section4;
