
import React from 'react'
import Fade from 'react-reveal/Fade'
//import { Parallax } from "react-parallax";
import Container from "react-bootstrap/Container"

import MyNavbar from './components/my-navbar/MyNavbar'
import MyCarousel from "./components/my-carousel/MyCarousel"
import MessageTitle from './components/title-message/titleMessage'
import About from "./pages/about/about"
import Skills from "./pages/skills/skills"
import Projects from "./pages/projects/projects"
import Contact from "./pages/contact/contact"
import Footer from './components/footer/footer'
import './App.css'

const App = () => {
  return (
    <div>
        <MyNavbar />
        <MyCarousel />
        <MessageTitle />
        <div>
            <Container className="container-box">
              <Fade top duration={1000}>
                <About />
              </Fade>
            </Container>
        </div>
        <div>
          <Container className="container-box"> 
            <hr />
            <Skills />
          </Container>
        </div>
        <Projects />
        <Container className="container-box">
          <Fade duration={1000}>
            <hr />
            <Contact />
          </Fade>
        </Container>
        <hr/>
          <Footer/>      

    </div>
  );
}

export default App;
