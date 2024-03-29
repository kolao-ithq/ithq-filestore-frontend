import { motion } from "framer-motion";
import React from "react";

type Props = {
  children: any;
  className?: any;
};

export default function ScrollAnimationWrapper({
  children,
  className = "",
  ...props
}: Props) {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
