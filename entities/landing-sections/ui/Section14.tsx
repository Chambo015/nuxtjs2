'use client';

import {Heading} from '@/components/ui/Heading';
import {Dispatch, SetStateAction, useState} from 'react';
import {motion, AnimatePresence} from 'framer-motion';
import {ModelFAQ, ModelFAQType} from '../model';
import IconArrowDown from "@/shared/icons/arrow-down.svg"

export const Section14 = () => {
  const [expanded, setExpanded] = useState<false | number>(0);
  return (
    <section className="container mx-auto mt-[75px]">
      <Heading className="text-center">Часто задаваемые вопросы</Heading>

      <div className='grid grid-cols-2 items-start gap-5 overflow-hidden'>
        <div className='grid grid-cols-1 items-start gap-5 mt-[25px] shrink-0'>
          {ModelFAQ.slice(0, ModelFAQ.length / 2).map((item) => (
            <Accordion key={item.title} item={item} expanded={expanded} setExpanded={setExpanded} />
          ))}
        </div>
        <div className='grid grid-cols-1 items-start gap-5 mt-[25px] shrink-0'>
          {ModelFAQ.slice(ModelFAQ.length / 2).map((item) => (
            <Accordion key={item.title} item={item} expanded={expanded} setExpanded={setExpanded} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface AccordionProps {
  item: ModelFAQType
  expanded: number | false
  setExpanded: Dispatch<SetStateAction<number | false>>
}
const Accordion = ({item, expanded, setExpanded}: AccordionProps) => {
  const isOpen = item.id === expanded;

  return (
    <div>
      <header
        
        onClick={() => setExpanded(isOpen ? false : item.id)}
        className='border border-[#E5E5E5] rounded-[20px] py-3 px-[15px] flex gap-[15px] items-center cursor-pointer'
      >
        <div className='bg-[#F9FAFB] size-[50px] rounded-full flex items-center justify-center text-primary text-[15px] shrink-0'>{item.icon}</div>
        <p className='text-lg text-black font-medium'>{item.title}</p>
        <motion.div
          initial={false}
          animate={{rotate: isOpen ? '180deg' : '0deg'}}
          className='origin-center ml-auto shrink-0'
        >
          <IconArrowDown />
        </motion.div>
      </header>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.section
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: {opacity: 1, height: 'auto'},
              collapsed: {opacity: 0, height: 0},
            }}
            transition={{duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98]}}>
            <p className='px-5 py-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque nulla quis porro minima sint ipsum perferendis fugit veniam debitis eaque, voluptates, deserunt, labore quo provident placeat eveniet velit tenetur. Nihil?</p>
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  );
};
