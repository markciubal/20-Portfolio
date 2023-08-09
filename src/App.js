import { React, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Art from './components/Art';
import Web from './components/Web';
import Photography from './components/Photography';
import Footer from './components/Footer';
import BackgroundCircle from './components/BackgroundCircle';
import { Parallax, Background } from "react-parallax";

// const backgrounds = [
//   'linear-gradient(217deg, rgba(255,255,255,.8), rgba(255,0,0,0) 70.71%), linear-gradient(127deg, rgba(0,255,0,.8), rgba(0,255,0,0) 70.71%), linear-gradient(336deg, rgba(0,0,255,.8), rgba(0,0,255,0) 70.71%)',
// ]
// const cycleBackground = async () => {
//   document.body.style.background = backgrounds[Math.floor(Math.random() * backgrounds.length)];
// }
function App() {
  // useEffect(() =>{
  //   setInterval(()=> {
  //       cycleBackground()
  //   }, 5000)
  // })

  //    --rainbow-border: drop-shadow(0 0px 1px #FF0000) 
  //drop-shadow(0 0px 1px #FF7F00)
  // drop-shadow(0 0px 1px #FFFF00) 
  //drop-shadow(0 0px 1px #00FF00) 
  //drop-shadow(0 0px 1px #0000FF) 
  //drop-shadow(0 0px 1px #2E2B5F) 
  //drop-shadow(0 0 1px #8B00FF);
  function fibonacci(n) {
    if (n <= 1) {
      return n;
    } else {
      return fibonacci(n - 1) + fibonacci(n - 2);
    }
  }

  const colorData = [
    '#000000',
    '#8B00FF',
    '#2E2B5F',
    '#0000FF',
    '#00FF00',
    '#FFFF00',
    '#FF7F00',
    '#FF0000',
    '#8B00FF',
    '#2E2B5F',
    '#000000',
    '#000000',
    '#8B00FF',
    '#2E2B5F',
    '#0000FF',
    '#00FF00',
    '#FFFF00',
    '#FF7F00',
    '#FF0000',
    '#8B00FF',
    '#2E2B5F',
    '#000000',
    '#000000',
    '#8B00FF',
    '#2E2B5F',
    '#0000FF',
    '#00FF00',
    '#FFFF00',
    '#FF7F00',
    '#FF0000',
    '#8B00FF',
    '#2E2B5F',
    '#000000',
    '#000000',
    '#8B00FF',
    '#2E2B5F',
    '#0000FF',
    '#00FF00',
    '#FFFF00',
    '#FF7F00',
    '#FF0000',
    '#8B00FF',
    '#2E2B5F',
    '#000000',
    '#000000',
    '#8B00FF',
    '#2E2B5F',
    '#0000FF',
    '#00FF00',
    '#FFFF00',
    '#FF7F00',
    '#FF0000',
    '#8B00FF',
    '#2E2B5F',
    '#000000',
    '#000000',
    '#8B00FF',
    '#2E2B5F',
    '#0000FF',
    '#00FF00',
    '#FFFF00',
    '#FF7F00',
    '#FF0000',
    '#8B00FF',
    '#2E2B5F',
    '#000000',
  ];

  return (
    <div id="App" className="App">
        <Header />
        <Art />
        <Web />
        <Photography />
        <Footer />
    </div>
  );
}

export default App;
