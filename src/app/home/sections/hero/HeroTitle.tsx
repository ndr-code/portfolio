import { motion } from 'framer-motion';
import Image from 'next/image';
import { BsMouse } from 'react-icons/bs';

import { heroTitle } from '@/app/constants/hero-data';

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, staggerChildren: 0.15 },
  },
};
const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.5 } },
  hover: { scale: 1.05, transition: { duration: 0.2 } },
};

const HeroTitle = () => {
  return (
    <motion.div
      className='absolute inset-0'
      variants={containerVariants}
      initial='hidden'
      animate='visible'
    >
      {/* Background Art */}
      <motion.div>
        <Image
          src='/images/hero-bg-art.png'
          alt='Background Art'
          className='absolute inset-0 z-0'
          fill
          priority
        />
      </motion.div>

      {/* Badge */}
      <motion.div
        className='text-neutral-25 text-md-semibold border-primary-300 bg-primary-500 flex-center absolute top-1/2 left-1/2 z-5 -translate-x-1/2 -translate-y-[calc(50%+250px)] gap-2 rounded-full border-2 px-4 py-2 text-center'
        variants={itemVariants}
      >
        <div className='bg-primary-200 h-4 w-4 animate-pulse rounded-full'></div>
        <p className='animate-pulse'>Available for Hire</p>
      </motion.div>

      {/* Junior */}
      <motion.div
        className='text-neutral-25 font-bonheur center-position absolute z-25 -translate-x-[calc(50%+303px)] -translate-y-[calc(50%+215px)] -rotate-[12.34deg] text-[120px]'
        variants={itemVariants}
      >
        Junior
      </motion.div>

      <div className='relative h-full w-full'>
        {/* Background text with fill */}
        <div className='absolute top-1/2 left-1/2 z-10 flex h-full w-full -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center text-center'>
          <h1 className='font-anton text-secondary-100 text-[180px] leading-20'>
            {heroTitle.main}
          </h1>
          <h1 className='font-anton text-secondary-100 text-[165px]'>
            {heroTitle.sub}
          </h1>
        </div>
        {/* Profile Picture */}
        <motion.div
          variants={itemVariants}
          className='absolute bottom-0 left-1/2 z-20 h-full w-full -translate-x-1/2'
        >
          <Image
            src={heroTitle.profile.src}
            alt={heroTitle.profile.alt}
            fill
            className='object-contain object-bottom'
            priority
          />
        </motion.div>
        {/* Overlay text with stroke */}
        <div className='absolute top-1/2 left-1/2 z-30 flex h-full w-full -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center text-center'>
          <h1 className='font-anton text-stroke-0 text-[180px] leading-20 text-transparent'>
            {heroTitle.main}
          </h1>
          <h1 className='font-anton text-stroke-2 text-[165px] text-transparent'>
            {heroTitle.sub}
          </h1>
        </div>
      </div>

      {/* Star Icons */}
      <motion.div>
        <motion.div
          className='center-position absolute z-5 -translate-x-[calc(50%+340px)] -translate-y-[calc(50%+35px)]'
          variants={itemVariants}
          whileHover={{ rotate: 30, scale: 1.15 }}
        >
          <Image
            src='/icons/star.svg'
            alt='Star Icon'
            width={160}
            height={160}
          />
        </motion.div>
        <motion.div
          className='center-position absolute z-5 -translate-x-[calc(50%-250px)] -translate-y-[calc(50%-260px)] rotate-60'
          variants={itemVariants}
          whileHover={{ rotate: 120, scale: 1.15 }}
        >
          <Image
            src='/icons/star.svg'
            alt='Star Icon'
            width={160}
            height={160}
          />
        </motion.div>
      </motion.div>

      {/* Scroll Down */}
      <motion.div
        className='flex-center text-primary-100 text-md-semibold absolute bottom-10 left-1/2 z-50 -translate-x-1/2 gap-2 text-sm font-medium'
        variants={itemVariants}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.7 }}
      >
        Scroll Down <BsMouse className='h-6 w-6 animate-bounce' />
      </motion.div>
    </motion.div>
  );
};

export default HeroTitle;
