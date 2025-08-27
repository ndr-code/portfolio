import { IconType } from 'react-icons';

import { footer } from '@/app/const/z-footer';

interface FooterLink {
  id: string;
  name: string;
  icon: IconType;
  url: string;
}

const Footer = () => {
  return (
    <div className='text-md flex-between flex h-22 w-full flex-row bg-neutral-950 px-30 text-neutral-50'>
      <div>{footer.copyright}</div>
      <div className='flex flex-row justify-center gap-4'>
        {footer.iconLinks.map((link: FooterLink) => (
          <a
            href={link.url}
            target='_blank'
            rel='noopener noreferrer'
            key={link.id}
            className='flex-center flex h-10 w-10 rounded-full border-1 border-neutral-800'
          >
            {<link.icon size={20} />}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Footer;
