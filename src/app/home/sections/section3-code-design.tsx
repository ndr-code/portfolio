'use client';

import { motion, Variants } from 'framer-motion';
import Image from 'next/image';

import { Button } from '@/components/ui/button';

import { section3 } from '@/app/constants/sections-data';

export default function Section3() {
  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.43, 0.13, 0.23, 0.96],
        staggerChildren: 0.1,
      },
    },
  };

  const titleVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] },
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 },
    },
  };

  return (
    <motion.div
      id='skills'
      className='custom-container w-full bg-gradient-to-b from-[#9E385E]/0 to-[#9E385E]/10'
      variants={containerVariants}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.5 }}
    >
      <motion.div className='w-full pb-12 text-center' variants={titleVariants}>
        <motion.h2
          className='text-display-xl mb-4 font-bold'
          whileHover={{ scale: 1.02 }}
        >
          {section3.title}
        </motion.h2>
        <motion.p className='text-md' whileHover={{ scale: 1.02 }}>
          {section3.description}
        </motion.p>
      </motion.div>
      <motion.div className='flex-center flex w-full flex-wrap gap-5'>
        {section3.cards.map(
          (card) =>
            card.id < 5 && (
              <motion.div
                key={card.id}
                className={`${card.id % 2 === 0 ? 'bg-neutral-25 border-2 border-neutral-300' : 'bg-secondary-100 border-0'} flex-center m-4 flex h-70 w-55 flex-col rounded-full p-4`}
                variants={cardVariants}
                whileHover='hover'
              >
                <motion.div
                  className='bg-neutral-25 flex-center flex h-20 w-20 rounded-full'
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Image
                    src={card.iconPath}
                    alt={`${card.name} icon`}
                    className=''
                    width={36}
                    height={36}
                  />
                </motion.div>
                <motion.h3
                  className='text-md py-2 font-semibold'
                  whileHover={{ scale: 1.05 }}
                >
                  {card.name}
                </motion.h3>
                <motion.p
                  className='w-40 text-center text-sm leading-6'
                  whileHover={{ scale: 1.02 }}
                >
                  {card.description}
                </motion.p>
              </motion.div>
            )
        )}
      </motion.div>
      <div className='flex-center mt-10 gap-8'>
        <Button variant='arrow' className='scale-150 rotate-180' />
        <Button variant='arrow' className='scale-150' />
      </div>
    </motion.div>
  );
}
