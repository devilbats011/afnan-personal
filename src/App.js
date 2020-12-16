import React from 
"react";
import { useEffect } from "react";
import "./css/App.scss";
import "./css/Utility.scss";
import Home from "components/pages/Home";
import About from "components/pages/About";
import Skills from "components/pages/Skills";
import Works from "components/pages/Works";
import Contact from "components/pages/Contact";
import Sidebar from "components/pages/Sidebar";
import Header from "components/pages/Header";
import Main from "components/pages/Main";

import { animateScroll as scroll } from 'react-scroll';

function App({ firebase=false }) {

  function scrollToTop() {
    scroll.scrollToTop();
  }
  useEffect(() => {

  }, []);

  return (
    <div className="app" id="home" >
      <Sidebar scrollToTop={scrollToTop} />
      <Header scrollToTop={scrollToTop} />
      <Main >
        <Home />
        <About />
        <Skills />
        <Works />
        <Contact firebase={firebase} />
      </Main>
      <div className="void to-top-btn" onClick={scrollToTop} title="To top page" >
        <i className="fa fa-angle-double-up"></i>
      </div>
    </div>

  );
}
export default App;
