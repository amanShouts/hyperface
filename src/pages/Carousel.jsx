import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css"

export function SimpleSlider() {
    var settings = {
        dots: false,
        arrows: false,
        centerMode: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: "50px"
    };
    return (
        <Slider {...settings} className="carousel_main">

            <div className="carousel_div">
                <img src={require("../content_course.png")} alt="content writing" />
                <h3>Fundamentals of Product Design</h3>
                <p> <span> 8 Chapters </span> <span> . </span><span> 2 hours</span> </p>
            </div>
            <div className="carousel_div">
                <img src={require("../content_course2.jpg")} alt="content writing" />
                <h3>Fundamentals of Product Design</h3>
                <p> <span> 8 Chapters </span> <span>.</span> <span> 2 hours</span> </p>
            </div>
            <div className="carousel_div">
                <img src={require("../content_course3.jpg")} alt="content writing" />
                <h3>Fundamentals of Product Design</h3>
                <p> <span> 8 Chapters </span> <span>.</span> <span> 2 hours</span> </p>
            </div>
            <div className="carousel_div">
                <img src={require("../content_course4.jpg")} alt="content writing" />
                <h3>Fundamentals of Product Design</h3>
                <p> <span> 8 Chapters </span> <span>.</span> <span> 2 hours</span> </p>
            </div>

        </Slider>
    );
}