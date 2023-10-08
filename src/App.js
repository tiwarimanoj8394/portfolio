import './App.css';
import React from 'react';
import NavBar from './component/navbar';
import Intro from './component/intro/intro';
import Skill from './component/skill/skill';
import Projects from './component/projects/project';
import Contact from './component/contact/caontact';
import Footer from './component/footer/footer';


function App() {
  return (
    <div className='App' >
     <NavBar/>
     <Intro/>
     <Skill/>
     <Projects/>
     {/* clients */}
     <Contact/>
     <Footer/>
    </div>
  );
}

export default App;
