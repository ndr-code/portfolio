import Image from 'next/image';

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

      <div className='flex-center gap-4'>
        {section5.projects.map((project) => (
          <div
            key={project.id}
            className='project-card p-4 transition-all duration-300 hover:scale-110'
          >
            <div className='w-full overflow-hidden rounded-4xl bg-neutral-200 p-4'>
              <Image
                src={project.imagePath}
                alt={project.name}
                width={360}
                height={360}
                className='rounded-2xl'
              />
            </div>
            <div className='relative rounded-4xl bg-neutral-200 p-4 text-left'>
              <h3 className='mb-4 text-lg font-bold'>{project.name}</h3>
              <div className='border-2 border-t border-neutral-300'></div>
              <p className='text-md mt-4'>{project.description}</p>
              <a
                href={project.link}
                target='_blank'
                rel='noopener noreferrer'
                className='absolute top-1/2 right-4 -translate-y-1/2'
                tabIndex={-1}
              >
                <Button
                  variant='arrow'
                  className='h-12 w-12 scale-120'
                  aria-label={`Go to ${project.name}`}
                />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section5;
