import { motion } from 'framer-motion';
import Image from 'next/image';
import { PiMicrophoneFill } from 'react-icons/pi';

import { heroDescription, heroTechStack } from '@/app/constants/hero-data';

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
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  hover: { scale: 1.12, transition: { duration: 0.2 } },
};

const HeroDescription = () => {
  return (
    <motion.div
      className='absolute top-1/2 left-30 z-50 flex -translate-y-1/2 flex-col items-start justify-between gap-20'
      variants={containerVariants}
      initial='hidden'
      animate='visible'
    >
      <motion.div
        className='border-primary-300 flex flex-col gap-5 rounded-full border-2 px-4 py-4'
        variants={containerVariants}
      >
        {heroTechStack.items.map((item) => (
          <motion.span
            key={item.name}
            className='border-primary-300 flex h-[70px] w-[70px] items-center justify-center rounded-full border-2'
            variants={itemVariants}
            whileHover='hover'
          >
            <Image
              src={item.icon}
              alt={`${item.name} Icon`}
              width={40}
              height={40}
              className='object-contain'
            />
          </motion.span>
        ))}
      </motion.div>

      <motion.div
        className={`items-left text-primary-100 flex flex-col gap-4`}
        variants={containerVariants}
      >
        <motion.div
          className='border-primary-300 flex-center inline-flex h-16 w-16 rounded-full border-2'
          variants={itemVariants}
        >
          <PiMicrophoneFill className='h-7 w-7' />
        </motion.div>
        <motion.div
          className='text-xl-bold text-primary-100'
          variants={itemVariants}
        >
          {heroDescription.title}
        </motion.div>
        <motion.div
          className='text-primary-100 max-w-110 text-lg'
          variants={itemVariants}
        >
          {heroDescription.content}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default HeroDescription;
