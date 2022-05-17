import React from "react";

const Contact = () => {
  return (
    <>
      <div className="bg-gray-100 xl:mx-5 my-5 md:flex py-10 rounded-xl">
        {/* --Left-- */}
        <div className="left px-5 md:w-1/2 flex flex-col text-center items-center">
          <h3 className="text-gray-900 text-3xl font-bold">
            Let talk about Everything !
          </h3>
          <figure className="py-6 flex flex-col items-center">
            <img src="https://codewithharry.com/img/logo-blue.png" alt="" />
            <figcaption className="text-gray-900  font-semibold text-xl">
              Feel free to ask us Everything !
            </figcaption>
          </figure>
          <p className="px-5">
            Have doubt or suggestion to make? Feel free to ask anything. If you
            have any suggestions, please let me know. Your suggestions are
            highly appreciated. I appreciate your time and try hard to reply to
            every single message posted here! Keep dropping your priceless
            opinions.
          </p>
        </div>
        {/* --Right-- */}
        <div className="right text-sm  md:w-1/2 px-5 flex justify-center  flex-col">
          {/* --Name--- */}
          <label htmlFor="Name" className="text-gray-600 font-bold uppercase">
            Full Name
          </label>
          <input
            type="text"
            id="Name"
            className="bg-gray-300 p-1 my-2 rounded-md mb-5"
          />

          {/* ---Email--- */}
          <label htmlFor="email" className="text-gray-600 font-bold uppercase">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="bg-gray-300 p-1 my-2 rounded-md mb-5"
          />

          {/* ---Phone--- */}
          <label htmlFor="phone" className="text-gray-600 font-bold uppercase">
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            className="bg-gray-300 p-1 my-2 rounded-md mb-5"
          />

          {/* ---Message--- */}
          <label
            htmlFor="message"
            className="text-gray-600 font-bold uppercase"
          >
            Message
          </label>
          <textarea
            name=""
            id="messeage"
            cols="30"
            rows="10"
            className="bg-gray-300 rounded-md mb-5"
          ></textarea>

          {/* ---Button--- */}
          <button className="uppercase button my-5 bg-purple-400">
            Send Message
          </button>
        </div>
      </div>
    </>
  );
};

export default Contact;
