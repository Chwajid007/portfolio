import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Startup = (props) => {
  let WidthBy2 = 0;
  let HeightBy2 = 0;
  let greaterThanSmall = false;
  
  if (typeof window !== "undefined") {
    if (window.innerWidth > 768) {
      WidthBy2 = window.innerWidth / 2 - 48 - 20;
      HeightBy2 = window.innerHeight / 2 - 44;
      greaterThanSmall = true;
    } else {
      WidthBy2 = window.innerWidth / 2 - 28;
      HeightBy2 = window.innerHeight / 2 - 40;
    }

    console.log("width by 2: ", WidthBy2);
  }

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ opacity: { delay: 9900 / 1000, duration: 0 } }} // Fade out after 9.9 seconds
      className="absolute h-full w-full flex justify-center items-center bg-StartupBackground"
    >
      <motion.div
        initial={{ opacity: 0, x: 0, y: 0, scale: "100%" }}
        animate={{
          opacity: [1, 0, 1],
          x: -WidthBy2,
          y: -HeightBy2,
          scale: greaterThanSmall ? "57%" : "50%",
        }}
        transition={{
          opacity: { delay: 3000 / 1000, duration: 1500 / 1000 }, // Delay 3 seconds, animate for 1.5 seconds
          x: { duration: 500 / 1000, delay: 9500 / 1000 }, // Move after 9.5 seconds
          y: { duration: 500 / 1000, delay: 9500 / 1000 },
          scale: { duration: 500 / 1000, delay: 9500 / 1000 },
        }}
        className="relative h-24 w-24 flex justify-center items-center"
      >
        <motion.div
          initial={{ scale: 0, x: 0 }}
          animate={{ scale: 1, rotate: 90, x: 38 }}
          transition={{
            scale: { duration: 1500 / 1000 }, // Scale for 1.5 seconds
            rotate: { delay: 500 / 1000, duration: 500 / 1000 }, // Rotate after 0.5 seconds
            x: { delay: 800 / 1000, duration: 1000 / 1000 }, // Move after 0.8 seconds
          }}
          className="absolute h-2 w-12 bg-AAsecondary rounded "
        ></motion.div>
        <motion.div
          initial={{ scale: 0, x: 0 }}
          animate={{ scale: 1, rotate: 90, x: -39 }}
          transition={{
            scale: { duration: 1500 / 1000 }, // Scale for 1.5 seconds
            rotate: { delay: 500 / 1000, duration: 500 / 1000 }, // Rotate after 0.5 seconds
            x: { delay: 800 / 1000, duration: 1000 / 1000 }, // Move after 0.8 seconds
          }}
          className="absolute h-2 w-12 bg-AAsecondary rounded "
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
          animate={{ opacity: 1, scale: 1.05, rotate: 35, x: 18, y: -34 }}
          transition={{
            opacity: { delay: 2000 / 1000, duration: 0 }, // Fade in after 2 seconds
            scale: { duration: 2500 / 1000 }, // Scale for 2.5 seconds
            rotate: { delay: 500 / 1000, duration: 500 / 1000 }, // Rotate after 0.5 seconds
            y: { delay: 1200 / 1000, duration: 2000 / 1000 }, // Move after 1.2 seconds
            x: { delay: 1500 / 1000, duration: 500 / 1000 }, // Move after 1.5 seconds
          }}
          className="absolute h-2 w-12 bg-AAsecondary rounded "
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
          animate={{ opacity: 1, scale: 1.05, rotate: -35, x: -18, y: -34 }}
          transition={{
            opacity: { delay: 2000 / 1000, duration: 0 }, // Fade in after 2 seconds
            scale: { duration: 2500 / 1000 }, // Scale for 2.5 seconds
            rotate: { delay: 500 / 1000, duration: 500 / 1000 }, // Rotate after 0.5 seconds
            y: { delay: 1200 / 1000, duration: 2000 / 1000 }, // Move after 1.2 seconds
            x: { delay: 1500 / 1000, duration: 500 / 1000 }, // Move after 1.5 seconds
          }}
          className="absolute h-2 w-12 bg-AAsecondary rounded "
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
          animate={{ opacity: 1, scale: 1.05, rotate: -35, x: 18, y: 34 }}
          transition={{
            opacity: { delay: 2000 / 1000, duration: 0 }, // Fade in after 2 seconds
            scale: { duration: 2500 / 1000 }, // Scale for 2.5 seconds
            rotate: { delay: 500 / 1000, duration: 500 / 1000 }, // Rotate after 0.5 seconds
            y: { delay: 1200 / 1000, duration: 2000 / 1000 }, // Move after 1.2 seconds
            x: { delay: 1500 / 1000, duration: 500 / 1000 }, // Move after 1.5 seconds
          }}
          className="absolute h-2 w-12 bg-AAsecondary rounded "
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
          animate={{ opacity: 1, scale: 1.05, rotate: 35, x: -18, y: 34 }}
          transition={{
            opacity: { delay: 2000 / 1000, duration: 0 }, // Fade in after 2 seconds
            scale: { duration: 2500 / 1000 }, // Scale for 2.5 seconds
            rotate: { delay: 500 / 1000, duration: 500 / 1000 }, // Rotate after 0.5 seconds
            y: { delay: 1200 / 1000, duration: 2000 / 1000 }, // Move after 1.2 seconds
            x: { delay: 1500 / 1000, duration: 500 / 1000 }, // Move after 1.5 seconds
          }}
          className="absolute h-2 w-12 bg-AAsecondary rounded "
        ></motion.div>
        <motion.span
          initial={{ scale: 0, y: -4, x: -1 }}
          animate={{ scale: 1 }}
          transition={{ scale: { delay: 1500 / 1000, duration: 1500 / 1000 } }} // Scale after 1.5 seconds
          className="text-AAsecondary font-Text2 text-4xl"
        >
          WA
        </motion.span>
      </motion.div>
    </motion.div>
  );
};

export default Startup;
