'use client';

import { motion, Variants } from 'framer-motion';

import { section2 } from '@/app/constants/sections-data';

const Section2 = () => {
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

  const cardVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.43, 0.13, 0.23, 0.96],
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3,
        ease: [0.43, 0.13, 0.23, 0.96],
      },
    },
  };

  return (
    <motion.div
      className='custom-container flex-center flex flex-row gap-20'
      variants={containerVariants}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.5 }}
    >
      {section2.cards.map((card) => (
        <motion.div
          key={card.id}
          className='flex max-w-sm flex-col items-start rounded-xl p-6 hover:bg-neutral-50'
          variants={cardVariants}
          whileHover='hover'
        >
          <motion.div
            className='flex-center flex h-16 w-16 rounded-full border-1 border-neutral-300 text-3xl'
            whileHover={{ rotate: 180, scale: 1.15 }}
            transition={{
              type: 'spring',
              stiffness: 300,
              damping: 20,
              duration: 0.7,
            }}
          >
            {card.icon}
          </motion.div>
          <h3 className='text-display-xs pt-4 text-left text-xl font-bold'>
            {card.title}
          </h3>
          <p className='pt-4 text-left text-sm'>{card.content}</p>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Section2;
