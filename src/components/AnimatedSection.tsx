import { ReactNode } from "react";
import { motion, type Easing } from "motion/react";

interface AnimatedSectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
  delay?: number;
  aboveFold?: boolean;
}

const easeOut: Easing = [0.22, 0.61, 0.36, 1];

export default function AnimatedSection({
  children,
  id,
  className = "",
  delay = 0,
  aboveFold = false,
}: AnimatedSectionProps) {
  const variants = {
    hidden: { opacity: 0, y: 32 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.65,
        delay,
        ease: easeOut,
      },
    },
  };

  if (aboveFold) {
    return (
      <motion.div
        id={id}
        className={className}
        initial="hidden"
        animate="visible"
        variants={variants}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      id={id}
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}
