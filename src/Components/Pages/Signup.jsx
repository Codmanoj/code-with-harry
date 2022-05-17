import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <>
      <div className="box w-5/6 h-screen lg:w-4/6 flex justify-center my-10 lg:my-24 shadow-2xl rounded-xl mx-auto ">
        {/* Image */}
        <figure className="w-1/2  hidden lg:block h-full">
          <img
            src="https://images.unsplash.com/photo-1546514714-df0ccc50d7bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80"
            alt=""
            className="w-full h-full rounded-xl object-cover"
          />
        </figure>
        {/* Form */}
        <div className="w-full py-10 px-5 lg:w-1/2">
          <figure className="flex flex-col items-center">
            <img
              src="https://codewithharry.com/img/logo-blue.png"
              alt=""
              className="w-16 h-16 mx-4"
            />
            <figcaption className="text-2xl font-bold text-slate-800">
              CodeWithHarry
            </figcaption>
            <p className="text-slate-600 text-xl font-semibold">
              Welcome Back!
            </p>
          </figure>
          <Link
            to="/"
            className="google w-5/6 my-4 lg:w-4/6 bg-white  rounded-md py-1 px-3 mx-auto flex justify-between items-center shadow-xl"
          >
            <i class="bx bxl-google text-2xl"></i>
            <span className="text-slate-600 font-semibold text-xl">
              Sign in with Google
            </span>
          </Link>
          <div className="uppercase py-2 text-center text-slate-700">
            Or Signup with Email
          </div>

          <form>
            <div className="flex flex-col">
              <label htmlFor="email" className="font-semibold text-black">
                Email
              </label>
              <input
                id="email"
                type="email"
                className="outline-purple-600 bg-gray-300 py-2 rounded-md border border-gray-400 my-1"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="font-semibold text-black">
                Password
              </label>
              <input
                id="password"
                type="password"
                className="outline-purple-600 bg-gray-300 py-2 rounded-md border border-gray-400 my-1"
              />
            </div>
            <button className="bg-purple-600 text-white font-bold py-2 rounded-md border border-gray-400 my-8 w-full">
              Signup
            </button>
            <Link to="/Login" className="uppercase w-full flex justify-center ">
              or Login
            </Link>
          </form>
        </div>
      </div> 
    </>
  )
}

export default Signup
