import { assets } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";

const Project = () => {
  const projecctData = [
    {
      title: "Blink",
      description: "Web Design",
      bgImage: "/blink.PNG",
      url: "https://getblink.africa",
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
      <div id="work" className="scroll-mt-16 px-[12%] py-10 lg:scroll-mt-20">
        <h4 className="mb-2 text-center font-Ovo text-lg">My portfolio</h4>
        <h2 className="text-center font-Ovo text-5xl">My latest work</h2>
        <p className="mx-auto mb-12 mt-5 max-w-2xl text-center font-Ovo">
          Welcome to my web development portfolio! Explore a collection of
          projects showcasing my expertise in front-end development.
        </p>

        <div className="my-10 grid w-full grid-cols-auto gap-5 py-10">
          {projecctData.map((project, index) => (
            <Link
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              key={index}>
              <div className="group h-[250px] cursor-pointer rounded-2xl bg-slate-700">
                <Image
                  src={project.bgImage}
                  alt={project.title}
                  width={800}
                  height={400}
                  className="h-[60%] w-full rounded-t-2xl object-cover p-2"
                />

                <div className="mx-2 mt-6 flex items-center justify-between rounded-lg bg-gray-200 p-2 duration-500 group-hover:-translate-y-1">
                  <div>
                    <h2 className="font-semibold">{project.title}</h2>
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
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Project;
