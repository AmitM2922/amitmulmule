import React from 'react'
import { AcademicCapIcon } from "@heroicons/react/solid";
import { EducationData } from '../Data/EducationData'
export default function Education() {
    return (
        <section id="educations" className="text-gray-400 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 body-font py-16">
        <div className="container px-5 mx-auto text-center lg:px-40">
          {/* Section Title */}
          <div className="flex flex-col w-full mb-12">
            <AcademicCapIcon className="mx-auto inline-block w-12 text-green-400 mb-4 animate-pulse" />
            <h1 className="text-4xl font-extrabold title-font text-white tracking-wide uppercase">
              Education
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto mt-2">
              My academic journey and educational background.
            </p>
          </div>
  
          {/* Education Cards in One Row for Large Screens */}
          <div className="flex flex-wrap justify-center lg:flex-nowrap lg:space-x-6">
            {EducationData.map((data, index) => (
              <div key={index} className="w-full md:w-1/2 lg:w-1/2 p-4">
                <div className="flex relative group">
                  <div className="px-8 py-10 relative z-10 w-full border border-gray-700 bg-gray-900 rounded-lg shadow-lg transform transition duration-300 ease-in-out hover:scale-105 hover:border-green-400 hover:shadow-green-400/50">
                    {/* Degree Title */}
                    <h1 className="tracking-widest text-xl font-semibold text-green-400 mb-2 uppercase">
                      {data.Title}
                    </h1>
  
                    {/* Year */}
                    <h2 className="text-lg font-medium text-gray-300 mb-2">
                      {data.Year}
                    </h2>
  
                    {/* Course Details */}
                    <h3 className="text-lg font-semibold text-white mb-2">
                      Course: <span className="text-gray-300">{data.Course}</span>
                    </h3>
  
                    {/* College Name */}
                    <h3 className="text-lg font-semibold text-white mb-2">
                      College: <span className="text-gray-300">{data.College}</span>
                    </h3>
  
                    {/* CGPA */}
                    <h3 className="text-lg font-semibold text-white">
                      CGPA: <span className="text-green-400">{data.CGPA}</span>
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
  
        </div>
      </section>
    )
}
