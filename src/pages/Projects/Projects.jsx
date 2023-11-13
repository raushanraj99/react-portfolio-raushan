import React, { useState } from "react";
import { useRef } from "react";
import { motion, useScroll } from "framer-motion";

function Projects() {
  const projectItems = [
    {
      title: "Node Js CRUD API",
      langUsed: "Node js, MongoDB",
      description: "A complete Node js Crud api for Todo App",
      github: "https://github.com/raushanraj99/node_js_todo_api.git",
      hosted: "https://todo-app-nodejs-9jyl.onrender.com/",
    },
    {
      title: "Social Media with Music",
      langUsed: "HTML,CSS",
      description: "This is Just landing page, for using social media while listening music",
      github: "https://github.com/raushanraj99/social-share-music.git",
      hosted: "https://raushanraj99.github.io/social-share-music/",
    },
    {
      title: "Calculator", 
      description: "A Calculator to perform Calculation of Addition, Substraction, Multiplication and Division",
      langUsed: "HTML, CSS, Js",
      github: "https://github.com/raushanraj99/Calculator.git",
      hosted: "https://raushanraj99.github.io/Calculator/",
    },
    {
      title: "Snake and Ladded",
      description: "A Snake and ladded game in digital form, which we used to play on board with all rhe rules and regulation",
      langUsed: "Python",
      github: "https://github.com/raushanraj99/snake-and-ladder.git",
      hosted: "https://replit.com/@raushanraj99/snakeandladder-game?s=app",
    },
    
    {
      title: "Native Buddy",
      description: " A Full-Stack Web App to book a buddy for the Tourist at unknown places.",
      langUsed: "Node js, MongoDB, hbs, css",
      github: "https://github.com/raushanraj99/Native-Buddy.git",
      hosted: "https://native-buddy.onrender.com/",
    },
   
    {
      title: "Guess The Movie",
      description: "Movie name will be guess by watching blank spaces and few characters, accordingly points will be add",
      langUsed: "Python ",
      github: "https://github.com/raushanraj99/guess-the-movie.git",
      hosted: "https://replit.com/@raushanraj99/guess-the-movie?s=app",
    },
    {
      title: "Python Cgi && Tkinter with AWS",
      langUsed: "AWS, Python, Linux, Docker, Js, HTML",
      description: "A Stopwatch project, based on HTML, CSS and Js to check you speed",
      github: "https://github.com/raushanraj99/summer_project_final_cgi_programming.git",
      hosted: "https://github.com/raushanraj99/summer_project_final_cgi_programming.git",
    },
    {
      title: "Calculator using python ",
      langUsed: "Python",
      description: "GUI Based operational Calculator using Tkinter for your daily Expenditure",
      github: "https://github.com/raushanraj99/calculator_using_python.git",
      hosted: "https://github.com/raushanraj99/calculator_using_python.git",
    },
  ];


  return (
    <section className="projects pt-10 pb-5 bg-[#1F2531]">
        <div className="w-[95vw] inline-block justify-center overflow-hidden">
          <div>
            <h1 className="text-[1.6rem] font-bold md:text-[3rem]">Projects</h1>
          </div>
          <div className="flex flex-row flex-wrap justify-center  mt-5 w-full md:w-full">
            {
            
            
            projectItems.map((item) => (
              <div className="bg-[#181F2D] h-full m-3 p-2 border-2 border-[#7b7a7a] rounded-md w-[300px] ">
                <div className="flex flex-col	text-left ">
                  <h1 className="text-[white] font-bold tracking-wide bg-[#1F2531] p-1 text-[1rem] ">
                    {item.title}
                  </h1>
                  <p className=" text-[#bdbdbd] opacity-60 font-bold text-[0.8rem]">
                    {item.langUsed}
                  </p>
                  <p className="h-[9vh] text-[1rem] pt-2">
                    {item.description}
                  </p>
                  <div className="flex flex-row justify-evenly align-middle mt-[5vh] mb-3 items-center">
                    <a href={item.github} target="_blank" rel="noopener noreferrer">
                      <button className="bg-[#CBDB11] text-[#181F2D] text-[0.7rem] font-bold p-1 w-[4rem] h-[1.4rem]">
                        Github
                      </button>
                    </a>
                    <a href={item.hosted} target="_blank" rel="noopener noreferrer">
                      <button className="bg-[#CBDB11] text-[#181F2D] text-[0.7rem] font-bold p-1 w-[4rem] h-[1.4rem] ">
                        View
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            ))
            
            
            }
          </div>
        </div>
      </section>
  );
}

export default Projects;
