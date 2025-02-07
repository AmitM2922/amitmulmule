import React from 'react'
import { DesktopComputerIcon } from "@heroicons/react/solid";
import { EducationData } from '../Data/EducationData'
export default function Experience() {
  return (
    <section id="experience" className="text-gray-400 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 body-font py-16">
    <div className="container px-5 mx-auto text-center lg:px-40">
      {/* Section Title */}
      <div className="flex flex-col w-full mb-12">
        <DesktopComputerIcon className="mx-auto inline-block w-12 text-green-400 mb-4 animate-pulse" />
        <h1 className="sm:text-4xl text-3xl font-extrabold title-font text-white tracking-wide uppercase">
          Experience
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto mt-2">
          My journey as a software developer, building modern and scalable applications.
        </p>
      </div>

      {/* Experience Cards */}
      <div className="flex flex-wrap justify-center">
        <div className="sm:w-2/3 w-full p-4">
          <div className="flex relative group">
            <div className="px-8 py-10 relative z-10 w-full border border-gray-700 bg-gray-900 rounded-lg shadow-lg transform transition duration-300 ease-in-out hover:scale-105 hover:border-green-400 hover:shadow-green-400/50">
              {/* Company Name */}
              <h1 className="tracking-widest text-xl font-semibold text-green-400 mb-2 uppercase">
                Chaster IT Solutions PVT LTD
              </h1>

              {/* Time Period */}
              <h2 className="text-lg font-medium text-gray-300 mb-2">
                Dec 2021 - Present
              </h2>

              {/* Position */}
              <h3 className="text-lg font-semibold text-white mb-4">
                Software Developer
              </h3>

              {/* Job Responsibilities */}
              <ul className="text-left text-gray-400 text-md leading-relaxed space-y-2">
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">✔</span>
                  Developed web applications using **React.js**.
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">✔</span>
                  Worked with **HTML, CSS, React.js, and .NET Core** for frontend and backend.
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">✔</span>
                  Created **C# modules** in **ASP.NET Core** and developed backend logic.
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">✔</span>
                  Wrote complex **SQL queries** for database interactions using **SQL Server**.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}
