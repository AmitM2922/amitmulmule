import React from 'react'
import myimg from '../asset/amit2.jpg'
export default function About() {
  return (
    <section id="about" className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-gray-400 body-font py-20">
      <div className="container mx-auto flex px-10 md:flex-row flex-col items-center">
        
        {/* Left Section - Text Content */}
        <div className="lg:flex-grow md:w-1/2 lg:pr-16 md:pr-10 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          
          {/* Name and Title */}
          <h1 className="title-font sm:text-5xl text-3xl mb-6 font-extrabold text-white leading-tight">
            Hi, I'm <span className="text-green-400">Amit Mulmule</span>.
          </h1>
          
          {/* About Me Description */}
          <p className="mb-8 text-lg leading-relaxed font-medium text-gray-300">
            🚀 Passionate <span className="text-green-400">Full Stack Developer</span> with <strong>3+ years</strong> of experience in crafting scalable and high-performance applications.  
            💻 Skilled in **C# .NET Core, Web API, React.js, and SQL Server**.  
            🤝 Worked with industry leaders like  
            <strong className="text-green-400"> Corecard Software India</strong> and  
            <strong className="text-green-400"> Tata Power</strong> at  
            <strong className="text-green-400"> Chaster IT Solutions Pvt. Ltd.</strong>.
          </p>

          {/* Call-to-Action Buttons */}
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex items-center text-white bg-green-500 border-0 py-3 px-6 rounded-lg shadow-md transition-transform duration-300 ease-in-out transform hover:scale-110 hover:bg-green-600">
              Work With Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex items-center text-white bg-cyan-800 border-0 py-3 px-6 rounded-lg shadow-md transition-transform duration-300 ease-in-out transform hover:scale-110 hover:bg-gray-700">
              My Projects
            </a>
          </div>
        </div>

        {/* Right Section - Image with Overlay */}
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <div className="relative overflow-hidden rounded-lg shadow-xl transform hover:scale-105 transition-all duration-500 ease-in-out">
            <img
              className="object-cover object-center w-full h-full"
              alt="Amit Mulmule"
              src={myimg}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-900 opacity-50"></div>
          </div>
        </div>

      </div>
    </section>
  )
}
