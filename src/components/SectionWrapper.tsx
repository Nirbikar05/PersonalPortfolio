import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionWrapperProps {
  idName: string;
  children: ReactNode;
}

const variants = {
  hidden: { opacity: 0, y: -50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: "easeOut" } },
};

export const SectionWrapper = ({
  idName,
  children,
}: SectionWrapperProps) => {
  return (
    <motion.section
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="padding relative z-0 mx-auto max-w-7xl px-6 py-10 sm:px-16 sm:py-16"
    >
      <span className="hash-span" id={idName}>
        &nbsp;
      </span>
      {children}
    </motion.section>
  );
};

export default SectionWrapper; 