import React from 'react';
import {carousel} from "../data/Data";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Banner = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
    };

    return (
        <div className="container-fluid mb-3">
            <div className="row px-xl-5">
                <div className="col-lg-8">
                    <div>
                        <Slider {...settings}>
                            {carousel.map((value, index) =>(
                                <div key={index}>
                                    <div
                                        style={{height: "430px"}}
                                    >
                                        <img
                                            className="position-absolute w-100 h-100"
                                            src={value.cover_img} alt="img"
                                        />
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
