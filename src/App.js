import React from 'react'
import Navbar from "./Component/Navbar"
import About from "./Component/About"
import Projects from "./Component/Projects"
import Skills from "./Component/Skills"
import Contacts from "./Component/Contacts"
import Education from './Component/Education'
import Experience from './Component/Experience'
import Footer from './Component/Footer'

function App() {
  return (
   <main className="text-gray-400 bg-gray-900 body-font">
     <Navbar/>
      <About />
      <Education/>
      <Projects />
      <Skills />  
      <Experience/>  
      <Contacts />
      <Footer/>
   </main>
  );
}

export default App;
