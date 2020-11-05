import React from "react";
import Carousel from "react-bootstrap/Carousel"

import Slide1 from "../../assets/carousel/slide1.webp";
import Slide2 from "../../assets/carousel/slide2.webp";
import Slide3 from "../../assets/carousel/slide3.webp";
import Scrolldown from "../scroll-down/Scrolldown";
import './myCarousel-style.css'

const MyCarousel = () => {
    return(
        <div id="home">
            <Carousel controls={false} interval={2500} pauseOnHover={false}>
                <Carousel.Item>
                    <img
                        className="d-block w-100 custom-img"
                        src={Slide1}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item >
                    <img
                        className="d-block w-100 custom-img"
                        src={Slide2}
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 custom-img"
                        src={Slide3}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
            <Scrolldown />
        </div>
    )
}

export default MyCarousel