import React from 'react'

function Skills() {


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

  return (
    <section className="w-full pt-10 pb-5 min-h-[64vh] bg-[#1F2531] ">
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
  )
}

export default Skills