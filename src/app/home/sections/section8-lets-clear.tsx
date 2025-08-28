'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';

import { section8 } from '@/app/constants/sections-data';

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
  hover: {
    scale: 1.02,
    transition: { duration: 0.2 },
  },
};

const AccordionItem = ({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) => {
  return (
    <motion.div
      className='mb-4 overflow-hidden rounded-lg border border-neutral-200 bg-white'
      initial='hidden'
      animate='visible'
      variants={cardVariants}
      whileHover='hover'
    >
      <button
        className='flex w-full cursor-pointer items-center justify-between p-4 text-left'
        onClick={onToggle}
      >
        <h3 className='text-lg font-semibold text-neutral-900'>{question}</h3>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <FiChevronDown className='h-5 w-5 text-neutral-500' />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
          >
            <p className='text-md px-4 pb-4 text-neutral-600'>{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const Section8 = () => {
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);

  return (
    <motion.div
      id='faq'
      className='custom-container flex w-full flex-col gap-12 bg-neutral-100 py-20'
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.3 }}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.8,
            staggerChildren: 0.2,
          },
        },
      }}
    >
      <motion.div
        className='mx-auto max-w-2xl text-center'
        variants={cardVariants}
      >
        <motion.h2
          className='text-display-xl mb-4 font-bold text-neutral-900'
          variants={cardVariants}
        >
          {section8.title}
        </motion.h2>
        <motion.p className='text-md text-neutral-600' variants={cardVariants}>
          {section8.description}
        </motion.p>
      </motion.div>

      <div className='mx-auto w-full max-w-3xl'>
        {section8.questions.map((question, index) => (
          <AccordionItem
            key={index}
            question={question.question}
            answer={question.answer}
            isOpen={openQuestion === index}
            onToggle={() =>
              setOpenQuestion(openQuestion === index ? null : index)
            }
          />
        ))}
      </div>
    </motion.div>
  );
};

export default Section8;
