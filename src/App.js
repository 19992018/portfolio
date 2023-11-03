import logo from './logo.svg';
import React, { useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';


function App() {
  useEffect(() => {
    fetch("http://localhost:3001/api")
    .then((res) => res.json())
    .then((data) => {console.log(data)})
  }, [])

  return (
    <div className="App"> 
      <NavBar /> 
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

//From 1:09:02 
//Vercel 
//React JS Percentage Circle.

//margret.me OR margret.com
//contact form to work
//get newsletter to work 