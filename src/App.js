import logo from './logo.svg';
import React,{useState,useEffect} from 'react';
import './App.css';
import './components/Header/Header.css'
import Header from './components/Header/Header';
import Hero from './components/UI/Hero';
import Counter from "./components/UI/Counter";
import Services from './components/UI/Services';
import About from './components/UI/About';
import Team from './components/UI/Team';
import Blog from './components/UI/Blog';
import Testimonial from './components/UI/Testimonial';
import Newsletter from './components/UI/Newsletter';
import Footer from './components/Footer/Footer';
function App() {
  const [theme,setTheme]=useState("");
  const toggleTheme=()=>{
    if (theme==""){
      setTheme("light-theme")
    }
    else
    setTheme("");
  }
  useEffect(() => {document.body.className=theme},[theme])
  return (
   <>
   <Header theme={theme} toggleTheme={toggleTheme}/>
   <Hero theme={theme}/>
   <Counter/>
   <Services/>
   <About/>
   <Team/>
   <Blog/>
   <Testimonial/>
   <Newsletter/>
   <Footer/>
   </>
  );
}

export default App;
