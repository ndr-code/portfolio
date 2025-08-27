import { section4 } from '@/app/const/sections';

const Section4 = () => {
  return (
    <div className='custom-container w-full'>
      <div className='w-full text-center'>
        <h2 className='text-display-xl mb-4 font-bold'>More Than Just Code</h2>
        <p className='text-md'>
          We care about design, performance, and user experience all in one.
        </p>
      </div>
      <div className='mt-10 grid w-full grid-cols-1 gap-6 md:grid-cols-2'>
        <div className='flex-center bg-secondary-100 flex flex-col rounded-2xl p-8 text-center shadow-sm'>
          <h3 className='text-lg-bold mb-4'>{section4.cards[0].title}</h3>
          <div className='flex-center mb-4 h-20 w-20 rounded-full bg-white'>
            Ava
          </div>

          <ul className='text-sm-semibold flex flex-col gap-4 text-neutral-600'>
            {section4.cards[0].points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>
        <div className='flex-center flex flex-col rounded-2xl bg-neutral-100 p-8 text-center shadow-sm'>
          <h3 className='text-lg-bold mb-4'>{section4.cards[1].title}</h3>
          <div className='flex-center mb-4 h-20 w-20 rounded-full bg-white'>
            Ava
          </div>

          <ul className='text-sm-semibold flex flex-col gap-4 text-neutral-600'>
            {section4.cards[1].points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Section4;
