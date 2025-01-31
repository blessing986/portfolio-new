import Image, { StaticImageData } from "next/image";

interface toolType {
  tool: StaticImageData;
}

const ToolsList = ({ tool }: toolType) => {
  return (
    <>
      <div className="flex aspect-square w-12 cursor-pointer items-center justify-center rounded-lg border border-gray-400 duration-500 hover:-translate-y-1 sm:w-14">
        <Image src={tool} alt="tool" className="w-5 sm:w-7" />
      </div>
    </>
  );
};

export default ToolsList;
