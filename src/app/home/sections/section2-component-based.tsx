import { section2 } from '@/app/const/sections';

const Section2 = () => {
  return (
    <div className='custom-container flex-center flex flex-row gap-20'>
      {section2.cards.map((card) => (
        <div key={card.id} className=''>
          <div className='flex-center flex h-16 w-16 rounded-full border-1 border-neutral-300 text-3xl'>
            {card.icon}
          </div>
          <h3 className='text-display-xs pt-4 text-xl font-bold'>
            {card.title}
          </h3>
          <p className='pt-4 text-sm'>{card.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Section2;
