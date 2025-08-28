'use client';

import { motion, Variants } from 'framer-motion';
import { Check } from 'lucide-react';
import { X } from 'lucide-react';
import Image from 'next/image';
import { FaUser } from 'react-icons/fa6';

import { section4 } from '@/app/constants/sections-data';

const Section4 = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.43, 0.13, 0.23, 0.96],
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] },
    },
    hover: {
      scale: 1.02,
      transition: { duration: 0.2 },
    },
  };

  const listItemVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] },
    },
  };

  return (
    <motion.div
      className='custom-container w-full'
      variants={containerVariants}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.div className='w-full text-center' variants={itemVariants}>
        <motion.h2
          className='text-display-xl mb-4 font-bold'
          whileHover={{ scale: 1.02 }}
        >
          {section4.title}
        </motion.h2>
        <motion.p className='text-md mb-12' whileHover={{ scale: 1.02 }}>
          {section4.description}
        </motion.p>
      </motion.div>
      <motion.div
        className='mt-10 grid w-full grid-cols-1 gap-6 md:grid-cols-2'
        variants={containerVariants}
      >
        <motion.div
          className='flex-center bg-secondary-100 flex flex-col rounded-2xl p-8 text-center shadow-sm'
          variants={cardVariants}
          whileHover='hover'
        >
          <motion.h3 className='text-lg-bold mb-4' variants={itemVariants}>
            {section4.cards[0].title}
          </motion.h3>
          <motion.div
            className='flex-center bg-primary-300 mb-8 h-25 w-25 rounded-full'
            whileHover={{ scale: 1.1, rotate: 360 }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src='/images/profile-hero-purple-6.png'
              alt='Avatar'
              width={55}
              height={55}
              className='scale-150 rounded-full'
            />
          </motion.div>

          <motion.ul className='text-lg-semibold flex-center mb-4 flex flex-col gap-6 text-neutral-600'>
            {section4.cards[0].points.map((point, index) => (
              <motion.li
                key={point}
                className='flex items-center gap-2'
                variants={listItemVariants}
                custom={index}
                initial='hidden'
                animate='visible'
                transition={{ delay: index * 0.1 }}
              >
                <motion.div whileHover={{ scale: 1.2, color: '#22c55e' }}>
                  <Check />
                </motion.div>
                {point}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        <motion.div
          className='flex-center bg-neutral-25 flex flex-col rounded-2xl border-2 border-neutral-300 p-8 text-center shadow-sm'
          variants={cardVariants}
          whileHover='hover'
        >
          <motion.h3 className='text-lg-bold mb-4' variants={itemVariants}>
            {section4.cards[1].title}
          </motion.h3>
          <motion.div
            className='flex-center mb-8 h-25 w-25 rounded-full bg-neutral-300'
            whileHover={{ scale: 1.1, rotate: 360 }}
            transition={{ duration: 0.6 }}
          >
            <FaUser className='h-12 w-12 text-neutral-100' />
          </motion.div>

          <motion.ul className='text-lg-semibold flex-center mb-4 flex flex-col gap-6 text-neutral-600'>
            {section4.cards[1].points.map((point, index) => (
              <motion.li
                key={point}
                className='flex items-center gap-2'
                variants={listItemVariants}
                custom={index}
                initial='hidden'
                animate='visible'
                transition={{ delay: index * 0.1 }}
              >
                <motion.div whileHover={{ scale: 1.2, color: '#ef4444' }}>
                  <X className='text-red-600' />
                </motion.div>
                {point}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Section4;
