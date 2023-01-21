import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [burger, setBurger] = useState(false);
  const navigate = useNavigate()
  const navlinks = [
    {
      name: "Home",
      path: "/"
    },
    {
      name: "Courses",
      path: "/Courses"
    }, {
      name: "Blog",
      path: "/Blog"
    }, {
      name: "Contact",
      path: "/Contact"
    },
  ]
  return (
    <>
      <>
        <div className="flex sticky top-0">
          <header className="border-b w-full bg-white h-full z-100 lg:z-0 border-gray-200">
            <div className="navbar w-11/12 h-full lg:w-full lg:px-5 mx-auto lg:flex-row py-5 flex flex-col justify-center items-center lg:justify-between ">
              <div className="nav-brand">
                <Link to="/" className="text-purple-800 font-bold text-xl">
                  CodeWithHarry
                </Link>
              </div>

              <div
                className={
                  burger
                    ? "w-full flex lg:flex-row flex-col text-center items-center lg:justify-end transition-all  origin-top visible h-52 "
                    : "w-full flex lg:flex-row flex-col text-center items-center lg:justify-end transition-all  origin-top lg:visible invisible h-0 lg:h-full"
                }
              >
                <ul className="space-y-4 lg:space-y-0 lg:space-x-3 lg:mr-6 flex lg:flex-row flex-col justify-center items-center">
                  <p></p>
                  {navlinks.map((i) => {
                    return <span className="cursor-pointer" onClick={() => {
                      navigate(i.path);
                      setBurger(false
                      )
                    }}>{i.name}</span>
                  })}

                </ul>
                <div className="btn my-5 lg:my-0 space-x-4">
                  <Link to="/Login" className="button">
                    Login
                  </Link>
                  <Link to="/Signup" className="button">
                    Signup
                  </Link>
                </div>
              </div>

              <div
                className="burger absolute top-5 lg:hidden right-5 border-2 px-1.5 rounded-md"
                onClick={() => setBurger(!burger)}
              >
                <i className="bx cursor-pointer bx-menu text-xl font-light"></i>
              </div>
            </div>
          </header>
        </div>
      </>
    </>
  );
};

export default Header;
