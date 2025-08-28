'use client';
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from 'framer-motion';
import React, { useState, useEffect } from 'react';

import { navigationData } from '@/app/constants/header-data';

// Ensure each section has a corresponding id in the DOM
const Header = () => {
  // Logic for Header Backdrop

  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrollTimer, setScrollTimer] = useState<NodeJS.Timeout>();

  const { scrollY } = useScroll();
  const background = useTransform(
    scrollY,
    [0, 100],
    ['rgba(0,0,0,0.3)', 'rgba(0,0,0,0.5)']
  );
  const backdropBlur = useTransform(
    scrollY,
    [0, 100],
    ['blur(0px)', 'blur(10px)']
  );

  // Logic for Scrolled Header

  useMotionValueEvent(scrollY, 'change', (latest) => {
    if (latest > lastScrollY) {
      setIsVisible(false);
    }
    setLastScrollY(latest);

    if (scrollTimer) {
      clearTimeout(scrollTimer);
    }

    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    setScrollTimer(timer);
  });

  useEffect(() => {
    return () => {
      if (scrollTimer) {
        clearTimeout(scrollTimer);
      }
    };
  }, [scrollTimer]);

  return (
    <motion.header
      style={{ background, backdropFilter: backdropBlur }}
      className={`fixed top-4 z-50 rounded-full sm:bg-neutral-950/20`}
      animate={{
        y: isVisible ? 0 : -100,
        opacity: isVisible ? 1 : 0,
      }}
      transition={{
        duration: 0.3,
        ease: 'easeInOut',
      }}
    >
      <ul className='text-md flex-center flex h-12 flex-row gap-4 px-6 text-white'>
        {navigationData.map((data) => (
          <li key={data.label}>
            <button
              type='button'
              onClick={() => {
                const sectionId = data.href.replace('#', '');
                const section = document.getElementById(sectionId);
                if (section) {
                  section.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                  });
                } else {
                  console.warn(`Section with id '${sectionId}' not found.`);
                }
              }}
              className='hover:text-primary-150 hover:decoration-primary-150 active:text-primary-150 active:decoration-primary-150 md:text-md cursor-pointer border-none bg-transparent p-4 transition-all duration-300 ease-in-out outline-none hover:underline hover:underline-offset-4 active:underline active:underline-offset-4'
            >
              {data.label}
            </button>
          </li>
        ))}
      </ul>
    </motion.header>
  );
};

export default Header;
