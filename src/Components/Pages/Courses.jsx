import React, { useState } from "react";
import CoursesApi from "../API/CoursesApi";

const Courses = () => {
  const [courseApi] = useState(CoursesApi);
  return (
    <>
      <section className="courses w-11/12 md:w-full my-8 mx-auto">
        {/* --Cards Start-- */}
        <div className="cards w-full md:flex md:justify-center md:flex-wrap">
          {courseApi.map((course) => {
            return (
              <>
                <div
                  key={course.id}
                  className="card-item md:w-1/4 border my-3 md:mx-5 sm:w-2/3 shadow-xl rounded-xl"
                >
                  <img src={course.imgURL} alt="" className="rounded-t-md" />
                  <div className="px-2 py-3">
                    <div className="sub-title text-sm text-gray-400 py-1">
                      Free Courses
                    </div>
                    <div className="title capitalize font-semibold text-lg">
                      {course.title}
                    </div>
                    <p className="description text-gray-800 py-1">
                      {course.description}
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
    </>
  );
};

export default Courses;
