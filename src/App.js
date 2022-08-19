import React from 'react'
import Navbar from "./Component/Navbar"
import About from "./Component/About"
import Projects from "./Component/Projects"
import Skills from "./Component/Skills"
import Contacts from "./Component/Contacts"
import Education from './Component/Education'
import Experience from './Component/Experience'

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
   </main>
  );
}

export default App;
