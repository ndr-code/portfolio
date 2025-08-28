import Image from 'next/image';

import { Button } from '@/components/ui/button';

import { section9 } from '@/app/constants/sections-data';

const Section9 = () => {
  return (
    <div id='contact' className='custom-container flex w-full'>
      <div className='w-full text-left'>
        <h2 className='text-display-xl mb-4 font-bold'>{section9.title}</h2>
        <p className='text-md max-w-lg'>{section9.description}</p>
        <div className='mt-8 flex flex-wrap gap-8'>
          {section9.projects.map((project) => (
            <div key={project.id} className='flex-center mb-4 flex'>
              <Image
                src={project.imagePath}
                alt={project.name}
                width={100}
                height={100}
                className=''
              />
            </div>
          ))}
        </div>
      </div>
      <div className='ml-20 w-full'>
        <form className='mt-8 space-y-4 rounded-2xl p-8 shadow-sm'>
          <div>
            <label
              htmlFor='name'
              className='block text-sm font-medium text-gray-700'
            >
              Name
            </label>
            <input
              type='text'
              id='name'
              name='name'
              placeholder='Enter your name'
              className='focus:border-primary-500 focus:ring-primary-500 mt-1 block w-full rounded-md border-gray-300 p-2 shadow-sm sm:text-sm'
            />
          </div>

          <div>
            <label
              htmlFor='email'
              className='block text-sm font-medium text-gray-700'
            >
              Email
            </label>
            <input
              type='email'
              id='email'
              name='email'
              placeholder='Enter your email'
              className='focus:border-primary-500 focus:ring-primary-500 mt-1 block w-full rounded-md border-gray-300 p-2 shadow-sm sm:text-sm'
            />
          </div>

          <div>
            <label
              htmlFor='message'
              className='block text-sm font-medium text-gray-700'
            >
              Message
            </label>
            <textarea
              id='message'
              name='message'
              rows={4}
              placeholder='Enter your message'
              className='focus:border-primary-500 focus:ring-primary-500 mt-1 block w-full rounded-md border-gray-300 p-2 shadow-sm sm:text-sm'
            ></textarea>
          </div>

          <div>
            <Button type='submit' variant='default' className='w-full'>
              Let&apos;s Talk
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Section9;
