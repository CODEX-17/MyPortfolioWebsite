import { motion } from "framer-motion";
import React, { useCallback } from "react";

interface IconMotionPropType {
    delay: number
    icon: any
    url: string
    color: string
}

export const IconMotion = ({ delay = 0.2, icon, url, color }: IconMotionPropType) => {
    
    const openLink = useCallback(() => window.location.href = url, [url]);
  
    return (
      <motion.div
        initial={{ rotate: 120 }}
        whileInView={{
          rotate: 0,
          transition: {
            delay,
            duration: 1,
            ease: "easeInOut",
            type: "spring",
            stiffness: 200,
          }
        }}
        whileHover={{ opacity: 0.5, rotate: 120 }}
        whileTap={{ opacity: 0.5, rotate: 120 }}
        onClick={openLink}
        transition={{
          duration: 1,
          ease: "easeInOut",
          type: "spring",
          stiffness: 200,
        }}
      >
        {React.cloneElement(icon, { color, size: 25, cursor: "pointer" })}
      </motion.div>
    );
  };
  
  