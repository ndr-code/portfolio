'use client';
import { AnimatePresence, motion, Variants } from 'framer-motion';
import { Star } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

import { Button } from '@/components/ui/button';

import { section7 } from '@/app/constants/sections-data';

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeInOut',
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeInOut' },
  },
};

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
    scale: 0.95,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: 'easeInOut' },
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
    scale: 0.95,
    transition: { duration: 0.4, ease: 'easeInOut' },
  }),
};

const Section7 = () => {
  const [[page, direction], setPage] = useState([0, 0]);
  const testimonialIndex = Math.abs(page % section7.testimonials.length);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <motion.div
      className='custom-container flex w-full flex-col gap-12 py-20'
      variants={containerVariants}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.div
        className='mx-auto max-w-2xl text-center'
        variants={itemVariants}
      >
        <motion.h2
          className='text-display-xl mb-4 font-bold text-neutral-900'
          variants={itemVariants}
        >
          {section7.title}
        </motion.h2>
        <motion.p className='text-md text-neutral-600' variants={itemVariants}>
          {section7.description}
        </motion.p>
      </motion.div>

      <div className='relative h-[400px] w-full'>
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={page}
            custom={direction}
            initial='enter'
            animate='center'
            exit='exit'
            transition={{
              x: { type: 'spring', stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            className='absolute w-full'
            whileHover={{ scale: 1.02 }}
          >
            <div className='mx-auto max-w-3xl'>
              <div className='bg-primary-300 text-neutral-25 relative rounded-2xl px-16 py-8 text-center shadow-lg'>
                <div className='mb-4 flex justify-center gap-3 pb-4'>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className='h-6 w-6 fill-current' />
                  ))}
                </div>
                <p className='text-display-xs mb-8'>
                  {section7.testimonials[testimonialIndex].feedback}
                </p>
                {section7.testimonials[testimonialIndex].photo && (
                  <Image
                    src={section7.testimonials[testimonialIndex].photo}
                    alt={`${section7.testimonials[testimonialIndex].name}'s photo`}
                    width={60}
                    height={60}
                    className='mx-auto mb-4 rounded-full'
                  />
                )}
                <h3 className='mb-2 text-lg font-semibold'>
                  {section7.testimonials[testimonialIndex].name}
                </h3>
                <h3 className='text-md'>
                  {section7.testimonials[testimonialIndex].job}
                </h3>
              </div>
              <div className='bg-primary-300/80 mx-16 h-6 rounded-b-2xl'></div>
              <div className='bg-primary-300/60 mx-32 h-6 rounded-b-2xl'></div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <motion.div className='flex-center mt-15 gap-12' variants={itemVariants}>
        <motion.div whileHover={{ scale: 1.2 }}>
          <Button
            variant='arrow'
            className='scale-150 rotate-180 transition-transform'
            onClick={() => paginate(-1)}
          />
        </motion.div>
        <motion.div whileHover={{ scale: 1.2 }}>
          <Button
            variant='arrow'
            className='scale-150 transition-transform'
            onClick={() => paginate(1)}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Section7;
