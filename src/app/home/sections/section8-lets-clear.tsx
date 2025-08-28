import { section8 } from '@/app/constants/sections-data';

const Section8 = () => {
  return (
    <div id='faq' className='custom-container w-full bg-neutral-100'>
      <div>
        <div className='w-full text-center'>
          <h2 className='text-display-xl mb-4 font-bold'>{section8.title}</h2>
          <p className='text-md'>{section8.description}</p>
        </div>
      </div>
      <div className='mt-8'>
        {section8.questions.map((question) => (
          <div key={question.id} className='mb-4'>
            <h3 className='text-lg font-semibold'>{question.question}</h3>
            <p className='text-md'>{question.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section8;
