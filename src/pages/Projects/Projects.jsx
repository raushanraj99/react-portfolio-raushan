import React, { useState } from "react";
import { useRef } from "react";
import { motion, useScroll } from "framer-motion";

function Projects() {
  const projectItems = [
    {
      title: "Project Title",
      langUsed: "HTML,CSS,js",
      description: "This is a project description.",
      github: "Githuburl",
      hosted: "hostedURl",
    },
    {
      title: "1 Project Title",
      description: "1 This is a project description.",
      langUsed: "HTML,CSS,js",
      github: "Githuburl",
      hosted: "hostedURl",
    },
    {
      title: "1 Project Title",
      description: "1 This is a project description.",
      langUsed: "HTML,CSS,js",
      github: "Githuburl",
      hosted: "hostedURl",
    },
    {
      title: "1 Project Title",
      description: "1 This is a project description.",
      langUsed: "HTML,CSS,js",
      github: "Githuburl",
      hosted: "hostedURl",
    },
    {
      title: "1 Project Title",
      description: "1 This is a project description.",
      langUsed: "HTML,CSS,js",
      github: "Githuburl",
      hosted: "hostedURl",
    },
    {
      title: "1 Project Title",
      description: "1 This is a project description.",
      langUsed: "HTML,CSS,js",
      github: "Githuburl",
      hosted: "hostedURl",
    },
    {
      title: "1 Project Title",
      description: "1 This is a project description.",
      langUsed: "HTML,CSS,js",
      github: "Githuburl",
      hosted: "hostedURl",
    },
  ];
  const ref = useRef(null);
  const { scrollXProgress } = useScroll({ container: ref });

  return (
    <section className="projects pt-10 pb-5 bg-[#1F2531]">
        <div className="w-[95vw] inline-block justify-center overflow-hidden">
          <div>
            <h1 className="text-[1.6rem] font-bold md:text-[3rem]">Projects</h1>
          </div>
          <div className="flex flex-row flex-wrap justify-center  mt-5 w-full md:w-full">
            {projectItems.map((item) => (
              <div className="bg-[#181F2D] h-[170px] m-3 p-2 border-2 border-[#7b7a7a] rounded-md w-[300px] ">
                <div className="flex flex-col	text-left ">
                  <h1 className="text-[white] font-bold tracking-wide bg-[#1F2531] p-1 text-[1rem] ">
                    Social media Music{" "}
                  </h1>
                  <p className=" text-[#bdbdbd] opacity-60 font-bold text-[0.8rem]">
                    Html,CSS
                  </p>
                  <p className="">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                  <div className="flex flex-row justify-evenly align-middle mt-[2vh] items-center">
                    <button className="bg-[#CBDB11] text-[#181F2D] text-[0.7rem] font-bold p-1 w-[4rem] h-[1.4rem]">
                      Github
                    </button>
                    <button className="bg-[#CBDB11] text-[#181F2D] text-[0.7rem] font-bold p-1 w-[4rem] h-[1.4rem] ">
                      View
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
  );
}

export default Projects;
