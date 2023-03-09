'use client';

import { motion } from "framer-motion";
import { TypingText } from '../components' 

import styles from '../styles';
import { fadeIn, staggerContainer, textVariant} 
from '../utils/motion'

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25}}
    className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About Metaverse Club"
      textStyles="text-center"/>

      <motion.p
        variants={fadeIn('down', 'tween', 0.2, 3)}
        className="mt-[8px] font-normal sm:text-[32px]
        text-[20px] text-center text-secondary-white"
      >
        <span className="font-extrabold text-white" >
        Metaverse Club</span>
        is a club at uw-madison, where you can enjoy the virtual 
        world by experiencing vr devices, you can develop what you want to build in this 
        metaverse world, because this is really the 
        <span className="font-extrabold text-white" > madness of the metaverse of  </span>
        today, using only  
        <span className="font-extrabold text-white"> VR </span>
        devices you can easily explore the metaverse world you want, turn your dreams into reality. 
      </motion.p>

      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
