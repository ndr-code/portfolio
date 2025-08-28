'use client';
import { useEffect, useState } from 'react';

import { headerNavlink } from '@/app/constants/header-data';

const Header = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let scrollTimer: NodeJS.Timeout;
    <div className='0'>
      <div className=''></div>
    </div>;
    const controlHeader = () => {
      // Hide header when scrolling
      setVisible(false);

      // Clear existing timer
      clearTimeout(scrollTimer);

      // Set new timer to show header after 1 second of no scrolling
      scrollTimer = setTimeout(() => {
        setVisible(true);
      }, 100);
    };

    window.addEventListener('scroll', controlHeader);

    return () => {
      window.removeEventListener('scroll', controlHeader);
      clearTimeout(scrollTimer);
    };
  }, []);

  return (
    <div
      className={`fixed top-4 z-50 transition-transform duration-300 ${
        visible ? 'translate-y-0' : '-translate-y-20'
      }`}
    >
      <ul className='text-md flex-center flex h-12 flex-row gap-6 rounded-full bg-neutral-950/20 px-6 text-white backdrop-blur-sm'>
        {headerNavlink.map((link) => (
          <li key={link.label} className='p-2'>
            <button
              onClick={() => {
                const element = document.getElementById(link.path);
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className='hover:text-primary-300 cursor-pointer transition-colors'
            >
              {link.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Header;
