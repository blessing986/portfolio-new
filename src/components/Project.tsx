import { assets } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

const Project = () => {
  const projecctData = [
    {
      title: "Blink",
      description: "Web Design",
      bgImage: "/blink.PNG",
      url: "https://useblink.co",
    },
    {
      title: "Blogzine",
      description: "Web Design",
      bgImage: "/blogzine.PNG",
      url: "https://blogzine-blogzine.netlify.app",
    },
    {
      title: "Decove",
      description: "Web Design",
      bgImage: "/decove.PNG",
      url: "https://decove.com",
    },
    {
      title: "Project Management",
      description: "Web Design",
      bgImage: "/my-project.PNG",
      url: "https://my-project-blessingu.netlify.app",
    },
    {
      title: "My Quiz",
      description: "Web Design",
      bgImage: "/my-quiz.PNG",
      url: "https://my-quiz-blessingu.netlify.app",
    },
    {
      title: "Tic Tac Toe",
      description: "Web Design",
      bgImage: "/tic-tac-toe.PNG",
      url: "https://tic-tac-toe-blessingu.netlify.app",
    },
    {
      title: "Place Picker",
      description: "Web Design",
      bgImage: "/place-picker.PNG",
      url: "https://place-picker-blessingu.netlify.app",
    },
  ];

  return (
    <>
      <motion.div
        id="work"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="scroll-mt-16 px-[12%] py-10 lg:scroll-mt-20">
        <motion.h4
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mb-2 text-center font-Ovo text-lg">
          My portfolio
        </motion.h4>

        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-center font-Ovo text-5xl">
          My latest work
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="mx-auto mb-12 mt-5 max-w-2xl text-center font-Ovo">
          Welcome to my web development portfolio! Explore a collection of
          projects showcasing my expertise in front-end development.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="my-10 grid w-full grid-cols-auto gap-5 py-10 dark:text-black">
          {projecctData.map((project, index) => (
            <Link
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              key={index}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="group h-[250px] cursor-pointer rounded-2xl bg-slate-700">
                <Image
                  src={project.bgImage}
                  alt={project.title}
                  width={800}
                  height={400}
                  className="h-[60%] w-full rounded-t-2xl object-cover p-2"
                />

                <div className="mx-2 mt-6 flex items-center justify-between rounded-lg bg-gray-200 p-2 duration-500 group-hover:-translate-y-1">
                  <div>
                    <h2 className="h-[30px] font-semibold leading-[14px]">
                      {project.title}
                    </h2>
                    <p className="text-sm text-gray-700">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex aspect-square w-9 items-center justify-center rounded-full border border-black shadow-[2px_2px_0_#000] transition group-hover:bg-lime-300">
                    <Image
                      src={assets.send_icon}
                      alt="send icon"
                      className="w-5"
                    />
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </motion.div>
    </>
  );
};

export default Project;
