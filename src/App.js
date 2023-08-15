import { React, useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Art from './components/Art';
import Web from './components/Web';
import Photography from './components/Photography';
import Footer from './components/Footer';
import About from './components/About';


function App() {
  const [activePage, setActivePage] = useState("about");

  // Need About Me (done), Portfolio (rename web), Contact, and Resume.
  const renderActivePage = () => {
    if (activePage === "about") {
      return <About />;
    } else if (activePage === "web") {
      return <Web />;
    } else if (activePage === "photography") {
      return <Photography />;
    }
    return null;
  };

  return (
    <div id="App" className="App">
      <Header activePage={activePage} setActivePage={setActivePage} />
      <main>
        {renderActivePage()}
      </main>
      <Footer/>
    </div>
  );
}


export default App;
