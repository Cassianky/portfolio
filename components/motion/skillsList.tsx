"use client";

import { motion } from "framer-motion";

interface SkillsListProps {
  skills: string[];
  className?: string;
}

const SkillsList = ({ skills, className }: SkillsListProps) => {
  // Parent animation settings
  const parentVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Delay between each child's animation
      },
    },
  };

  // Child animation settings
  const childVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.ul
      variants={parentVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={className}
    >
      {skills.map((item, index) => (
        <motion.li
          key={index}
          variants={childVariants}
          className="bg-white rounded-lg text-xs md:text-sm text-slate-600 border border-gray-300 rounded-xl px-5 py-3 shadow-sm"
        >
          {item}
        </motion.li>
      ))}
    </motion.ul>
  );
};

export default SkillsList;
