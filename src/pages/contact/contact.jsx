import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import './contact-style.css'

const Contact = () => {
    return(
        <div id="contact">
            <h1 className="header text-center pt-3 pb-3">Contact</h1>
                <Jumbotron className="contact-jumbotron">
                    <Row>
                        <Col className="d-flex justify-content-center flex-wrap">
                            <div className="m-2">
                                <a href="mailto:daeniellef1@gmail.com" target="_blank" rel="noopener noreferrer">
                                    <Button variant="outline-danger" title="daeniellef1@gmail.com">
                                        <i className="fas fa-envelope-square"></i> Email me
                                    </Button>
                                </a>
                            </div>
                            <div className="m-2">
                                <a href="https://ca.linkedin.com/in/daenielle-felipe" target="_blank" rel="noopener noreferrer">
                                    <Button variant="outline-primary" title="daeniellef1@gmail.com">
                                        <i className="fab fa-linkedin"></i> LinkedIn
                                    </Button>
                                </a>
                            </div>
                            <div className="m-2">
                                <a href="https://github.com/dmmf809" target="_blank" rel="noopener noreferrer">
                                    <Button variant="outline-dark" title="My GitHub">
                                        <i className="fab fa-github-square"></i> GitHub
                                    </Button>
                                </a>
                            </div>
                        </Col>
                    </Row>
                </Jumbotron>
        </div>
    )
}

export default Contact