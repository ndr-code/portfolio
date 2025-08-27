import { section7 } from '@/app/const/sections';

const Section7 = () => {
  return (
    <div className='custom-container w-full'>
      <div>
        <div className='w-full text-center'>
          <h2 className='text-display-xl mb-4 font-bold'>{section7.title}</h2>
          <p className='text-md'>{section7.description}</p>
        </div>
      </div>
      <div className='mt-8'>
        {section7.testimonials.map((testimonial) => (
          <div key={testimonial.id} className='mb-4'>
            <h3 className='text-lg font-semibold'>{testimonial.name}</h3>
            <p className='text-md'>{testimonial.feedback}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section7;
