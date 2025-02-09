import Image, { StaticImageData } from "next/image";
import { motion } from "motion/react";

interface AboutType {
  icon: StaticImageData;
  iconDark: StaticImageData;
  title: string;
  description: string;
  isDarkMode: boolean;
}

const AboutInfoList = ({
  icon,
  iconDark,
  title,
  description,
  isDarkMode,
}: AboutType) => {
  return (
    <>
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="cursor-pointer rounded-xl border-[0.5px] border-gray-400 p-6 duration-500 hover:-translate-y-1 hover:bg-lightHover hover:shadow-black dark:border-white dark:hover:bg-darkHover/50 dark:hover:shadow-white">
        <Image
          src={isDarkMode ? iconDark : icon}
          alt={title}
          className="mt-3 w-7"
        />
        <h3 className="my-4 font-semibold text-gray-700 dark:text-white">
          {title}
        </h3>
        <p className="text-sm text-gray-600 dark:text-white/80">
          {description}
        </p>
      </motion.div>
    </>
  );
};

export default AboutInfoList;
