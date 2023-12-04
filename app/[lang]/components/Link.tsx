import Link from 'next/link';
import { motion } from 'framer-motion';
import { slide, scale } from "@/[lang]/utils/anim";

export default function LinkComponent({data, isActive, setSelectedIndicator}) {
  
    const { title, href, index} = data;
  
    return (
      <motion.div className="relative flex items-center" onMouseEnter={() => {setSelectedIndicator(href)}} custom={index} variants={slide} initial="initial" animate="enter" exit="exit">
        <motion.div variants={scale} animate={isActive ? "open" : "closed"} className="w-2.5 h-2.5 bg-[white] absolute left-[-30px] rounded-[50%]"></motion.div>
        <Link className="no-underline text-[white] font-light" href={href}>{title}</Link>
      </motion.div>
    )
  }