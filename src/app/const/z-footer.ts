import { FaMediumM } from 'react-icons/fa';
import { RiLinkedinFill, RiTwitterXFill } from 'react-icons/ri';
import { TbBrandGithubFilled } from 'react-icons/tb';

export const footer = {
  copyright: '© 2025 Tri Aji. All rights reserved.',
  iconLinks: [
    {
      id: '1',
      name: 'linkedin',
      icon: RiLinkedinFill,
      url: 'https://www.linkedin.com/in/tri-aji-prabandaru-76200742/',
    },
    {
      id: '2',
      name: 'github',
      icon: TbBrandGithubFilled,
      url: 'https://github.com/ndr-code',
    },
    {
      id: '3',
      name: 'x',
      icon: RiTwitterXFill,
      url: 'https://x.com/notadevright',
    },
    {
      id: '4',
      name: 'medium',
      icon: FaMediumM,
      url: 'https://medium.com/@notadevright',
    },
  ],
};
