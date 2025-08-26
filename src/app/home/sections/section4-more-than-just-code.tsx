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
          <h3 className='text-lg-bold mb-4'>With Me</h3>
          <div className='flex-center mb-4 h-20 w-20 rounded-full bg-white'>
            Ava
          </div>

          <ul className='text-sm-semibold flex flex-col gap-4 text-neutral-600'>
            <li>React Expert</li>
            <li>Precise Website Implementation</li>
            <li>TypeScript Proficiency</li>
            <li>Clean, Maintainable Code</li>
            <li>Responsive Website Development</li>
            <li>Performance Optimization</li>
            <li>UI Design Proficiency (Figma)</li>
          </ul>
        </div>
        <div className='flex-center flex flex-col rounded-2xl bg-neutral-100 p-8 text-center shadow-sm'>
          <h3 className='text-lg-bold mb-4'>Another Talent</h3>
          <div className='flex-center mb-4 h-20 w-20 rounded-full bg-white'>
            Ava
          </div>

          <ul className='text-sm-semibold flex flex-col gap-4 text-neutral-600'>
            <li>Basic React Knowledge</li>
            <li>Inconsistent Design Translation</li>
            <li>Little to No TypeScript Knowledge</li>
            <li>Unstructured Code</li>
            <li>Inconsistent Responsiveness</li>
            <li>Slow and Heavy Websites</li>
            <li>No Design Skills</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Section4;
