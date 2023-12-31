import React from 'react'

function Footer() {
  return (
    <section className='bg-[#181F2D]'>
      <div className=" pb-5">

        <div>
          <h1 className='font-bold text-[2rem] md:text-[2rem]'>Connect Me </h1>
        </div>
        <div>
          <div className="flex flex-row justify-center space-x-4 p-3">
            <a href="https://www.linkedin.com/in/raushan-raj-devp/
            " target="_blank" rel="noreferrer">LinkedIn</a><br /><br />
            <a href="https://github.com/raushanraj99
            " target="_blank" rel="noreferrer">GitHub</a><br /><br />
            <a href="https://www.instagram.com/__raushan_raj/
            " target="_blank" rel="noreferrer">Instagram</a><br /><br />
            <a href="https://www.facebook.com/profile.php?id=100009899351630
            " target="_blank" rel="noreferrer">Facebook</a><br /><br />

          </div>
          <div>Email: <a href="mailto:raushanraj9950@gmail.com">raushanraj9950@gmail.com</a></div>
        </div>

      </div>
    </section>
  )
}

export default Footer