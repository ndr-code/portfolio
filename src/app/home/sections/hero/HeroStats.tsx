import { motion } from 'framer-motion';

import { Button } from '@/components/ui/button';

import { heroStats } from '@/app/constants/hero-data';

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
};

const HeroStats = () => {
  return (
    <motion.div
      className='font-montserrat text-primary-100 absolute top-1/2 right-30 z-50 -translate-y-1/2'
      variants={containerVariants}
      initial='hidden'
      animate='visible'
    >
      <motion.div
        className='flex flex-col gap-8 py-5'
        variants={containerVariants}
      >
        {heroStats.map((stat) => (
          <motion.div
            key={stat.title}
            className='border-primary-300 flex flex-col border-b-2 pb-4 last:border-b-0'
            variants={itemVariants}
            whileHover={{ scale: 1.08 }}
          >
            <motion.h1
              className='text-display-2xl font-bold'
              variants={itemVariants}
            >
              {stat.value}
            </motion.h1>
            <motion.p
              className='text-primary-100/80 text-md-semibold'
              variants={itemVariants}
            >
              {stat.title}
            </motion.p>
          </motion.div>
        ))}
      </motion.div>
      <motion.div variants={itemVariants} whileHover={{ scale: 1.08 }}>
        <Button
          variant='textArrow1'
          className='min-w-55 cursor-pointer'
          onClick={() => {
            const contactSection = document.getElementById('contact');
            contactSection?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          Contact Me
        </Button>
      </motion.div>
    </motion.div>
  );
};

export default HeroStats;
