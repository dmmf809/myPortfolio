import React from "react"
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Image from "react-bootstrap/Image"
import Button from "react-bootstrap/Button"
import Photo from '../../assets/pic/download.jpg'
import "./about-style.css"



const About = () => {
    return(
        <div id="about">
        <div className="about">
            <h1 className="header pt-3 pb-3 text-center">
                Who I am
            </h1>
            <Container>
                <Row className="pt-3 pb-5 align-items-center">
                    {/*Image*/}
                    <Col xs={12} md={6}>
                        <Row className="justify-content-center mb-2 mr-2">
                            <Image className="profile justify-content-end" alt="Profile Img"  src={Photo} thumbnail fluid/>
                        </Row>
                    </Col>
                    {/*About me*/}
                    <Col xs={12} md={6}>
                        {/**Description */}
                        <Row className="my-details p-3 align-items-start rounded">
                            I'm a Front-end Web Developer who loves turning ideas into something that is both useful and interactive.
                            I have successfully completed my skills as a developer through SAIT's Information Technology course. 
                            Although I a..... learning never stops. I developed this portfolio-website using React as my framework and
                            React Bootstrap for the UI foundation. My goal is to provide fast, interactive, responsive, and engaged websites.
                            
                        </Row>
                        {/**Links/buttons */}
                        <Row>
                            <Col className="d-flex justify-content-end flex-wrap">
                                <Nav.Link href="#projects">
                                        <Button className="m-2" variant="outline-dark" >
                                            See my work &rarr;
                                        </Button>
                                </Nav.Link>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
        </div>
    )
}

export default About