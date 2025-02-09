import { assets } from "@/assets/assets";
import Image from "next/image";
import CardList from "./CardList";
import ToolsList from "./ToolsList";

interface AboutProps {
  isDarkMode: boolean;
}

const About = ({ isDarkMode }: AboutProps) => {
  return (
    <>
      <div
        id="about"
        className="w-full scroll-mt-16 px-[12%] py-10 lg:scroll-mt-20">
        <h4 className="mb-2 text-center font-Ovo text-lg">Introduction</h4>
        <h2 className="text-center font-Ovo text-5xl">About Me</h2>

        <div className="my-20 flex w-full flex-col items-center gap-20 xl:flex-row">
          <div className="w-64 max-w-none rounded-3xl sm:w-80">
            <Image
              src={assets.profile_img}
              alt="profile_img"
              className="w-full rounded-3xl shadow-2xl shadow-black"
            />
          </div>

          <div className="flex-1">
            <p className="mb-10 max-w-2xl font-Ovo">
              I&apos;m an experenced Frontend Developer and and I&apos;m here to
              help your next project. I enjoy creating things that live on the
              internet. I craft premium digital work for web with creative
              agencies and global brands alike – putting passion, pride and lots
              of grit into everything I do.
            </p>

            <div className="grid max-w-2xl grid-cols-1 gap-6 md:grid-cols-3">
              <CardList
                icon={assets.code_icon}
                iconDark={assets.code_icon_dark}
                title="Languages"
                description="HTML, CSS, JavaScript, TypeScript"
                isDarkMode={isDarkMode}
              />
              <CardList
                icon={assets.edu_icon}
                iconDark={assets.edu_icon_dark}
                title="Education"
                description="B.Sc in Computer Science"
                isDarkMode={isDarkMode}
              />
              <CardList
                icon={assets.project_icon}
                iconDark={assets.project_icon_dark}
                title="Projects"
                description="Built more than 5 projects"
                isDarkMode={isDarkMode}
              />
            </div>

            <h4 className="my-6 font-Ovo text-gray-700 dark:text-white/80">
              Tools and Framework I use
            </h4>

            <div className="flex items-center gap-3 sm:gap-5">
              <ToolsList tool={assets.vscode} />
              <ToolsList tool={assets.git} />
              <ToolsList
                tool={isDarkMode ? assets.github_dark : assets.github}
              />
              <ToolsList tool={assets.react} />
              <ToolsList tool={assets.nextjs} />
              <ToolsList tool={assets.tailwindcss} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
