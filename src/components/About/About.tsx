import { assets } from "@/assets/assets";
import Image from "next/image";
import CardList from "./CardList";
import ToolsList from "./ToolsList";
import { motion } from "motion/react";

interface AboutProps {
  isDarkMode: boolean;
}

const About = ({ isDarkMode }: AboutProps) => {
  return (
    <>
      <motion.div
        id="about"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="w-full scroll-mt-16 px-[12%] py-10 lg:scroll-mt-20">
        <motion.h4
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-2 text-center font-Ovo text-lg">
          Introduction
        </motion.h4>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center font-Ovo text-5xl">
          About Me
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="my-20 flex w-full flex-col items-center gap-20 xl:flex-row">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="w-64 max-w-none rounded-3xl sm:w-80">
            <Image
              src={assets.profile_img}
              alt="profile_img"
              className="w-full rounded-3xl shadow-2xl shadow-black"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex-1">
            <p className="mb-10 max-w-2xl font-Ovo">
              I&apos;m an experenced Frontend Developer and and I&apos;m here to
              help your next project. I enjoy creating things that live on the
              internet. I craft premium digital work for web with creative
              agencies and global brands alike – putting passion, pride and lots
              of grit into everything I do.
            </p>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="grid max-w-2xl grid-cols-1 gap-6 md:grid-cols-3">
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
            </motion.div>

            <motion.h4
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.3 }}
              className="my-6 font-Ovo text-gray-700 dark:text-white/80">
              Tools and Framework I use
            </motion.h4>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.6 }}
              className="flex items-center gap-3 sm:gap-5">
              <ToolsList tool={assets.vscode} />
              <ToolsList tool={assets.git} />
              <ToolsList
                tool={isDarkMode ? assets.github_dark : assets.github}
              />
              <ToolsList tool={assets.react} />
              <ToolsList tool={assets.nextjs} />
              <ToolsList tool={assets.tailwindcss} />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default About;
