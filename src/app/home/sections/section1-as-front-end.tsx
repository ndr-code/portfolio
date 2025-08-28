'use client';

import { motion, Variants } from 'framer-motion';

import { section1 } from '@/app/constants/sections-data';

export default function Section1() {
  const textVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] },
    },
    hover: {
      scale: 1.02,
      transition: { duration: 0.3, ease: [0.43, 0.13, 0.23, 0.96] },
    },
  };

  return (
    <motion.div
      id='about'
      className='custom-container md:text-display-lg text-weight-500 px-4 text-center text-lg text-neutral-950 md:px-30'
      initial='hidden'
      whileInView='visible'
      whileHover='hover'
      viewport={{ once: true, amount: 0.5 }}
      variants={textVariants}
    >
      {section1.text[0]} <br /> {section1.text[1]}
      <span className='text-primary-300'> {section1.text[2]}</span>{' '}
      {section1.text[3]} <br /> {section1.text[4]}
    </motion.div>
  );
}
