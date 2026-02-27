"use client";
import { motion } from "framer-motion";

const SlideInText = ({
  text = "Simplicity is the ultimate sophistication.",
}: {
  text?: string;
}) => {
  return (
    <h2 className="text-md md:text-lg font-bold text-center text-violet-200">
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: i * 0.03, ease: "easeOut" }}
          className="inline-block"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </h2>
  );
};

const SlideInView = () => {
  const text: string = "with a strong foundation in enterprise systems, ";
  const text2: string =
    "now focused on building modern web applications using Django and React to deliver reliable, ";
  const text3: string = "high-quality products.";
  return (
    <div className="flex flex-col items-center justify-center font-sans p-4">
      <SlideInText text={text} />
      <SlideInText text={text2} />
      <SlideInText text={text3} />
    </div>
  );
};

export default SlideInView;
