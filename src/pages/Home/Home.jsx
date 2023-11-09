import React from "react";


import Profile from "../../Assest/Profile_img/profile-img.jpeg";

function Home() {
  const skillsList = [
    {
      name: "Python",
      logo: "fa-brands fa-python fa-lg",
      
    },
    {
      name: "Java",
      logo: "fa-brands fa-java fa-lg",
    },
    {
      
      name: "C",
      logo: "fa-solid fa-c fa-lg",
    },
    {
      
      name: "HTML5",
      logo: "fa-brands fa-html5 fa-lg",
    },
    {
      
      name: "CSS",
      logo: "fa-brands fa-css3-alt fa-lg",
    },
    {
      name: "JavaScript",
      logo: "fa-brands fa-js fa-lg",
    },
    {
      name: "MongoDB",
      logo: "L0",
    },
    {
      name: "Node js",
      logo: "fa-brands fa-node fa-lg",
      
    },
    {
      name: "Git",
      logo: "fa-brands fa-git fa-lg",
    },
    {
      name: "GitHub",
      logo: "fa-brands fa-github fa-lg",
    },
    {
      name: "AWS",
      logo: "fa-brands fa-aws fa-lg",
    },
    {
      name: "Redhat-9",
      logo: "fa-brands fa-redhat fa-lg",
    },
  ];

  // Project section
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

  return (
    <div className="HomeSection bg-[#1F2531]">
      <div className="h-[80vh] justify-center items-center flex  md:flex-row flex-col">
        <div className=" w-full flex justify-center ">
          <img
            src={Profile}
            alt="Profile Image"
            className="w-[50%] rounded-[50%] shadow-md shadow-[#CBDB11]"
          />
        </div>
        <div className="w-full mt-12 md:mt-0">
          <h1 className="text-[white] text-[7vw] font-bold">Raushan Raj</h1>
          <p>MERN STACK DEVELOPER || PYTHON</p>
        </div>
      </div>

      {/* About me Section  */}

      <section className=" w-full  pt-5 pb-10 bg-[#181F2D] ">
        <div className="flex flex-col ps-10 pe-10 justify-center ">
          <h1 className="text-[2.4rem] font-bold md:text-[3rem]">About-Me</h1>
          <div className=" mt-5 ">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </div>
        </div>

        <a href="#" target="_blank">
          <button className="w-100px bg-[#CBDB11]  hover:shadow-lg hover:shadow-[#CBDB11] text-[black] font-bold p-3 mt-10">
            Download Resume
          </button>
        </a>
      </section>

      {/* Skills and Technology Section  */}
      <section className="w-full mt-10 pb-5 ">
        <div className="inline-block justify-center">
          <div className="">
            <h1 className="text-[1.6rem] font-bold md:text-[3rem]">
              Skills and Technology
            </h1>
          </div>

          <div className="flex flex-row flex-wrap justify-center mt-5 w-full md:w-[80vw]">
            {skillsList.map((item) => (
              <div className="box bg-[#181F2D] w-[120px] h-[80px] m-3 pt-1 shadow-sm hover:shadow-md hover:shadow-[#CBDB11] shadow-[#CBDB11]">
                <div className="card">
                  <div className="card-body">
                    <h3>{item.name}</h3>
                    <p className={item.logo}></p>
                    
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Section  */}
      <section className="projects mt-10 pb-5">
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

      {/* Contact us ie. Footer  */}



    </div>
  );
}

export default Home;
