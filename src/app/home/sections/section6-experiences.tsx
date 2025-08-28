import Image from 'next/image';

import { section6 } from '@/app/constants/sections-data';

const Section6 = () => {
  return (
    <div className='custom-container text-neutral-25 w-full gap-8 bg-neutral-950'>
      <div className='flex-between flex-row gap-6'>
        <h2 className='text-display-xl mb-4 max-w-100 font-bold'>
          {section6.title[0]}{' '}
          <span className='text-secondary-100'>{section6.title[1]}</span>{' '}
          {section6.title[2]}
        </h2>
        <p className='text-md max-w-80'>{section6.description}</p>
      </div>
      <div className='flex-center flex-col'>
        {section6.experiences.map((experience) => (
          <div
            key={experience.id}
            className='experience-card flex flex-row gap-40 border-t-2 border-neutral-800 p-15'
          >
            <div>
              <div className='pb-4 text-sm'>{experience.period}</div>
              <div className='text-xl-bold'>{experience.position}</div>
            </div>
            <div className='flex items-start justify-center'>
              <div className='flex-center rounded-2xl border-2 border-neutral-800 px-2 py-3'>
                <div className='w-full overflow-hidden rounded-sm border-2 border-neutral-800 p-4'>
                  <Image
                    src={experience.imagePath}
                    alt={experience.company}
                    width={480}
                    height={150}
                    className=''
                  />
                </div>
              </div>
            </div>
            <div className='rounded-4xl text-left'>
              <p className='text-md'>{experience.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section6;
