import React from 'react'
import { DesktopComputerIcon } from "@heroicons/react/solid";
import { companyData } from "../Data/companyData";

export default function Experience() {
  return (
    <section
      id="experience"
      className="text-gray-400 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 body-font py-16"
    >
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
          {companyData.map((exp, index) => (
            <div key={index} className="w-full sm:w-1/3 p-4">
              <div className="flex h-full">
                <div className="flex flex-col h-full px-8 py-10 w-full border border-gray-700 bg-gray-900 rounded-lg shadow-lg transform transition duration-300 ease-in-out hover:scale-105 hover:border-green-400 hover:shadow-green-400/50">
                  
                  {/* Company Name */}
                  <h1 className="tracking-widest text-xl font-semibold text-green-400 mb-2 uppercase">
                    {exp.company}
                  </h1>

                  {/* Role */}
                  <h3 className="text-lg font-semibold text-white mb-4">
                    {exp.role}
                    {exp.isContract && (
                      <span className="text-sm text-gray-400"> (Third-Party Payroll)</span>
                    )}
                  </h3>

                  {/* Summary */}
                  <p className="flex-1 text-left text-gray-400 text-md leading-relaxed">
                    {exp.summary}
                  </p>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
