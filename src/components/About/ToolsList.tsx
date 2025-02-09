import Image, { StaticImageData } from "next/image";
import { motion } from "motion/react";

interface toolType {
  tool: StaticImageData;
}

const ToolsList = ({ tool }: toolType) => {
  return (
    <>
      <motion.div
        whileHover={{ scale: 1.1 }}
        className="flex aspect-square w-12 cursor-pointer items-center justify-center rounded-lg border border-gray-400 duration-500 hover:-translate-y-1 sm:w-14">
        <Image src={tool} alt="tool" className="w-5 sm:w-7" />
      </motion.div>
    </>
  );
};

export default ToolsList;
