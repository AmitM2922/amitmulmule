import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../data";

export default function Projects() {
  return (
    <section id="projects" className="text-gray-400 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 body-font py-16">
    <div className="container px-5 mx-auto text-center lg:px-40">
      {/* Section Title */}
      <div className="flex flex-col w-full mb-12">
        <CodeIcon className="mx-auto inline-block w-12 text-green-400 mb-4 animate-pulse" />
        <h1 className="text-4xl font-extrabold title-font text-white tracking-wide uppercase">
          Projects
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto mt-2">
          A showcase of some of my best work using modern technologies.
        </p>
      </div>

      {/* Project Cards */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-900 border border-gray-700 rounded-lg shadow-lg p-6 transition-transform duration-300 ease-in-out hover:scale-105 hover:border-green-400 hover:shadow-green-400/50"
            >
              {/* Project Title & Subtitle */}
              <div className="mb-4 text-center">
                <h2 className="text-2xl font-extrabold text-white tracking-wide">
                  {project.title}
                </h2>
                <p className="text-md text-green-400 mt-1 italic">
                  {project.subtitle}
                </p>
              </div>

              {/* Project Description */}
              <p className="mt-4 text-gray-400 whitespace-pre-line bg-gray-800 p-4 rounded-md shadow-sm leading-relaxed">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
  );
}