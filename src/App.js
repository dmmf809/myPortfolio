
import React from 'react'
import Fade from 'react-reveal/Fade'
//mport { Parallax } from "react-parallax";
import Container from "react-bootstrap/Container"

import MyNavbar from './components/my-navbar/MyNavbar'
import MyCarousel from "./components/my-carousel/MyCarousel"
import MessageTitle from './components/title-message/titleMessage'
import About from "./pages/about/about"
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
    </div>
  );
}

export default App;
