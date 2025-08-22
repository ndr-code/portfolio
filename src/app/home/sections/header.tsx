const Header = () => {
  return (
    <div className='fixed top-4 z-50'>
      <ul className='text-md flex-center flex h-12 flex-row gap-6 rounded-full bg-neutral-950/20 px-6 text-white'>
        <li className='p-2'>Home</li>
        <li className='p-2'>About</li>
        <li className='p-2'>Skill</li>
        <li className='p-2'>Projects</li>
        <li className='p-2'>FAQ</li>
        <li className='p-2'>Contact</li>
      </ul>
    </div>
  );
};

export default Header;
