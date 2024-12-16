import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import PointClick from "../../assets/point-CLick-Care.png";
import Kareo1 from "../../assets/kareo.png";
import Eclinical from "../../assets/Eclinical-WOrks.png";
import Athena1 from "../../assets/Athena.png";
import Advanced from "../../assets/Advanced.png";

const TechPartners = () => {
  const logos = [PointClick, Kareo1, Eclinical, Athena1, Advanced];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className="flex flex-col items-center py-8 bg-[#ebf2fa] relative">
      {/* Heading */}
      <h1 className="text-[35px] mb-8 mt-8 text-center">Our Technology Partners</h1>

      {/* Slider */}
      <div className="w-full max-w-5xl relative">
        <Slider {...settings}>
          {logos.map((logo, index) => (
            <div key={index} className="flex justify-center items-center px-4 mb-12">
              <img
                src={logo}
                alt={`Logo ${index + 1}`}
                className="h-36 w-auto"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

// Custom Arrow Components
const CustomNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute right-[-50px] top-1/2 transform -translate-y-1/2 z-10 cursor-pointer"
      onClick={onClick}
    >
      <div className="flex justify-center items-center w-14 h-14 bg-[#0a2558] text-white rounded-full hover:bg-[#008CBA] transition-all duration-300 ease-in-out">
        <FaArrowRight className="text-2xl" />
      </div>
    </div>
  );
};

const CustomPrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute left-[-50px] top-1/2 transform -translate-y-1/2 z-10 cursor-pointer"
      onClick={onClick}
    >
      <div className="flex justify-center items-center w-14 h-14 bg-[#0a2558] text-white rounded-full hover:bg-[#008CBA] transition-all duration-300 ease-in-out">
        <FaArrowLeft className="text-2xl" />
      </div>
    </div>
  );
};

export default TechPartners;
