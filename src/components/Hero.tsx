import { assets } from "@/assets/assets";
import Image from "next/image";

const Hero = () => {
  return (
    <>
      <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
        <div>
          <Image
            src={assets.profile_img}
            alt="profile_img"
            className="w-28 rounded-full shadow-2xl shadow-black"
          />
        </div>

        <h3 className="mb-3 flex items-center justify-center gap-2 font-Ovo text-xl md:text-2xl">
          Hi! I&apos;m Blessing Ubiomor{" "}
          <Image src={assets.hand_icon} alt="hand_icon" className="w-6" />{" "}
        </h3>
        <h1 className="font-Ovo text-3xl sm:text-6xl lg:text-[66px]">
          Frontend Developer based in Nigeria.
        </h1>
        <p className="mx-auto max-w-2xl font-Ovo">
          I&apos;m a creative frontend developer from Abuja, Nigeria. Welcome
          to my own space on the internet.
        </p>

        <div className="mt-4 flex">
          <a
            href="/Blessing_Ubiomor_Resume.pdf"
            download
            className="flex items-center gap-2 rounded-full border border-white px-10 py-3 bg-black text-white">
            My resume{" "}
            <Image
              src={assets.download_icon}
              alt="download_icon"
              className="w-4 bg-white p-[2px]"
            />{" "}
          </a>
        </div>
      </div>
    </>
  );
};

export default Hero;
