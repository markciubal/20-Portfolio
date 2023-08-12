import { React, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Art from './components/Art';
import Web from './components/Web';
import Photography from './components/Photography';
import Footer from './components/Footer';
import About from './components/About';

function App() {
  return (
    <div id="App" className="App">
        <Header />
        <main>
          <About />
          <Web />
          <Art />
          <Photography />
          <Footer />
        </main>
    </div>
  );
}

export default App;
