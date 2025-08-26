const data = {
  cards: [
    {
      id: 1,
      icon: '⚙️',
      title: 'COMPONENT-BASED DEVELOPMENT',
      content:
        'Reusable, scalable code built with modern frameworks like React or Vue.',
    },
    {
      id: 2,
      icon: '🎨',
      title: 'PIXEL-PERFECT UI IMPLEMENTATION',
      content:
        'Translating design into high-fidelity user interfaces with attention to detail.',
    },
    {
      id: 3,
      icon: '📱',
      title: 'RESPONSIVE & ACCESSIBLE DESIGN',
      content:
        'Optimized layouts that work seamlessly across all screen sizes and devices.',
    },
  ],
};

const Section2 = () => {
  return (
    <div className='custom-container flex-center flex flex-row gap-20'>
      {data.cards.map((card) => (
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
