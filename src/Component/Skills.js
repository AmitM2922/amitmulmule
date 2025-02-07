import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import React from "react";
import { skills } from "../data";

export default function Skills() {
  return (
    <section id="skills" className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 py-16">
    <div className="container mx-auto px-5">
      {/* Title Section */}
      <div className="text-center mb-12">
        <ChipIcon className="w-12 text-green-400 inline-block mb-3 animate-pulse" />
        <h1 className="text-4xl font-extrabold text-white mb-4 tracking-wide uppercase">
          Skills & Technologies
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          A collection of the technologies and tools I specialize in.
        </p>
      </div>

      {/* Skills List */}
      <div className="flex flex-wrap lg:w-3/4 mx-auto">
        {skills.map((skill, index) => (
          <div key={index} className="p-3 w-full sm:w-1/2 md:w-1/3">
            <div className="bg-gray-800 hover:bg-gray-700 transition duration-300 ease-in-out shadow-lg 
                            rounded-lg flex items-center p-4 transform hover:scale-105">
              <BadgeCheckIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-3" />
              <span className="text-lg font-semibold text-white">{skill.skill}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
  );
}
