import { React, useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Art from './components/Art';
import Portfolio from './components/Portfolio';
import Photography from './components/Photography';
import Contact from './components/Contact';
import About from './components/About';
import Resume from './components/Resume';

function App() {
  const [activePage, setActivePage] = useState("about");

  // Need About Me (done), Portfolio (rename web), Contact, and Resume.
  const renderActivePage = () => {
    if (activePage === "about") {
      return <About />;
    } else if (activePage === "portfolio") {
      return <Portfolio />;
    } else if (activePage === "photography") {
      return <Photography />;
    } else if (activePage === "resume") {
      return <Resume />;
    }
    return null;
  };

  return (
    <div id="App" className="App">
      <Header activePage={activePage} setActivePage={setActivePage} />
      <main>
        {renderActivePage()}
      </main>
      <Contact/>
    </div>
  );
}


export default App;
