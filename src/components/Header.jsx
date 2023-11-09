import React, { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const navbarItems = [
    { name: "Home", path: "/" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/project" },
    { name: "About", path: "/about" },
  ];

  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <div className="bg-[#1F2531]">
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-blueGray-500 ">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              className="text-lg font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-[#CBDB11]"
              href="/"
            >
              Portfolio
            </Link>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-[#4d4e4f] border-solid border-transparent rounded  block lg:hidden outline-none focus:outline-[2px]"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars text-[white] "></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">

              {
              navbarItems.map((items) => (
                <li className="nav-item">
                  <Link
                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug  hover:opacity-75"
                    to={items.path}
                    key={items.name}
                  >
                    {/* <i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75"></i> */}
                    <span className="ml-2">{items.name}</span>
                  </Link>
                </li>
              ))
              }

            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
