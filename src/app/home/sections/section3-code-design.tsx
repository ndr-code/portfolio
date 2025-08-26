import Image from 'next/image';

const data = {
  title: 'Code, Design, and Everything in Between',
  description:
    'These are the technologies that power my workflow and bring ideas to life.',
  cards: [
    {
      id: '1',
      iconPath: '/icons/html-5.svg',
      name: 'HTML',
      description: 'Crafting semantic, accessible HTML structures.',
    },
    {
      id: '2',
      iconPath: '/icons/css.svg',
      name: 'CSS',
      description: 'Designing visually engaging and responsive layouts.',
    },
    {
      id: '3',
      iconPath: '/icons/js.svg',
      name: 'JavaScript',
      description: 'Bringing interactivity and dynamic content to life.',
    },
    {
      id: '4',
      iconPath: '/icons/ts.svg',
      name: 'Typescript',
      description: 'Adding type safety to JavaScript for more robust code.',
    },
    {
      id: '5',
      iconPath: '/icons/react.svg',
      name: 'React',
      description: 'Building user interfaces with reusable components.',
    },
    {
      id: '6',
      iconPath: '/icons/nextjs.svg',
      name: 'Next.js',
      description: 'Building server-rendered React applications with ease.',
    },
    {
      id: '7',
      iconPath: '/icons/tailwind.svg',
      name: 'Tailwind CSS',
      description: 'Utility-first CSS framework for rapid UI development.',
    },
    {
      id: '8',
      iconPath: '/icons/nodejs.svg',
      name: 'Node.js',
      description: "JavaScript runtime built on Chrome's V8 JavaScript engine.",
    },
  ],
};

const Section3 = () => {
  return (
    <div
      id='skills'
      className='custom-container bg-gradient-to-b from-[#9E385E]/0 to-[#9E385E]/10'
    >
      <div className='pb-12 text-center'>
        <h2 className='text-display-xl mb-4 font-bold'>{data.title}</h2>
        <p className='text-md'>{data.description}</p>
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
