import React from 'react'
import { DesktopComputerIcon } from "@heroicons/react/solid";
import { EducationData } from '../Data/EducationData'
export default function Experience() {
  return (
    <section id="experience" className="text-gray-400 bg-gray-900 body-font">
    <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
            <DesktopComputerIcon className="mx-auto inline-block w-10 mb-4" />
            <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
                Experience
            </h1>
        </div>
        <div className="flex flex-wrap -m-4">
            
                <div
                    className="sm:w-1/2 w-100 p-4">
                    <div className="flex relative">
                        <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 ">
                            <h1 className="tracking-widest text-xl title-font font-medium text-green-400 mb-1">
                                Chaster IT Solutions PVT LTD
                            </h1>
                            <h1 className="title-font text-lg font-medium text-white mb-3">
                                Dec 2021 - Present
                            </h1>
                            <div className="title-font text-lg font-medium text-white mb-3">Software Developer</div>
                            <div className="title-font text-lg font-medium text-white mb-3">
                                <li>Highly responsible for creating Web application using React</li>
                                <li>Worked on a web application that utilized HTML, CSS, React JS, and .NET Core also.</li>
                                <li>Developed Modules of the applications in ASP.NET Core and was involved in writing C# Classes.</li>
                                <li>Responsible for creating SQL Queries using SQL Server. Built database object to support responsive data access.</li>
                            </div>
                           
                        </div>
                    </div>
                </div>
            
        </div>
    </div>
</section>
  )
}
