import React from 'react';
import myimg from '../asset/amitimg.jpeg';

export default function About() {
  return (
    <section
      id="about"
      className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-gray-400 body-font py-20"
    >
      <div className="container mx-auto flex px-6 md:flex-row flex-col items-center">
        
        {/* Left Section - Text Content */}
        <div className="lg:flex-grow md:w-1/2 lg:pr-12 md:pr-10 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          
          {/* Name and Title */}
          <h1 className="title-font sm:text-4xl text-2xl mb-4 font-extrabold text-white leading-tight">
            Hi, I'm <span className="text-green-400">Amit Mulmule</span>
          </h1>

          {/* About Me */}
          <p className="mb-6 text-base leading-relaxed text-gray-300 font-normal">
            I'm a committed <span className="text-green-400">Full Stack Developer</span> with over <strong>3 years</strong> of experience in building scalable and efficient web applications.<br /><br />
            My core technical expertise includes <span className="text-green-400">C#, .NET Core, Web API, SQL Server, React.js, Angular</span>, and <span className="text-green-400">Next.js</span>.<br /><br />
            I’ve had the opportunity to work for clients like <strong className="text-green-400">CoreCard Software India</strong> and <strong className="text-green-400">Tata Power</strong> through <strong className="text-green-400">Chaster IT Solutions Pvt. Ltd.</strong>, and also collaborated with development teams at <strong className="text-green-400">TekIT Software Solutions</strong>.<br /><br />
            Currently, I'm working at <strong className="text-green-400">Raj Digital</strong> as a Full Stack Developer. Additionally, I’ve contributed to various independent projects as a <strong className="text-green-400">part-time freelancer</strong>, helping businesses with customized frontend and backend solutions.
          </p>

          {/* CTA Buttons */}
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex items-center text-white bg-green-500 border-0 py-2.5 px-5 rounded-lg shadow-md transition-transform duration-300 ease-in-out transform hover:scale-105 hover:bg-green-600"
            >
              Work With Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex items-center text-white bg-cyan-800 border-0 py-2.5 px-5 rounded-lg shadow-md transition-transform duration-300 ease-in-out transform hover:scale-105 hover:bg-cyan-700"
            >
              My Projects
            </a>
          </div>
        </div>

        {/* Right Section - Image */}
       {/* Right Section - Image */}
       <div className="lg:w-1/3 md:w-1/2 w-5/6">
  <div className="w-72 h-72 mx-auto rounded-xl overflow-hidden shadow-2xl border border-gray-700 bg-gray-800 transform transition-all duration-500 hover:scale-105">
    <img
      className="object-cover w-full h-full"
      alt="Amit Mulmule"
      src={myimg}
    />
  </div>
</div>

      </div>
    </section>
  );
}
