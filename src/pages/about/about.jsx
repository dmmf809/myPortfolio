import React from "react"
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Image from "react-bootstrap/Image"
import Photo from '../../assets/pic/download.jpg'
import "./about-style.css"
import Button from "react-bootstrap/Button"

const About = () => {
    return(
        <div className="about">
            <h1 className="header pt-3 pb-3 text-center">
                Who I am
            </h1>
            <Container>
                <Row className="pt-3 pb-5 align-items-center">
                    {/*Image*/}
                    <Col xs={12} md={6}>
                        <Row className="justify-content-center mb-2 mr-2">
                            <Image className="profile justify-content-end" alt="Profile Img"  src={Photo} roundedCircle fluid/>
                        </Row>
                    </Col>
                    {/*About me*/}
                    <Col xs={12} md={6}>
                        {/**Description */}
                        <Row className="my-details p-3 align-items-start rounded">
                            I'm a Front-end Web Developer who loves yityjrgjdrjdrfj jfjkddjkd kdkdsjkdjkdjkdsjk
                            kdkjdjkdsjk
                        </Row>
                        {/**Links/buttons */}
                        <Row>
                            <Col className="d-flex justify-content-end flex-wrap">
                                <Link to="/projects">
                                        <Button className="m-2" variant="outline-dark" >
                                            See my work &rarr;
                                        </Button>
                                </Link>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>

    )
}

export default About