import Image, { StaticImageData } from "next/image";

interface AboutType {
  icon: StaticImageData;
  title: string;
  description: string;
}

const AboutInfoList = ({ icon, title, description }: AboutType) => {
  return (
    <>
      <div className="hover:bg-lightHover cursor-pointer rounded-xl border-[0.5px] border-gray-400 p-6 duration-500 hover:-translate-y-1 hover:shadow-black">
        <Image src={icon} alt={title} className="mt-3 w-7" />
        <h3 className="my-4 font-semibold text-gray-700">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </>
  );
};

export default AboutInfoList;
