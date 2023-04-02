import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function PortfolioSlider() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  function NextArrow(props) {
    const { onClick } = props;
    return (
      <div
        className="arrow next"
        onClick={onClick}
        style={{ fontSize: "40px" }}
      >
        &#10148;
      </div>
    );
  }

  function PrevArrow(props) {
    const { onClick } = props;
    return (
      <div
        className="arrow prev"
        onClick={onClick}
        style={{
          fontSize: "40px",
          transform: "rotate(180deg)",
          transformOrigin: "50% 41%",
          display: "inline-block",
        }}
      >
        &#10148;
      </div>
    );
  }

  return (
    <div className="slider">
      <div className="portfolio-slider">
        <Slider {...settings}>
          <div className="portfolio-item">
            <h3 className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              Hello Friends!
              <br></br>
              My name is Muhammed Saif, I am a Full-Stack Developer with a
              strong passion of working on React Apps.
            </h3>
          </div>

          <div className="portfolio-item">
            <br></br>
            <h3 className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              In 2022, I made a decision to change careers and joined Trine
              University for my Masters in Information Systems
            </h3>
          </div>

          <div className="portfolio-item">
            <br></br>
            <h3 className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              When I am not coding, I spend most of the time playing video
              games.
            </h3>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default PortfolioSlider;
