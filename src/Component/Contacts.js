import React from "react";
export default function Contact() {
    
  return (
    <section id="contact" className="relative bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-gray-400 py-16">
    <div className="container px-5 mx-auto flex sm:flex-nowrap flex-wrap">
      
      {/* Left Section - Map & Contact Details */}
      <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative shadow-xl">
        
        {/* Google Map */}
        <iframe
          width="100%"
          height="100%"
          title="map"
          className="absolute inset-0"
          frameBorder={0}
          marginHeight={0}
          marginWidth={0}
          style={{ filter: "opacity(0.7)" }}
          src="https://www.google.com/maps/embed/v1/place?q=Near+Prabhat+Petrol+pump+,+Bhopal,+Madhya+Pradesh,+India+&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
        />

        {/* Contact Information */}
        <div className="bg-gray-900 relative flex flex-wrap py-6 px-6 rounded-lg shadow-md">
          
          <div className="lg:w-1/2">
            <h2 className="title-font font-semibold text-white tracking-widest text-xs">
              ADDRESS
            </h2>
            <p className="mt-1 text-gray-300">
              Near Prabhat Petrol Pump <br />
              Bhopal, Madhya Pradesh, India
            </p>
          </div>

          <div className="lg:w-1/2 mt-4 lg:mt-0">
            <h2 className="title-font font-semibold text-white tracking-widest text-xs">
              EMAIL
            </h2>
            <a className="text-green-400 hover:text-green-300 transition duration-300 cursor-pointer">
              amitmulmule4@gmail.com
            </a>
            <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
              PHONE
            </h2>
            <p className="leading-relaxed text-gray-300">+91-9067550461</p>
          </div>

        </div>
      </div>

      {/* Right Section - Contact Form */}
      <form
        name="contact"
        className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 bg-gray-900 p-8 rounded-lg shadow-xl"
      >
        <h2 className="text-white sm:text-4xl text-3xl mb-4 font-extrabold title-font text-center">
          Hire Me
        </h2>
        <p className="leading-relaxed text-lg mb-6 text-center text-gray-300">
          Looking to hire a dedicated **Full Stack Developer** for your project?
        </p>

        {/* Name Input */}
        <div className="relative mb-4">
          <label htmlFor="name" className="leading-7 text-sm text-gray-400">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="from_name"
            className="w-full bg-gray-800 rounded border border-gray-700 focus:border-green-400 focus:ring-2 focus:ring-green-500 text-base outline-none text-gray-100 py-2 px-4 transition duration-200 ease-in-out"
          />
        </div>

        {/* Email Input */}
        <div className="relative mb-4">
          <label htmlFor="email" className="leading-7 text-sm text-gray-400">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            autoComplete="off"
            className="w-full bg-gray-800 rounded border border-gray-700 focus:border-green-400 focus:ring-2 focus:ring-green-500 text-base outline-none text-gray-100 py-2 px-4 transition duration-200 ease-in-out"
          />
        </div>

        {/* Message Input */}
        <div className="relative mb-4">
          <label htmlFor="message" className="leading-7 text-sm text-gray-400">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            className="w-full bg-gray-800 rounded border border-gray-700 focus:border-green-400 focus:ring-2 focus:ring-green-500 h-32 text-base outline-none text-gray-100 py-2 px-4 resize-none transition duration-200 ease-in-out"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full text-white bg-green-500 border-0 py-3 px-6 rounded-lg shadow-md transition-transform duration-300 ease-in-out transform hover:scale-105 hover:bg-green-600"
        >
          Submit
        </button>
      </form>

    </div>
  </section>
  );
}
