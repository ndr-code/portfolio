import Image from 'next/image';

const data = {
  title: 'Code, Design, and Everything in Between',
  description:
    'These are the technologies that power my workflow and bring ideas to life.',
  cards: [
    {
      id: '1',
      iconPath: '/html-icon.png',
      name: 'HTML',
      description: 'Crafting semantic, accessible HTML structures.',
    },
    {
      id: '2',
      iconPath: '/css-icon.png',
      name: 'CSS',
      description: 'Designing visually engaging and responsive layouts.',
    },
    {
      id: '3',
      iconPath: '/javascript-icon.png',
      name: 'JavaScript',
      description: 'Bringing interactivity and dynamic content to life.',
    },
    {
      id: '4',
      iconPath: '/react-icon.png',
      name: 'React',
      description: 'Building user interfaces with reusable components.',
    },
    {
      id: '5',
      iconPath: '/nextjs-icon.png',
      name: 'Next.js',
      description: 'Building server-rendered React applications with ease.',
    },
    {
      id: '6',
      iconPath: '/tailwind-icon.png',
      name: 'Tailwind CSS',
      description: 'Utility-first CSS framework for rapid UI development.',
    },
    {
      id: '7',
      iconPath: '/radixui-icon.png',
      name: 'Radix UI',
      description:
        'Unstyled, components for building high-quality design systems.',
    },
    {
      id: '8',
      iconPath: '/motion-icon.png',
      name: 'Motion',
      description: 'Creating smooth, performant animations and transitions.',
    },
  ],
};

const Section3 = () => {
  return (
    <div className='custom-container'>
      <div className='pb-12 text-center'>
        <h1 className='text-display-xl font-semibold'>{data.title}</h1>
        <p className='text-sm'>{data.description}</p>
      </div>
      <div className='flex-center flex flex-wrap gap-5'>
        {data.cards.map((card) => (
          <div
            key={card.id}
            className='bg-secondary-100 flex-center m-4 flex h-70 w-55 flex-col rounded-full p-4'
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
            <h3 className='text-md pt-3 font-semibold'>{card.name}</h3>
            <p className='w-40 text-center text-sm'>{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section3;
