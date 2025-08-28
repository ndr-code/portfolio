import Image from 'next/image';

import { Button } from '@/components/ui/button';

import { section3 } from '@/app/constants/sections-data';

const Section3 = () => {
  return (
    <div
      id='skills'
      className='custom-container bg-gradient-to-b from-[#9E385E]/0 to-[#9E385E]/10'
    >
      <div className='pb-12 text-center'>
        <h2 className='text-display-xl mb-4 font-bold'>{section3.title}</h2>
        <p className='text-md'>{section3.description}</p>
      </div>
      <div className='flex-center flex flex-wrap gap-5'>
        {section3.cards.map((card) => (
          <div
            key={card.id}
            className={`${card.id % 2 === 0 ? 'bg-neutral-25 border-2 border-neutral-300' : 'bg-secondary-100 border-0'} flex-center m-4 flex h-70 w-55 flex-col rounded-full p-4`}
          >
            <div className='bg-neutral-25 flex-center flex h-20 w-20 rounded-full'>
              <Image
                src={card.iconPath}
                alt={`${card.name} icon`}
                className=''
                width={36}
                height={36}
              />
            </div>
            <h3 className='text-md py-2 font-semibold'>{card.name}</h3>
            <p className='w-40 text-center text-sm leading-6'>
              {card.description}
            </p>
          </div>
        ))}
      </div>
      <div className='flex-center mt-10 gap-8'>
        <Button variant='arrow' className='scale-150 rotate-180' />
        <Button variant='arrow' className='scale-150' />
      </div>
    </div>
  );
};

export default Section3;
