import React, { useState } from "react";
import HomeApi from "../API/HomeApi";

const Home = () => {
  const [homeApi] = useState(HomeApi);
  return (
    <>
      <main className="">
        {/* Hero Section start */}
        <section className="home w-10/12 lg:w-11/12 h-96 lg:h-auto my-2 mx-auto lg:flex lg:items-center">
          <div className="home-content h-full lg:px-2 lg:w-1/2 flex flex-col justify-center items-center lg:items-start text-center">
            <h2 className="font-semibold text-3xl">
              Welcome to <span className="text-indigo-700">CodeWithHarry</span>
            </h2>
            <p className="text-gray-500 lg:text-left py-4">
              Confused on which course to take? I have got you covered. Browse
              courses and find out the best course for you. Its free! Code With
              Harry is my attempt to teach basics and those coding techniques to
              people in short time which took me ages to learn.
            </p>
            <div className="btn my-2 space-x-3">
              <button className="button-2 text-white bg-gray-800">
                Free Courses
              </button>
              <button className="button-2 bg-gray-400">Explore Blog</button>
            </div>
          </div>
          <div className="image clip lg:w-1/2 hidden -z-50 lg:block">
            <img
              src="https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
              alt=""
              
              id="hero"
            />
          </div>
        </section>

        {/* Courses Section start */}
        <section className="courses w-11/12 lg:w-11/12 flex flex-col items-center mx-auto">
          <h2 className="text-3xl font-semibold text-center py-4 text-gray-900">
            Recommended Courses
          </h2>

          {/* --Cards Start-- */}
          <div className="cards w-full md:flex">
            {homeApi.map((curElem) => {
              return (
                <>
                  <div
                    key={curElem.id}
                    className="card-item border my-3 md:mx-2 sm:w-2/3 shadow-xl rounded-md"
                  >
                    <img src={curElem.imgURL} alt="" className="rounded-t-md" />
                    <div className="px-2 py-3">
                      <div className="sub-title text-sm text-gray-400 py-1">
                        Free Courses
                      </div>
                      <div className="title capitalize font-semibold text-lg">
                        {curElem.title}
                      </div>
                      <p className="description text-gray-800 py-1">
                        {curElem.description}
                      </p>
                      <button className="bg-purple-700 text-white font-bold my-2 text-sm py-2 px-4 rounded-full">
                        Start Watching
                      </button>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </section>

        {/* Testimonials Section Start */}
        <section className="testimonials w-11/12 lg:w-11/12 my-5  mx-auto">
          <h2 className="text-3xl font-semibold text-center py-4 text-gray-900">
            Testimonials
          </h2>
          {/* --Testimonial-- */}
          <div className="testimonial-box md:flex">
            {/* 1 */}
            <div className="testimonial-item my-3 md:mx-4 bg-gray-200 rounded-md py-5 px-10 w-full lg:w-1/2">
              <i className="bx bxs-quote-right text-2xl text-gray-500"></i>
              <p className="text-gray-600">
                I don't have words to thank this man, I'm really grateful to
                have this channel and website in my daily routine. If you're a
                mere beginner, then you can trust this guy and can put your time
                into his content. I can assure you that it'll be worth it.
              </p>
              <div className="speaker mx-6 my-2">
                <div className="name font-bold text-gray-800">Mohit Kumar</div>
                <div className="passion text-gray-600">web developer</div>
              </div>
            </div>
            {/* 2 */}
            <div className="testimonial-item my-3 md:mx-4 bg-gray-200 rounded-md py-5 px-10 w-full lg:w-1/2">
              <i className="bx bxs-quote-right text-2xl text-gray-500"></i>
              <p className="text-gray-600">
              For everyone who wants to level up their #Coding and #Dev skills - seriously, this channel is for you! Both basic and advanced stacks are covered on this channel, and one can learn according to his skill levels. And the icing on the cake is, everything is available for free.
              </p>
              <div className="speaker mx-6 my-2">
                <div className="name font-bold text-gray-800">Rakesh Shetty</div>
                <div className="passion text-gray-600">web developer</div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
