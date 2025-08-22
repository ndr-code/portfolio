import { FaMediumM } from 'react-icons/fa';
import { RiLinkedinFill, RiTwitterXFill } from 'react-icons/ri';
import { TbBrandGithubFilled } from 'react-icons/tb';

const copyright = '© 2025 Tri Aji. All rights reserved.';

const iconLinks = [
  {
    id: '1',
    name: 'linkedin',
    icon: <RiLinkedinFill />,
    url: 'https://www.linkedin.com/in/tri-aji-prabandaru-76200742/',
  },
  {
    id: '2',
    name: 'github',
    icon: <TbBrandGithubFilled />,
    url: 'https://github.com/ndr-code',
  },
  {
    id: '3',
    name: 'x',
    icon: <RiTwitterXFill />,
    url: 'https://x.com/notadevright',
  },
  {
    id: '4',
    name: 'medium',
    icon: <FaMediumM />,
    url: 'https://medium.com/@notadevright',
  },
];

const Footer = () => {
  return (
    <div className='text-md flex-between flex h-22 w-full flex-row bg-neutral-950 px-30 text-neutral-50'>
      <div>{copyright}</div>
      <div className='flex flex-row justify-center gap-4'>
        {iconLinks.map((link) => (
          <a
            href={link.url}
            target='_blank'
            rel='noopener noreferrer'
            key={link.id}
            className='flex-center flex h-10 w-10 rounded-full border-1 border-neutral-800'
          >
            {link.icon}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Footer;
