import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const Slide = ({ section, isVisible }) => {
  const controls = useAnimation();

  useEffect(() => {
    if (isVisible) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isVisible, controls]);

  return (
    <div
      ref={section.ref}
      style={{
        height: '100vh'
      }}
    >
    <motion.div
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      }}
      transition={{
        duration: 0.75,
        damping: 9,
        delay: 0.5,
        stiffness: 110,
      }}
      initial="hidden"
      animate={controls}
    >
      {section.component}
    </motion.div>
    </div>
  );
};

export default Slide;
