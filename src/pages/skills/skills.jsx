import React from "react"   
import { Card, Col, Row } from "react-bootstrap"
import CardDeck from "react-bootstrap/CardDeck"
import Image from "react-bootstrap/Image"
import Slide from 'react-reveal/Slide'
import Fade from 'react-reveal/Fade'

import {skills_data} from "./skills-data"
import "./skill-style.css"

const Skills = () => {
    return(
        <div id="skills">
        <div className="skills pt-3 pb-3">
            <Fade right>
            <h1 className="header text-center pb-4">
                Technical Skills
            </h1>
            </Fade>
            <Slide right cascade duration={1000}>
            <CardDeck className="d-flex justify-content-center" >
                <Row className="d-flex justify-content-md-around">
                    {/*Front-end*/}
                    <Col md={6}>
                        <Card className="focus mt-2 mb-2">
                            <Card.Body>
                                <Card.Title className="text-center card-title">
                                    Front-end
                                </Card.Title>
                                <hr/>
                                <Card.Text className="d-flex justify-content-center flex-column card-text"> 
                                    {skills_data.frontend.map((techSkill, i) => (
                                        <span className="p-2" key={`${techSkill.skillName}${i}`}>
                                            <Image 
                                                src={techSkill.imgSrc}
                                                alt={techSkill.imgAltText}
                                                className="image-style m-1"
                                                rounded></Image>
                                            {techSkill.skillName}
                                        </span>
                                    ))}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    {/*Back-end*/}
                    <Col md={6}>
                        <Card className="focus mt-2 mb-2">
                            <Card.Body>
                                <Card.Title className="text-center card-title">
                                    Back-end
                                </Card.Title>
                                <hr />
                                <Card.Text className="d-flex justify-content-start card-text">
                                    {skills_data.backend.map((techSkill, i) => (
                                        <span className="p-2" key={i}>
                                            <Image
                                                src={techSkill.imgSrc}
                                                alt={techSkill.imgAltText}
                                                className="image-style m-1"
                                                rounded></Image>
                                            {techSkill.skillName}
                                        </span>    
                                    ))}
                                </Card.Text>
                            </Card.Body>                
                        </Card>

                        {/*Version Control*/}
                        <Card className="focus mt-2 mb-2">
                            <Card.Body>
                                <Card.Title className="text-center card-title">
                                    Version Control
                                </Card.Title>
                                <hr />
                                <Card.Text className="d-flex justify-content-start card-text">
                                <span className="p-2">
                                        <Image
                                            src={skills_data.versionControl[0].imgSrc}
                                            alt={skills_data.versionControl[0].imgAltText}
                                            className="image-style m-1"
                                            rounded
                                        ></Image>
                                        {skills_data.versionControl[0].skillName}
                                    </span>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </CardDeck>
            </Slide>
        </div>
        </div>
    )
}

export default Skills