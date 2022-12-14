import React from 'react'
import { AcademicCapIcon } from "@heroicons/react/solid";
import { EducationData } from '../Data/EducationData'
export default function Education() {
    return (
        <section id="educations" className="text-gray-400 bg-gray-900 body-font">
            <div className="container px-5 py-10 mx-auto text-center lg:px-40">
                <div className="flex flex-col w-full mb-20">
                    <AcademicCapIcon className="mx-auto inline-block w-10 mb-4" />
                    <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
                        Education
                    </h1>
                </div>
                <div className="flex flex-wrap -m-4">
                    {EducationData.map((data) => (
                        <div
                            className="sm:w-1/2 w-100 p-4">
                            <div className="flex relative">
                                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 ">
                                    <h1 className="tracking-widest text-xl title-font font-medium text-green-400 mb-1">
                                        {data.Title}
                                    </h1>
                                    <h1 className="title-font text-lg font-medium text-gray-400 mb-3">
                                        {data.Year}
                                    </h1>
                                    <div className="title-font text-lg font-medium text-gray-400 mb-3">Course - {data.Course}</div>
                                    <div className="title-font text-lg font-medium text-gray-400 mb-3">College - {data.College}</div>
                                    <div className="title-font text-lg font-medium text-gray-400 mb-3">CGPA -  {data.CGPA}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
